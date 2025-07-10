import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/mock/api/project-list',
    method: 'get',
    response: ({ body }) => {
      console.log(body, 'sa');
      return {
        code: 0,
        message: '获取项目列表成功',
        data: [
          {
            id: 1,
            name: '项目1',
            description: '项目1的描述',
            status: '进行中',
            createTime: '2021-01-01 00:00:00',
            updateTime: '2021-01-01 00:00:00'
          },
          {
            id: 2,
            name: '项目2',
            description: '项目2的描述',
            status: '已完成',
            createTime: '2021-01-01 00:00:00',
            updateTime: '2021-01-01 00:00:00'
          },
          {
            id: 3,
            name: '项目3',
            description: '项目3的描述',
            status: '进行中',
            createTime: '2021-01-01 00:00:00',
            updateTime: '2021-01-01 00:00:00'
          },
          {
            id: 4,
            name: '项目4',
            description: '项目4的描述',
            status: '已完成',
            createTime: '2021-01-01 00:00:00',
            updateTime: '2021-01-01 00:00:00'
          },
          {
            id: 5,
            name: '项目5',
            description: '项目5的描述',
            status: '进行中',
            createTime: '2021-01-01 00:00:00',
            updateTime: '2021-01-01 00:00:00'
          },
          {
            id: 6,
            name: '项目6',
            description: '项目6的描述',
            status: '已完成',
            createTime: '2021-01-01 00:00:00',
            updateTime: '2021-01-01 00:00:00'
          },
          {
            id: 7,
            name: '项目7',
            description: '项目7的描述',
            status: '进行中',
            createTime: '2021-01-01 00:00:00',
            updateTime: '2021-01-01 00:00:00'
          },
          {
            id: 8,
            name: '项目8',
            description: '项目8的描述',
            status: '已完成',
            createTime: '2021-01-01 00:00:00',
            updateTime: '2021-01-01 00:00:00'
          }
        ]
      };
    }
  }
] as MockMethod[];
