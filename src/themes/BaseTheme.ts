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
        willChange: 'background-color color',

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
            cursor: 'grab',
            '& *': {
              WebkitAppRegion: 'no-drag',
            },

            '.SearchBar': {
              width: '70%',
            },
            '.TopBarButtonWrapper': {
              mr: '125px',
              height: '100%',
              '.ThemeSwitcher': {
                height: '100%',
                width: '41px',
                display: 'grid',
                placeItems: 'center',
                '.IconContainer': {
                  overflow: 'hidden',
                  display: 'grid',
                  placeItems: 'center',
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

            bg: 'background',
            padding: '1em',
            height: '100%',
            borderLeft: '1px solid',
            borderColor: 'text',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',

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
          '.FontList': {
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
                  fontWeight: '200',
                  display: 'flex',
                  gap: 2,
                },
                '.FontDisplay': {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.2em',
                },
                '.CopyButton': {
                  '&:hover': {},
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

        // === Label ===

        '.LabelWrapper': {
          display: 'flex',
          alignItems: 'center',
          gap: 2,

          '.TooltipIcon': {
            height: '20px',
            width: '20px',
            display: 'grid',
            placeItems: 'center',
            path: {
              fill: 'text',
            },
          },

          '.Label': {
            fontSize: '1em',
            fontWeight: '500',
          },
        },
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
            height: '6px',
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
              top: '50%',
              height: '6px',
              bg: 'text',
              borderRadius: '5px',
              transition: 'width .1s ease',
            },
            '.SliderThumb': {
              transition: 'left .1s ease',
              pointerEvents: 'none',
              position: 'absolute',
              height: '16px',
              top: '50%',
              transform: 'translateY(-5%) translateX(-50%)',
              width: '16px',
              borderRadius: '50%',
              background: 'secondary',
              cursor: 'pointer',
              appearance: 'none',
              marginTop: '-5px',
              border: `2px solid`,
              borderColor: `text`,
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
          },
          '.SliderValueWrapper': {
            maxWidth: '5em',
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
            '.ResetIcon': {
              cursor: 'pointer',
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
        '.Tooltip': {
          pointerEvents: 'none',
          zIndex: 10000,
          textAlign: 'center',
          borderRadius: '5px',
          boxShadow: '5px 5px 15px black',
          background: 'secondary',
          whiteSpace: 'initial',
          fontSize: '.8em',
          boxSizing: 'content-box',
          position: 'absolute',
          width: 'max-content',
          maxWidth: '10em',
          padding: '.3em .3em',
          translate: '-50% -100%',
          overflow: 'hidden',
        },
      },
    },
  },
}
