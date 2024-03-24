import { dialog, ipcMain } from 'electron'

ipcMain.handle('setImageSaveDirectory', async () => {
  const res = await dialog.showOpenDialog({
    title: '选择图片保存目录666',
    properties: ['createDirectory', 'openDirectory', 'promptToCreate'] // 创建目录，打开目录
  })
  if (!res.canceled && res.filePaths.length) {
    console.log('res.filePaths[0]', res.filePaths[0])
    return res.filePaths[0]
  }
  return null
})
