import { dialog } from 'electron'
import { pipeline } from 'stream'
import { promisify } from 'util'
import fs from 'fs'
import fetch from 'node-fetch'

export const downloadFile = async (url: string, localFile: string) => {
  const streamPipeline = promisify(pipeline)
  const response = await fetch(url)
  if (!response.ok) {
    dialog.showErrorBox('Error', `unexpected response ${response.statusText}`)
    throw new Error(`unexpected response ${response.statusText}`)
  }
  await streamPipeline(response.body!, fs.createWriteStream(localFile))
  return localFile
}
