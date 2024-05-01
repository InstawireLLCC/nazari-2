
const path = require('path');
import { defineConfig } from 'vite';

// Rest of your configuration

export default defineConfig({
    root: path.resolve(__dirname, './'),
    server: {
        port: 8080,
        hot: true
    },
    build: {
        // Specify the output directory for Vercel builds
        outDir: 'dist',
        rollupOptions: {
          input: {
        main:'index.html'
        
        }} // Change this to your desired output directory name
      },
    });

// old name servers
// ns15.inhostedns.com
// ns25.inhostedns.net
// ns35.inhostedns.org
