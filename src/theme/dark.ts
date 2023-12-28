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

      // === Range Input ===
      'input[type="range"]': {
        WebkitAppearance: 'none',
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

      // === Body ===
      body: {
        '#root': {
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

          // === Top Bar ===
          '.TopBar': {
            height: '40px',
            width: '100%',
          },
          // === Search Bar ===
          '.SearchBar, .ReplaceBar': {
            width: '70%',
            height: '100%',
            bg: 'background',
            border: 'none',
            textAlign: 'center',
            color: 'text',
            fontSize: '.8em',
          },

          // === View Tools ===
          '.view-tools': {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            gap: 2,

            bg: 'background',

            px: 2,

            width: '30dvw',
            position: 'fixed',
            top: '0',
            right: '.3em',
            zIndex: '2000',
          },
          // === Local Font Viewer ===
          '.LocalFontViewer': {
            overflowX: 'hidden',

            '&__NoFonts': {
              color: 'secondary2',
            },
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

          // ========================
          // ====== Components ======
          // ========================

          // === Split ===
          '.SplitWrapper': {
            overflow: 'hidden',
          },

          // === Slider ===
          '.SliderWrapper': {
            display: 'flex',
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
        },
      },
    },
  },
}
