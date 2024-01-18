import { type Theme } from 'theme-ui'
import { keyframes } from '@emotion/react'
/// Styles for the whole app, may not be the best system,
// but vanilla extract wasn't good for this app because the
// exteme type safety wouldn't let me use experimental css rules freely.

const Animations = {
  spin: keyframes({
    from: { rotate: '0deg' },
    to: { rotate: '360deg' },
  }),

  bblFadInOut: keyframes({
    '0%, 80%, 100%': { boxShadow: '0 2.5em 0 -1.3em' },
    '40%': { boxShadow: '0 2.5em 0 0' },
  }),
}

export const BaseTheme: Theme = {
  fonts: {
    body: 'Geist',
  },
  fontWeights: [400, 600, 900],
  colors: {
    text: '#E3E3E3',
    background: '#0a0a0a',
    secondary: '#1C1C1C',
    secondary2: '#989898',
    disabled: '#424242',
  },
  breakpoints: ['1024px', '1280px', '1440px', '1680px', '1920px'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  styles: {
    root: {
      //  === ROOT STYLES ===
      m: 0,
      p: 0,

      backgroundColor: 'background',
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
          outline: 'none',
        },
      },

      // === Scrollbar ===
      '& ::-webkit-scrollbar': {
        display: 'none',
      },

      // === Body ===
      body: {
        '#root': {
          height: '100dvh',
          bg: 'background',
        },
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
            bg: 'background',

            gridRow: '1',
            gridColumn: '1 / 3',

            WebkitAppRegion: 'drag',
            '& *': {
              WebkitAppRegion: 'no-drag',
            },

            '.SearchBar': {
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
            bg: 'background',
            padding: '1em',
            height: '100%',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',

            gridRow: '2/4',
            gridColumn: '2',

            '.ControlsSection': {
              display: 'flex',
              justifyContent: 'start',
              flexDirection: 'column',
              gap: '4',
              '.ControlsHeading': {
                fontSize: 'max(2dvw, 1em)',
              },
            },
          },
          // === Local Font Viewer ===
          '.LocalFontViewer': {
            overflowX: 'hidden',

            gridRow: '2',
            gridColumn: '1',

            '&__NoFonts, &__Loading': {
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
                width: '100%',

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
                  transition: 'text-shadow .2s ease, color .2s ease',
                  '&:hover': {
                    textShadow: '0 0 6px rgba(255,255,255,1)',
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
            background: 'secondary',
            width: '100%',
            outline: 'none',
            height: '9px',
            borderRadius: '5px',

            '&::-webkit-slider-runnable-track': {
              height: '6px',
              cursor: 'pointer',
              // background: 'background',
              borderRadius: '50px',
            },

            '&::-webkit-slider-thumb': {
              height: '16px',
              width: '16px',
              borderRadius: '50%',
              background: 'transparent',
              cursor: 'pointer',
              appearance: 'none',
              marginTop: '-5px',
              border: `2px solid transparent`,
              zIndex: '1000',
            },
          },

          '.SliderProgressWrapper': {
            position: 'relative',
            '.SliderProgressBar': {
              pointerEvents: 'none',
              position: 'absolute',
              left: 0,
              top: '60%',
              transform: 'translateY(-60%)',
              height: '6px',
              bg: 'text',
              borderRadius: '5px',
            },
            '.SliderThumb': {
              pointerEvents: 'none',
              position: 'absolute',
              height: '16px',
              top: '50%',
              transform: 'translateY(-10%) translateX(-50%)',
              width: '16px',
              borderRadius: '50%',
              background: 'secondary',
              cursor: 'pointer',
              appearance: 'none',
              marginTop: '-5px',
              border: `2px solid #E3E3E3`,
              zIndex: '1000',
            },
          },

          gap: '.3em',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 'min-content',
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
            fontSize: '1em',
            fontWeight: '500',
          },
          '.SliderValueWrapper': {
            maxWidth: '5m',
            minWidth: '5em',
            maxHeight: '2.1em',
            minHeight: '2.1em',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 5,
            background: 'secondary',

            width: '10%',
            '.SliderValue': {
              width: '70%',
              height: '25px',
              border: 'none',
              background: 'transparent',
              color: 'text',
              textAlign: 'center',
            },
          },
        },

        // === Checkbox ===
        '.CheckboxWrapper': {
          height: '1.4em',
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'start',
          position: 'relative',

          '.CheckboxStyledWrapper': {
            '.OriginalCheckbox': {
              WebkitAppearance: 'none',
              pr: 4,
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

              left: 0,
              bottom: 0,

              height: '1.4em',
              width: '1.4em',

              bg: 'background',
              borderRadius: 5,

              display: 'flex',

              '& svg': {
                height: '40px',
                width: '40px',
                alignSelf: 'center',
                justifySelf: 'center',
              },
            },
          },
        },

        // === Loader ===
        '.Loader': {
          transform: 'translateY(-3em)',
          color: 'text',
          fontSize: '11px',
          position: 'relative',
          textIndent: '-9999em',
          animationDelay: '-0.16s',

          borderRadius: '50%',
          width: '2.5em',
          height: '2.5em',
          animationFillMode: 'both',
          animation: `${Animations.bblFadInOut} 1.8s infinite ease-in-out`,

          '&:before, &:after': {
            borderRadius: '50%',
            width: '2.5em',
            height: '2.5em',
            animationFillMode: 'both',
            animation: `${Animations.bblFadInOut} 1.8s infinite ease-in-out`,
            content: '""',
            position: 'absolute',
            top: 0,
          },

          '&:before': {
            left: '-3.5em',
            animationDelay: '-0.32s',
          },
          '&:after': {
            left: '3.5em',
            animationDelay: '0.32s',
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

        '.SwitchWrapper': {
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          '.Switch': {
            position: 'relative',
            display: 'grid',
            gap: '4px',
            overflow: 'hidden',

            height: '2em',
            width: '100%',

            borderRadius: 5,

            '.OriginalRadio': {
              display: 'none',
              '&:checked': {
                '+.RadioLabel': {
                  fontWeight: 'bold',
                  color: 'background',
                },
              },
            },
            '.RadioLabel': {
              bg: 'secondary',
              width: '100%',
              height: '100%',
              textAlign: 'center',
              display: 'grid',
              placeItems: 'center',
              color: 'secondary2',
              cursor: 'pointer',
              transition: 'text-shadow .2s ease, color .2s ease',
              '& p': {
                zIndex: '9999',
              },
            },

            '.SwitchIndicator': {
              transition: 'left .2s ease',
              background: 'text',
              position: 'absolute',
            },
          },
        },
      },
    },
  },
}
