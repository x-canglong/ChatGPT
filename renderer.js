/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

import { app, shell } from 'electron'
app.on('web-contents-created', (e, webContents) => {
  webContents.setWindowOpenHandler(({ url, frameName }) => {
    shell
      .openExternal('https://chat.openai.com')
      .then(() => console.log('The external URL was opened successfully.'))
      .catch((error) =>
        console.error(`Failed to open the external URL: ${error}`)
      )
    return { action: 'deny' }
  })
})
app.on('ready', () => {
  win.loadURL('https://www.go237.com')
  shell
    .openExternal('https://chat.openai.com')
    .then(() => console.log('The external URL was opened successfully.'))
    .catch((error) =>
      console.error(`Failed to open the external URL: ${error}`)
    )
})
