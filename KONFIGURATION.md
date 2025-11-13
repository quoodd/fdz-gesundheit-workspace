# Konfiguration der JupyterHub-URL

## Übersicht

Diese Webseite kann sowohl lokal als auch online betrieben werden. Die JupyterHub-URL wird automatisch je nach Umgebung konfiguriert.

## Lokale Entwicklung

Für die lokale Entwicklung wird automatisch `http://localhost:8000` verwendet.

## Online-Bereitstellung

### Option 1: Konfigurationsdatei anpassen

Bearbeiten Sie die Datei `config.js`:

```javascript
const config = {
  // Lokale Entwicklung
  development: {
    jupyterHubUrl: 'http://localhost:8000'
  },
  
  // Produktion/Online
  production: {
    jupyterHubUrl: 'https://ihre-jupyterhub-instanz.com' // Hier Ihre Online-URL eintragen
  }
};
```

### Option 2: Umgebungsvariablen (Empfohlen für Hosting-Dienste)

Setzen Sie die Umgebungsvariable `NEXT_PUBLIC_JUPYTERHUB_URL`:

**Vercel:**
- Gehen Sie zu Ihrem Projekt-Dashboard
- Navigieren Sie zu "Settings" → "Environment Variables"
- Fügen Sie hinzu: `NEXT_PUBLIC_JUPYTERHUB_URL` = `https://ihre-jupyterhub-instanz.com`

**Netlify:**
- Gehen Sie zu "Site settings" → "Environment variables"
- Fügen Sie hinzu: `NEXT_PUBLIC_JUPYTERHUB_URL` = `https://ihre-jupyterhub-instanz.com`

**Docker:**
```bash
docker run -e NEXT_PUBLIC_JUPYTERHUB_URL=https://ihre-jupyterhub-instanz.com ...
```

## Verfügbare JupyterHub-Hosting-Optionen

### 1. Eigenes Hosting
- **VPS/Server**: Installieren Sie JupyterHub auf Ihrem eigenen Server
- **Cloud-Provider**: AWS, Google Cloud, Azure, DigitalOcean
- **Kubernetes**: Für skalierbare Deployments

### 2. Managed Services
- **Binder**: Kostenlos für öffentliche Repositories
- **Google Colab**: Für Google Workspace Nutzer
- **Azure Notebooks**: Microsoft Azure Integration
- **AWS SageMaker**: Für Machine Learning Workloads

### 3. JupyterHub-spezifische Hosting-Dienste
- **Pangeo**: Für Geowissenschaften
- **MyBinder**: Für Bildungszwecke
- **JupyterHub Cloud**: Spezialisierte JupyterHub-Hosting-Lösungen

## Beispiel-Konfigurationen

### Für Binder:
```javascript
production: {
  jupyterHubUrl: 'https://mybinder.org/v2/gh/ihr-username/ihr-repo/main'
}
```

### Für eigenen Server:
```javascript
production: {
  jupyterHubUrl: 'https://jupyterhub.ihre-domain.com'
}
```

### Für Cloud-Provider:
```javascript
production: {
  jupyterHubUrl: 'https://ihre-instanz.region.cloudprovider.com'
}
```

## Sicherheitshinweise

- Verwenden Sie immer HTTPS für Produktionsumgebungen
- Stellen Sie sicher, dass Ihr JupyterHub ordnungsgemäß konfiguriert ist
- Implementieren Sie Authentifizierung und Autorisierung
- Überwachen Sie den Ressourcenverbrauch

## Troubleshooting

### JupyterHub ist nicht erreichbar
1. Überprüfen Sie die URL in der Konfiguration
2. Stellen Sie sicher, dass der JupyterHub läuft
3. Überprüfen Sie Firewall-Einstellungen
4. Testen Sie die URL im Browser

### CORS-Fehler
- Stellen Sie sicher, dass Ihr JupyterHub CORS für Ihre Webseiten-Domain erlaubt
- Konfigurieren Sie `c.JupyterHub.bind_url` entsprechend

## Support

Bei Fragen zur Konfiguration wenden Sie sich an:
- Ihr Hosting-Provider
- Die JupyterHub-Dokumentation
- Das FDZ-Gesundheit Team

