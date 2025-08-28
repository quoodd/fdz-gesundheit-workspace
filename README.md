# 🏥 FDZ-Gesundheit Workspace

Eine einfache Startseite für den **JupyterHub Workspace** des FDZ-Gesundheit (Forschungsdatenzentrum für Gesundheitsdaten).

## ✨ Funktionen

- **Einfache Startseite** mit direktem Zugriff auf JupyterHub
- **Schnellzugriff** auf alle wichtigen JupyterHub-Funktionen
- **Keine Authentifizierung** erforderlich - direkter Zugriff
- **Responsive Design** für alle Geräte

## 🚀 Technologie-Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons

## 📋 Voraussetzungen

- Node.js 18+ 
- npm oder yarn

## 🛠️ Installation

### 1. Repository klonen
```bash
git clone <repository-url>
cd FDZ-wesbite
```

### 2. Abhängigkeiten installieren
```bash
npm install
# oder
yarn install
```

### 3. JupyterHub-URL konfigurieren
Bearbeiten Sie die JupyterHub-URL in `app/page.tsx`:

```typescript
const jupyterHubUrl = 'https://mybinder.org'
```

### 4. Entwicklungsserver starten
```bash
npm run dev
# oder
yarn dev
```

Die Anwendung ist jetzt unter [http://localhost:3000](http://localhost:3000) verfügbar.

## 🏗️ Projektstruktur

```
FDZ-wesbite/
├── app/                    # Next.js App Router
│   ├── globals.css        # Globale Styles
│   ├── layout.tsx         # Haupt-Layout
│   └── page.tsx           # Startseite mit JupyterHub-Links
├── public/                # Statische Dateien
├── tailwind.config.js     # Tailwind CSS-Konfiguration
├── next.config.js         # Next.js-Konfiguration
└── package.json           # Projektabhängigkeiten
```

## 🎯 Verwendung

### Für Benutzer
1. **Website öffnen**: Navigieren Sie zur Startseite
2. **JupyterHub öffnen**: Klicken Sie auf "Workspace öffnen"
3. **Direkter Zugriff**: Greifen Sie sofort auf Ihren Workspace zu

### Verfügbare Links
- **Dashboard**: Hauptseite des JupyterHub
- **Notebook**: Neues Notebook starten
- **Dateien**: Dateiverwaltung
- **Terminal**: Terminal-Zugriff

## 🔧 Entwicklung

### Verfügbare Skripte
```bash
# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen
npm run build

# Produktionsserver starten
npm start

# Linting
npm run lint
```

## 📦 Deployment

### Vercel (Empfohlen)
1. Verbinden Sie Ihr GitHub-Repository mit Vercel
2. Deployen Sie automatisch bei jedem Push

### Docker
```bash
# Docker-Image erstellen
docker build -t fdz-gesundheit-workspace .

# Container starten
docker run -p 3000:3000 fdz-gesundheit-workspace
```

## 🆘 Support

- **E-Mail**: support@fdz-gesundheit.de
- **Issues**: [GitHub Issues](https://github.com/fdz-gesundheit/workspace/issues)

## 🙏 Danksagungen

- **FDZ-Gesundheit** für die fachliche Unterstützung
- **JupyterHub Team** für das großartige Framework
- **Next.js Team** für das Frontend-Framework

---

**Entwickelt mit ❤️ für die Gesundheitsdatenanalyse-Community**
# FDZ_notebooks
# FDZ_notebooks-website
