import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  setWallpaper: (url: string, path: string) => {
    ipcRenderer.send('setWallpaper', url, path)
    return ipcRenderer.invoke('setWallpaper', url, path)
  },
  downloadImage: (url: string) => {
    ipcRenderer.send('downloadImage', url)
  },
  setImageSaveDirectory: () => {
    return ipcRenderer.invoke('setImageSaveDirectory')
  },
  checkDirectory: (path: string) => {
    return ipcRenderer.invoke('checkDirectory', path)
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
// 使用 `contextBridge` API 将 Electron API 仅暴露给渲染器，
// 如果启用了上下文隔离，否则只需添加到 DOM 全局。
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
