import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"
import markdownEditor from 'theme/markdown-editor'
import markdownRender from 'theme/markdown-render'
import layerStyles from 'theme/layer-styles'
import userCustomTheme from "theme/user-custom"

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },

  //predefined mixin
  layerStyles: layerStyles(),
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  shadows: {
    search:
      "0 0 0 1px rgba(16,22,26,.1), 0 4px 8px rgba(16,22,26,.2), 0 18px 46px 6px rgba(16,22,26,.2)",
  },
  styles: {
    global: (props) => {
      return ({
      p: {
        wordBreak: 'break-word'
      },
      '.hover-bg:hover': {
        background: mode(userCustomTheme.hoverBg.light,userCustomTheme.hoverBg.dark )(props),
        borderRadius: '6px'
      },
      '.bordered' : {
        border: `1px solid ${mode(userCustomTheme.borderColor.light,userCustomTheme.borderColor.dark )(props)}`,
        borderRadius: '6px'
      },
      '.shadowed': {
        boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
        borderRadius: '6px'
      },
      '.tag-bg': {
        background: mode(props.theme.colors.cyan['100'],'rgba(157, 236, 249, 0.16)' )(props),
        color: mode(props.theme.colors.cyan['800'],props.theme.colors.cyan['200'] )(props),
        borderRadius: '6px'
      },
      '.chakra-form__label': {
        fontSize: '.85rem !important',
        fontWeight: '550 !important'
      },
      body: {
        background: mode("gray.50","gray.800" )(props),
        minHeight: '100vh',
        color: mode("gray.700", "whiteAlpha.900")(props),
        ".deleted": {
          color: "#ff8383 !important",
          fontStyle: "normal !important",
        },
        ".inserted": {
          color: "#b5f4a5 !important",
          fontStyle: "normal !important",
        },
        fontWeight: '450',
        fontSize: '16px'
      },
      ...markdownEditor(props),
      ...markdownRender(props)
    })},
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "bold",
      letterSpacing: "-0.015em",
      lineHeight: "1.24",
      fontSize: { base: "2rem", md: "3.5rem" },
    },
    "heading-2": {
      fontFamily: "heading",
      textAlign: "center",
      fontWeight: "bold",
      letterSpacing: "-0.015em",
      lineHeight: "1.24",
      fontSize: { base: "1.75rem", md: "2.75rem" },
    },
    caps: {
      textTransform: "uppercase",
      fontSize: "sm",
      letterSpacing: "widest",
      fontWeight: "bold",
    },
  },
  mdx: {
    h1: {
      mt: "2rem",
      mb: ".25rem",
      lineHeight: 1.2,
      fontWeight: "bold",
      fontSize: "1.875rem",
      letterSpacing: "-.025em",
    },
    h2: {
      mt: "4rem",
      mb: "0.5rem",
      lineHeight: 1.3,
      fontWeight: "semibold",
      fontSize: "1.5rem",
      letterSpacing: "-.025em",
      "& + h3": {
        mt: "1.5rem",
      },
    },
    h3: {
      mt: "3rem",
      // mb: "0.5rem",
      lineHeight: 1.25,
      fontWeight: "semibold",
      fontSize: "1.25rem",
      letterSpacing: "-.025em",
    },
    h4: {
      mt: "3rem",
      lineHeight: 1.375,
      fontWeight: "semibold",
      fontSize: "1.125rem",
    },
    a: {
      color: "teal.500",
      fontWeight: "semibold",
      transition: "color 0.15s",
      transitionTimingFunction: "ease-out",
      _hover: {
        color: "teal.600",
      },
    },
    p: {
      mt: "1.25rem",
      lineHeight: 1.7,
      "blockquote &": {
        mt: 0,
      },
    },
    hr: {
      my: "4rem",
    },
    blockquote: {
      bg: "orange.100",
      borderWidth: "1px",
      borderColor: "orange.200",
      rounded: "lg",
      px: "1.25rem",
      py: "1rem",
      my: "1.5rem",
    },
    ul: {
      mt: "1.5rem",
      ml: "1.25rem",
      "blockquote &": { mt: 0 },
      "& > * + *": {
        mt: "0.25rem",
      },
    },
    code: {
      rounded: "sm",
      px: "1",
      fontSize: "0.875em",
      py: "2px",
      whiteSpace: "nowrap",
      lineHeight: "normal",
    },
  },
  components : {
    Avatar: {
      sizes: {
        md: {
          
        }
      }
    },
    Heading: {
      sizes: {
        lg: {
          fontSize: '1.8rem',
        },
        md: {
          fontSize: '1.5rem'
        },
        sm: {
          fontSize: '1.1rem'
        }
      }
    }
  }
})

export default customTheme
