import { IpcMainInvokeEvent, ipcMain } from 'electron'
import { resolve } from 'path'
import wallpaper from 'wallpaper'
import { downloadFile } from '../util'
import fs from 'fs'

ipcMain.handle('setWallpaper', async (_event: IpcMainInvokeEvent, url: string, path: string) => {
  try {
    const localFile = resolve(path, url.split('/').pop()!)
    const file = await downloadFile(url, localFile)
    wallpaper.set(file, {
      screen: 'all',
      scale: 'auto'
    })
    return 'success'
  } catch (e) {
    return 'error'
  }
})
ipcMain.handle('checkDirectory', (_event: IpcMainInvokeEvent, path: string) => {
  return fs.existsSync(path)
})
