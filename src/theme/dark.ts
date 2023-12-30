import type { Theme } from 'theme-ui'

export const dark: Theme = {
  fonts: {
    body: 'Geist',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#E3E3E3',
    background: '#0D0D0D',
    secondary: '#1C1C1C',
    secondary2: '#989898',
    disabled: '#424242',
    semiBlack: '#0A0012',
  },
  breakpoints: ['1024px', '1280px', '1440px', '1680px', '1920px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    root: {
      //  === ROOT STYLES ===
      m: 0,
      p: 0,

      backgroundColor: 'dark',
      overflowX: 'hidden',
      listStyle: 'none',

      // === GLOBAL STYLES ===
      '*': {
        m: 0,
        p: 0,
        fontFamily: 'body',
        textWrap: 'nowrap',

        '&:focus': {
          outline: 'none',
        },
      },

      // === Scrollbar ===
      '& ::-webkit-scrollbar': {
        width: '.3em',
        '&-thumb': {
          minHeight: '5em',
          backgroundColor: 'text',
          borderRadius: '4px',
        },
      },

      // === Body ===
      body: {
        '#root': {
          height: '100dvh',
          // === Splash Screen ===
          '.SplashScreenContainer': {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '99999999',
            bg: 'background',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '.SplashScreenText': {
              fontSize: '5em',
              '& *': {
                fontFamily: 'Dream Orphans',
              },
            },
          },

          '.ViewerLayout': {
            height: '100%',

            display: 'grid',
            gridTemplateColumns: '70% 1fr',
            gridTemplateRows: '40px 1fr 40px',

            // === Top Bar ===
            '.TopBar': {
              height: '40px',
              width: '100%',

              display: 'flex',
              justifyContent: 'space-between',
              bg: 'secondary',

              gridRow: '1',
              gridColumn: '1 / 3',

              WebkitAppRegion: 'drag',
              '& *': {
                WebkitAppRegion: 'no-drag',
              },

              '.SearchBar': {
                bg: 'background',
                width: '70%',
              },
              '.WindowControlsButton': {
                minWidth: '40px',
                maxWidth: '40px',
                minHeight: '40px',
                maxHeight: '40px',
              },
            },

            '.ReplaceBar': {
              gridRow: '3',
              gridColumn: '1',
            },

            // === View Tools ===
            '.ViewTools': {
              gap: '50px',
              display: 'flex',
              justifyContent: 'start',
              flexDirection: 'column',
              height: '100%',
              bg: 'secondary',

              gridRow: '2/4',
              gridColumn: '2',
            },
            // === Local Font Viewer ===
            '.LocalFontViewer': {
              overflowX: 'hidden',

              gridRow: '2',
              gridColumn: '1',

              '&__NoFonts': {
                color: 'secondary2',
                gridRow: '2',
                gridColumn: '1',
              },
              '.Font': {
                display: 'flex',
                alignItems: 'center',
                gap: '15px',

                '.FontWrapper': {
                  '.FontName': {
                    color: 'secondary2',
                    fontWeight: '100',
                  },
                  '.FontDisplay': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.2em',
                  },
                },
              },
            },
          },

          // ========================
          // ====== Components ======
          // ========================

          // === Split ===
          '.SplitWrapper': {
            overflow: 'hidden',
          },

          // === Slider ===
          '.SliderWrapper': {
            'input[type="range"]': {
              appearance: 'none',
              bg: 'transparent',
              cursor: 'pointer',

              '&:focus': {
                outline: 'none',
              },

              '&::-webkit-slider-runnable-track': {
                height: '6px',
                cursor: 'pointer',
                background: 'background',
                borderRadius: '50px',
              },

              '&::-webkit-slider-thumb': {
                height: '12px',
                width: '12px',
                borderRadius: '50px',
                background: 'text',
                cursor: 'pointer',
                WebkitAppearance: 'none',
                marginTop: '-3px',
              },
            },

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '1em',
            '.Slider': {
              width: '70%',
            },
            img: {
              width: '1em',
              height: '1em',
            },
          },

          // === Checkbox ===
          '.CheckboxWrapper': {
            height: '1em',
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',

            '.CheckboxStyledWrapper': {
              '.OriginalCheckbox': {
                WebkitAppearance: 'none',
              },

              'input ~ .Checkbox': {
                transition: 'background-color .2s ease',
              },
              '&:hover input ~ .Checkbox': {
                bg: 'secondary',
                cursor: 'pointer',
              },

              '.Checkbox': {
                position: 'absolute',

                right: 0,
                bottom: 0,

                height: '1em',
                width: '1em',

                bg: 'semiBlack',
                borderRadius: '3px',

                display: 'flex',

                '& svg': {
                  height: '40px',
                  width: '40px',
                  alignSelf: 'center',
                  justifySelf: 'center',
                },
              },
            },
            'img, svg': {
              pointerEvents: 'none',
              height: '120%',
              aspectRatio: '1/1',
            },
          },

          // === Copy Icon ===
          '.CopyIconContainer': {
            position: 'relative',
            bg: 'secondary',
            borderRadius: '3px',
            '&:active': {
              '.CopyIconUp, .CopyIconDown': {
                scale: '.8',
              },
            },

            '&:hover': {
              cursor: 'pointer',
            },

            '.CopyIconUp, .CopyIconDown': {
              position: 'absolute',
              transition: `top .3s ease, right .3s ease,
                  bottom .3s ease, left .3s ease, scale .1s ease`,
              '.stroke': {
                fill: 'text',
              },
            },

            '.CopyIconDown': {
              bottom: '20%',
              left: '20%',
            },
            '.CopyIconUp': {
              top: '20%',
              right: '20%',
            },
          },
          // === Big Bar ===
          '.BigBar': {
            width: '100%',
            height: '40px',
            bg: 'background',
            border: 'none',
            textAlign: 'center',
            color: 'text',
            fontSize: '.8em',
          },
        },
      },
    },
  },
}
