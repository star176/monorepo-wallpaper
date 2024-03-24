import router from '../router/index'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { ElMessage } from 'element-plus'

export default () => {
  const { config } = useConfigStore()
  // 设置壁纸
  const setWallpaper = async () => {
    console.log('setWallpaper---1')
    const state = await window.api.checkDirectory(config.saveDirectory)
    if (!state) {
      ElMessage({
        message: '图片保存目录无效',
        type: 'error'
      })
      return router.push({ name: 'setting' })
    }
    const res = await window.api.setWallpaper(config.url, config.saveDirectory)
    if (res === 'success') {
      ElMessage({
        message: '设置成功',
        type: 'success'
      })
    } else {
      ElMessage({
        message: '设置失败',
        type: 'error'
      })
    }
  }
  //  下载图片
  const downloadImage = () => {
    window.api.downloadImage(config.url)
  }
  //   设置图片保存目录
  const setImageSaveDirectory = async () => {
    console.log('setImageSaveDirectory11')
    const path = await window.api.setImageSaveDirectory()
    if (path) {
      config.saveDirectory = path
    }
  }
  return {
    setWallpaper,
    downloadImage,
    setImageSaveDirectory
  }
}
