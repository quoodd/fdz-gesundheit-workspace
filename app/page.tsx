'use client'

import { ServerIcon, PlayIcon, DocumentTextIcon, ChartBarIcon, BeakerIcon, UserGroupIcon, CogIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { jupyterHubUrl } from '../config'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Beim ersten Laden den gespeicherten Modus oder System-Präferenz verwenden
    const savedMode = localStorage.getItem('darkMode')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedMode !== null) {
      setDarkMode(savedMode === 'true')
    } else {
      setDarkMode(prefersDark)
    }
  }, [])

  useEffect(() => {
    // Modus in localStorage speichern
    localStorage.setItem('darkMode', darkMode.toString())
    
    // CSS-Klassen für den Body setzen
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 text-slate-900'
    }`}>
      {/* Animated Background Dots */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
          darkMode ? 'opacity-30' : 'opacity-20'
        }`}>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full transition-all duration-1000 ${
                darkMode 
                  ? 'bg-blue-400 shadow-lg shadow-blue-400/50' 
                  : 'bg-blue-400 shadow-lg shadow-blue-400/40'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <header className={`backdrop-blur-md border-b sticky top-0 z-50 shadow-lg transition-all duration-500 ${
        darkMode 
          ? 'bg-slate-900/80 border-slate-700/50' 
          : 'bg-white/90 border-slate-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 overflow-hidden">
                <Image 
                  src="/FDZ_logo.png" 
                  alt="FDZ-Gesundheit Logo" 
                  width={48} 
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className={`text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent`}>
                  FDZ-Gesundheit
                </span>
                <span className={`block text-sm font-medium ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>Universeller Studienpopulation-Workspace</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                  darkMode
                    ? 'bg-slate-700 hover:bg-slate-600 text-yellow-400 shadow-lg shadow-yellow-400/25'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600 shadow-lg hover:shadow-xl'
                }`}
                title={darkMode ? 'Zum hellen Modus wechseln' : 'Zum dunklen Modus wechseln'}
              >
                {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
              
              <button 
                onClick={() => window.open(jupyterHubUrl, '_blank')}
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 hover:scale-105"
              >
                <PlayIcon className="w-5 h-5" />
                <span>Workspace öffnen</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-8 border backdrop-blur-sm transition-all duration-500 ${
              darkMode
                ? 'bg-slate-800/50 text-blue-300 border-blue-500/30 shadow-lg shadow-blue-500/25'
                : 'bg-white/70 text-blue-600 border-blue-300/50 shadow-lg shadow-blue-500/20'
            }`}>
              <BeakerIcon className="w-4 h-4 mr-2" />
              Universelle Studienpopulation-Erstellung für Gesundheitsforschung
            </div>
            
            <h1 className={`text-6xl md:text-7xl font-bold mb-8 leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Studienpopulationen
              </span>
              <br />
              <span className={darkMode ? 'text-slate-200' : 'text-slate-700'}>
                für jede Forschungsfrage
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Erstellen Sie maßgeschneiderte Studienpopulationen für beliebige medizinische Studien 
              mit professionellen Jupyter Notebooks und vollständig konfigurierbaren Aufgreifkriterien.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => window.open(jupyterHubUrl, '_blank')}
                className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white text-xl font-semibold px-12 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3 hover:scale-105 transform"
              >
                <PlayIcon className="w-6 h-6" />
                <span>Jetzt starten</span>
              </button>
              
              <div className={`flex items-center space-x-6 ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Flexibel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Konfigurierbar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Universell</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studienpopulation Features */}
      <section className={`py-24 relative`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Ihr <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Universeller Studienpopulation-Workspace
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto font-light ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Professionelle Erstellung von Studienpopulationen mit dem bewährten SP-INT-OUT Rollenmodell
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`group p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
              darkMode
                ? 'bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/70'
                : 'bg-white/70 border-slate-200/50 hover:border-blue-400/50 hover:bg-white/90 shadow-lg hover:shadow-xl'
            }`}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                <UserGroupIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>Studienpopulation (SP)</h3>
              <p className={`mb-6 leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Erstellen Sie Basis-Studienpopulationen aus Public Use Files
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Beliebige ICD-Codes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Konfigurierbare Stichproben</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Flexible Zeiträume</span>
                </li>
              </ul>
            </div>
            
            <div className={`group p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
              darkMode
                ? 'bg-slate-800/50 border-slate-700/50 hover:border-green-500/50 hover:bg-slate-800/70'
                : 'bg-white/70 border-slate-200/50 hover:border-green-400/50 hover:bg-white/90 shadow-lg hover:shadow-xl'
            }`}>
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/25">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>Intervention (INT)</h3>
              <p className={`mb-6 leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Definieren Sie beliebige Interventionen für Ihre Studienpopulation
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Arzneimittelverordnungen (PZN)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>OPS-Prozeduren</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Ambulante Leistungen (GONR)</span>
                </li>
              </ul>
            </div>
            
            <div className={`group p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
              darkMode
                ? 'bg-slate-800/50 border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800/70'
                : 'bg-white/70 border-slate-200/50 hover:border-indigo-400/50 hover:bg-white/90 shadow-lg hover:shadow-xl'
            }`}>
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-indigo-500/25">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>Outcome (OUT)</h3>
              <p className={`mb-6 leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Messen Sie beliebige Outcomes und Endpunkte Ihrer Studie
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Nachfolgediagnosen</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Behandlungsverläufe</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Langzeit-Outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flexibilität und Konfigurierbarkeit */}
      <section className={`py-24 relative ${
        darkMode ? '' : 'bg-gradient-to-br from-slate-50/50 to-blue-50/50'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Vollständig konfigurierbar
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto font-light ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Passen Sie jeden Aspekt Ihrer Studienpopulation an Ihre spezifischen Forschungsfragen an
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={`text-3xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Was können Sie anpassen?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mt-1 shadow-lg shadow-blue-500/25">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-lg ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>Studienname & Version</h4>
                    <p className={`text-lg ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>Beliebige Bezeichnungen für Ihre Studie</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mt-1 shadow-lg shadow-green-500/25">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-lg ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>Aufgreifkriterien</h4>
                    <p className={`text-lg ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>Eigene ICD-, PZN-, OPS-, GONR-Codes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mt-1 shadow-lg shadow-indigo-500/25">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-lg ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>Studienzeiträume</h4>
                    <p className={`text-lg ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>Beliebige Start- und Enddaten</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mt-1 shadow-lg shadow-purple-500/25">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-lg ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>Patientenzahlen</h4>
                    <p className={`text-lg ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>Konfigurierbare Stichprobengrößen</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mt-1 shadow-lg shadow-orange-500/25">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className={`font-semibold text-lg ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>Rollenverteilung</h4>
                    <p className={`text-lg ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>SP, INT, OUT Anteile pro Datentyp</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`p-10 rounded-3xl border backdrop-blur-sm transition-all duration-500 ${
              darkMode
                ? 'bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/50 shadow-2xl'
                : 'bg-gradient-to-br from-white/70 to-slate-50/70 border-slate-200/50 shadow-2xl shadow-slate-200/20'
            }`}>
              <h4 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>Verfügbare Datentypen:</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'KHDIAG (ICD)', 'AMBDIAG (ICD)', 'REZ (PZN)', 
                  'OPS (Prozeduren)', 'KHPROZ (Stationär)', 'AMBLEIST (GONR)'
                ].map((type, index) => (
                  <div key={index} className={`p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-slate-800/50 border-slate-600/50 hover:border-blue-500/50'
                      : 'bg-white/70 border-slate-200/50 hover:border-blue-400/50 hover:bg-white/90'
                  }`}>
                    <span className={`text-sm font-medium ${
                      darkMode ? 'text-slate-200' : 'text-slate-700'
                    }`}>{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anwendungsbeispiele */}
      <section className={`py-24 relative ${
        darkMode ? '' : 'bg-gradient-to-br from-blue-50/30 to-indigo-50/30'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Anwendungsbeispiele
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto font-light ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Von Endometriose bis Adipositas - Ihr Workspace für jede medizinische Studie
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`p-10 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
              darkMode
                ? 'bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/50 hover:border-green-500/50'
                : 'bg-gradient-to-br from-white/70 to-green-50/70 border-slate-200/50 hover:border-green-400/50 shadow-lg hover:shadow-xl'
            }`}>
              <h4 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>Beispiel: Endometriose-Studie</h4>
              <div className="space-y-4">
                {[
                  'SP: Endometriose-ICD-Codes',
                  'INT: Gestagen-Verordnungen',
                  'OUT: Entbindungen (OPS)'
                ].map((item, index) => (
                  <div key={index} className={`p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-slate-800/50 border-slate-600/50 hover:border-blue-500/50'
                      : 'bg-white/70 border-slate-200/50 hover:border-blue-400/50 hover:bg-white/90'
                  }`}>
                    <span className={`text-sm font-medium ${
                      darkMode ? 'text-slate-200' : 'text-slate-700'
                    }`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`p-10 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
              darkMode
                ? 'bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/50 hover:border-purple-500/50'
                : 'bg-gradient-to-br from-white/70 to-purple-50/70 border-slate-200/50 hover:border-purple-400/50 shadow-lg hover:shadow-xl'
            }`}>
              <h4 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>Beispiel: Adipositas-Studie</h4>
              <div className="space-y-4">
                {[
                  'SP: Adipositas-ICD-Codes',
                  'INT: Bariatrische OPS',
                  'OUT: Psychotherapie'
                ].map((item, index) => (
                  <div key={index} className={`p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-slate-800/50 border-slate-600/50 hover:border-blue-500/50'
                      : 'bg-white/70 border-slate-200/50 hover:border-blue-400/50 hover:bg-white/90'
                  }`}>
                    <span className={`text-sm font-medium ${
                      darkMode ? 'text-slate-200' : 'text-slate-700'
                    }`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className={`text-xl mb-8 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Und viele weitere Studien möglich: Diabetes, Herz-Kreislauf-Erkrankungen, Krebs, 
              psychische Erkrankungen, neurologische Störungen und vieles mehr.
            </p>
            <div className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 ${
              darkMode
                ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-2xl shadow-blue-500/25'
                : 'bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 shadow-2xl shadow-blue-200/50'
            }`}>
              <BeakerIcon className="w-5 h-5 mr-3" />
              Ihre Studie - Ihre Regeln
            </div>
          </div>
        </div>
      </section>

      {/* Technische Features */}
      <section className={`py-24 relative ${
        darkMode ? '' : 'bg-gradient-to-br from-slate-50/50 to-blue-50/50'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Technische Features
              </span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto font-light ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Professionelle Umgebung für die Studienpopulation-Erstellung
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className={`text-3xl font-bold mb-8 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Was macht den Workspace so flexibel?
              </h3>
              <div className="space-y-6">
                {[
                  { title: 'Konfigurationsdateien', desc: 'Python-basierte Konfiguration für maximale Flexibilität', color: 'blue' },
                  { title: 'Modulare Struktur', desc: 'SP, INT, OUT Funktionen können einzeln aktiviert werden', color: 'green' },
                  { title: 'Jupyter Notebooks', desc: 'Interaktive Entwicklung und Anpassung Ihrer Studien', color: 'indigo' },
                  { title: 'Docker-Integration', desc: 'Isolierte Arbeitsbereiche mit persistenter Datenspeicherung', color: 'purple' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center mt-1 shadow-lg shadow-${item.color}-500/25`}>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className={`font-semibold text-lg ${
                        darkMode ? 'text-white' : 'text-slate-900'
                      }`}>{item.title}</h4>
                      <p className={`text-lg ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`p-10 rounded-3xl border backdrop-blur-sm transition-all duration-500 ${
              darkMode
                ? 'bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/50 shadow-2xl'
                : 'bg-gradient-to-br from-white/70 to-indigo-50/70 border-slate-200/50 shadow-2xl shadow-slate-200/20'
            }`}>
              <h4 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>Workflow:</h4>
              <div className="space-y-4">
                {[
                  '1. Konfiguration erstellen',
                  '2. Aufgreifkriterien definieren',
                  '3. Studienpopulation generieren',
                  '4. Ergebnisse exportieren'
                ].map((step, index) => (
                  <div key={index} className={`p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-slate-800/50 border-slate-600/50 hover:border-blue-500/50'
                      : 'bg-white/70 border-slate-200/50 hover:border-blue-400/50 hover:bg-white/90'
                  }`}>
                    <span className={`text-sm font-medium ${
                      darkMode ? 'text-slate-200' : 'text-slate-700'
                    }`}>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-blue-500 to-green-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">
            Bereit für Ihre Studienpopulation?
          </h2>
          <p className="text-xl text-blue-50 mb-8 font-light">
            Starten Sie jetzt mit dem FDZ-Gesundheit Workspace und erstellen Sie maßgeschneiderte Studienpopulationen
          </p>
          <button 
            onClick={() => window.open(jupyterHubUrl, '_blank')}
            className="bg-white text-blue-600 hover:bg-slate-100 text-xl font-semibold px-12 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <PlayIcon className="w-6 h-6" />
            <span>Workspace starten</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-16 relative ${
        darkMode ? '' : 'bg-gradient-to-br from-slate-100/50 to-blue-100/50'
      }`}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 overflow-hidden">
              <Image 
                src="/FDZ_logo.png" 
                alt="FDZ-Gesundheit Logo" 
                width={48} 
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              FDZ-Gesundheit
            </span>
          </div>
          <p className={`mb-6 text-lg font-light ${
            darkMode ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Forschungsdatenzentrum für Gesundheitsdaten - Universeller Studienpopulation-Workspace
          </p>
          <p className={`text-sm ${
            darkMode ? 'text-slate-500' : 'text-slate-400'
          }`}>
            &copy; 2024 FDZ-Gesundheit. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  )
}
