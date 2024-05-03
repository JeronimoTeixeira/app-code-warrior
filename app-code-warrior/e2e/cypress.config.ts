import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run app-code-warrior:serve:development',
        production: 'nx run app-code-warrior:serve:production',
      },
      ciWebServerCommand: 'nx run app-code-warrior:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
