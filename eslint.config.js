import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default defineConfig([
	// 应用 Prettier 的规则禁用配置（关闭 ESLint 中与格式相关的规则）
	prettierConfig,
	{ files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'], plugins: { js }, extends: ['js/recommended'] },
	{ files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'], languageOptions: { globals: globals.browser } },
	tseslint.configs.recommended,
	pluginVue.configs['flat/essential'],
	{ files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
		plugins: {
			prettier: prettierPlugin
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
			// 作为错误来提示不符合 Prettier 格式的地方
			'prettier/prettier': 'error'
		},
		ignores: ['dist/**', 'node_modules/**', 'public/**'],
		extends: [
			// "js/recommended",
			//  "eslint:recommended",
			// "plugin:vue/vue3-recommended",
			// "plugin:@typescript-eslint/recommended",
			// "plugin:prettier/recommended" // 在最后面新增extends
		]
	},
	globalIgnores(['dist/**', 'node_modules/**', 'public/**'])
]);
