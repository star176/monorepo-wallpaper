<template>
  <main class="w-full overflow-hidden">
    <img
      ref="img"
      :src="configStore.config.url"
      class="w-full overflow-hidden cursor-pointer aspect-video nodrag"
      draggable="false"
      @click="load"
    />
    <div
      class="py-3 m-3 text-center duration-500 bg-white rounded-lg cursor-pointer opacity-70 hover:opacity-100 hover:bg-gray-300 hover:shadow-sm nodrag"
      @click="setWallpaper"
    >
      设为壁纸
    </div>
    <div class="flex items-center justify-end mx-3 text-xs text-gray-700">
      <div class="text-sm cursor-pointer hover:font-bold nodrag" @click="downloadImage">
        下载壁纸
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
import { ref, onMounted } from 'vue'
import { ElLoading, ElMessage } from 'element-plus'
import http from '../http/axios'
import useWallpaper from '../composable/useWallpaper'

const { setWallpaper, downloadImage } = useWallpaper()
const configStore = useConfigStore()
const img = ref<HTMLImageElement>()

/**
 * 下载壁纸
 */
const load = async () => {
  console.log('load')
  const res = await http.get('')
  const loading = ElLoading.service({
    background: 'rgba(0, 0, 0, 0.7)'
  })
  configStore.config.url = res.data
  console.log(configStore.config.url)
  // eslint-disable-next-line prefer-const
  let t = setTimeout(() => {
    console.log('load failed')
    loading.close()
    ElMessage({
      message: '加载失败',
      type: 'error',
      duration: 500
    })
  }, 500)

  img.value!.addEventListener('load', () => {
    clearTimeout(t)
    loading.close()
  })
}

onMounted(() => {
  console.log('Home mounted')
  if (!configStore.config.url) {
    load()
  }
})
</script>
<style lang="scss" scoped></style>
```
