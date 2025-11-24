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
              className="hover:text-blue-400 transition-colors"
            >
              Como funciona
            </Link>
            <Link
              href="#security"
              className="hover:text-blue-400 transition-colors"
            >
              Seguridad
            </Link>
            <Link
              href="#pricing"
              className="hover:text-blue-400 transition-colors"
            >
              Precios
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="#"
              className="hidden md:block text-sm font-medium text-slate-400 dark:text-slate-300 hover:text-blue-400"
            >
              Iniciar Sesión
            </Link>
            <Link
              href="#"
              className="bg-linear-to-br from-blue-600 via-blue-500 to-blue-400 dark:shadow-lg dark:shadow-blue-900/25 hover:from-blue-700 hover:via-blue-500 hover:to-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-600/20"
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
            Escalá tu trabajo 10X. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-br from-blue-600 via-blue-500 to-blue-400">
              Redactá escritos laborales en minutos.
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nuestra IA procesa el expediente y genera el escrito final según sus
            instrucciones y prefencias, liberando a tu equipo para decisiones
            estratégicas.Satya Nadella. La IA no es solo una herramienta para la
            automatización; es un facilitador para la aumentación.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-linear-to-br from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:via-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-blue-600/20">
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
              <div className="h-3 w-3 rounded-full bg-blue-400"></div>
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
                  <p className="mt-2 text-blue-600 dark:text-blue-300 font-bold">
                    TCL Nro: 8392102
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-300 uppercase tracking-wider">
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
            <blockquote className="mx-auto max-w-3xl text-xl md:text-2xl italic text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-slate-800 border-l-4 border-yellow-500 pl-6 py-4 rounded mb-6">
              La IA no es solo una herramienta para la automatización; es un
              facilitador para la aumentación.
              <footer className="mt-3 not-italic text-sm text-slate-600 dark:text-slate-300">
                — Satya Nadella, Chairman and CEO of Microsoft.
              </footer>
            </blockquote>
          </div>
          <span className="text-transparent bg-clip-text bg-linear-to-br from-blue-600 via-blue-500 to-blue-400 text-5xl font-extrabold ">
            Como Funciona
          </span>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
            <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
              <div className="mx-auto mb-3 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white">
                <CloudUpload className="h-5 w-5" />
              </div>
              <h4 className="font-semibold mb-2">Carga masiva de documentos</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Suba expedientes en lote y deje que nuestra IA los procese
                automáticamente.
              </p>
            </article>

            <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
              <div className="mx-auto mb-3 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white">
                <SearchCheck className="h-5 w-5" />
              </div>
              <h4 className="font-semibold mb-2">Análisis y detección</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Identificamos riesgos clave, fechas y precedentes relevantes en
                segundos.
              </p>
            </article>

            <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
              <div className="mx-auto mb-3 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-700 text-white">
                <FileText className="h-5 w-5" />
              </div>
              <h4 className="font-semibold mb-2">Generación de escritos</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Redactamos borradores y escritos finales ajustados a la
                normativa y estilo solicitado.
              </p>
            </article>

            <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
              <div className="mx-auto mb-3 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500 text-white">
                <Calculator className="h-5 w-5" />
              </div>
              <h4 className="font-semibold mb-2">Cálculos y liquidaciones</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Automatizamos cálculos indemnizatorios y tablas de liquidación
                con precisión.
              </p>
            </article>

            <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
              <div className="mx-auto mb-3 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-red-500 text-white">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="font-semibold mb-2">Privacidad y control</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Tratamos datos sensibles con medidas de seguridad compatibles
                con la normativa.
              </p>
            </article>
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
          <ShieldCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Seguridad y Privacidad Primero
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
            Cumplimos estrictamente con la Ley 25.326 de Protección de Datos
            Personales.
          </p>

          <div className="max-w-3xl mx-auto mb-6 text-sm text-slate-600 dark:text-slate-300 space-y-3 text-left">
            <div>
              <strong>Privacidad de Datos:</strong> No entrenamos nuestros
              modelos con los datos de sus clientes; los datos del cliente se
              mantienen fuera de cualquier conjunto de entrenamiento público o
              privado.
            </div>
            <div>
              <strong>Cifrado y Cumplimiento:</strong> Ciframos los datos en
              tránsito y en reposo (AES-256 / 256-bit). Controles y procesos
              alineados con SOC 2 Type II e ISO 27001; ofrecemos soporte para
              requisitos regulatorios adicionales (por ejemplo, HIPAA) cuando
              corresponda.
            </div>
            <div>
              <strong>Residencia de Datos:</strong> Sus datos se almacenan en la
              región que usted elija y, según la configuración contratada, sus
              datos no salen de su instancia privada en la nube — podemos
              garantizar que los datos no salgan de su instancia privada si así
              lo requiere.
            </div>
          </div>

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
          <div className="bg-linear-to-br from-blue-600 via-blue-500 to-blue-400 rounded-3xl p-12 md:p-20 text-center md:text-left relative overflow-hidden">
            {/* Abstract decorative circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-linear-to-br from-blue-600 via-blue-500 to-blue-600 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-linear-to-br from-blue-600 via-blue-500 to-blue-600 rounded-full opacity-50 blur-3xl"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  ¿Listo para modernizar su práctica legal?
                </h2>
                <p className="text-blue-100 text-lg mb-8">
                  Únase a más de 500 abogados en Argentina que ya usan LEIA para
                  optimiziar su tiempo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-300 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors shadow-lg">
                    Empezar Prueba Gratis
                  </button>
                  <button className="bg-linear-to-br from-blue-800 via-blue-700 to-blue-900 text-white border border-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-900 transition-colors">
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
                  <div className="mt-4 h-2 w-full bg-linear-to-br from-blue-900/50 via-blue-700/50 to-blue-900/50 rounded-full overflow-hidden">
                    <div className="h-full bg-green-400 w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      {/* --- TEAM / ABOUT SECTION --- */}
      <section id="team" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 text-center mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
            Un equipo multidisciplinario que combina experiencia jurídica y
            tecnología para construir herramientas que realmente ayuden a los
            abogados a ser más eficaces.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ezequiel Vazquez */}
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-center h-full flex flex-col">
              <div className="relative mx-auto h-20 w-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4 overflow-hidden">
                <Image
                  src="/ezequile.jpg"
                  alt="EV"
                  fill
                  className="absolute inset-0 h-full w-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Ezequiel Vazquez
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-300 mb-3">
                CEO & Fundador
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Emprendedor y Fundador con mas de 20 años de experiencia
                innovando en startups.
              </p>
              <div className="mt-auto">
                <a
                  href="https://www.linkedin.com/in/revazquez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium text-blue-600 hover:underline"
                >
                  Ver LinkedIn
                </a>
              </div>
            </div>
            {/* Francisco Peretti */}
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-center h-full flex flex-col">
              <div className="relative mx-auto h-20 w-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4 overflow-hidden">
                <Image
                  src="/pancho.jpg"
                  alt="FP"
                  fill
                  className="absolute inset-0 h-full w-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Francisco Peretti
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-300 mb-3">
                CTO
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Ingeniero de software especializado en aprendizaje automático y
                arquitectura de sistemas escalables. Encabeza la ingeniería de
                modelos y la infraestructura.
              </p>
              <div className="mt-auto">
                <a
                  href="https://www.linkedin.com/in/francisco-peretti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium text-blue-600 hover:underline"
                >
                  Ver LinkedIn
                </a>
              </div>
            </div>
            {/*  Alina Serra */}
            <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-center h-full flex flex-col">
              <div className="relative mx-auto h-20 w-20 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold mb-4 overflow-hidden">
                <Image
                  src="/alina.jpg"
                  alt="AS"
                  fill
                  className="absolute inset-0 h-full w-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Alina Serra
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-300 mb-3">
                Head of Legal Research
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Doctora en Derecho con amplia experiencia en jurisprudencia
                laboral y análisis doctrinal. Supervisa la curación del
                conocimiento legal del producto.
              </p>
              <div className="mt-auto">
                <a
                  href="https://www.linkedin.com/in/alina-serra-97495b21b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-2 rounded-md text-sm font-medium text-blue-700 hover:underline"
                >
                  Ver LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- ARTICLES / INSIGHTS --- */}
      <section id="articles" className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 text-center mb-4">
            Artículos y Análisis
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12">
            Lecturas recomendadas sobre LegalTech y el impacto de la
            inteligencia artificial en la práctica jurídica.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Impacto y límites de la inteligencia artificial en la práctica
                jurídica
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Análisis publicado en Redalyc sobre los alcances y restricciones
                de la IA en labores jurídicas.
              </p>
              <a
                href="https://www.redalyc.org/journal/5602/560279956011/html/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Leer artículo →
              </a>
            </article>

            <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Impacto de la Inteligencia Artificial en la Práctica Jurídica:
                Transformaciones y Desafíos
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Ensayo en Ciencia Latina que aborda transformaciones y retos que
                plantea la IA en el ejercicio profesional del Derecho.
              </p>
              <a
                href="https://ciencialatina.org/index.php/cienciala/article/view/14314"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Leer artículo →
              </a>
            </article>

            <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Impacto de la Inteligencia Artificial en la Práctica Jurídica
                (PDF)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Versión PDF disponible en Dialnet con un estudio profundo sobre
                aplicaciones prácticas de la IA en el derecho.
              </p>
              <a
                href="https://dialnet.unirioja.es/descarga/articulo/9848636.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Descargar PDF →
              </a>
            </article>

            <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Impacto de la inteligencia artificial en el ámbito jurídico:
                agilidad y automatización
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Artículo sobre la automatización de procesos y la mejora de
                tiempos en procedimientos legales.
              </p>
              <a
                href="https://polodelconocimiento.com/ojs/index.php/es/article/view/10165"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Leer artículo →
              </a>
            </article>

            <article className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                La época de la abogacía automatizada: Inteligencia Artificial y
                su impacto en la práctica legal (tesis)
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Tesis alojada en el repositorio de la Universidad de Chile que
                explora el impacto a largo plazo de la automatización en la
                profesión.
              </p>
              <a
                href="https://repositorio.uchile.cl/handle/2250/202550"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Leer tesis →
              </a>
            </article>
          </div>
        </div>
      </section>
      <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1 rounded-md bg-linear-to-br from-blue-600 via-blue-500 to-blue-400">
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
                  <a href="#" className="hover:text-blue-600">
                    Calculadora LCT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Análisis de Telegramas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Jurisprudencia
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Precios
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Blog de Novedades
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Guía de Multas Ley 24.013
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Actas CNAT
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600">
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
