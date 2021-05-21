/*
 * @Author: pengyanxue
 * @Date: 2021-04-29 11:37:59
 * @LastEditors: pengyanxue
 * @LastEditTime: 2021-04-29 11:47:09
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 如果编辑器提示path模块找不到，则可以安装一下 @/types/node -> npm i @types/node -D
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') //设置`@` 指向 `src`目录
    }
  },
  base: './',// 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时食肉自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理，根据我们项目实际情况配置

    // proxy: {
    //   '/api': {
    //     target: 'http://XXX.XXX.XXX:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api', '/')
    //   }
    // }
  }
})
