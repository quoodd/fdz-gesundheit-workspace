# Joomla Integration für FDZ-Gesundheit Workspace

## Schnellstart

### Option A: Custom HTML Modul (Einfachste Lösung)

1. **In Joomla:**
   - Gehen Sie zu: **Module → Neues Modul → Custom HTML**
   - Öffnen Sie die Datei `iframe-module.html`
   - Kopieren Sie den gesamten Inhalt
   - Fügen Sie ihn in das Custom HTML Modul ein
   - **WICHTIG:** Ändern Sie `https://ihre-nextjs-domain.de` zu Ihrer tatsächlichen Next.js-URL
   - Speichern und Modul zu gewünschter Position hinzufügen

### Option B: Custom Joomla-Modul (Erweiterte Lösung)

1. **Modul installieren:**
   - Kopieren Sie `mod_fdz_workspace.php` und `mod_fdz_workspace.xml` nach:
     `Joomla/Modules/mod_fdz_workspace/`
   - In Joomla: **Erweiterungen → Installieren → Verzeichnis**
   - Wählen Sie das `mod_fdz_workspace` Verzeichnis
   - Installieren

2. **Modul konfigurieren:**
   - Gehen Sie zu: **Module → Module verwalten**
   - Finden Sie "FDZ Workspace"
   - Konfigurieren Sie:
     - **Workspace URL:** Ihre Next.js-App URL
     - **Iframe Höhe:** Gewünschte Höhe (Standard: 1200px)
     - **Titel anzeigen:** Ja/Nein
   - Speichern und zu gewünschter Position hinzufügen

## Voraussetzungen

1. **Next.js-App muss deployed sein:**
   ```bash
   npm run build
   npm start
   # Oder auf Vercel/Netlify deployen
   ```

2. **CORS-Konfiguration (falls nötig):**
   - In `next.config.js` CORS-Header hinzufügen:
   ```javascript
   headers: async () => [
     {
       source: '/:path*',
       headers: [
         { key: 'Access-Control-Allow-Origin', value: 'https://ihre-joomla-seite.de' },
       ],
     },
   ],
   ```

## Deployment-Optionen für Next.js

### Option 1: Vercel (Empfohlen)
```bash
npm install -g vercel
vercel
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 3: Eigenes Hosting
```bash
npm run build
npm start
```

## Troubleshooting

### Problem: Iframe zeigt keine Inhalte
- **Lösung:** Prüfen Sie die URL und CORS-Einstellungen
- Prüfen Sie Browser-Konsole auf Fehler

### Problem: Responsive Probleme
- **Lösung:** Passen Sie die CSS-Höhen in `iframe-module.html` an

### Problem: Langsames Laden
- **Lösung:** Implementieren Sie einen Loading-Indicator (bereits enthalten)

## Support

Bei Fragen wenden Sie sich an: support@fdz-gesundheit.de


