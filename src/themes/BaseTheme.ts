import { type Theme } from 'theme-ui'
import { keyframes } from '@emotion/react'
/// Styles for the whole app, it may not be the best system,
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
      backgroundColor: 'background',
      overflowX: 'hidden',
      listStyle: 'none',

      //  GLOBAL STYLES
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

      svg: {
        path: {
          fill: 'text',
        },
      },

      //  Scrollbar
      '& ::-webkit-scrollbar': {
        display: 'none',
      },

      //  Body
      body: {
        '#root': {
          height: '100dvh',
          bg: 'background',
        },
        //  Splash Screen
        '.splash-screen-container': {
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
          '&__text': {
            fontSize: '5em',
            '& *': {
              fontFamily: 'Dream Orphans',
            },
          },
        },

        '.layout': {
          height: '100%',

          display: 'grid',
          gridTemplateColumns: '70% 30%',
          gridTemplateRows: '40px 1fr 40px',

          //  Top Bar
          '.top-bar': {
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

            '.search-bar': {
              width: '70%',
            },
            '.top-bar-button-wrapper': {
              mr: '125px',
              height: '100%',
              display: 'flex',
              '&__button': {
                cursor: 'pointer',
                height: '100%',
                width: '41px',
                display: 'grid',
                placeItems: 'center',
                '&__icon': {
                  overflow: 'hidden',
                  display: 'grid',
                  placeItems: 'center',
                },
              },
            },
          },

          '.replace-bar': {
            gridRow: '3',
            gridColumn: '1',
          },

          //  View Tools
          '.view-tools': {
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

            '&__controls': {
              display: 'flex',
              justifyContent: 'start',
              flexDirection: 'column',
              gap: '4',
              '&__heading': {
                fontSize: 'max(2dvw, 1em)',
              },
            },
          },
          //  Local Font Viewer
          '.font-list': {
            overflowX: 'hidden',

            gridRow: '2',
            gridColumn: '1',

            '&__no-fonts, &__loading': {
              color: 'disabled',
              gridRow: '2',
              gridColumn: '1',

              height: `100%`,
              display: 'grid',
              placeItems: 'center',
            },
            '&__item': {
              display: 'flex',
              alignItems: 'center',
              gap: '15px',

              '.font-wrapper': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',

                '&__name': {
                  color: 'disabled',
                  fontWeight: '300',
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                },
                '&__display': {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.2em',
                },
                '&__copy-icon': {
                  display: 'grid',
                  placeItems: 'center',
                },
              },
            },
          },
        },

        // Wrapper for the Label and the TooltipIcon components
        '.label-component': {
          display: 'flex',
          alignItems: 'center',
          gap: 2,

          '&__label': {
            fontSize: '1em',
            fontWeight: '500',
          },

          '&__tooltip-icon': {
            height: '20px',
            width: '20px',
            display: 'grid',
            placeItems: 'center',
            cursor: 'help',
            path: {
              fill: 'text',
            },
          },
        },
        //  Split
        '.split-wrapper': {
          overflow: 'hidden',
        },

        // Slider
        '.slider-component': {
          // Styles for the parent element to the Slider, InputValue and Label
          gap: '.3em',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 'min-content',

          // General HTML Element styles
          'input[type="range"]': {
            appearance: 'none',
            bg: 'transparent',
            cursor: 'pointer',
            background: 'secondary',
            width: '100%',
            outline: 'none',
            height: '6px',
            borderRadius: '5px',

            // The original range input track has
            // to match the sizes of the progress-tracker
            '&::-webkit-slider-runnable-track': {
              height: '6px',
              cursor: 'pointer',
              borderRadius: '50px',
            },

            // Made the original thumb transparent
            // to show the custom one
            '&::-webkit-slider-thumb': {
              height: '16px',
              width: '16px',
              background: 'transparent',
              appearance: 'none',
              marginTop: '-5px',
              border: `2px solid transparent`,
            },
          },

          // Wrapper for the upper part of the component
          '&__top': {
            display: 'flex',
            justifyContent: 'space-between',
          },

          // Wrapper of InputValue and ResetIcon
          '.input-value-wrapper': {
            maxWidth: '5em',
            minWidth: '5em',
            maxHeight: '2.1em',
            minHeight: '2.1em',
            display: 'flex',
            alignItems: 'center',
            borderRadius: 5,
            background: 'secondary',
            width: '10%',

            '&__input': {
              width: '70%',
              height: '25px',
              border: 'none',
              background: 'transparent',
              color: 'text',
              textAlign: 'center',
            },
            '&__reset-icon': {
              cursor: 'pointer',
            },
          },

          // The wrapper for the original range input, the
          // progress-tracker and the custom thumb
          '.slider-wrapper': {
            position: 'relative',

            // Custom progress bar for the range input
            '&__progress-bar': {
              pointerEvents: 'none',
              position: 'absolute',
              left: 0,
              top: '50%',
              height: '5px',
              bg: 'text',
              borderRadius: '5px',
              transition: 'width .1s ease',
            },

            // Also custom thumb for it to be on top,
            // as the original range input thumb cannot
            // be set on top
            '&__thumb': {
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
        },

        // Big Input
        '.big-input': {
          width: '100%',
          height: '40px',
          bg: 'background',
          border: 'none',
          textAlign: 'center',
          color: 'text',
          fontSize: '.8em',
        },

        // Multi-way switch
        '.multi-switch-component': {
          display: 'flex',
          flexDirection: 'column',
          gap: 2,

          '.multi-switch-wrapper': {
            position: 'relative',
            display: 'grid',
            gap: '4px',
            overflow: 'hidden',

            height: '2em',
            width: '100%',

            borderRadius: 5,

            '&__original-radio': {
              display: 'none',
              '&:checked': {
                '+.multi-switch-wrapper__option': {
                  color: 'background',
                  fontSize: '1.1em',
                },
              },
            },
            '&__option': {
              bg: 'secondary',
              width: '100%',
              height: '100%',
              textAlign: 'center',
              display: 'grid',
              placeItems: 'center',
              color: 'secondary2',
              cursor: 'pointer',
              transition: 'font-size .2s ease, color .2s ease',
              '& p': {
                zIndex: '9999',
              },
            },

            '&__indicator': {
              transition: 'left .2s ease',
              background: 'text',
              position: 'absolute',
            },
          },
        },

        // The global tooltip
        '.tooltip': {
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 10000,
          textAlign: 'center',
          borderRadius: '5px',
          boxShadow: '5px 5px 5px black',
          background: 'secondary',
          whiteSpace: 'initial',
          fontSize: '.8em',
          boxSizing: 'content-box',
          position: 'absolute',
          width: 'max-content',
          maxWidth: '10em',
          padding: '.3em .3em',

          '& p': {
            zIndex: 10000,
          },
          '&__tail': {
            zIndex: -1,
            bg: 'inherit',
            position: 'absolute',
            width: 15,
            aspectRatio: '1/1',
            rotate: '45deg',
          },
        },

        //  Loader
        // A loader i borrowed from https://cssloaders.github.io/
        '.loader': {
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
      },
    },
  },
}
