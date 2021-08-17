import { defineConfig} from 'windicss/helpers'

export default defineConfig({
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        body: ['Mulish', 'Roboto', 'Open Sans', 'Arial', 'sans-serif'],
        code: ['Fira Code', 'Courier Prime', 'Consolas', 'Courier New', 'monospace']
      },
    },
  },
});