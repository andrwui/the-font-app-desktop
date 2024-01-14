import type { Theme } from 'theme-ui'

export const theme: Theme = {
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
        userSelect: 'none',

        '&:focus': {
          outline: '1px solid white',
        },
      },

      // === Scrollbar ===
      '& ::-webkit-scrollbar': {
        display: 'none',
        // width: '.3em',
        // '&-thumb': {
        //   minHeight: '5em',
        //   backgroundColor: 'text',
        //   borderRadius: '4px',
        // },
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
            gridTemplateColumns: '70% 30%',
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
              '.WindowControls': {
                display: 'flex',
                '.WindowControlsButton': {
                  display: 'grid',
                  placeItems: 'center',

                  minWidth: '40px',
                  maxWidth: '40px',
                  minHeight: '40px',
                  maxHeight: '40px',
                  border: 'none',
                  bg: 'secondary',

                  svg: {
                    'rect, path': {
                      transition: 'stroke .2s ease, fill .2s ease',
                    },
                  },
                  '&.CloseButton': {
                    transition: 'background-color .2s ease',
                    '&:hover': {
                      bg: 'red',
                    },
                  },
                  '&:hover svg': {
                    'rect, path': {
                      stroke: 'text',
                    },
                  },
                },
              },
            },

            '.ReplaceBar': {
              gridRow: '3',
              gridColumn: '1',
            },

            // === View Tools ===
            '.ViewTools': {
              gridRow: '2/4',
              gridColumn: '2',

              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',

              bg: 'secondary',

              padding: '1em',
              '.ControlsSection': {
                '.ControlsHeading': {
                  fontSize: '2dvw',
                },
                gap: '50px',
                display: 'flex',
                justifyContent: 'start',
                flexDirection: 'column',
                '.ControlCheckboxes': {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                },
              },
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

                height: `100%`,
                display: 'grid',
                placeItems: 'center',
              },
              '.Font': {
                display: 'flex',
                alignItems: 'center',
                gap: '15px',

                '.FontWrapper': {
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',

                  '.FontName': {
                    color: 'secondary2',
                    fontWeight: '100',
                    display: 'flex',
                    gap: 2,
                  },
                  '.FontDisplay': {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.2em',
                  },
                  '.CopyButton': {
                    '&:hover': {
                      color: 'text',
                    },
                    display: 'grid',
                    placeItems: 'center',
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

            gap: '.3em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '1em',
            '.Slider': {
              width: '100%',
            },
            img: {
              width: '1em',
              height: '1em',
            },

            '.TopSliderWrapperSection': {
              display: 'flex',
              justifyContent: 'space-between',

              '.SliderValueWrapper': {
                maxWidth: '2.5em',
                minWidth: '2.5em',
                width: '10%',
                '.SliderValue': {
                  width: '100%',
                  height: '25px',
                  border: 'none',
                  borderRadius: '5px',
                  background: 'background',
                  color: 'text',
                  textAlign: 'center',
                },
                display: 'flex',
                alignItems: 'end',
              },
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

                height: '1.4em',
                width: '1.4em',

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

          // === Copy Button ===
          '.CopyIcon': {},
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
