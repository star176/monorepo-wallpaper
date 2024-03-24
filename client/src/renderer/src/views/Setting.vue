<template>
  <main class="p-3 bg-[#34495e] text-white flex flex-col justify-between">
    <section class="mt-6">
      <h2 class="flex justify-center py-5 text-sm opacity-70">参数设置</h2>
      <div class="flex items-center gap-1">
        <el-input
          v-model="configStore.config.saveDirectory"
          disabled
          placeholder="请选择壁纸保存目录"
          size="default"
          clearable
        >
        </el-input>
        <el-button type="primary" size="default" @click="setImageSaveDirectory"
          >选择图片保存目录</el-button
        >
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
import useWallpaper from '@renderer/composable/useWallpaper'

const { setImageSaveDirectory } = useWallpaper()
const configStore = useConfigStore()
</script>
<style lang="scss" scoped></style>
```
