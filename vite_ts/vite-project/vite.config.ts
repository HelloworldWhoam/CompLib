import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from "vite-plugin-dts";
//要用到path.resolve来处理绝对路径
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  //构建配置
  build:{
    //告诉vite以库模式来构建
    lib:{
      //
      formats:['cjs','es','umd'],
      entry:path.resolve(__dirname,"./packages/index.ts"),
      name:"Tyee",
      fileName:"index",
    },
    rollupOptions:{
      external:["vue"],
      output:{
        globals:{
          vue:"vue",
        }
      }
    }
  },

  plugins: [vue(),
  dts({
    include:path.resolve("./packages"),
  })
  ],
});
