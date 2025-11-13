// Konfiguration für JupyterHub-URL
// Diese Datei kann angepasst werden, um zwischen lokaler und Online-URL zu wechseln

const config = {
  // Lokale Entwicklung
  development: {
    jupyterHubUrl: 'https://fdz-support.risikoanalytik.de/user/fdz-support1/'
  },
  
  // Produktion/Online
  production: {
    jupyterHubUrl: 'https://fdz-support.risikoanalytik.de/user/fdz-support1/'
  }
};

// Automatische Erkennung der Umgebung
const isDevelopment = process.env.NODE_ENV === 'development';
const currentConfig = isDevelopment ? config.development : config.production;

export const jupyterHubUrl = process.env.NEXT_PUBLIC_JUPYTERHUB_URL || currentConfig.jupyterHubUrl;

export default config;

