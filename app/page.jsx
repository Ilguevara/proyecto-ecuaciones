"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, FileText, Calculator, ChevronRight, Download, Play, BookMarked, FileQuestion } from "lucide-react"
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

export default function Home() {
  const [activeSection, setActiveSection] = useState("inicio")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-slate-800 text-white py-6 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Ecuaciones Diferenciales</h1>
          <p className="text-slate-300">Materiales de estudio y recursos interactivos</p>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <nav className="sticky top-8 space-y-2">
              <Button
                variant={activeSection === "inicio" ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setActiveSection("inicio")}
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Inicio
              </Button>
              <Button
                variant={activeSection === "primer-corte" ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setActiveSection("primer-corte")}
              >
                <FileText className="mr-2 h-4 w-4" />
                Primer Corte
              </Button>
              <Button
                variant={activeSection === "segundo-corte" ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setActiveSection("segundo-corte")}
              >
                <Calculator className="mr-2 h-4 w-4" />
                Segundo Corte
              </Button>
              <Button
                variant={activeSection === "tercer-corte" ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setActiveSection("tercer-corte")}
              >
                <BookMarked className="mr-2 h-4 w-4" />
                Tercer Corte
              </Button>
            </nav>
          </div>

          <div className="md:col-span-3">
            {activeSection === "inicio" && <InicioSection />}
            {activeSection === "primer-corte" && <PrimerCorteSection />}
            {activeSection === "segundo-corte" && <SegundoCorteSection />}
            {activeSection === "tercer-corte" && <TercerCorteSection />}
          </div>
        </div>
      </main>

      <footer className="bg-slate-800 text-white py-6 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} - Proyecto de Ecuaciones Diferenciales</p>
        </div>
      </footer>
    </div>
  )
}

function InicioSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Bienvenido al Curso de Ecuaciones Diferenciales</h2>

      <p className="text-slate-600">
        Este sitio ha sido diseñado como un recurso educativo interactivo para estudiantes del curso de Ecuaciones Diferenciales.
        Aquí encontrarás todo lo que necesitas para aprender y reforzar los temas más importantes de la asignatura, de forma clara, divertida y dinámica.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
          <CardHeader>
            <CardTitle >Estructura del Curso</CardTitle>
            <CardDescription>Organización de los materiales</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                <span>
                  <strong>Inicio:</strong> Introducción y conceptos básicos
                </span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                <span>
                  <strong>Primer Corte:</strong> Fundamentos y ecuaciones de primer orden
                </span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                <span>
                  <strong>Segundo Corte:</strong> Ecuaciones de orden superior
                </span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                <span>
                  <strong>Tercer Corte:</strong> Aplicaciones y métodos avanzados
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className=" transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
        <CardHeader>
            <CardTitle>Materiales Disponibles</CardTitle>
            <CardDescription>Tipos de recursos en cada sección</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-green-500" />
                <span>
                  <strong>Documentos teóricos:</strong> Explicaciones y conceptos
                </span>
              </li>
              <li className="flex items-center">
                <FileQuestion className="h-4 w-4 mr-2 text-amber-500" />
                <span>
                  <strong>Ejercicios y juegos:</strong> Práctica y aplicación
                </span>
              </li>
              <li className="flex items-center">
                <BookMarked className="h-4 w-4 mr-2 text-purple-500" />
                <span>
                  <strong>Ayudas visuales:</strong> Gráficos y diagramas explicativos
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-5">Ejemplo de Material: Crecimiento Poblacional</h3>
        <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden transition-transform hover:scale-[1.015] hover:shadow-2xl">

        <div className="aspect-video relative">
            <Image
              src="/Modelo Logistico.jpeg"
              alt="Crecimiento Poblacional"
              width={800}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <p className="text-slate-600">
              El modelo de crecimiento poblacional es un ejemplo clásico de aplicación de ecuaciones diferenciales que
              permite predecir cómo evolucionará una población a lo largo del tiempo bajo ciertas condiciones.
            </p>
            <div className="mt-4 flex justify-end">
              <Button asChild className="transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-600 hover:text-white active:scale-95 focus:ring-4 focus:ring-blue-300">
                <a href="/materials/crecimiento_poblacional.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Descargar Material
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PrimerCorteSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Modelando el crecimiento poblacional: Primer Corte (2001-2008)</h2>

      <p className="text-slate-600">
        Entre 2001 y 2008, Corea del Sur experimentó un aumento poblacional de 47.37 a 49.05 millones de personas.
        Este crecimiento, aunque modesto, sigue un patrón que puede ser modelado con herramientas matemáticas simples
        pero poderosas: las ecuaciones diferenciales. En este primer corte, exploraremos cómo una ecuación exponencial,
        derivada de principios básicos del cálculo, logra predecir con exactitud este comportamiento. Acompáñanos a desglosar
        cada paso, desde la teoría hasta la aplicación práctica, y descubre por qué este modelo es fundamental para entender
        no solo a Corea del Sur, sino cualquier fenómeno de crecimiento en la naturaleza y la sociedad.
      </p>

      <Tabs defaultValue="temas">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="temas">Temas y Ayuda Visual</TabsTrigger>
          <TabsTrigger value="ejercicios">Juegos y Ejercicios</TabsTrigger>
        </TabsList>

        <TabsContent value="temas" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Contenido Teórico</CardTitle>
              <CardDescription>Temas principales del primer corte</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Introducción a las Ecuaciones Diferenciales</AccordionTrigger>
                    <AccordionContent>
                      <h3 className="text-lg font-semibold mt-2 mb-1">¿Qué Son y Por Qué Son Importantes?</h3>
                        <p>
                          Las ecuaciones diferenciales son herramientas matemáticas que relacionan una función con sus derivadas.
                          En términos simples, describen cómo una cantidad cambia en función de otra variable, usualmente el tiempo.
                          Por ejemplo, si queremos modelar el crecimiento de una población, necesitamos una ecuación que conecte el
                          número de personas en un año específico <InlineMath math="(P)"/> con la rapidez con
                          que este número aumenta o disminuye {' '} <InlineMath math="\frac{dP}{dt}" />.
                        </p>
                      <h3 className="text-lg font-semibold mt-2 mb-1">El Modelo Exponencial: La Base del Crecimiento</h3>
                        <p className="mb-6">El modelo más sencillo para describir poblaciones es el <strong>crecimiento exponencial</strong>, representado
                        por la ecuación:</p ><p className="flex justify-center mb-6"> <InlineMath math="\frac{dP}{dt} = kP"/>.</p>
                        <p>
                          Aquí, <InlineMath math="k" />, es la <span className="italic `font-serif`=">tasa de crecimiento per cápita</span>
                          un valor constante que indica el porcentaje anual de aumento. Esta ecuación supone que los recursos son ilimitados
                          y que no hay factores externos (como migración o políticas públicas) afectando el crecimiento. Aunque simplificado,
                          este modelo es sorprendentemente preciso para periodos cortos y estables, como el caso de Corea del Sur entre 2001 y 2008.</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Resolviendo la Ecuación Diferencial</AccordionTrigger>
                    <AccordionContent>
                      <h3 className="text-lg font-semibold mt-2 mb-1"> Paso a paso de la solución</h3>
                      <ol className="list-decimal ml-6 space-y-3">

                        <li className="space-y-5">
                          <strong>Separación de Variables</strong><p>Para resolver <InlineMath math="\frac{dP}{dt} = kP" />, separamos
                          las variables <InlineMath math="(P)"/> (poblacion) <InlineMath math="(t)"/> (tiempo):</p> <p className="flex justify-center mb-6"><InlineMath math="\ln|P| = kt + C" /></p>
                          <p>Este paso permite integrar cada lado de la ecuación de manera independiente.</p>
                        </li>

                        <li className="space-y-5">
                          <strong>Integración</strong><p>Al integrar ambos lados, obtenemos:</p> <p className="flex justify-center mb-6">
                          <InlineMath math="\frac{1}{P}dP = kdt" /></p><p>Donde <InlineMath math="C"/>  es una constante de integración.
                          Para simplificar, aplicamos la función exponencial a ambos lados:</p> <p className="flex justify-center mb-6"><InlineMath math="P(t) = e^{kt+C} = e^C \cdot e^kt"/></p>
                          <p>Reemplazando <InlineMath math="e^C"/> por <InlineMath math="P_0"/> (la población inicial), llegamos a la
                            <strong> solución general:</strong></p> <p className="flex justify-center mb-6"> <InlineMath math="P(t) = P_0 \cdot e^kt"/> </p>
                        </li>
                      </ol>

                      <h3 className="text-lg font-semibold mt-4 mb-1">Ejemplo Numérico: Calculando la Tasa <InlineMath math="k"/> </h3>
                      <ul className="list-disc ml-6">
                        <li><InlineMath math="\text{Año\;}2001: (t = 0): P_0 = 47.37~\text{millones}."/></li>
                        <li><InlineMath math="\text{Año\;}2005: (t = 4): P = 48.18~\text{millones}." /></li> <p>Aplicamos la fórmula para hallar
                        <InlineMath math="k"/></p> <p className="flex justify-center mb-6"> <InlineMath math="= \dfrac{\ln\left(\frac{48.18}{47.37}\right)}{4}\approx
                        \dfrac{\ln(1.017)}{4} \approx 0.0043,\ \text{(0.43\% anual)}" /></p> <p>Este valor de <InlineMath math="k"/> refleja un crecimiento lento
                        pero constante, típico de países desarrollados con tasas de natalidad bajas.</p>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Aplicación Práctica: Predicción para 2008</AccordionTrigger>
                  <AccordionContent>
                    <h3 className="text-lg font-semibold mt-2 mb-1">Usando el Modelo</h3>
                      <p>Con <InlineMath math="P_0 = 47.37~\text{millones} ~\text{y} ~  k = 0.0043"/> predecimos la poblacion en 2008 <InlineMath math="(t = 7):"/></p>
                      <p className="flex justify-center mb-6 mt-6"> <InlineMath math="P(7)=47.37 \cdot e^0.0043.7 ≈ 47.37 \cdot e^0.0301 ≈
                      47.37 \cdot 1.0306 ≈ 49.05~\text{millones}"/> </p>

                    <h3 className="text-lg font-semibold mt-4 mb-1">Comparación con la Realidad</h3>
                      <p>El dato oficial para 2008 es <strong>49.05 millones</strong>, lo que significa que el modelo tuvo un <strong>error del 0% </strong> en este periodo.
                        Este resultado demuestra la eficacia del modelo exponencial en lapsos cortos donde las condiciones se mantienen estables.</p>

                    <h3 className="text-lg font-semibold mt-4 mb-1">Limitaciones y Consideraciones</h3>
                    <p>
                      A pesar de su precisión, el modelo tiene limitaciones:
                    </p>
                    <ul className="list-disc ml-6">
                      <li><strong>Tasa Constante:</strong> Asume que <InlineMath math="k:"/> no cambia con el tiempo, lo que rara vez ocurre en la realidad debido
                        a factores económicos, migratorios o sanitarios.</li>
                      <li><strong>Recursos Infinitos:</strong> Ignora la capacidad de carga del entorno, un componente clave en modelos más avanzados como el logístico.</li>
                      <li><strong>Eventos Imprevistos:</strong>  No considera crisis repentinas, como recesiones o pandemias, que pueden alterar drásticamente las tendencias.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Conclusión y Próximos Pasos</AccordionTrigger>
                  <AccordionContent>
                    <h3 className="text-lg font-semibold mt-2 mb-1">Reflexión Final</h3>
                      <p>El modelo exponencial es una piedra angular en el estudio de dinámicas poblacionales. Su simplicidad lo hace ideal para introducir
                        conceptos matemáticos complejos, pero también revela la importancia de considerar variables adicionales en análisis más profundos.
                        En el próximo corte, exploraremos cómo extender este modelo para incluir factores como migración y envejecimiento poblacional, acercándonos
                        aún más a la realidad demográfica de Corea del Sur.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </CardContent>
            <CardFooter>
              <Button className="transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-600 hover:text-white active:scale-95 focus:ring-4 focus:ring-blue-300">
                <Download className="mr-2 h-4 w-4" />
                Descargar Material Completo
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        .
        <TabsContent value="ejercicios" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Ejercicios Prácticos</CardTitle>
              <CardDescription>Juegos y problemas para practicar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-medium mb-2">Quiz Interactivo</h4>
                  <p className="text-slate-600 mb-4">
                    Pon a prueba tus conocimientos respondiendo la siguiente pregunta de opción múltiple sobre el modelo de crecimiento exponencial.
                  </p>
                  <MultipleChoiceQuiz />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Descargar PDF de Ejercicios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        ```

      </Tabs>
    </div>
  )
}



export function MultipleChoiceQuiz() {
  // Las preguntas y respuestas
  const preguntas = [
    {
      pregunta: <>
        <strong>1. Calculando la Tasa de Crecimiento: </strong>
        Entre 2001 y 2004, la población de Corea del Sur aumentó de 47.37 a 48.09 millones.
        ¿Cuál es la tasa de crecimiento anual (<InlineMath math="k" />)?
      </>,

      opciones: [
        { id: 'a', texto: <span><InlineMath math="0.3%" /></span> },
        { id: 'b', texto: <span><InlineMath math="0.8%" /></span> },
        { id: 'c', texto: <span><InlineMath math="0.1%" /></span> },
        { id: 'd', texto: <span><InlineMath math="0.5%" /></span> }
      ],
      respuestaCorrecta: "d",
      explicacion: (
          <ol className="list-decimal pl-6 space-y-1 text-slate-700">
            <p>Explicación Paso a Paso</p>
            <li> <strong>Fórmula</strong> <InlineMath math="k = \frac{\ln \frac{P}{P_0}}{t}"/> donde <InlineMath math="P_0 = 47.37~\text{millones (poblacion en 2001)}
            \text{,} ~  P = 48.09 ~\text{millones (poblacion en 2004)} ~ \text{y} ~ t = 2004 - 2001 = 3 ~ \text{años}  "/>  </li>
            <li> <strong>Interpretación</strong> una tasa del <InlineMath math="0.5%" significa que dicha población crece un esta cifra cada año />.</li>
          </ol>
      )
    },
    {
      pregunta: <>
            <strong>2. Simulando un Escenario Extremo: </strong>
              Simulando un Escenario Extremo (<InlineMath math="k = 0.006 o 0.6%" />, ¿cuál sería la población en 2008? )?
          </>,
      opciones: [
        { id: 'a', texto: <span><InlineMath math="48.9 ~ \text{millones}" /></span> },
        { id: 'b', texto: <span><InlineMath math="49.05 ~ \text{millones}" /></span> },
        { id: 'c', texto: <span><InlineMath math="49.5 ~ \text{millones}" /></span> },
        { id: 'd', texto: <span><InlineMath math="47.09 ~ \text{millones}" /></span> }
      ],
      respuestaCorrecta: "c",
      explicacion: (
          <ol className="list-decimal pl-6 space-y-1 text-slate-700">
            <li><strong>Fórmula: </strong> <InlineMath math="P(t) = p_0 \cdot e^kt " /> donde (<InlineMath math="P_0 = 47.37 ~ \text{millones} ~ k = 0.006 ~\text{y}~ t = 7 ~ \text{años}  " />).</li>
            <li><strong>Cálculo: </strong> <InlineMath math="P(7) = 47.37 \cdot e^0.042 ≈ 47.37 \cdot 1.043 ≈ 49.5 ~ \text{millones}  " />.</li>
          </ol>
      )
    },
    {
      pregunta: <>
        <strong>3. Crisis Económica (¡Desafío Final!) </strong>
        SEn 2006, una crisis reduce la tasa anual a (<InlineMath math="0.2%" />, ¿cuál sería la población en 2008? )?
      </>,
      opciones: [
        { id: 'a', texto: <span><InlineMath math="47.9 ~ \text{millones} " /></span> },
        { id: 'b', texto: <span><InlineMath math="48.47 ~ \text{millones}" /></span> },
        { id: 'c', texto: <span><InlineMath math="49.0 ~ \text{millones}" /></span> },
        { id: 'd', texto: <span><InlineMath math="49.1 ~ \text{millones}" /></span> }
      ],
      respuestaCorrecta: "b",
      explicacion: (
          <ol className="list-decimal pl-6 space-y-1 text-slate-700">
            <li><strong>Sin crisis (2001-2005): </strong> <InlineMath math="P(4) = 47.37 \cdot e^{0.0043 \cdot 4} ≈ 48.18 ~ \text{millones}  " /> en el modelo exponencial (<InlineMath math="r = 0.2/100 = 0.002" />).</li>
            <li> <strong>Con crisis (2005-2008): </strong>  <InlineMath math="P(3) = 48.18 \cdot e^{0.002 \cdot 3} ≈ 48.47 ~ \text{millones} " /> <strong>¡Increíble! </strong>La crisis subestima la población real (49.05M) en 0.58 millones.</li>
          </ol>
      )
    }
  ]

  // Estado para seguir el avance en el quiz
  const [preguntaActual, setPreguntaActual] = useState(0)
  const [seleccionada, setSeleccionada] = useState(null)
  const [enviado, setEnviado] = useState(false)
  const [mostrarSolucion, setMostrarSolucion] = useState(false)
  const [aciertos, setAciertos] = useState(0)

  const actual = preguntas[preguntaActual]

  function handleEnviar() {
    setEnviado(true)
    if (seleccionada === actual.respuestaCorrecta) {
      setAciertos(a => a + 1)
    }
  }

  function handleSiguiente() {
    setEnviado(false)
    setMostrarSolucion(false)
    setSeleccionada(null)
    setPreguntaActual(idx => idx + 1)
  }

  // Si ya no hay más preguntas:
  if (preguntaActual >= preguntas.length) {
    return (
        <div>
          <h4 className="font-medium mb-2">Resultado del quiz</h4>
          <p className="mb-3">Respuestas correctas: <b>{aciertos}</b> de {preguntas.length}</p>
          <Button variant="secondary" onClick={() => {
            setPreguntaActual(0)
            setAciertos(0)
          }}>
            Reintentar Quiz
          </Button>
        </div>
    )
  }

  // Si hay pregunta actual:
  return (
      <div>
        <h4 className="font-medium mb-2">Pregunta {preguntaActual + 1} de {preguntas.length}</h4>
        <div className="mb-4">{actual.pregunta}</div>
        <div className="grid gap-2 mb-4">
          {actual.opciones.map((op) => (
              <Button
                  key={op.id}
                  variant={seleccionada === op.id ? "default" : "outline"}
                  className="justify-start text-left"
                  onClick={() => setSeleccionada(op.id)}
                  disabled={enviado}
              >
                <span className="font-bold mr-2 uppercase">{op.id}.</span>
                {op.texto}
              </Button>
          ))}
        </div>
        {!enviado ? (
            <Button
                onClick={handleEnviar}
                disabled={!seleccionada}
                className="mt-2"
            >
              Enviar respuesta
            </Button>
        ) : (
            <div className="space-y-3">
              <p className={seleccionada === actual.respuestaCorrecta ? "text-green-600 font-bold" : "text-red-600 font-bold"}>
                {seleccionada === actual.respuestaCorrecta
                    ? "¡Respuesta correcta!"
                    : `Incorrecto. La opción correcta es "${actual.respuestaCorrecta.toUpperCase()}".`}
              </p>
              <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMostrarSolucion(s => !s)}
                  className="mt-1"
              >
                {mostrarSolucion ? "Ocultar explicación" : "Ver explicación"}
              </Button>
              {mostrarSolucion && (
                  <div className="bg-gray-50 border rounded-lg p-4 mt-2">{actual.explicacion}</div>
              )}
              <Button
                  onClick={handleSiguiente}
                  className="mt-2"
                  variant="secondary"
              >
                {preguntaActual + 1 === preguntas.length ? "Finalizar" : "Siguiente"}
              </Button>
            </div>
        )}
      </div>
  )
}

function SegundoCorteSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Segundo Corte: Ecuaciones de Orden Superior</h2>

      <p className="text-slate-600">
        Esta sección aborda las ecuaciones diferenciales de segundo orden y orden superior, incluyendo métodos de
        solución y aplicaciones en sistemas físicos.
      </p>

      <Tabs defaultValue="temas">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="temas">Temas y Ayuda Visual</TabsTrigger>
          <TabsTrigger value="ejercicios">Juegos y Ejercicios</TabsTrigger>
        </TabsList>

        <TabsContent value="temas" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Contenido Teórico</CardTitle>
              <CardDescription>Temas principales del segundo corte</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Ecuaciones de Segundo Orden</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Ecuaciones homogéneas y no homogéneas. Coeficientes constantes y variables. Reducción de orden.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Métodos de Solución</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Método de coeficientes indeterminados, variación de parámetros, series de potencias y transformada
                      de Laplace.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Aplicaciones Físicas</AccordionTrigger>
                  <AccordionContent>
                    <p>Movimiento armónico simple, sistemas masa-resorte, circuitos RLC y problemas de vibraciones.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Descargar Material Completo
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="ejercicios" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Ejercicios Prácticos</CardTitle>
              <CardDescription>Juegos y problemas para practicar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-medium mb-2">Ejercicio 1: Ecuaciones Homogéneas</h4>
                  <p className="text-slate-600 mb-2">Resuelve la ecuación: y'' + 4y' + 4y = 0</p>
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-3 w-3" />
                    Ver Solución
                  </Button>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-medium mb-2">Ejercicio 2: Ecuaciones No Homogéneas</h4>
                  <p className="text-slate-600 mb-2">Resuelve: y'' + 2y' + y = 3e^x</p>
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-3 w-3" />
                    Ver Solución
                  </Button>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-medium mb-2">Juego: Sistema Masa-Resorte</h4>
                  <p className="text-slate-600 mb-2">
                    Simula un sistema masa-resorte y observa cómo cambia la solución al modificar los parámetros.
                  </p>
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-3 w-3" />
                    Iniciar Simulación
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Descargar PDF de Ejercicios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TercerCorteSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Tercer Corte: Métodos Avanzados</h2>

      <p className="text-slate-600">
        En esta sección final se abordan métodos avanzados para resolver ecuaciones diferenciales, sistemas de
        ecuaciones y aplicaciones en problemas complejos.
      </p>

      <Tabs defaultValue="temas">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="temas">Temas y Ayuda Visual</TabsTrigger>
          <TabsTrigger value="ejercicios">Juegos y Ejercicios</TabsTrigger>
        </TabsList>

        <TabsContent value="temas" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Contenido Teórico</CardTitle>
              <CardDescription>Temas principales del tercer corte</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Sistemas de Ecuaciones Diferenciales</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Sistemas lineales, métodos matriciales, valores y vectores propios. Sistemas no lineales y
                      análisis cualitativo.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Transformada de Laplace</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Definición, propiedades, transformada inversa y aplicaciones a ecuaciones diferenciales y
                      sistemas.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Series de Fourier y Ecuaciones en Derivadas Parciales</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Introducción a las series de Fourier y su aplicación en la resolución de ecuaciones en derivadas
                      parciales.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Descargar Material Completo
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="ejercicios" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Ejercicios Prácticos</CardTitle>
              <CardDescription>Juegos y problemas para practicar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-medium mb-2">Ejercicio 1: Sistemas de Ecuaciones</h4>
                  <p className="text-slate-600 mb-2">Resuelve el sistema: dx/dt = 2x + 3y, dy/dt = 4x - y</p>
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-3 w-3" />
                    Ver Solución
                  </Button>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-medium mb-2">Ejercicio 2: Transformada de Laplace</h4>
                  <p className="text-slate-600 mb-2">
                    Resuelve usando transformada de Laplace: y'' + 4y = sin(2t), y(0) = 1, y'(0) = 0
                  </p>
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-3 w-3" />
                    Ver Solución
                  </Button>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <h4 className="font-medium mb-2">Juego: Modelado de Sistemas Dinámicos</h4>
                  <p className="text-slate-600 mb-2">
                    Modela diferentes sistemas dinámicos y observa su comportamiento en el tiempo.
                  </p>
                  <Button variant="outline" size="sm">
                    <Play className="mr-2 h-3 w-3" />
                    Iniciar Simulación
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Descargar PDF de Ejercicios
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}