'use client'

import { ComputerDesktopIcon, ServerIcon, ShieldCheckIcon, GlobeAltIcon, PlayIcon, CogIcon, DocumentTextIcon, ChartBarIcon, BeakerIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  // JupyterHub-URL
  const jupyterHubUrl = 'http://localhost:8000'

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-fdz-500 to-health-500 rounded-xl flex items-center justify-center shadow-lg">
                <ServerIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">FDZ-Gesundheit</span>
                <span className="block text-sm text-gray-600">Workspace für Gesundheitsdaten</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.open(jupyterHubUrl, '_blank')}
                className="btn-primary flex items-center space-x-2 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <PlayIcon className="w-5 h-5" />
                <span>Workspace öffnen</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <BeakerIcon className="w-4 h-4 mr-2" />
              Forschungsdatenzentrum für Gesundheitsdaten
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="text-gradient bg-gradient-to-r from-fdz-500 via-health-500 to-blue-600 bg-clip-text text-transparent">
                Gesundheitsdaten
              </span>
              <br />
              <span className="text-gray-700">mit Jupyter Notebooks</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Analysieren Sie öffentliche Gesundheitsdaten mit professionellen Jupyter Notebooks. 
              Der FDZ-Gesundheit Workspace bietet Ihnen alle Tools für datengetriebene Forschung.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => window.open(jupyterHubUrl, '_blank')}
                className="btn-primary text-xl px-10 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3"
              >
                <PlayIcon className="w-6 h-6" />
                <span>Jetzt starten</span>
              </button>
              
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Port 8000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Docker</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Bereit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-fdz-100 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-health-100 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse animation-delay-4000"></div>
      </section>

      {/* FDZ Workspace Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ihr <span className="text-gradient bg-gradient-to-r from-fdz-500 to-health-500 bg-clip-text text-transparent">FDZ Workspace</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professioneller JupyterHub mit allen Tools für die Gesundheitsdatenanalyse
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <DocumentTextIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Öffentliche Gesundheitsdaten</h3>
              <p className="text-gray-600 mb-6">
                Zugriff auf öffentlich verfügbare Gesundheitsdatensätze für Ihre Forschung
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Epidemiologische Daten</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Krankenhausstatistiken</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Bevölkerungsdaten</span>
                </li>
              </ul>
            </div>
            
            <div className="group bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Jupyter Notebooks</h3>
              <p className="text-gray-600 mb-6">
                Professionelle Analyseumgebung mit allen Data Science Bibliotheken
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>pandas, numpy, scikit-learn</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>matplotlib, seaborn, plotly</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  <span>R, Julia, SQL Support</span>
                </li>
              </ul>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl border border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ServerIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">DockerSpawner</h3>
              <p className="text-gray-600 mb-6">
                Isolierte Arbeitsbereiche für jeden Nutzer mit persistenter Datenspeicherung
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Eigener Container pro Nutzer</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Daten bleiben gespeichert</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <span>Sichere Isolierung</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace Access */}
      <section className="py-24 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              🚀 <span className="text-gradient bg-gradient-to-r from-fdz-500 to-health-500 bg-clip-text text-transparent">Workspace starten</span>
            </h2>
            <p className="text-xl text-gray-600">
              Ihr lokaler JupyterHub ist bereits konfiguriert und wartet auf Sie
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                So einfach geht's:
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-fdz-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Terminal öffnen</h4>
                    <p className="text-gray-600">Navigieren Sie zum JupyterHub-Ordner</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-fdz-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Docker starten</h4>
                    <p className="text-gray-600">Führen Sie den Befehl aus</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-fdz-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Workspace öffnen</h4>
                    <p className="text-gray-600">Gehen Sie zu localhost:8000</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button 
                  onClick={() => window.open(jupyterHubUrl, '_blank')}
                  className="btn-primary text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <PlayIcon className="w-5 h-5 mr-2 inline" />
                  Workspace öffnen
                </button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <div className="bg-gray-900 rounded-2xl p-6 mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-green-400 font-mono text-sm space-y-1">
                  <div>$ cd jupyter-hub/Jupyterhub-mit-DockerSpawner</div>
                  <div>$ docker-compose up -d</div>
                  <div className="text-gray-500">Creating jupyterhub ... done</div>
                  <div className="text-gray-500">Creating jupyterhub-user-admin ... done</div>
                  <div className="text-green-400">✅ JupyterHub läuft auf Port 8000</div>
                  <div className="text-blue-400">🌐 http://localhost:8000</div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-3">
                  Ihr FDZ-Gesundheit Workspace läuft bereits
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-fdz-100 text-fdz-800">
                    FDZ-Gesundheit
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Port 8000
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Bereit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gesundheitsdaten Analyse */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              📊 <span className="text-gradient bg-gradient-to-r from-fdz-500 to-health-500 bg-clip-text text-transparent">Gesundheitsdaten analysieren</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nutzen Sie öffentliche Gesundheitsdaten für Ihre Forschung und erstellen Sie aussagekräftige Analysen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Was können Sie analysieren?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-fdz-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Epidemiologische Studien</h4>
                    <p className="text-gray-600">Krankheitsverläufe, Ausbreitungsmuster, Risikofaktoren</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-fdz-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Gesundheitsökonomie</h4>
                    <p className="text-gray-600">Kostenanalysen, Effizienzstudien, Ressourcenplanung</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-fdz-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Bevölkerungsgesundheit</h4>
                    <p className="text-gray-600">Demografische Trends, Gesundheitsdeterminanten</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-fdz-500 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Qualitätssicherung</h4>
                    <p className="text-gray-600">Behandlungsqualität, Patientensicherheit</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-fdz-50 to-health-50 p-8 rounded-3xl border border-fdz-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Verfügbare Datentypen:</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">📈 Zeitreihen</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">🏥 Krankenhausdaten</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">👥 Bevölkerungsdaten</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">💊 Arzneimitteldaten</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">🔬 Labordaten</span>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-200">
                  <span className="text-sm font-medium text-gray-700">📊 Umfragedaten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-fdz-500 to-health-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Bereit für Ihre Gesundheitsdatenanalyse?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Starten Sie jetzt mit dem FDZ-Gesundheit Workspace und analysieren Sie öffentliche Gesundheitsdaten
          </p>
          <button 
            onClick={() => window.open(jupyterHubUrl, '_blank')}
            className="bg-white text-fdz-600 hover:bg-gray-100 text-xl px-10 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            <PlayIcon className="w-6 h-6 mr-2 inline" />
            Workspace starten
          </button>
          <p className="text-blue-200 text-sm mt-4">
            Läuft auf http://localhost:8000
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-fdz-500 to-health-500 rounded-lg flex items-center justify-center">
              <ServerIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">FDZ-Gesundheit</span>
          </div>
          <p className="text-gray-400 mb-4">
            Forschungsdatenzentrum für Gesundheitsdaten - Workspace für Datenanalyse
          </p>
          <p className="text-gray-500 text-sm">
            &copy; 2024 FDZ-Gesundheit. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  )
}
