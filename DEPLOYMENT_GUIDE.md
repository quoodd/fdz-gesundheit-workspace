# Next.js Deployment Guide - Domain finden

## Aktuelle Situation

Ihre Next.js-App läuft aktuell **nur lokal** auf Ihrem Computer:
- **Lokale URL:** `http://localhost:3000`
- Diese URL funktioniert nur auf Ihrem Computer
- Für Joomla-Integration benötigen Sie eine öffentliche URL

---

## Option 1: Vercel (Empfohlen - Am einfachsten) 🚀

### Vorteile:
- ✅ Kostenlos für kleine Projekte
- ✅ Automatisches SSL (HTTPS)
- ✅ Automatische Deployments
- ✅ Eigene Domain möglich

### Schritte:

1. **Vercel installieren:**
   ```bash
   npm install -g vercel
   ```

2. **Projekt deployen:**
   ```bash
   vercel
   ```
   - Folgen Sie den Anweisungen
   - Wählen Sie "Link to existing project" oder "Create new project"
   - Antworten Sie auf die Fragen

3. **Ihre Domain finden:**
   - Nach dem Deployment erhalten Sie eine URL wie:
     ```
     https://fdz-gesundheit-workspace.vercel.app
     ```
   - Diese URL ist Ihre **öffentliche Next.js-Domain**
   - Kopieren Sie diese URL für die Joomla-Integration

4. **Produktions-Deployment:**
   ```bash
   vercel --prod
   ```

### Domain nachträglich finden:
- Gehen Sie zu: https://vercel.com/dashboard
- Wählen Sie Ihr Projekt
- Die Domain wird oben angezeigt

---

## Option 2: Netlify 🌐

### Schritte:

1. **Netlify CLI installieren:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build erstellen:**
   ```bash
   npm run build
   ```

3. **Deployen:**
   ```bash
   netlify deploy --prod
   ```

4. **Ihre Domain finden:**
   - Nach dem Deployment erhalten Sie eine URL wie:
     ```
     https://fdz-gesundheit-workspace.netlify.app
     ```
   - Diese ist Ihre **öffentliche Next.js-Domain**

---

## Option 3: Eigenes Hosting (VPS/Server) 🖥️

### Voraussetzungen:
- Server mit Node.js installiert
- Domain konfiguriert

### Schritte:

1. **Projekt auf Server kopieren:**
   ```bash
   scp -r . user@ihr-server.de:/var/www/fdz-workspace
   ```

2. **Auf Server:**
   ```bash
   npm install
   npm run build
   npm start
   ```

3. **Ihre Domain:**
   - Wenn Sie eine Domain konfiguriert haben:
     ```
     https://workspace.ihre-domain.de
     ```
   - Oder Server-IP:
     ```
     http://ihre-server-ip:3000
     ```

---

## Option 4: GitHub Pages (Eingeschränkt) ⚠️

**Hinweis:** Next.js mit GitHub Pages ist kompliziert, da GitHub Pages nur statische Sites unterstützt.

---

## Schnellcheck: Ist Ihre App bereits deployed?

### Prüfen Sie:

1. **Vercel:**
   - Gehen Sie zu: https://vercel.com/dashboard
   - Schauen Sie, ob ein Projekt existiert

2. **Netlify:**
   - Gehen Sie zu: https://app.netlify.com
   - Schauen Sie in Ihre Sites

3. **Eigener Server:**
   - Prüfen Sie, ob ein Server läuft
   - Prüfen Sie Ihre Domain/IP

---

## Nach dem Deployment: URL für Joomla verwenden

### In Joomla:

1. **Custom HTML Modul:**
   - Öffnen Sie: `joomla-integration/iframe-module.html`
   - Ersetzen Sie: `https://ihre-nextjs-domain.de`
   - Mit Ihrer tatsächlichen URL (z.B. `https://fdz-gesundheit-workspace.vercel.app`)

2. **Custom Joomla-Modul:**
   - In Modul-Konfiguration: **Workspace URL** eintragen

---

## Empfehlung

### Für schnelles Setup: **Vercel**

```bash
# 1. Vercel installieren
npm install -g vercel

# 2. Deployen
vercel

# 3. URL notieren (wird nach Deployment angezeigt)
# Beispiel: https://fdz-gesundheit-workspace.vercel.app

# 4. In Joomla verwenden
```

---

## Troubleshooting

### Problem: "Command not found: vercel"
- **Lösung:** `npm install -g vercel` ausführen

### Problem: Deployment schlägt fehl
- **Lösung:** Prüfen Sie, ob `npm run build` lokal funktioniert

### Problem: Domain funktioniert nicht in Joomla-Iframe
- **Lösung:** Prüfen Sie die CORS-Einstellungen in `next.config.js`

---

## Nächste Schritte

1. ✅ Wählen Sie eine Deployment-Option
2. ✅ Deployen Sie Ihre Next.js-App
3. ✅ Notieren Sie sich die öffentliche URL
4. ✅ Verwenden Sie diese URL in Joomla

---

## Hilfe

Bei Fragen:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Oder kontaktieren Sie das Entwicklungsteam


