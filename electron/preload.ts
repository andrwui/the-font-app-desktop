import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('ipcRenderer', withPrototype(ipcRenderer))

// Given a string, finds if it is a process argument
// if it exists, return its value
const getProcessArg = (argName: string): string | undefined => {
  const procArgs: string[] = process.argv
  const filteredArg = procArgs.find(arg => arg.startsWith(argName))
  if (filteredArg) {
    return filteredArg.split('=')[1]
  }
}

// Expose the DEV_ENV to know if it is a dev build
const isDev = getProcessArg('DEV_ENV')
contextBridge.exposeInMainWorld('DEV_ENV', isDev)

// I understood what this does, it is added by vite to expose the ipcRenderer to the front end
function withPrototype(obj: Record<string, any>): Record<string, any> {
  const protos = Object.getPrototypeOf(obj)

  for (const [key, value] of Object.entries(protos)) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) continue

    if (typeof value === 'function') {
      obj[key] = function (...args: any) {
        return value.call(obj, ...args)
      }
    } else {
      obj[key] = value
    }
  }
  return obj
}
