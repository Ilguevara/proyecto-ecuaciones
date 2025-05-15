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
import { Gamepad2 } from "lucide-react"
import React, { useEffect } from "react";

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
              <Button
                  variant={activeSection === "minijuego" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setActiveSection("minijuego")}
              >
                <Gamepad2 className="mr-2 h-4 w-4" />
                Mini Juego
              </Button>
            </nav>
          </div>
          <div className="md:col-span-3">
            {activeSection === "inicio" && <InicioSection />}
            {activeSection === "primer-corte" && <PrimerCorteSection />}
            {activeSection === "segundo-corte" && <SegundoCorteSection />}
            {activeSection === "tercer-corte" && <TercerCorteSection />}
            {activeSection === "minijuego" && <MiniJuegoSection />}

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
      <h2 className="text-2xl font-bold">Modelando el crecimiento poblacional: Primer Corte (2001-2021)</h2>

      <p className="text-slate-600">
        La tabla que se presenta a continuación contiene datos estadísticos relevantes sobre la población total de Corea del Sur,
        abarcando un período de 20 años, desde el 2001 hasta el 2021. El objetivo de esta selección de 20 registros es analizar
        la dinámica de la población surcoreana a lo largo de este lapso temporal y, posteriormente, realizar cálculos basados en esta información.
      </p>

      <div className="aspect-video relative flex justify-center">
        <Image
            src="/materials/DatosPoblacion.png"
            alt="Crecimiento Poblacional"
            width={800}
            height={400}
            className="object-contain"
        />
      </div>

      <h3 className="text-lg font-bold">Identificación de Variables: Tiempo y Población</h3>
      <p className="text-slate-600">Dentro de este conjunto de datos, podemos distinguir claramente dos tipos de variables: la <strong>variable independiente</strong>
        y la <strong>variable dependiente</strong></p>
      <ul  className="list-disc list-inside text-slate-600">

        <li ><strong>Variable Independiente: El Tiempo</strong> El tiempo es la variable que consideramos como factor causal o predictivo de los cambios en la población.
          En esta tabla, el tiempo se representa de dos maneras complementarias:</li> <p className="mt-2.5">Donde la primera, la columna "t", representa el número de trimestres
          transcurridos desde el inicio del período de estudio, es decir, desde 2001, donde cada unidad corresponde a un trimestre (tres meses). Por ejemplo, un valor de 0
          indica el inicio de 2001, mientras que un 3 señala el final del primer trimestre de 2002, permitiendo un seguimiento secuencial y detallado del avance temporal.
          La segunda, la columna "Año", señala el año calendario correspondiente a cada registro de población, ofreciendo así una referencia temporal clara e intuitiva que
          facilita la comprensión del período al que pertenece cada dato.</p>

        <li className="mt-3"><strong>Variable Dependiente: Población Total</strong> La "Población Total" es la variable dependiente, ya que su valor se espera que cambie o
          evolucione en respuesta al paso del tiempo. Los números en esta columna representan la cantidad total de habitantes en Corea del Sur en el momento específico indicado
          por las columnas "t" y "Año". Al observar los valores de la "Población Total" a lo largo de los diferentes puntos temporales, podemos analizar la tendencia de crecimiento,
          decrecimiento o estabilidad de la población durante el período estudiado.</li> <p className="mt-2.5">En resumen, la tabla ilustra cómo la población total de Corea del Sur
          ha variado a lo largo del tiempo, medido en trimestres desde 2001 y referenciado por el año calendario. El análisis de estos datos nos permitirá comprender mejor la dinámica
          demográfica del país durante estas dos décadas.</p>

      </ul>

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
                  <AccordionTrigger>Modelado de la población</AccordionTrigger>
                    <AccordionContent>
                      <h3 className="text-lg font-semibold mt-2 mb-1">Análisis de Parejas de Datos Clave de la Población de Corea del Sur</h3>
                        <p>
                          La siguiente tabla presenta cinco pares de datos específicos extraídos del conjunto de datos de la población de Corea del Sur.
                          Cada par ilustra la relación entre el tiempo (medido en trimestres desde 2001 y el año correspondiente) y la población total
                          en momentos particulares. Estos pares de datos nos permiten observar puntos concretos en la evolución demográfica del país
                          durante el período comprendido.</p>

                      <div className="aspect-video relative flex justify-center">
                        <Image
                            src="/materials/ParejaDatos.png"
                            alt="Crecimiento Poblacional"
                            width={500}
                            height={300}
                            className="object-contain"
                        />
                      </div>

                      <h3 className="text-lg font-semibold mt-2 mb-1">Interpretación de las Columnas: </h3>

                      <ul  className="list-disc list-inside">
                        <li className="mb-4"><InlineMath math="t: "/> Como en la tabla anterior, esta columna representa el número de trimestres transcurridos desde el inicio del año 2001.
                          Cada valor indica un punto específico en el tiempo.</li>

                        <li className="mb-4"><InlineMath math="\text{Año (pareja 1) y población (pareja 1): }"/> Estas dos columnas forman el primer conjunto de cinco pares de datos.
                          Para cada valor de <InlineMath math="t"/> mostrado a la izquierda, se indica el año correspondiente y la población total registrada en ese momento.
                          Por ejemplo, cuando <InlineMath math="t(0), "/> nos encontramos en el año 2001 con una población de 47.370.000 habitantes.</li>

                        <li className="mb-4"><InlineMath math="\text{Año (pareja 2) y población (pareja 2): }"/> De manera similar, estas columnas constituyen el segundo conjunto de cinco pares de datos.
                          Para el mismo valor de <InlineMath math="t"/>e la fila, se presenta un año diferente y la población total asociada a ese año. Por ejemplo, para el mismo punto
                          de inicio <InlineMath math="t(0), "/>  el segundo par de datos nos muestra el año 2004 con una población de 48.083.000 habitantes.</li>
                      </ul>

                      <h3 className="text-lg font-semibold mt-2 mb-1">Análisis de los Pares de Datos: </h3>

                        <p className="mb-4">Cada fila de la tabla nos ofrece dos instantáneas de la población en diferentes momentos. Al comparar la "Población (Pareja 1)"
                          con la "Población (Pareja 2)" para cada valor de <InlineMath math="t,"/> podemos observar cómo la población ha cambiado entre esos dos puntos temporales específicos. Por ejemplo: </p>

                      <ul  className="list-disc list-inside">
                        <li className="mb-4"><InlineMath math="t: "/> Como en la tabla anterior, esta columna representa el número de trimestres transcurridos desde el inicio del año 2001.
                          Cada valor indica un punto específico en el tiempo.</li>

                        <li className="mb-4"><InlineMath math="\text{Año (pareja 1) y población (pareja 1): }"/> Estas dos columnas forman el primer conjunto de cinco pares de datos.
                          Para cada valor de <InlineMath math="t"/> mostrado a la izquierda, se indica el año correspondiente y la población total registrada en ese momento.
                          Por ejemplo, cuando <InlineMath math="t(0), "/> nos encontramos en el año 2001 con una población de 47.370.000 habitantes.</li>

                        <li className="mb-4"><InlineMath math="\text{Año (pareja 2) y población (pareja 2): }"/> De manera similar, estas columnas constituyen el segundo conjunto de cinco pares de datos.
                          Para el mismo valor de <InlineMath math="t"/>e la fila, se presenta un año diferente y la población total asociada a ese año. Por ejemplo, para el mismo punto
                          de inicio <InlineMath math="t(0), "/>  el segundo par de datos nos muestra el año 2004 con una población de 48.083.000 habitantes.</li>
                      </ul>

                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Análisis del Modelo de Población</AccordionTrigger>
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
                  <AccordionTrigger>Aplicación del Modelo</AccordionTrigger>
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
                  <AccordionTrigger>Conclusiones del primer corte</AccordionTrigger>
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

function MiniJuegoSection() {
  // Redirigir automáticamente al enlace de Scratch
  // Se puede usar useEffect para la redirección automática
  React.useEffect(() => {
    window.location.href = "https://scratch.mit.edu/projects/1174765468"
  }, [])

  // En caso de que la redirección automática falle, mostrar botón y mensaje
  return (
      <div className="flex flex-col items-center justify-center min-h-[250px]">
        <Gamepad2 className="h-14 w-14 text-blue-500 mb-4 animate-bounce" />
        <h2 className="text-2xl font-bold mb-2 text-center">Mini Juego Interactivo</h2>
        <p className="mb-4 text-slate-600 text-center">
          Estás siendo redirigido automáticamente al mini juego. <br />
          Si la redirección no funciona, haz clic en el botón de abajo.
        </p>
        <Button asChild variant="outline" className="flex items-center gap-2">
          <a href="https://scratch.mit.edu/projects/1091905020" target="_blank" rel="noopener noreferrer">
            <Gamepad2 className="h-5 w-5" />
            Ir al Mini Juego
          </a>
        </Button>
      </div>
  )
}
