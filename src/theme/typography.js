import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.15,
  headerFontFamily: ['Roboto', 'Poppins', 'sans-serif', 'Helvetica', 'Arial'],
  bodyFontFamily: ['Roboto', 'sans-serif'],
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['300', '400', '700'],
    },
    {
      name: 'Poppins',
      styles: ['400', '500'],
    },
    {
      name: 'Titillium Web',
      styles: ['300'],
    },
  ],
})

export default typography