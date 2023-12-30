export {}

declare global {
  interface Window {
    // for intellisense
    fonts: {
      getFonts: () => Promise<string[]>
    }
    windowControls: {
      close: () => void
      minimize: () => void
      maximize: () => void
    }
  }
}
