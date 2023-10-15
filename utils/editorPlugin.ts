import type { BytemdPlugin } from 'bytemd'

export function themePlugin(): BytemdPlugin {
  return {
    viewerEffect({ file }) {
      console.log(file)
    }
  }
}
