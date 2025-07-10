import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 获取当前工作目录
  const root = process.cwd();
  // 获取环境变量
  const env = loadEnv(mode, root);
  console.log(env);
  return {
    // 项目根目录
    root,
    // 项目部署的基础路径
    base: '/',
    // 无需处理的静态资源目录
    publicDir: fileURLToPath(new URL('./public', import.meta.url)),
    // 需要处理的静态资源目录
    assetsInclude: fileURLToPath(new URL('./src/assets', import.meta.url)),
    plugins: [
      vue(),
      vueJsx(),
      viteMockServe({
        mockPath: '/mock', // 数据模拟需要拦截的起始url
        enable: true // 本地环境是够开启mock
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./types', import.meta.url))
      }
    },
    server: {
      host: true,
      port: 8080,
      open: true,
      cors: true,
      proxy: {
        [env.VITE_APP_API_BASEURL]: {
          target: 'http://localhost:8080',
          changeOrigin: true
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
        [env.VITE_APP_MOCK_BASEURL]: {
          target: 'http://localhost:8080',
          changeOrigin: true
          // rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    },
    build: {
      // 构建后是否生成 source map 文件
      sourcemap: false,
      // 打包大小超出  400kb 警告
      chunkSizeWarningLimit: 400,
      outDir: 'dist',
      assetsDir: 'static',
      rollupOptions: {
        // 打包入口文件
        input: {
          index: fileURLToPath(new URL('./index.html', import.meta.url))
        },
        external: ['vue'],
        output: {
          // globals: {
          //   vue: 'Vue',
          // },
          format: 'esm',
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
        }
      }
    }
  };
});
