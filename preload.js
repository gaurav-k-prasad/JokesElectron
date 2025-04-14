const { contextBridge } = require("electron");
const axios = require("axios");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});

contextBridge.exposeInMainWorld("http", {
  get: (url, options) => axios.get(url, options).then((res) => res.data),
});
