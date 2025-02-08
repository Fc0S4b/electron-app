const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
  // no expongas todo el módulo de ipcRenderer, invoca lo necesario como en este caso ping, por temas de vulnerabilidad
  // we can also expose variables, no just functions
})
