import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Scale,
  FileText,
  Calculator,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Menu,
  MessageSquareText,
} from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-linear-to-br from-blue-700 via-purple-500 to-purple-600">
              <Image
                src="/logo.png"
                alt="LEIA Logo"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              LEIA
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <Link
              href="#features"
              className="hover:text-purple-600 transition-colors"
            >
              Funcionalidades
            </Link>
            <Link
              href="#security"
              className="hover:text-purple-600 transition-colors"
            >
              Seguridad
            </Link>
            <Link
              href="#pricing"
              className="hover:text-purple-600 transition-colors"
            >
              Precios
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#"
              className="hidden md:block text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="#"
              className="bg-linear-to-br from-blue-700 via-purple-500 to-purple-600 dark:shadow-lg dark:shadow-purple-900/25 hover:from-blue-800 hover:via-purple-600 hover:to-purple-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-purple-600/20"
            >
              Prueba Gratis
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-linear-to-br from-blue-50 via-purple-100 to-purple-50 border border-blue-100 text-blue-700 dark:text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-linear-to-br from-blue-400 via-purple-300 to-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-linear-to-br from-blue-500 via-purple-400 to-purple-500"></span>
            </span>
            Actualizado con las últimas Actas de la CNAT
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
            La Inteligencia Artificial para el <br />
            <span className="text-transparent bg-clip-text bg-linear-to-br from-blue-700 via-purple-500 to-purple-600">
              Derecho Laboral Argentino
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Automatice liquidaciones del Art. 245, analice intercambio
            telegráfico y redacte contestaciones de demanda en segundos.
            Entrenado específicamente con la Ley de Contrato de Trabajo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-linear-to-br from-blue-700 via-purple-500 to-purple-600 hover:from-blue-800 hover:via-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-purple-600/20">
              Comenzar Ahora <ArrowRight className="h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl text-lg font-bold transition-all">
              Ver Demo
            </button>
          </div>

          {/* Dashboard Preview Mockup */}
          <div className="mt-16 relative mx-auto max-w-5xl rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-2xl overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-700 border-b border-slate-200 dark:border-slate-700 px-4 py-3 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-amber-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
            <div className="p-8 grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Archivo Cargado
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 font-mono text-xs text-slate-600 dark:text-slate-300">
                  <p>
                    ...intimo plazo 48hs aclare situación laboral, bajo
                    apercibimiento de considerarme despedido...
                  </p>
                  <p className="mt-2 text-purple-600 dark:text-purple-300 font-bold">
                    TCL Nro: 8392102
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-xs font-bold text-purple-600 dark:text-purple-300 uppercase tracking-wider">
                  Análisis IA
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      Riesgo detectado:
                    </span>
                    <span className="text-sm font-bold text-red-600">
                      Despido Indirecto
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      Liquidación Estimada:
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      $ 4.250.000 ARS
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      Tasa Aplicable:
                    </span>
                    <span className="text-sm font-bold text-slate-900">
                      Acta CNAT 2764
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Diseñado para el Litigio Moderno
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Deje de perder horas en Excel o buscando jurisprudencia.
              Laboral.AI es su paralegal digital experto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 transition-colors group">
              <div className="bg-linear-to-br from-blue-100 via-purple-200 to-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-linear-to-br group-hover:from-blue-600 group-hover:via-purple-500 group-hover:to-purple-600 transition-colors">
                <FileText className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                Análisis de Telegramas
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Suba fotos de Cartas Documento. La IA extrae fechas, identifica
                intimaciones (Ley 24.013) y calcula plazos fatales
                automáticamente.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 transition-colors group">
              <div className="bg-linear-to-br from-blue-100 via-purple-200 to-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-linear-to-br group-hover:from-blue-600 group-hover:via-purple-500 group-hover:to-purple-600 transition-colors">
                <Calculator className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                Liquidaciones Automáticas
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Cálculos exactos de indemnizaciones por antigüedad (Art. 245),
                preaviso, SAC y vacaciones. Aplicación automática de multas y
                tasas de interés actualizadas.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 transition-colors group">
              <div className="bg-linear-to-br from-blue-100 via-purple-200 to-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-linear-to-br group-hover:from-blue-600 group-hover:via-purple-500 group-hover:to-purple-600 transition-colors">
                <MessageSquareText className="h-7 w-7 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                Redacción Jurídica
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Genere borradores de contestación de demanda, acuerdos para
                SECLO o telegramas de respuesta en segundos, citando
                jurisprudencia vigente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROBLEM / SOLUTION GRID --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                El problema del intercambio telegráfico manual
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-red-500/20 p-2 rounded h-fit">
                    <span className="text-red-400 font-bold">✕</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Errores de cálculo costosos
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Olvidar aplicar una multa de la Ley 25.323 o usar una tasa
                      de interés desactualizada puede costar millones a su
                      cliente.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-red-500/20 p-2 rounded h-fit">
                    <span className="text-red-400 font-bold">✕</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Pérdida de tiempo en redacción
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Redactar negaciones de hechos genéricas consume horas
                      valiosas que podría dedicar a la estrategia del caso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-xl font-bold mb-6 text-purple-300">
                Con Laboral.AI
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400 h-5 w-5" />
                  <span>Carga masiva de documentos PDF/JPG</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400 h-5 w-5" />
                  <span>
                    Detección automática de fechas de ingreso real vs.
                    registrada
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400 h-5 w-5" />
                  <span>Exportación a Word editable (.docx)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400 h-5 w-5" />
                  <span>Seguridad bancaria para datos confidenciales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST / SECURITY --- */}
      <section
        id="security"
        className="py-20 bg-linear-to-br from-blue-50 via-purple-100 to-purple-50"
      >
        <div className="container mx-auto px-4 text-center">
          <ShieldCheck className="h-12 w-12 text-purple-700 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Seguridad y Privacidad Primero
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
            Cumplimos estrictamente con la Ley 25.326 de Protección de Datos
            Personales. Sus casos no se utilizan para entrenar nuestros modelos
            públicos.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale">
            {/* Placeholder Logos for "Trust" */}
            <span className="text-xl font-bold text-slate-400">
              ESTUDIO PÉREZ & ASOC.
            </span>
            <span className="text-xl font-bold text-slate-400">
              GÓMEZ LEGAL TECH
            </span>
            <span className="text-xl font-bold text-slate-400">
              GRUPO JURÍDICO SUR
            </span>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="bg-linear-to-br from-blue-700 via-purple-500 to-purple-600 rounded-3xl p-12 md:p-20 text-center md:text-left relative overflow-hidden">
            {/* Abstract decorative circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-linear-to-br from-blue-600 via-purple-400 to-purple-600 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-linear-to-br from-purple-600 via-blue-500 to-blue-600 rounded-full opacity-50 blur-3xl"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  ¿Listo para modernizar su práctica legal?
                </h2>
                <p className="text-purple-100 text-lg mb-8">
                  Únase a más de 500 abogados en Argentina que ya usan
                  Laboral.AI para ganar casos más rápido.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white dark:bg-slate-800 text-purple-700 dark:text-purple-300 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 dark:hover:bg-slate-700 transition-colors shadow-lg">
                    Empezar Prueba Gratis
                  </button>
                  <button className="bg-linear-to-br from-purple-800 via-blue-700 to-blue-800 text-white border border-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-900 transition-colors">
                    Agendar Demo
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                {/* Illustration placeholder */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-white font-mono text-sm">
                  <p>{`> Analizando jurisprudencia...`}</p>
                  <p className="text-green-300">{`> Fallo plenario "Tulosai" detectado.`}</p>
                  <p>{`> Calculando indemnización tope...`}</p>
                  <p className="text-green-300">{`> Liquidación lista. Generando PDF...`}</p>
                  <div className="mt-4 h-2 w-full bg-linear-to-br from-blue-900/50 via-purple-700/50 to-purple-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1 rounded-md bg-linear-to-br from-blue-700 via-purple-500 to-purple-600">
                  <Scale className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Laboral.AI
                </span>
              </div>
              <p className="text-slate-500 text-sm">
                Inteligencia Artificial aplicada al Derecho del Trabajo en la
                República Argentina.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Calculadora LCT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Análisis de Telegramas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Jurisprudencia
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Precios
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Blog de Novedades
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Guía de Multas Ley 24.013
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Actas CNAT
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-600">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Laboral.AI. Hecho en Buenos Aires.
          </div>
        </div>
      </footer>
    </div>
  );
}
