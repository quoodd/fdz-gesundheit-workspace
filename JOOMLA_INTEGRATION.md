# Joomla CMS Integration Guide für FDZ-Gesundheit Workspace

## Übersicht
Dieser Guide erklärt verschiedene Möglichkeiten, die Next.js-Anwendung in Joomla CMS zu integrieren.

---

## Option 1: Iframe-Integration (Empfohlen für schnelle Integration)

### Vorteile:
- ✅ Einfachste Implementierung
- ✅ Keine Änderungen an der Next.js-App nötig
- ✅ Vollständige Isolation
- ✅ Einfache Wartung

### Nachteile:
- ⚠️ SEO nicht optimal
- ⚠️ Mobile Responsiveness kann problematisch sein
- ⚠️ Keine direkte Datenkommunikation

### Implementierung in Joomla:

1. **Next.js-App hosten** (separat auf einem Server/Subdomain)
   ```bash
   npm run build
   npm start
   # Oder auf Vercel/Netlify deployen
   ```

2. **In Joomla einbetten:**
   - Gehen Sie zu: **Module → Neues Modul → Custom HTML**
   - Fügen Sie folgenden Code ein:
   ```html
   <div class="fdz-workspace-container" style="width: 100%; height: 100vh; border: none;">
     <iframe 
       src="https://ihre-nextjs-domain.de" 
       width="100%" 
       height="100%" 
       frameborder="0"
       scrolling="auto"
       style="min-height: 800px;">
     </iframe>
   </div>
   ```

3. **Responsive Verbesserung:**
   ```html
   <style>
     .fdz-workspace-container {
       position: relative;
       width: 100%;
       padding-bottom: 75%; /* 4:3 Aspect Ratio */
       height: 0;
       overflow: hidden;
     }
     
     .fdz-workspace-container iframe {
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       border: none;
     }
     
     @media (max-width: 768px) {
       .fdz-workspace-container {
         padding-bottom: 150%; /* Höheres Verhältnis für Mobile */
       }
     }
   </style>
   
   <div class="fdz-workspace-container">
     <iframe 
       src="https://ihre-nextjs-domain.de" 
       allowfullscreen>
     </iframe>
   </div>
   ```

---

## Option 2: Joomla Custom Module mit Next.js Widget

### Vorteile:
- ✅ Bessere SEO
- ✅ Bessere Integration in Joomla-Design
- ✅ Direktere Nutzererfahrung

### Nachteile:
- ⚠️ Komplexere Implementierung
- ⚠️ CORS-Konfiguration nötig
- ⚠️ API-Endpunkte erforderlich

### Implementierung:

1. **Next.js API-Route erstellen** (`app/api/content/route.ts`):
   ```typescript
   import { NextResponse } from 'next/server'
   
   export async function GET() {
     return NextResponse.json({
       html: '<div>Workspace Content</div>',
       // Oder rendern Sie React-Komponenten zu HTML
     })
   }
   ```

2. **Joomla PHP-Modul erstellen** (`modules/mod_fdz_workspace/mod_fdz_workspace.php`):
   ```php
   <?php
   defined('_JEXEC') or die;
   
   $moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));
   $apiUrl = $params->get('api_url', 'https://ihre-nextjs-domain.de/api/content');
   
   // Content von Next.js API abrufen
   $ch = curl_init($apiUrl);
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   $response = curl_exec($ch);
   curl_close($ch);
   
   $data = json_decode($response, true);
   ?>
   
   <div class="fdz-workspace-module <?php echo $moduleclass_sfx; ?>">
     <?php echo $data['html']; ?>
   </div>
   ```

---

## Option 3: Headless-Ansatz (Joomla als Backend, Next.js als Frontend)

### Vorteile:
- ✅ Beste Performance
- ✅ Moderne Architektur
- ✅ Vollständige Kontrolle über Frontend

### Nachteile:
- ⚠️ Komplexeste Lösung
- ⚠️ Separate Hosting-Infrastruktur
- ⚠️ Zwei Systeme zu warten

### Implementierung:

1. **Joomla REST API aktivieren:**
   - Installieren Sie Joomla REST API Plugin
   - Erstellen Sie API-Endpunkte für Inhalte

2. **Next.js API-Integration:**
   ```typescript
   // app/api/joomla/route.ts
   export async function GET() {
     const response = await fetch('https://ihre-joomla-seite.de/api/content');
     const data = await response.json();
     return NextResponse.json(data);
   }
   ```

---

## Option 4: Joomla-Plugin für Next.js (Custom Development)

### Erstellen Sie ein Joomla-Plugin, das Next.js-Komponenten einbindet:

1. **Plugin-Struktur:**
   ```
   plugins/content/fdzworkspace/
   ├── fdzworkspace.php
   ├── fdzworkspace.xml
   └── assets/
       └── script.js
   ```

2. **Plugin-Code** (`fdzworkspace.php`):
   ```php
   <?php
   defined('_JEXEC') or die;
   
   class PlgContentFdzWorkspace extends JPlugin {
       public function onContentPrepare($context, &$article, &$params, $page = 0) {
           // Ersetze {fdzworkspace} Platzhalter
           if (strpos($article->text, '{fdzworkspace}') !== false) {
               $workspaceUrl = $this->params->get('workspace_url');
               $iframe = '<iframe src="' . $workspaceUrl . '" width="100%" height="800px"></iframe>';
               $article->text = str_replace('{fdzworkspace}', $iframe, $article->text);
           }
       }
   }
   ```

3. **Verwendung in Joomla-Artikeln:**
   ```
   {fdzworkspace}
   ```

---

## Option 5: Subdomain-Integration (Empfohlen für Produktion)

### Setup:
1. **Next.js auf Subdomain hosten:**
   - `workspace.fdz-gesundheit.de` → Next.js App
   - `www.fdz-gesundheit.de` → Joomla CMS

2. **Joomla-Menüpunkt erstellen:**
   - Neuen Menüpunkt: "Workspace"
   - Link: `https://workspace.fdz-gesundheit.de`
   - Öffnet in neuem Fenster oder als Redirect

3. **Nahtlose Navigation:**
   - Styling zwischen beiden Systemen angleichen
   - Gemeinsame Header/Footer implementieren

---

## Empfohlene Lösung für dieses Projekt

### **Option 1 (Iframe) oder Option 5 (Subdomain)**

**Begründung:**
- Die Next.js-App ist bereits vollständig funktionsfähig
- Minimaler Aufwand für Integration
- Einfache Wartung
- Gute Performance

### Schnellstart mit Iframe:

1. **Next.js-App deployen** (Vercel, Netlify, oder eigener Server)
2. **In Joomla Custom HTML-Modul einbetten:**
   ```html
   <iframe 
     src="https://ihre-deployed-nextjs-app.vercel.app" 
     width="100%" 
     height="1200px" 
     style="border: none; min-height: 800px;">
   </iframe>
   ```
3. **Modul zu gewünschter Position hinzufügen**

---

## Nächste Schritte

1. **Entscheiden Sie sich für eine Option**
2. **Next.js-App deployen** (falls noch nicht geschehen)
3. **Joomla-Integration implementieren**
4. **Testen und anpassen**

---

## Support

Bei Fragen zur Integration kontaktieren Sie bitte das Entwicklungsteam.


