import colors from 'vuetify/es5/util/colors';

export default {
  light: {
    primary: '#e16f89',
    secondary: '#777777',
    'title-text': '#e0e0e0',
    background: '#fff4f4',
    'category-background': '#ffffff',
    'btn-text': '#e0e0e0',
    accent: colors.blue.lighten2,
    error: colors.deepOrange.base,
    warning: colors.orange.base,
    info: colors.blueGrey.base,
    success: colors.teal.base
  },
  dark: {
    primary: '#be6c85',
    secondary: colors.grey.grey,
    'title-text': '#e0e0e0',
    background: '#121212',
    'category-background': '#1e1e1e',
    'btn-text': '#e0e0e0',
    accent: colors.lightBlue.darken4,
    error: colors.deepOrange.accent4,
    warning: colors.amber.base,
    info: colors.teal.lighten1,
    success: colors.green.accent3
  }
};
