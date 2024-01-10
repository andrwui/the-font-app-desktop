export {}

declare global {
  interface Window {
    // for intellisense
    fonts: {
      getFontDetails: (
        args: string,
      ) => Promise<Array<{ path: string; type: string; weight: number; style: string }>>
    }
    windowControls: {
      close: () => void
      minimize: () => void
      maximize: () => void
    }

    queryLocalFonts: () => Promise<
      [
        {
          family: string
          fullName: string
          postscriptName: string
          style: string
        },
      ]
    >
  }
}
