export {}

declare global {
  interface Window {
    fonts: {
      getFonts: () => Promise<string[]> // Adjust the type to match the actual API
    }
  }
}
