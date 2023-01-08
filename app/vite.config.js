import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 可以自定义文件生成的位置，默认是根目录下，使用ts的建议放src目录下
      dts: "src/auto-imports.d.ts",
      imports: ["vue"],
    }),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
    //设置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
