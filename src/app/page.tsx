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
  CloudUpload,
  Menu,
  MessageSquareText,
  SearchCheck,
  CloudDownload,
} from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg ">
              <Image
                src="/leialogoorange.png"
                alt="LEIA Logo"
                width={32}
                height={32}
                className="h-10 w-10"
              />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              leia
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <Link
              href="#features"
              className="hover:text-orange-400 transition-colors"
            >
              Como funciona
            </Link>
            <Link
              href="#security"
              className="hover:text-orange-400 transition-colors"
            >
              Seguridad
            </Link>
            <Link
              href="#pricing"
              className="hover:text-orange-400 transition-colors"
            >
              Precios
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#"
              className="hidden md:block text-sm font-medium text-slate-400 dark:text-slate-300 hover:text-orange-400"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="#"
              className="bg-linear-to-br from-yellow-600 via-orange-400 to-orange-500 dark:shadow-lg dark:shadow-orange-900/25 hover:from-yellow-700 hover:via-orange-500 hover:to-orange-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-orange-600/20"
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
            Innovacion. Certeza. Velocidad. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-br from-yellow-600 via-orange-400 to-orange-500">
              Redactá escritos laborales con IA en minutos.
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Redactá escritos laborales en minutos. Nuestra IA procesa el
            expediente y genera el escrito final según tus instrucciones,
            liberando a tu equipo para decisiones estratégicas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-linear-to-br from-yellow-600 via-orange-400 to-orange-500 hover:from-yellow-700 hover:via-orange-500 hover:to-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-orange-600/20">
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
                  <p className="mt-2 text-orange-600 dark:text-orange-300 font-bold">
                    TCL Nro: 8392102
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-xs font-bold text-orange-600 dark:text-orange-300 uppercase tracking-wider">
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-300 mb-4">
              Diseñado para el Litigio Moderno
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Redactamos escritos jurídicos precisos, eficientes y listos para
              presentar. Transformamos horas de trabajo legal en minutos, sin
              perder calidad ni rigor técnico. Optimizá tu tiempo, aumentá la
              productividad de tu estudio y trabajá con la seguridad de que cada
              documento está elaborado con criterio profesional y enfoque
              jurídico acertado.
            </p>
          </div>
          <span className="text-transparent bg-clip-text bg-linear-to-br from-yellow-600 via-orange-400 to-orange-500 text-5xl font-extrabold ">
            Como Funciona?
          </span>
          <div className=" mt-8 grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-yellow-200 transition-colors group">
              <div className="bg-linear-to-br from-yellow-100 via-orange-200 to-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-linear-to-br group-hover:from-yellow-600 group-hover:via-orange-500 group-hover:to-orange-600 transition-colors">
                <CloudUpload className="h-7 w-7 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                Subis el Expediente
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {" "}
                Subis el expediente al sistema y luego le indicas tus
                preferencias e instrucciones.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-yellow-200 transition-colors group">
              <div className="bg-linear-to-br from-yellow-100 via-orange-200 to-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-linear-to-br group-hover:from-yellow-600 group-hover:via-orange-500 group-hover:to-orange-600 transition-colors">
                <SearchCheck className="h-7 w-7 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                Revisas y Aprobas
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Generamos un expediente borrador para la revision del abogado.
                Editar es facil e intuitivo.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-yellow-200 transition-colors group">
              <div className="bg-linear-to-br from-yellow-100 via-orange-200 to-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-linear-to-br group-hover:from-yellow-600 group-hover:via-orange-500 group-hover:to-orange-600 transition-colors">
                <CloudDownload className="h-7 w-7 text-orange-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                Descargas el Documento
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Tenemos una gran variedad de templates para formatear los
                expedientes. Tambien podes editar tu propio template.
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
                Con LEIA tenes
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
      <section id="security" className="py-20 bg-gray-400">
        <div className="container mx-auto px-4 text-center">
          <ShieldCheck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
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
            <span className="text-xl font-bold text-black">
              ESTUDIO PÉREZ & ASOC.
            </span>
            <span className="text-xl font-bold text-black">
              GÓMEZ LEGAL TECH
            </span>
            <span className="text-xl font-bold text-black">
              GRUPO JURÍDICO SUR
            </span>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="bg-linear-to-br from-yellow-600 via-orange-400 to-orange-500 rounded-3xl p-12 md:p-20 text-center md:text-left relative overflow-hidden">
            {/* Abstract decorative circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-linear-to-br from-yellow-600 via-orange-400 to-orange-600 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-linear-to-br from-orange-600 via-yellow-500 to-yellow-600 rounded-full opacity-50 blur-3xl"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  ¿Listo para modernizar su práctica legal?
                </h2>
                <p className="text-orange-100 text-lg mb-8">
                  Únase a más de 500 abogados en Argentina que ya usan LEIA para
                  optimiziar su tiempo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white dark:bg-slate-800 text-orange-600 dark:text-orange-300 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 dark:hover:bg-slate-700 transition-colors shadow-lg">
                    Empezar Prueba Gratis
                  </button>
                  <button className="bg-linear-to-br from-orange-800 via-yellow-700 to-yellow-800 text-white border border-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-orange-900 transition-colors">
                    Agendar Demo
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                {/* Illustration placeholder */}
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl text-white font-mono text-sm">
                  <p>{`> Analizando jurisprudencia...`}</p>
                  <p className="text-slate-600">{`> Fallo plenario "Tulosai" detectado.`}</p>
                  <p>{`> Calculando indemnización tope...`}</p>
                  <p className="text-slate-600">{`> Liquidación lista. Generando PDF...`}</p>
                  <div className="mt-4 h-2 w-full bg-linear-to-br from-yellow-900/50 via-orange-700/50 to-orange-900/50 rounded-full overflow-hidden">
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
                <div className="p-1 rounded-md bg-linear-to-br from-yellow-600 via-orange-400 to-orange-500">
                  <Scale className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  LEIA
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
                  <a href="#" className="hover:text-orange-600">
                    Calculadora LCT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Análisis de Telegramas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Jurisprudencia
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Precios
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Blog de Novedades
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Guía de Multas Ley 24.013
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Actas CNAT
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-600">
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
