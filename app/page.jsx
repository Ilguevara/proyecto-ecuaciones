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

                      <h3 className="text-lg font-semibold mt-2 mb-1">Análisis de los Pares de Datos: </h3>

                      <p className="mb-4">Cada fila de la tabla nos ofrece dos instantáneas de la población en diferentes momentos. Al comparar la "Población (Pareja 1)"
                        con la "Población (Pareja 2)" para cada valor de <InlineMath math="t,"/> podemos observar cómo la población ha cambiado entre esos dos puntos temporales específicos.
                        Por ejemplo: </p>

                      <ul  className="list-disc list-inside">
                        <li className="mb-4"> Para el punto de inicio <InlineMath math="t= 0: "/> La población aumentó de 47.370.000 en 2001 a 48.083.000 en 2004.</li>

                        <li className="mb-4">Para  <InlineMath math="t= 12"/> (final de 2004/inicio de 2005): La población era de 48.185.000 en 2005 y aumentó a 49.055.000 en 2008.</li>

                        <li className="mb-4">Para  <InlineMath math="t= 30"/>  (mediados de 2008/inicio de 2011): La población era de 49.937.000 en 2011 y creció a 50.747.000 en 2014.</li>

                        <li className="mb-4">Para  <InlineMath math="t= 48"/> (final de 2012/inicio de 2017): La población era de 51.362.000 en 2017 y continuó aumentando a 51.836.000 en 2020.</li>

                        <li className="mb-4">Para  <InlineMath math="t= 24"/> (final de 2007/inicio de 2009): La población era de 49.308.000 en 2009 y también aumentó a 50.429.000 en 2013.</li>
                      </ul>

                      <h3 className="text-lg font-semibold mt-2 mb-1">Propósito de los Pares de Datos:</h3>

                      <p className="mb-4">Estos pares de datos clave sirven como puntos de referencia concretos para evaluar la
                        precisión y el comportamiento de los cinco modelos de población que se mencionan en el texto introductorio
                        (aunque esos modelos no se muestran en esta tabla). Al comparar las predicciones de cada modelo en estos
                        puntos temporales específicos con los valores reales observados, se puede determinar qué modelo se ajusta
                        mejor a la evolución real de la población de Corea del Sur. </p>

                      <p className="mb-4">En resumen, esta tabla destaca cinco momentos clave en el tiempo, presentando dos años
                        diferentes y sus respectivas poblaciones para cada uno de esos momentos. Esto permite una comparación directa
                        de la evolución demográfica en puntos temporales específicos y facilita la evaluación de modelos predictivos de población.</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Análisis del Modelo de Población</AccordionTrigger>
                    <AccordionContent>
                      <h3 className="text-lg font-semibold mt-2 mb-1">Análisis Metodológico</h3>
                      <p className="mb-4">Este estudio comienza con la creación de una representación de cómo cambia la población, y lo haremos paso a paso para entenderlo bien.</p>

                      <p className="mb-4"> <strong>Primero, lo más importante es definir la fórmula matemática que nos dice cómo va evolucionando el número de personas (o individuos).</strong>
                        Esta fórmula se basará en ideas clave sobre cómo crecen o disminuyen las poblaciones, considerando al principio solo la diferencia entre los nacimientos
                        y las muertes, que representaremos con un valor constante de crecimiento. Esta fórmula nos mostrará qué tan rápido cambia la población en cualquier momento</p>

                      <p className="mb-4"> <strong>Luego, una vez que tengamos la fórmula, buscaremos cómo resolverla. </strong> Intentaremos encontrar una ecuación general
                        que nos diga el tamaño de la población en cualquier momento futuro. Para esto, usaremos <strong>métodos matemáticos </strong> para encontrar la solución exacta, o
                        <strong>métodos numéricos </strong> para obtener una respuesta aproximada usando cálculos repetitivos. La elección dependerá de qué tan complicada sea la fórmula
                        y si necesitamos una respuesta precisa o una cercana. En esta etapa, ese valor constante de crecimiento será muy importante, ya que nos indicará si la población
                        tiende a crecer o a disminuir si no hay otros factores que influyan.</p>

                      <p className="mb-4"> <strong>Después, para que nuestras soluciones sean más útiles y específicas, necesitamos usar la información inicial.</strong>
                        Esto significa saber cuál era el tamaño de la población al principio de nuestro estudio. Al aplicar esta información a la solución general que encontramos
                        antes, obtendremos una fórmula única que describe cómo ha cambiado esa población en particular.</p>

                      <p className="mb-4"> <strong>Una vez que tengamos estas fórmulas específicas, haremos varias pruebas usando diferentes tamaños de población iniciales.</strong>
                        Esto nos ayudará a ver qué tanto influye el punto de partida en cómo la población cambia con el tiempo. Al observar estas pruebas, entenderemos mejor
                        cómo la población evoluciona y qué tanto importa su tamaño inicial para saber cómo será en el futuro.</p>

                      <p className="mb-4"> <strong>Finalmente, la precisión y utilidad de nuestro modelo de población se determinarán comparando sus proyecciones con datos reales
                        para calcular los márgenes de error.</strong> Con esta evaluación completada, procederemos a presentar el modelo de población desarrollado,
                        detallando su estructura y capacidad predictiva.</p>

                      <h3 className="text-lg font-semibold mt-10 mb-4">Modelo de Poblacion.</h3>
                      <ul>
                        <li className="flex justify-center mb-5">Definimos la ecuación diferencial:</li> <p className="mb-4 flex justify-center"> <InlineMath math="\frac{dP}{dt} = kP"/> </p>

                        <li className="flex justify-center mb-5">Separamos las variables:</li> <p className="mb-4 flex justify-center"> <InlineMath math="\frac{dP}{P} = k\,dt"/> </p>

                        <li className="flex justify-center mb-5">Integramos ambos lados: </li> <p className="mb-4 flex justify-center"> <InlineMath math="\int \frac{1}{P}\,dP = \int k\,dt "/> </p>

                        <li className="flex justify-center mb-5">Resolvemos las integrales: </li> <p className="mb-4 flex justify-center"> <InlineMath math="\ln|P| = kt + C "/> </p>

                        <li className="flex justify-center mb-5">Aplicamos exponencial para despejar P(t): </li> <p className="mb-4 flex justify-center"> <InlineMath math="P = e^{kt + C}"/> </p>

                        <li className="flex justify-center mb-5">se reordena las variables: </li> <p className="mb-4 flex justify-center"> <InlineMath math="P = e^C \cdot e^kt  "/> </p>

                        <li className="flex justify-center mb-5">por ultimo, se muestra la solución general: </li> <p className="mb-4 flex justify-center"> <InlineMath math="P(t) = C_0 \cdot e^kt "/> </p>
                      </ul>

                    </AccordionContent>
                  </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Aplicación del Modelo</AccordionTrigger>
                  <AccordionContent>
                    <h3 className="text-lg font-semibold mt-2 mb-1">Aplicación de Datos Iniciales</h3>
                    <p className=" mt-2 mb-4">
                      <strong>Una vez resuelta la ecuación diferencial, aplicaremos distintos valores iniciales al modelo para observar cómo evoluciona la población en el tiempo. </strong>
                       Para esto, se utilizarán cinco conjuntos de datos correspondientes a distintos escenarios iniciales. Cada conjunto representa un posible punto de partida para analizar
                      cómo influye la condición inicial en la dinámica poblacional proyectada.
                    </p>

                    <p className="mb-4">
                      <strong>Estos valores serán introducidos en el modelo utilizando el código que desarrollaremos a continuación,</strong> el cual permitirá simular los cambios en la población
                      con el paso del tiempo mediante métodos computacionales. Así, se podrán generar representaciones visuales y numéricas de la evolución poblacional bajo diferentes
                      condiciones iniciales.
                    </p>

                    <p className="mb-4">
                      <strong>Como primer caso de estudio, tomaremos los datos reales de población de Corea del Sur en el año 2021,</strong> los cuales indican un total de 51,736,000 personas.
                      Este valor será el punto de partida del primer conjunto de simulación.
                    </p>

                    <p className="mb-5">
                      A continuación, se presentará el primer conjunto de datos de población de Corea del Sur y se aplicará al modelo para comenzar con el análisis comparativo de los resultados.
                    </p>

                    <ul className="space-y-6">
                      <li className="flex flex-row items-center gap-6">
                        <div className="w-1/3 flex justify-center items-center">
                          <p className="text-sm text-center">
                            <strong>Pareja 1 de datos de población de <br />
                              Corea del sur </strong>
                          </p>
                        </div>
                        <div className="w-2/3 aspect-video relative flex justify-center">
                          <Image
                              src="/materials/Pareja1.png"
                              alt="Crecimiento Poblacional"
                              width={400}
                              height={200}
                              className="object-contain"
                          />
                        </div>
                      </li> <p className="text-slate-600">
                        El gráfico muestra que, partiendo de una población inicial de 47.37 millones en 2001, se proyecta un crecimiento que alcanza aproximadamente
                        <strong> 52.6 millones</strong> después de 21 años. Este valor, representado con un punto rojo, se compara con el valor real observado, <strong>51.74 millones</strong> (punto verde).
                        La diferencia entre ambos representa un error relativo porcentual de solo <strong>1.65%</strong>, lo que indica que el modelo utilizado ofrece una estimación bastante
                        precisa del crecimiento poblacional en ese periodo.</p>

                      <li className="flex flex-row items-center gap-6">
                        <div className="w-1/3 flex justify-center items-center">
                          <p className="text-sm text-center">
                            <strong>Pareja 2 de datos de población de <br />
                              Corea del sur </strong>
                          </p>
                        </div>
                        <div className="w-2/3 aspect-video relative flex justify-center">
                          <Image
                              src="/materials/Pareja2.png"
                              alt="Crecimiento Poblacional"
                              width={400}
                              height={200}
                              className="object-contain"
                          />
                        </div>
                      </li> <p className="text-slate-600">
                      El gráfico muestra que, partiendo de una población inicial de <strong>48.19 millones</strong> en 2005, se proyecta un crecimiento exponencial
                      que alcanza aproximadamente <strong>51.27 millones</strong> después de 21 años (punto rojo). Este valor se compara con el  <strong>valor esperado de 51.74 millones </strong>
                      (punto azul), observándose una diferencia de solo <strong>3.90% </strong> lo que sugiere una desviación más notable.</p>

                      <li className="flex flex-row items-center gap-6">
                        <div className="w-1/3 flex justify-center items-center">
                          <p className="text-sm text-center">
                            <strong>Pareja 3 de datos de población de <br />
                              Corea del sur </strong>
                          </p>
                        </div>
                        <div className="w-2/3 aspect-video relative flex justify-center">
                          <Image
                              src="/materials/Pareja3.png"
                              alt="Proyección desde 49.94 millones con tasa r=0.0005"
                              width={400}
                              height={200}
                              className="object-contain"
                          />
                        </div>
                      </li> <p className="text-slate-600">
                        Utilizando una población inicial de <strong>49.94 millones</strong> y una tasa de crecimiento calculada a partir de datos históricos (30 años),
                        el modelo predice <strong> 51.15 millones</strong> tras 21 años (punto negro). Este resultado se contrasta con el valor documentado de
                        <strong>51.74 millones</strong> (punto amarillo). El modelo de la pareja 3 logra una predicción razonablemente precisa, con un error
                        relativo porcentual de <strong>2.38%</strong>.</p>

                      <li className="flex flex-row items-center gap-6 mt-8">
                        <div className="w-1/3 flex justify-center items-center">
                          <p className="text-sm text-center">
                            <strong>Pareja 4 de datos de población de <br />
                              Corea del sur </strong>
                          </p>
                        </div>
                        <div className="w-2/3 aspect-video relative flex justify-center">
                          <Image
                              src="/materials/Pareja4.png"
                              alt="Modelo ajustado con 51.36 millones iniciales y r=0.0002"
                              width={400}
                              height={200}
                              className="object-contain"
                          />
                        </div>
                      </li> <p className="text-slate-600">
                      Con una población base de <strong> 51.36 millones</strong> y una tasa de crecimiento mínima (calculada en 48 años),
                      la proyección a 21 años arroja <strong> 51.73 millones</strong> (punto magenta). Este valor casi coincide con el
                      <strong> 51.74 millones</strong> esperado (punto cyan), registrando un error relativo de solo <strong>0.32%</strong>,
                      lo que refleja una precisión excepcional</p>

                      <li className="flex flex-row items-center gap-6 mt-8">
                        <div className="w-1/3 flex justify-center items-center">
                          <p className="text-sm text-center">
                            <strong>Pareja 5 de datos de población de <br />
                              Corea del sur </strong>
                          </p>
                        </div>
                        <div className="w-2/3 aspect-video relative flex justify-center">
                          <Image
                              src="/materials/Pareja5.png"
                              alt="Modelo desde 49.31 millones con tasa r=0.0009"
                              width={400}
                              height={200}
                              className="object-contain"
                          />
                        </div>
                      </li><p className="text-slate-600">
                        Partiendo de <strong>49.31 millones</strong> y una tasa de crecimiento moderada (derivada de 24 años de datos),
                        la predicción a 21 años es de <strong>51.08 millones</strong> (punto azul). Al compararla con el valor real
                        (<strong>51.74 millones</strong>, punto verde). Este modelo intermedio, correspondiente a la pareja 5, mantiene un buen nivel de precisión con un error relativo porcentual de <strong>2.62%</strong>.</p>
                    </ul>

                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Qué nos dice el modelo sobre el crecimiento poblacional</AccordionTrigger>
                  <AccordionContent>
                    <h3 className="text-lg font-semibold mt-2 mb-1">Reflexión Final</h3>
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        <strong>Modelado Matemático del Crecimiento Poblacional:</strong>
                        Se aplicó un modelo matemático basado en ecuaciones diferenciales para representar el crecimiento de la población de Corea del Sur entre los años 2001 y 2021.
                        Usando el método de separación de variables, se obtuvo una solución analítica que permite proyectar la población en distintos momentos del tiempo, facilitando el estudio del comportamiento poblacional en el largo plazo.
                      </li>
                      <li>
                        <strong>Estimaciones y Comparaciones con Datos Reales:</strong>
                        El modelo se aplicó a cinco conjuntos diferentes de datos, cada uno con un valor inicial distinto. A partir de estos valores, se realizaron predicciones para un periodo de 21 años.
                        Estas proyecciones fueron luego comparadas con los datos reales observados para evaluar el grado de precisión del modelo en cada caso.
                      </li>
                      <li>
                        <strong>Margen de Error y Validación del Modelo:</strong>
                        En cada conjunto, se calculó el error relativo porcentual entre la predicción y el valor real. Esto permitió medir la desviación y validar qué tan acertado fue el modelo.
                        Se observó que, aunque el modelo representa bien la tendencia general del crecimiento poblacional, pueden existir desviaciones debido a factores externos como políticas de natalidad, migraciones o cambios económicos y sociales.
                      </li>
                      <li>
                        <strong>Visualización y Análisis Gráfico:</strong>
                        Se crearon gráficos para cada pareja de datos, lo que permitió observar con claridad cómo evolucionaba la población según el modelo en comparación con los datos reales.
                        Esta representación visual ayudó a confirmar que el comportamiento del crecimiento es, en la mayoría de los casos, de tipo exponencial y facilitó la identificación de las diferencias entre las predicciones y la realidad.
                      </li>
                      <li>
                        <strong>Importancia de los Datos Iniciales:</strong>
                        Se evidenció que la precisión de las predicciones depende en gran medida del valor inicial utilizado para el modelado.
                        La elección de diferentes periodos de referencia afecta directamente el cálculo de la tasa de crecimiento, lo que puede generar variaciones en los resultados proyectados.
                      </li>
                    </ol>

                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </CardContent>
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
                  <h4 className="font-medium mb-2">Quiz Interactivo</h4>
                  <p className="text-slate-600 mb-4">
                    Pon a prueba tus conocimientos respondiendo la siguiente pregunta de opción múltiple sobre el modelo de crecimiento exponencial.
                  </p>
                  <MultipleChoiceQuiz />
                </div>
              </div>
            </CardContent>
            <CardFooter>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export function MultipleChoiceQuiz() {
  // Las preguntas y respuestas
  const preguntas = [
    {
      pregunta: <>
        <strong>¿Qué papel juegan los valores iniciales en la precisión del modelo de crecimiento
          poblacional aplicado a Corea del Sur? </strong>
      </>,

      opciones: [
        { id: 'a', texto: <span> No tienen impacto porque el modelo es independiente de los datos iniciales.</span> },
        { id: 'b', texto: <span>Se utilizan únicamente para comparar con otros países.</span> },
        { id: 'c', texto: <span>Solo influyen si se usan gráficos.</span> },
        { id: 'd', texto: <span>Son fundamentales, ya que afectan la tasa de crecimiento y las predicciones finales.</span> }
      ],
      respuestaCorrecta: "d",
      explicacion: (
          <ol className="list-decimal pl-6 space-y-1 text-slate-700">
            <p>Explicación</p>
            <li> <strong>En las conclusiones se resalta que los valores iniciales influyen directamente en la tasa de crecimiento
              calculada y, por lo tanto, en la precisión del modelo. Diferencias en los periodos de referencia afectan la estimación,
              lo que genera variaciones en los resultados.</strong> </li>
          </ol>
      )
    },
    {
      pregunta: <>
            <strong>2. ¿Cuál fue el margen de error relativo porcentual más bajo registrado en las predicciones de población utilizando el modelo?</strong>
          </>,
      opciones: [
        { id: 'a', texto: <span><InlineMath math="0.32%" /></span> },
        { id: 'b', texto: <span><InlineMath math="1.65%" /></span> },
        { id: 'c', texto: <span><InlineMath math="0.02%" /></span> },
        { id: 'd', texto: <span><InlineMath math="0.89%" /></span> }
      ],
      respuestaCorrecta: "a",
      explicacion: (
          <ol className="list-decimal pl-6 space-y-1 text-slate-700">
            <li><strong>En la pareja 4, se obtuvo un error relativo de solo <InlineMath math="0.32% "/>, lo que indica una coincidencia casi perfecta entre la predicción
              del modelo y el valor esperado. Esto reflejó una alta precisión del modelo cuando se usan datos extendidos y tasas de crecimiento mínimas.
            </strong></li>
          </ol>
      )
    },
    {
      pregunta: <>
        <strong>3. ¿Cuál es una de las ventajas de la visualización gráfica en este análisis del crecimiento poblacional? </strong>
      </>,
      opciones: [
        { id: 'a', texto: <span>Permite reemplazar completamente el modelo matemático.</span> },
        { id: 'b', texto: <span>Sirve para ocultar errores de cálculo.</span> },
        { id: 'c', texto: <span>Facilita la observación de tendencias y la comparación entre valores estimados y reales. </span> },
        { id: 'd', texto: <span>Elimina la necesidad de datos históricos.</span> }
      ],
      respuestaCorrecta: "c",
      explicacion: (
          <ol className="list-decimal pl-6 space-y-1 text-slate-700">
            <li><strong>Las conclusiones destacan que los gráficos ayudan a visualizar el comportamiento del modelo y a
              detectar diferencias entre las proyecciones y los datos reales, lo que permite un análisis más claro y
              efectivo de la tendencia poblacional.</strong> </li>
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
        <h2 className="text-2xl font-bold">
          Modelo de Crecimiento Logístico
        </h2>

        <p className="text-slate-600">
          La <strong>ecuación logística</strong> surge como una alternativa realista al <strong>crecimiento exponencial</strong>,
          que solo funciona en condiciones ideales con recursos infinitos. En la naturaleza, factores como <strong>el alimento
          limitado, el espacio físico</strong> e interacciones biológicas regulan inevitablemente el aumento poblacional.
          Este modelo matemático captura esa dinámica mediante un enfoque que combina dos elementos clave: una <strong> tasa
          de crecimiento inicial</strong> y un <strong>factor de corrección</strong> que se activa según la densidad poblacional.
        </p>

        <div className="aspect-video relative flex justify-center">
          <Image
              src="/materials/crecimiento_logistico.png"
              alt="Crecimiento Poblacional"
              width={400}
              height={200}
              className="object-contain"
          />
        </div>

        <p className="text-slate-600">
          Matemáticamente, la ecuación incorpora un <strong>término de autorregulación</strong>. A bajas poblaciones, el crecimiento
          se asemeja al exponencial, pero a medida que la cantidad de individuos se aproxima a la <strong>capacidad de carga</strong>
          del entorno (máximo sostenible), este término reduce progresivamente la tasa de crecimiento. Esto evita que la población
          sobrepase los límites que el ecosistema puede soportar, reflejando la <strong>competencia por recursos escasos</strong>.
        </p>

        <p className="text-slate-600">
          El resultado es una <strong>curva en forma de "S"</strong> característica. Inicia con una fase acelerada, donde los
          recursos abundantes permiten una expansión rápida. Luego, conforme la población crece, la <strong>escasez relativa
          de recursos</strong> frena el ritmo de aumento hasta estabilizarse. En este equilibrio, <strong>nacimientos y muertes</strong>
          se compensan, manteniendo la población cercana a la capacidad de carga sin colapsos abruptos.
        </p>

        <p className="text-slate-600">
          Este modelo no solo describe dinámicas biológicas, sino que también se aplica en campos como <strong>epidemiología o
          economía</strong>. Su <strong>simplicidad</strong> y capacidad para modelar transiciones entre fases de crecimiento
          y estabilidad lo convierten en una <strong>herramienta fundamental</strong> para entender sistemas bajo restricciones.
        </p>

        <h3 className="text-lg font-semibold mt-2 mb-2">Ecuación Logística</h3>

        <p className="flex justify-center mb-6 mt-6"> <InlineMath math="\frac{dP}{dt} = rP (1 \frac{P}{K}"/></p>

        <Tabs defaultValue="temas" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mt-6">
          <TabsTrigger value="temas">Contenido Teórico</TabsTrigger>
            <TabsTrigger value="ejercicios">Ejercicios Prácticos</TabsTrigger>
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
                    <AccordionTrigger>Resolviendo la ecuación</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal list-inside">
                        <li><strong> Planteamiento de la ecuación diferencial:</strong> <br/> <br/>La ecuación logística es: </li>
                        <p className="flex justify-center mt-6 text-lg"> <InlineMath math="\frac{dP}{dt} = rP (1 - \frac{P}{K})"/></p>

                        <p className="mb-4">Donde: </p>
                        <ol>
                          <li className="mb-4"> <InlineMath math="P(t)"/> representa la población en el tiempo t</li>
                          <li className="mb-4"> <InlineMath math="r"/> es la tasa de crecimiento.</li>
                          <li className="mb-4"> <InlineMath math="K"/> es la capacidad de carga, el valor máximo que puede alcanzar la población.</li>
                        </ol>

                        <li className="mt-4"><strong> Separación de variables</strong> <br/> <br/> Reescribimos la ecuación para que todos los términos con P queden en un lado y t en el otro: </li>
                        <p className="flex justify-center mt-6 text-lg"> <InlineMath math="\frac{dP}{P\left(1-\frac{P}{K}\right)}" /></p>

                        <li className="mt-4">
                          <strong>Descomposición en fracciones parciales</strong><br/><br/>

                          <p>Reescribimos el término del lado izquierdo:</p>
                          <p className="flex justify-center mt-4 text-lg">
                            <InlineMath math="\frac{1}{P\left(1-\frac{P}{K}\right)} = \frac{1}{P(K - P)}"/>
                          </p>

                          <p className="mt-4">Buscamos constantes <InlineMath math="A"/> y <InlineMath math="B"/> tales que:</p>
                          <p className="flex justify-center mt-4 text-lg">
                            <InlineMath math="\frac{1}{P(K - P)} = \frac{A}{P} + \frac{B}{K - P}"/>
                          </p>

                          <p className="mt-4">Multiplicamos ambos lados por <InlineMath math="P(K - P)"/> para eliminar denominadores:</p>
                          <p className="flex justify-center mt-4 text-lg">
                            <InlineMath math="1 = A(K - P) + BP"/>
                          </p>

                          <p className="mt-6"><strong>Determinación de las constantes:</strong></p>
                          <ul className="list-disc list-inside ml-8 mt-2 space-y-4">
                            <li>
                              <span className="font-semibold">Caso 1:</span> Si <InlineMath math="P = 0"/>:
                              <div className="ml-4 mt-2">
                                <InlineMath math="1 = A(K - 0) + B(0) \Rightarrow 1 = AK \Rightarrow A = \frac{1}{K}"/>
                              </div>
                            </li>

                            <li>
                              <span className="font-semibold">Caso 2:</span> Si <InlineMath math="P = K"/>:
                              <div className="ml-4 mt-2">
                                <InlineMath math="1 = A(K - K) + BK \Rightarrow 1 = BK \Rightarrow B = \frac{1}{K}"/>
                              </div>
                            </li>
                          </ul>

                          <p className="mt-6">Sustituyendo <InlineMath math="A"/> y <InlineMath math="B"/>:</p>
                          <p className="flex justify-center mt-4 text-lg">
                            <InlineMath math="\frac{1}{P(K - P)} = \frac{\frac{1}{K}}{P} + \frac{\frac{1}{K}}{K - P}" />
                          </p>
                        </li>

                        <li className="mt-6">
                          <strong>Integración</strong><br/><br/>

                          <p>Reescribimos la ecuación usando la descomposición en fracciones parciales:</p>
                          <p className="flex justify-center mt-4 text-lg">
                            <InlineMath math="\int \left( \frac{1}{K} \cdot \frac{1}{P} + \frac{1}{K} \cdot \frac{1}{K - P} \right)\, dP = \int rdt" />                          </p>

                          <p className="mt-4 mb-4">Separamos la integral y factorizamos <InlineMath math="\frac{1}{k}"/></p>
                          <p className="flex justify-center mt-4 text-lg">
                            <InlineMath math="\frac{1}{K} \int \frac{1}{P}\, dP + \frac{1}{K} \int \frac{1}{K-P}\, dP = \int rdt" />                          </p>

                          <p className="mt-6">Resolvemos las integrales:</p>
                          <p className="flex justify-center mt-6 text-lg"> <InlineMath math="\frac{1}{K} \ln|P|  - \frac{1}{K} \ln|K - P| = rt + C" /></p>



                          <p className="mt-4 text-sm text-gray-600">* Usamos la propiedad: <InlineMath math="\ln a - \ln b = \ln \frac{a}{b}"/></p>
                          <p className="flex justify-center mt-4 text-lg"><InlineMath math="\ln\left|\frac{P}{K-P}\right| = K(rt + C)"/></p>
                        </li>

                        <li className="mt-8">
                          <strong>Aplicación de la condición inicial</strong><br/><br/>

                          <p>Con <InlineMath math="P(0) = P_0"/> sustituimos <InlineMath math="t = 0"/> y <InlineMath math="P = P_0"/>:</p>
                          <p className="flex justify-center mt-4 text-lg">
                            <InlineMath math="\ln |\frac{P_0}{K-P_0}| = C"/>
                          </p>

                          <p className="mt-6">Por simplicidad, definimos <InlineMath math="C = \ln C''"/> donde <InlineMath math="C' = \frac{P_0}{K-P_0} "/> obteniendo:</p>
                          <p className="flex justify-center mt-4 text-lg">
                            <InlineMath math="\ln|\frac{P}{K-P} = rt + \ln C'"/>
                          </p>

                          <p className="mt-6">Aplicamos exponencial a ambos lados:</p>
                          <p className="flex justify-center mt-4 text-lg">
                            <InlineMath math="\frac{P}{K-P} = \ln C' e^{rt}"/>
                          </p>

                          <p className="mt-4">Despejando <InlineMath math="P"/> obtenemos finalmente:</p>
                          <p className="flex justify-center mt-4 text-lg font-semibold">
                            <InlineMath math="\frac{P}{K-P} = \frac{P_0}{K-P_0}e^rt "/>
                          </p>
                        </li>

                        <li className="mt-8">
                          <strong>Despejando P:</strong><br/><br/>

                          <p>Multiplicamos ambos lados por K-P:</p>
                          <p className="flex justify-center mt-4 text-lg">
                            <InlineMath math="P = (K - P) \frac{P_0}{K - P_0} e^{rt}"/>
                          </p>

                          <p className="mt-6">Expandiendo:</p>
                          <p className="flex justify-center mt-4 text-lg">
                            <InlineMath math="P + P \frac{P_0}{K - P_0} e^{rt} = K \frac{P_0}{K - P_0} e^{rt}"/>
                          </p>

                          <p className="mt-6">Factorizamos P:</p>
                          <p className="flex justify-center mt-4 text-lg">
                            <InlineMath math="P \left(1 + \frac{P_0}{K - P_0} e^{rt}\right) = K \frac{P_0}{K - P_0} e^{rt}"/>
                          </p>

                          <p className="mt-6">Dividimos:</p>
                          <p className="flex justify-center mt-4 text-lg font-semibold">
                            <InlineMath math="P(t) = \frac{K}{1 + \left(\frac{K - P_0}{P_0}\right) e^{-rt}}"/>
                          </p>
                        </li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>Selección de Datos</AccordionTrigger>
                    <AccordionContent>
                      <h3 className="text-lg font-semibold mt-2 mb-1">Datos con Menor Variación</h3>

                      <div className="aspect-video relative flex justify-center">
                        <Image
                            src="/materials/datos_menor_variacion.png"
                            alt="Crecimiento Poblacional"
                            width={500}
                            height={300}
                            className="object-contain"
                        />
                      </div>

                      <p className='mb-4'>Una vez que resolvimos la ecuación diferencial logística, nuestro siguiente paso fue
                        determinar qué parejas de datos históricos se ajustaban mejor a las predicciones de nuestro modelo
                        poblacional. Para ello, comparamos los valores reales de población en diferentes momentos con las cinco
                        soluciones que obtuvimos del modelo.</p>

                      <p className='mb-4'>Para asegurar que las parejas de datos seleccionadas fueran realmente representativas
                        del comportamiento que describe el modelo, establecimos un umbral de variación. Consideramos que una pareja
                        de datos era consistente con el modelo si la diferencia entre los valores observados y los valores predichos
                        por el modelo no excedía el 10%. Este criterio nos permitió filtrar las parejas de datos y enfocarnos en
                        aquellas que mostraban una mayor concordancia con las dinámicas poblacionales modeladas.</p>

                      <p className='mb-4'>Tras realizar esta comparación, identificamos que las parejas de datos etiquetadas como
                        "Pareja 1" y "Pareja 2" fueron las que presentaron la menor variación con respecto a las soluciones de
                        nuestro modelo. Esto significa que estas dos parejas de datos históricos son las que mejor reflejan el
                        comportamiento poblacional que describe la ecuación diferencial logística que hemos resuelto, lo que las
                        convierte en las más consistentes con nuestro modelo.</p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>Aplicación del Modelo Logístico</AccordionTrigger>
                    <AccordionContent>
                      <h3 className="text-lg font-semibold mt-2 mb-1"> Proyección Poblacional</h3>
                      <p className="mb-4">Para proyectar la población de Corea del Sur en el año 2024, se empleó un modelo logístico basado
                        en datos históricos de dos periodos: 2001-2004 y 2017-2020. El primer paso consistió en determinar la tasa de
                        crecimiento inherente al modelo a partir de estos datos. Una vez calculada esta tasa, se utilizó para realizar una
                        predicción específica de la población para el año 2024.</p>

                      <p className="mb-4">La evolución de esta proyección se visualizó mediante una curva de crecimiento característica del
                        modelo logístico. En este gráfico, también se destacó el valor puntual de la predicción para el año 2024, así como
                        la línea que representa la capacidad máxima de población que el modelo estima para Corea del Sur.</p>

                      <p className="mb-4">Finalmente, el proceso arrojó un valor estimado de la población para el año 2024. Este resultado
                        permite evaluar la precisión del modelo al compararlo con el dato real de la población de Corea del Sur para ese año,
                        que fue de 51.697.213 habitantes.</p>

                      <p className="mb-4">A continuación, se detalla la aplicación de la ecuación logística utilizando los datos correspondientes
                        al primer periodo analizado (2001-2004).</p>

                      <ul className="space-y-6">
                        <li className="flex flex-row items-center gap-6">
                          <div className="w-1/3 flex justify-center items-center">
                            <p className="text-sm text-center">
                              <strong>Comparación de datos <br />
                                Población Corea del sur </strong>
                            </p>
                          </div>
                          <div className="w-2/3 aspect-video relative flex justify-center">
                            <Image
                                src="/materials/Pareja1_2.png"
                                alt="Crecimiento Poblacional"
                                width={400}
                                height={200}
                                className="object-contain"
                            />
                          </div>
                        </li> <p className="text-slate-600">
                        El gráfico ilustra la proyección del crecimiento poblacional de Corea del Sur, partiendo de <strong> 47.37 millones
                        de habitantes en el año 2001</strong>. Utilizando un modelo logístico, se estima que la población alcanzará aproximadamente
                        <strong>50.7 millones</strong> para el año 2024 (punto azul). La línea punteada roja indica la capacidad de carga teórica del
                        modelo, fijada en <strong>52 millones de habitantes</strong>. La ecuación en la parte superior describe matemáticamente esta proyección
                        en función del tiempo (t). Teniendo un margen de error en la predicción para 2024 es de <strong>1.86%</strong> </p>

                        <li className="flex flex-row items-center gap-6">
                          <div className="w-1/3 flex justify-center items-center">
                            <p className="text-sm text-center">
                              <strong>Comparación de datos <br />
                                Población Corea del sur </strong>
                            </p>
                          </div>
                          <div className="w-2/3 aspect-video relative flex justify-center">
                            <Image
                                src="/materials/Pareja2_2.png"
                                alt="Crecimiento Poblacional"
                                width={400}
                                height={200}
                                className="object-contain"
                            />
                          </div>
                        </li> <p className="text-slate-600">
                        El gráfico presenta la proyección del crecimiento poblacional de Corea del Sur, comenzando con <strong>51.36 millones de habitantes en 2017
                        </strong>. Basándose en un modelo logístico, se estima una población de aproximadamente <strong> 52 millones</strong> para el año 2024
                        (punto rojo). La capacidad máxima de carga que el modelo sugiere es de <strong>52 millones de habitantes</strong>, representada por la línea
                        discontinua azul. La fórmula matemática en la parte superior describe esta proyección a lo largo del tiempo (t). El margen de error en la predicción para 2024 es de 0.46%
                      </p>

                        <li className="flex flex-row items-center gap-6">
                          <div className="w-1/3 flex justify-center items-center">
                            <p className="text-sm text-center">
                              <strong>Comparación de datos <br />
                                Población Corea del sur </strong>
                            </p>
                          </div>
                          <div className="w-2/3 aspect-video relative flex justify-center">
                            <Image
                                src="/materials/comparacion_modelos_logisticos.png"
                                alt="Proyección desde 49.94 millones con tasa r=0.0005"
                                width={400}
                                height={200}
                                className="object-contain"
                            />
                          </div>
                        </li> <p className="text-slate-600">
                        El gráfico superpone dos proyecciones del crecimiento poblacional de Corea del Sur, ambas basadas en el modelo logístico pero calibradas
                        con diferentes conjuntos de datos históricos. La curva azul se basa en datos de 2001-2004, mientras que la curva verde utiliza datos de
                        2017-2020. Ambas curvas se extienden desde el año 2000 hasta 2025, permitiendo una comparación visual de sus trayectorias. Los puntos azules
                        y rojos indican las proyecciones puntuales para el año 2024 según cada conjunto de datos. La línea roja discontinua representa la capacidad
                        de carga estimada en <strong>52 millones de habitantes</strong>.
                      </p>

                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>Análisis Comparativo de Modelos de Crecimiento</AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <h3 className="text-lg font-semibold mt-2 mb-1">Comparación de Modelos</h3>
                        <p className="mb-2">
                          En este estudio, se llevó a cabo un análisis exhaustivo de diferentes modelos matemáticos diseñados para comprender y predecir la evolución de la población en Corea del Sur. El objetivo principal fue evaluar la capacidad de estos modelos para replicar la realidad, comparando sus proyecciones con datos históricos concretos. La precisión de cada modelo se cuantificó mediante el cálculo del margen de error entre sus predicciones y los valores reales observados. Se consideraron fundamentalmente dos tipos de modelos:
                        </p>
                        <ol className="list-decimal ml-6 mb-2">
                          <li>El <strong>Modelo de Crecimiento Poblacional Simple</strong>, el cual asume una expansión demográfica constante y sin la influencia de factores limitantes externos.</li>
                          <li>El <strong>Modelo de Crecimiento Logístico</strong>, que introduce una perspectiva más realista al incorporar variables restrictivas como la capacidad de carga del entorno y la disponibilidad de recursos esenciales.</li>
                        </ol>

                        <h3 className="text-lg font-semibold mt-2 mb-1">Resultados y Validación</h3>
                        <p className="mb-2">
                          Al aplicar ambos modelos a los datos históricos de población de Corea del Sur desde el año 2001 hasta el 2021, se evidenció que el modelo de crecimiento logístico ofrecía predicciones que se ajustaban de manera más precisa a la trayectoria real de la población. No obstante, se observó una sensibilidad importante en la exactitud de las predicciones del modelo logístico, la cual dependía directamente de la selección de los valores iniciales utilizados para su calibración y del periodo específico de datos empleado para este ajuste.
                        </p>

                        <h3 className="text-lg font-semibold mt-2 mb-1">Análisis del Margen de Error</h3>
                        <p className="mb-2">
                          Con el fin de determinar la fiabilidad de cada modelo, se procedió al cálculo de los errores relativos porcentuales. Esto se realizó comparando las predicciones de población para el año 2024 generadas por cada modelo con el valor real de la población en ese mismo año. Los márgenes de error resultantes para cada variación de los modelos fueron los siguientes:
                        </p>

                        <h4 className="font-semibold mt-2 mb-1">Modelo de Crecimiento Poblacional Simple</h4>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Error 1 (E1): 1.65%</li>
                          <li>Error 2 (E2): 3.90%</li>
                          <li>Error 3 (E3): 2.38%</li>
                          <li>Error 4 (E4): 0.32% (El margen de error más bajo para este tipo de modelo)</li>
                          <li>Error 5 (E5): 2.62%</li>
                        </ul>

                        <h4 className="font-semibold mt-2 mb-1">Modelo de Crecimiento Logístico</h4>
                        <ul className="list-disc ml-6 mb-2">
                          <li>Calibrado con datos de 2001-2004: 1.65%</li>
                          <li>Calibrado con datos de 2017-2020: 0.46% (El margen de error más bajo para este tipo de modelo)</li>
                        </ul>

                        <p className="mb-2">
                          El análisis reveló que ciertas configuraciones de datos condujeron a una menor discrepancia entre las predicciones y los valores reales. En particular, la variante del modelo poblacional identificada como <strong>E4 (con un error de tan solo 0.32%)</strong> y la versión del modelo logístico ajustada con los datos del periodo <strong>2017-2020 (con un error de 0.46%)</strong> demostraron ser las más precisas. Este hallazgo subraya la importancia crítica de una selección cuidadosa de los parámetros y los datos de calibración para optimizar la capacidad predictiva de los modelos.
                        </p>

                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>Modelo Más Preciso</AccordionTrigger>
                    <AccordionContent>
                      <h3 className="text-lg font-semibold mt-2 mb-1"> El Modelo Más Adecuado para la Proyección Poblacional</h3>
                      <p className="mb-2">
                        En base a la evidencia exhaustiva recopilada en este análisis comparativo, se concluye que el <strong>modelo de crecimiento logístico</strong>, especialmente cuando se calibra utilizando los datos del periodo comprendido entre <strong>2017 y 2020</strong>, se presenta como la herramienta más adecuada y robusta para describir y proyectar la dinámica de la población en Corea del Sur. Si bien una de las variantes del modelo poblacional simple (E4) exhibió un margen de error ligeramente inferior en la predicción para el año 2024, es crucial reconocer que el modelo logístico ofrece una representación intrínsecamente más realista de las complejas interacciones y limitaciones que influyen en el crecimiento poblacional a largo plazo. Al considerar factores como la capacidad de carga del entorno y la disponibilidad de recursos, el modelo logístico proporciona proyecciones que son inherentemente más coherentes y fiables a medida que se extiende el horizonte temporal de la predicción. Por esta razón, se recomienda el uso del modelo logístico para futuras estimaciones y análisis de la población surcoreana.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

              </CardContent>
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
                    <h4 className="font-medium mb-2">Quiz Interactivo</h4>
                    <p className="text-slate-600 mb-4">
                      Pon a prueba tus conocimientos respondiendo la siguiente pregunta de opción múltiple sobre el modelo de crecimiento exponencial.
                    </p>
                    <MultipleChoiceQuiz2 />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
  )
}

export function MultipleChoiceQuiz2() {
  // Las preguntas y respuestas actualizadas
  const preguntas = [
    {
      pregunta: (
        <strong>
          1. ¿Cuál fue el propósito de calcular el error relativo porcentual entre los valores estimados y los valores reales de la población coreana durante el Segundo Corte?
        </strong>
      ),

      opciones: [
        { id: 'a', texto: <span>Medir la precisión del modelo matemático para validar su capacidad predictiva.</span> },
        { id: 'b', texto: <span>Averiguar si la población creció en número par o impar de personas.</span> },
        { id: 'c', texto: <span>Hallar la población de Corea del Norte.</span> },
        { id: 'd', texto: <span>Calcular el promedio de edad de la población.</span> }
      ],
      respuestaCorrecta: "a",
      explicacion: (
        <ol className="list-decimal pl-6 space-y-1 text-slate-700">
          <p>Explicación</p>
          <li>
            <strong>
              El error relativo permite ver cuán bien el modelo predice la población real; una diferencia pequeña valida la utilidad predictiva del modelo matemático.
            </strong>
          </li>
        </ol>
      )
    },
    {
      pregunta: (
        <strong>
          2. Cuando se estimaron los valores de la población desde diferentes años iniciales (“pares de años”) en el Segundo Corte, ¿qué impacto se observó en la tasa de crecimiento ‘r’ y en el ajuste del modelo?
        </strong>
      ),
      opciones: [
        { id: 'a', texto: <span>La tasa de crecimiento fue idéntica y el ajuste siempre perfecto.</span> },
        { id: 'b', texto: <span>No hubo impacto si los años iniciales eran distintos.</span> },
        { id: 'c', texto: <span>Cambiar el año inicial produjo variaciones en la tasa de crecimiento y la precisión del modelo.</span> },
        { id: 'd', texto: <span>El modelo dejó de funcionar y no arrojó resultados.</span> }
      ],
      respuestaCorrecta: "c",
      explicacion: (
        <ol className="list-decimal pl-6 space-y-1 text-slate-700">
          <p>Explicación</p>
          <li>
            <strong>
              Al cambiar el par de años desde los cuales se estima la tasa de crecimiento, los resultados y la precisión del modelo también cambian; esto evidencia que los valores iniciales tienen un efecto relevante en la predicción.
            </strong>
          </li>
        </ol>
      )
    },
    {
      pregunta: (
        <strong>
          3. Durante el Segundo Corte, ¿cuál fue uno de los motivos para recalcular el modelo usando diferentes periodos de referencia en lugar de solo uno?
        </strong>
      ),
      opciones: [
        { id: 'a', texto: <span>Para ocupar espacio en la presentación.</span> },
        { id: 'b', texto: <span>Comprobar cómo la elección de valores iniciales afecta la fiabilidad de las predicciones y el error relativo.</span> },
        { id: 'c', texto: <span>Cambiar los datos para obtener mejores resultados finales.</span> },
        { id: 'd', texto: <span>Reducir el valor de la población total.</span> }
      ],
      respuestaCorrecta: "b",
      explicacion: (
        <ol className="list-decimal pl-6 space-y-1 text-slate-700">
          <p>Explicación</p>
          <li>
            <strong>
              Al recalcular el modelo con diferentes periodos de referencia, se analiza cómo cambia la precisión y se valida la robustez del modelo frente a distintas condiciones iniciales.
            </strong>
          </li>
        </ol>
      )
    }
  ];

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

function TercerCorteSection() {
  return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Transformada de Laplace con la Ecuación Poblacional</h2>

        <div className="aspect-video relative flex justify-center">
          <Image
              src="/materials/laplace.png"
              alt="Crecimiento Poblacional"
              width={500}
              height={300}
              className="object-contain"
          />
        </div>

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
                  <AccordionTrigger>Ecuación a resolver</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold">
                        Transformada de Laplace con la Ecuación Poblacional
                      </h2>
                    
                      <p className="text-slate-600">
                        A continuación, resolveremos paso a paso la ecuación diferencial que modela el crecimiento poblacional. Para ello, utilizaremos la transformada de Laplace en su forma general. Esta solución será aplicable a cualquier par de datos que consideremos de nuestra tabla poblacional.
                      </p>
                    
                      <p className="text-slate-600">
                        La ecuación poblacional que vamos a resolver es una ecuación diferencial de primer orden que describe cómo cambia la población con el tiempo:
                      </p>
                    
                      <div className="flex justify-center my-4">
                        <span className="text-lg font-medium text-slate-700 p-3 bg-slate-100 rounded-md shadow">
                          <InlineMath math="\frac{dP}{dt} = rP" />
                        </span>
                      </div>
                    
                      <p className="text-slate-600">Donde:</p>
                      <ul className="list-disc list-inside text-slate-600 space-y-1 pl-4">
                        <li>
                          <InlineMath math="P" /> representa la población en un tiempo <InlineMath math="t" /> dado.
                        </li>
                        <li>
                          <InlineMath math="\frac{dP}{dt}" /> es la tasa de cambio de la población con respecto al tiempo.
                        </li>
                        <li>
                          <InlineMath math="r" /> es la tasa de crecimiento poblacional, la cual necesitamos calcular a partir de los datos proporcionados.
                        </li>
                      </ul>
                    
                      <h3 className="text-xl font-semibold pt-4">
                        Cálculo de la Tasa de Crecimiento (<InlineMath math="r" />)
                      </h3>
                    
                      <p className="text-slate-600">
                        La ecuación de crecimiento poblacional, cuando se resuelve directamente, tiene la forma:
                      </p>
                      <div className="flex justify-center my-4">
                        <span className="text-lg font-medium text-slate-700 p-3 bg-slate-100 rounded-md shadow">
                          <InlineMath math="P(t) = P(0)e^{rt}" />
                        </span>
                      </div>
                    
                      <p className="text-slate-600">
                        Donde <InlineMath math="P(t)" /> es la población en el tiempo <InlineMath math="t" />, y <InlineMath math="P(0)" /> es la población inicial (en <InlineMath math="t=0" />).
                        Para ilustrar el cálculo de <InlineMath math="r" />, usaremos los datos del "Pareja 1":
                      </p>
                      <ul className="list-disc list-inside text-slate-600 space-y-1 pl-4 my-2">
                        <li>
                          Año 2001 (<InlineMath math="t=0" />): Población <InlineMath math="P(0) = 47,370,000" />
                        </li>
                        <li>
                          Año 2004 (<InlineMath math="t=3" /> trimestres desde el inicio del 2001): Población <InlineMath math="P(3) = 48,083,000" />
                        </li>
                      </ul>
                    
                      <p className="text-slate-600">
                        Sustituyendo estos valores en la ecuación:
                      </p>
                      <div className="flex justify-center my-2">
                        <span className="text-md font-medium text-slate-700">
                          <InlineMath math="48,083,000 = 47,370,000 \cdot e^{r \cdot 3}" />
                        </span>
                      </div>
                    
                      <p className="text-slate-600">
                        Para despejar <InlineMath math="r" />, primero dividimos ambos lados por <InlineMath math="47,370,000" /> :
                      </p>
                      <div className="flex justify-center my-2">
                        <span className="text-md font-medium text-slate-700">
                          <InlineMath math="\frac{48,083,000}{47,370,000} = e^{3r}" />
                        </span>
                      </div>
                      <div className="flex justify-center my-2">
                        <span className="text-md font-medium text-slate-700">
                          <InlineMath math="1.01505 \approx e^{3r}" />
                        </span>
                      </div>
                    
                      <p className="text-slate-600">
                        Luego, aplicamos el logaritmo natural (<InlineMath math="\ln" />) a ambos lados de la ecuación para bajar el exponente:
                      </p>
                      <div className="flex justify-center my-2">
                        <span className="text-md font-medium text-slate-700">
                          <InlineMath math="\ln(1.01505) = \ln(e^{3r})" />
                        </span>
                      </div>
                      <div className="flex justify-center my-2">
                        <span className="text-md font-medium text-slate-700">
                          <InlineMath math="\ln(1.01505) = 3r" />
                        </span>
                      </div>
                    
                      <p className="text-slate-600">
                        Finalmente, calculamos <InlineMath math="r" /> :
                      </p>
                      <div className="flex justify-center my-2">
                        <span className="text-md font-medium text-slate-700">
                          <InlineMath math="r = \frac{\ln(1.01505)}{3}" />
                        </span>
                      </div>
                      <div className="flex justify-center my-2">
                        <span className="text-md font-medium text-slate-700 p-2 bg-slate-100 rounded-md shadow">
                          <InlineMath math="r \approx 0.004983" />
                        </span>
                      </div>
                    
                      <h3 className="text-xl font-semibold pt-4">
                        Transformada de Laplace de la Ecuación Diferencial
                      </h3>
                    
                      <p className="text-slate-600">
                        Ahora, con el valor de <InlineMath math="r" /> calculado, aplicaremos la transformada de Laplace a nuestra ecuación diferencial original: <InlineMath math="\frac{dP(t)}{dt} = rP(t)" />
                      </p>
                    
                      <p className="text-slate-600">
                        Recordemos las propiedades de la transformada de Laplace:
                      </p>
                      <ul className="list-disc list-inside text-slate-600 space-y-1 pl-4">
                        <li>
                          La transformada de la derivada <InlineMath math="\frac{dP(t)}{dt}" /> es <InlineMath math="\mathcal{L}\{\frac{dP(t)}{dt}\} = sP(s) - P(0)" />, donde <InlineMath math="P(s)" /> es la transformada de Laplace de <InlineMath math="P(t)" />, y <InlineMath math="P(0)" /> es la condición inicial. En nuestro caso, <InlineMath math="P(0) = 47,370,000" /> (población en <InlineMath math="t=0" />).
                        </li>
                        <li>
                          La transformada de <InlineMath math="rP(t)" /> es <InlineMath math="\mathcal{L}\{rP(t)\} = rP(s)" />, ya que <InlineMath math="r" /> es una constante.
                        </li>
                      </ul>
                    
                      <p className="text-slate-600">
                        Aplicando la transformada a ambos lados de la ecuación diferencial, obtenemos:
                      </p>
                      <div className="flex justify-center my-4">
                        <span className="text-lg font-medium text-slate-700 p-3 bg-slate-100 rounded-md shadow">
                          <InlineMath math="sP(s) - P(0) = rP(s)" />
                        </span>
                      </div>
                    
                      <p className="text-slate-600">
                        Sustituimos los valores de <InlineMath math="P(0) = 47,370,000" /> y <InlineMath math="r \approx 0.004983" /> :
                      </p>
                      <div className="flex justify-center my-2">
                        <span className="text-md font-medium text-slate-700">
                          <InlineMath math="sP(s) - 47,370,000 = 0.004983 P(s)" />
                        </span>
                      </div>
                    
                      <h3 className="text-xl font-semibold pt-4">
                        Resolver para <InlineMath math="P(s)" />
                      </h3>
                    
                      <p className="text-slate-600">
                        Ahora, nuestro objetivo es despejar <InlineMath math="P(s)" /> de la ecuación.
                        Reorganizamos los términos para agrupar aquellos que contienen <InlineMath math="P(s)" /> :
                      </p>
                      <div className="flex justify-center my-2">
                        <span className="text-md font-medium text-slate-700">
                          <InlineMath math="sP(s) - 0.004983 P(s) = 47,370,000" />
                        </span>
                      </div>
                      <p className="text-slate-600">Factorizamos <InlineMath math="P(s)" /> :</p>
                      <div className="flex justify-center my-2">
                        <span className="text-md font-medium text-slate-700">
                          <InlineMath math="P(s)(s - 0.004983) = 47,370,000" />
                        </span>
                      </div>
                      <p className="text-slate-600">
                        Finalmente, dividimos para obtener <InlineMath math="P(s)" /> :
                      </p>
                      <div className="flex justify-center my-4">
                        <span className="text-lg font-medium text-slate-700 p-3 bg-slate-100 rounded-md shadow">
                          <InlineMath math="P(s) = \frac{47,370,000}{s - 0.004983}" />
                        </span>
                      </div>
                    
                      <h3 className="text-xl font-semibold pt-4">
                        Aplicar la Transformada Inversa de Laplace
                      </h3>
                    
                      <p className="text-slate-600">
                        Para obtener la solución <InlineMath math="P(t)" /> en el dominio del tiempo, aplicamos la transformada inversa de Laplace a <InlineMath math="P(s)" />.
                        Recordamos que la transformada inversa de Laplace de una función de la forma <InlineMath math="\frac{A}{s-a}" /> es <InlineMath math="A e^{at}" />.
                      </p>
                    
                      <p className="text-slate-600">
                        En nuestro caso, <InlineMath math="A = 47,370,000" /> y <InlineMath math="a = 0.004983" />. Por lo tanto, la transformada inversa es:
                      </p>
                      <div className="flex justify-center my-2">
                        <span className="text-md font-medium text-slate-700">
                          <InlineMath math="\mathcal{L}^{-1}\{P(s)\} = \mathcal{L}^{-1}\{\frac{47,370,000}{s - 0.004983}\}" />
                        </span>
                      </div>
                      <p className="text-slate-600">
                        Esto nos da la solución para la población en función del tiempo:
                      </p>
                      <div className="flex justify-center my-4">
                        <span className="text-lg font-medium text-slate-700 p-3 bg-slate-100 rounded-md shadow">
                          <InlineMath math="P(t) = 47,370,000 e^{0.004983t}" />
                        </span>
                      </div>
                      <p className="text-slate-600">
                        Esta ecuación nos permite modelar el crecimiento poblacional de Corea del Sur basándonos en los datos iniciales y la tasa de crecimiento calculada, utilizando el método de la transformada de Laplace.
                      </p>

                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Parejas a resolver</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-12">
                      <li className="flex flex-col md:flex-row items-center gap-6">
                        <div className="md:w-1/3 flex justify-center items-center text-center">
                          <p className="text-slate-700 dark:text-slate-300">
                            <strong>Proyección Poblacional de Corea del Sur <br /> (Período 2001-2004)</strong>
                          </p>
                        </div>
                        <div className="md:w-2/3 aspect-video relative flex justify-center">
                          <Image
                              src="/materials/pareja1_3.png"
                              alt="Gráfica del crecimiento poblacional de Corea del Sur (2001-2004)"
                              width={500}
                              height={300}
                              className="object-contain rounded-lg shadow-md"
                          />
                        </div>
                      </li>
                      <li className="px-4 md:px-8">
                        <p className="text-slate-600 dark:text-slate-400 text-justify">
                          La gráfica superior ilustra el modelo de crecimiento poblacional exponencial para Corea del Sur, utilizando datos del período 2001-2004.
                          Se observa que la población inicial en 2001 (<InlineMath math="t=0"/>) era de aproximadamente <strong>47.37 millones</strong> de habitantes.
                          Para el año 2004 (<InlineMath math="t=3"/> años después), la población alcanzó los <strong>48.083 millones</strong>.
                          La línea verde representa la trayectoria de crecimiento continuo basada en la ecuación <InlineMath math="P(t) = 47,370,000 \cdot e^{0.0050t}"/>,
                          donde <InlineMath math="t"/> es el tiempo en años desde 2001. Los puntos rojos destacan los datos observados en 2001 y 2004 que se utilizaron para calibrar este modelo.
                          Este tipo de modelo asume que la tasa de crecimiento es proporcional al tamaño de la población, lo que resulta en un aumento cada vez más rápido con el tiempo si no existen factores limitantes.
                        </p>
                      </li>

                      <li className="flex flex-col md:flex-row items-center gap-6 pt-8">
                        <div className="md:w-1/3 flex justify-center items-center text-center">
                          <p className="text-slate-700 dark:text-slate-300">
                            <strong>Proyección Poblacional de Corea del Sur <br /> (Período 2005-2008)</strong>
                          </p>
                        </div>
                        <div className="md:w-2/3 aspect-video relative flex justify-center">
                          <Image
                              src="/materials/pareja2_3.png"
                              alt="Gráfica del crecimiento poblacional de Corea del Sur (2005-2008)"
                              width={500}
                              height={300}
                              className="object-contain rounded-lg shadow-md"
                          />
                        </div>
                      </li>
                      <li className="px-4 md:px-8">
                        <p className="text-slate-600 dark:text-slate-400 text-justify mb-8">
                          Esta segunda gráfica muestra un modelo de crecimiento poblacional exponencial similar, pero calibrado con datos del período 2005-2008.
                          En el año 2005 (<InlineMath math="t=0"/> para este modelo particular), la población inicial se registra en <strong>48.185 millones</strong> de habitantes.
                          Tres años después, en 2008 (<InlineMath math="t=3"/>), la población ascendió a <strong>49.055 millones</strong>.
                          La curva magenta sigue la ecuación <InlineMath math="P(t) = 48,185,000 \cdot e^{0.0060t}"/>, donde <InlineMath math="t"/> representa los años transcurridos desde 2005.
                          Los rombos azules marcan los puntos de datos de 2005 y 2008. Comparando la tasa de crecimiento (el coeficiente de <InlineMath math="t"/> en el exponente)
                          con la del período anterior, se observa una ligera aceleración en la tasa de crecimiento durante este intervalo. Ambas gráficas demuestran cómo el modelo exponencial puede ajustarse a diferentes segmentos temporales, reflejando las dinámicas poblacionales específicas de cada período.
                        </p>
                      </li>
                    </ul>

                    <h4 className="text-base font-bold mb-5">Es importante aclarar que los procedimientos presentados al inicio de
                      este tercer corte pueden aplicarse a cualquier pareja de datos. Lo único que varía en cada caso es:</h4>

                    <ul className="list-disc list-inside">
                      <li>El dato inicial P(0).</li>
                      <li>El valor de P(3), correspondiente a la población tres años después.</li>
                      <li>La tasa de crecimiento r, que se calcula individualmente para cada pareja de datos.</li>
                    </ul> <p className="mt-6"><strong>Una vez definidos estos valores, el uso de la transformada de Laplace y su inversa se realiza de manera análoga con los datos correspondientes.</strong></p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Transformada de Laplace con la ecuacion Logistica y Conclusiones </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold">Resolviendo la Ecuación Logística con la Transformada de Laplace: Pareja 1 de Datos</h2>

                      <p className="text-slate-600">
                        La ecuación logística es un modelo matemático que describe el crecimiento de una población considerando una capacidad de carga, es decir, un límite máximo que la población puede alcanzar. A continuación, vamos a resolver esta ecuación utilizando la Transformada de Laplace para el primer conjunto de datos.
                      </p>

                      <div className="aspect-video relative flex justify-center">
                        <Image
                            src="/materials/pareja_laplace.png"
                            alt="Crecimiento Poblacional"
                            width={600}
                            height={300}
                            className="object-contain"
                        />
                      </div>

                      <h3 className="text-xl font-semibold mt-6">Ecuación logística: Pareja 1</h3>
                      <p className="text-slate-600">La ecuación diferencial que modela el crecimiento logístico es:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="\frac{dP}{dt} = rP \left(1 - \frac{P}{K}\right)" />
                      </div>

                      <p className="text-slate-600">Donde:</p>
                      <ul className="list-disc list-inside text-slate-600 space-y-1">
                        <li><InlineMath math="P(t)" />: es la población en el tiempo <InlineMath math="t" />.</li>
                        <li><InlineMath math="r" />: es la tasa de crecimiento (para la Pareja 1, <InlineMath math="r = 0.45589" />).</li>
                        <li><InlineMath math="K" />: es la capacidad de carga (en este caso, <InlineMath math="K = 52,000,000" />).</li>
                        <li><InlineMath math="P_0" />: es la población inicial (para 2001, <InlineMath math="P_0 = 47,370,000" />).</li>
                        <li><InlineMath math="P_t" />: es la población en el año 2004 ( <InlineMath math="P_t = 48,083,000" />). (Este dato se usa para calcular 'r', pero no directamente en la forma general de la ecuación diferencial una vez 'r' es conocido).</li>
                      </ul>

                      <h3 className="text-xl font-semibold mt-6">Transformación de Bernoulli</h3>
                      <p className="text-slate-600">
                        Para resolver esta ecuación diferencial, primero la convertiremos en una ecuación diferencial lineal de primer orden mediante la transformación de Bernoulli.
                        Comenzamos con la ecuación:
                      </p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="\frac{dP}{dt} = rP \left(1 - \frac{P}{K}\right)" />
                      </div>
                      <p className="text-slate-600">Distribuyendo el término <InlineMath math="rP" />:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="\frac{dP}{dt} = rP - \frac{rP^2}{K}" />
                      </div>
                      <p className="text-slate-600">Ahora, para aplicar la transformación de Bernoulli, introducimos un cambio de variable. Definimos una nueva variable <InlineMath math="Y" /> como:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="Y = \frac{1}{P}" />
                      </div>
                      <p className="text-slate-600">La derivada de <InlineMath math="Y" /> con respecto al tiempo <InlineMath math="t" /> es:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="\frac{dY}{dt} = -\frac{1}{P^2} \frac{dP}{dt}" />
                      </div>
                      <p className="text-slate-600">
                        Sustituimos <InlineMath math="\frac{dP}{dt}" /> de la ecuación logística en esta expresión:
                      </p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="-\frac{1}{P^2} \frac{dP}{dt} = -\frac{r}{P} + \frac{r}{K}" />
                      </div>
                      <p className="text-slate-600">
                        Dado que <InlineMath math="\frac{dY}{dt} = -\frac{1}{P^2} \frac{dP}{dt}" /> y <InlineMath math="Y = \frac{1}{P}" />, podemos reescribir la ecuación anterior como:
                      </p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="\frac{dY}{dt} = -rY + \frac{r}{K}" />
                      </div>
                      <p className="text-slate-600">
                        Reorganizando los términos para que se asemeje a una ecuación lineal estándar <InlineMath math="\frac{dY}{dt} + P(t)Y = Q(t)" />, obtenemos:
                      </p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="\frac{dY}{dt} + rY = \frac{r}{K}" />
                      </div>
                      <p className="text-slate-600">
                        Esta es una ecuación diferencial lineal en <InlineMath math="Y" />, que podemos resolver utilizando el método de la Transformada de Laplace.
                      </p>

                      <h3 className="text-xl font-semibold mt-6">Aplicación de la Transformada de Laplace</h3>
                      <p className="text-slate-600">
                        Primero, aplicamos la Transformada de Laplace (denotada por <InlineMath math="\mathcal{L}" />) a ambos lados de la ecuación linealizada:
                      </p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="\mathcal{L}\left\{\frac{dY}{dt} + rY\right\} = \mathcal{L}\left\{\frac{r}{K}\right\}" />
                      </div>
                      <p className="text-slate-600">Utilizando la propiedad de linealidad y la transformada de una derivada, esto nos da:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="sY(s) - y(0) + rY(s) = \frac{r}{Ks}" />
                      </div>
                      <p className="text-slate-600">
                        Donde <InlineMath math="Y(s)" /> es la Transformada de Laplace de <InlineMath math="y(t)" />, y <InlineMath math="y(0)" /> es el valor inicial de <InlineMath math="y(t)" />.
                        Recordemos que <InlineMath math="Y = \frac{1}{P}" />, por lo tanto, <InlineMath math="y(0) = \frac{1}{P(0)} = \frac{1}{P_0}" />.
                        Para la Pareja 1, <InlineMath math="P_0 = 47,370,000" />. Entonces:
                      </p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="y(0) = \frac{1}{47,370,000}" />
                      </div>
                      <p className="text-slate-600">Reorganizando la ecuación para despejar <InlineMath math="Y(s)" />:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="Y(s)(s+r) = \frac{r}{Ks} + y(0)" />
                      </div>
                      <div className="flex justify-center p-4">
                        <InlineMath math="Y(s)(s+r) = \frac{r}{Ks} + \frac{1}{P_0}" />
                      </div>
                      <p className="text-slate-600">Despejando <InlineMath math="Y(s)" />:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="Y(s) = \frac{r}{Ks(s+r)} + \frac{1}{P_0(s+r)}" />
                      </div>
                      <p className="text-slate-600">Sustituyendo el valor de <InlineMath math="P_0" />:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="Y(s) = \frac{r}{K s(s+r)} + \frac{1}{47,370,000(s+r)}" />
                      </div>

                      <h3 className="text-xl font-semibold mt-6">Simplificación mediante fracciones parciales</h3>
                      <p className="text-slate-600">
                        Para encontrar la transformada inversa de Laplace, necesitamos expresar el término <InlineMath math="\frac{r}{Ks(s+r)}" /> en fracciones parciales.
                        Asumimos la forma:
                      </p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="\frac{r/K}{s(s+r)} = \frac{A}{s} + \frac{B}{s+r}" />
                      </div>
                      <p className="text-slate-600">Multiplicando ambos lados por <InlineMath math="s(s+r)" /> para eliminar los denominadores, obtenemos:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="\frac{r}{K} = A(s+r) + Bs" />
                      </div>
                      <p className="text-slate-600">Expandiendo el lado derecho:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="\frac{r}{K} = As + Ar + Bs" />
                      </div>
                      <p className="text-slate-600">Agrupamos los términos en función de <InlineMath math="s" />:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="\frac{r}{K} = (A+B)s + Ar" />
                      </div>
                      <p className="text-slate-600">Para que esta igualdad se cumpla para todos los valores de <InlineMath math="s" />, los coeficientes de las potencias de <InlineMath math="s" /> deben ser iguales en ambos lados. Esto nos da un sistema de ecuaciones:</p>
                      <ul className="list-disc list-inside text-slate-600 space-y-1">
                        <li>Coeficiente de <InlineMath math="s^1" />: <InlineMath math="A+B = 0" /></li>
                        <li>Coeficiente de <InlineMath math="s^0" /> (término constante): <InlineMath math="Ar = \frac{r}{K}" /></li>
                      </ul>
                      <p className="text-slate-600">De la segunda ecuación, si <InlineMath math="r \neq 0" />, podemos despejar <InlineMath math="A" />:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="A = \frac{1}{K}" />
                      </div>
                      <p className="text-slate-600">De la primera ecuación, <InlineMath math="B = -A" />, entonces:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="B = -\frac{1}{K}" />
                      </div>
                      <p className="text-slate-600">
                        Por lo tanto, la descomposición en fracciones parciales es:
                      </p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="\frac{r/K}{s(s+r)} = \frac{1/K}{s} - \frac{1/K}{s+r}" />
                      </div>
                      <p className="text-slate-600">
                        Ahora sustituimos esto de nuevo en la expresión para <InlineMath math="Y(s)" />:
                      </p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="Y(s) = \left( \frac{1/K}{s} - \frac{1/K}{s+r} \right) + \frac{1/P_0}{s+r}" />
                      </div>
                      <p className="text-slate-600">
                        Agrupando los términos con <InlineMath math="(s+r)" /> en el denominador:
                      </p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="Y(s) = \frac{1}{Ks} + \left(\frac{1}{P_0} - \frac{1}{K}\right)\frac{1}{s+r}" />
                      </div>
                      <p className="text-slate-600">
                        Sustituyendo los valores de <InlineMath math="K = 52,000,000" />, <InlineMath math="P_0 = 47,370,000" />, y <InlineMath math="r = 0.45589" /> (para la Pareja 1):
                      </p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="A = \frac{1}{52,000,000} \approx 1.9231 \times 10^{-8}" />
                      </div>
                      <div className="flex justify-center p-4">
                        <InlineMath math="\frac{1}{P_0} - \frac{1}{K} = \frac{1}{47,370,000} - \frac{1}{52,000,000} \approx 2.111 \times 10^{-8} - 1.9231 \times 10^{-8} \approx 1.879 \times 10^{-9}" />
                      </div>
                      <p className="text-slate-600">Reemplazamos estos valores en <InlineMath math="Y(s)" />:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="Y(s) \approx \frac{1.9231 \times 10^{-8}}{s} + \frac{1.879 \times 10^{-9}}{s+0.45589}" />
                      </div>

                      <h3 className="text-xl font-semibold mt-6">Transformada Inversa de Laplace</h3>
                      <p className="text-slate-600">
                        Al aplicar la transformada inversa de Laplace a <InlineMath math="Y(s)" /> para obtener <InlineMath math="y(t) = \mathcal{L}^{-1}\{Y(s)\}" />, utilizamos las transformadas conocidas:
                        <InlineMath math="\mathcal{L}^{-1}\left\{\frac{1}{s}\right\} = 1" /> y <InlineMath math="\mathcal{L}^{-1}\left\{\frac{1}{s-a}\right\} = e^{at}" />.
                      </p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="y(t) = \frac{1}{K} + \left(\frac{1}{P_0} - \frac{1}{K}\right)e^{-rt}" />
                      </div>
                      <p className="text-slate-600">
                        Recordemos que <InlineMath math="y(t) = \frac{1}{P(t)}" />. Entonces, invertimos esta función para resolver para <InlineMath math="P(t)" />:
                      </p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="P(t) = \frac{1}{y(t)} = \frac{1}{\frac{1}{K} + \left(\frac{1}{P_0} - \frac{1}{K}\right)e^{-rt}}" />
                      </div>
                      <p className="text-slate-600">La forma final para <InlineMath math="P(t)" />, luego de simplificar, es la solución estándar de la ecuación logística:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="P(t) = \frac{K}{1 + \left(\frac{K}{P_0} - 1\right)e^{-rt}}" />
                      </div>

                      <p className="text-slate-600">Con los valores para la Pareja 1:</p>
                      <ul className="list-disc list-inside text-slate-600 space-y-1">
                        <li><InlineMath math="K = 52,000,000" /></li>
                        <li><InlineMath math="P_0 = 47,370,000" /></li>
                        <li><InlineMath math="r = 0.45589" /></li>
                      </ul>
                      <p className="text-slate-600">Sustituyendo estos valores en la ecuación de <InlineMath math="P(t)" />:</p>
                      <div className="flex justify-center p-4">
                        <InlineMath math="P(t) = \frac{52,000,000}{1 + \left(\frac{52,000,000}{47,370,000} - 1\right)e^{-0.45589t}}" />
                      </div>

                      <p className="text-slate-600 mt-4 font-semibold">
                        Es importante destacar que la solución para la Pareja 2 sigue exactamente los mismos pasos mostrados anteriormente. Lo único que cambia son los valores de los datos iniciales (<InlineMath math="P_0" /> correspondiente al año 2017) y la tasa de crecimiento <InlineMath math="r" /> (calculada para el periodo 2017-2020), correspondientes a esa nueva pareja de datos. La capacidad de carga <InlineMath math="K" /> se mantiene igual.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Solucion de parejas en gráficos</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-6">
                      <li className="flex flex-row items-center gap-6">
                        <div className="w-1/3 flex justify-center items-center">
                          <p className="text-sm text-center">
                            <strong>
                              Proyección Poblacional de Corea del Sur <br />
                              (Período 2001-2004)
                            </strong>
                          </p>
                        </div>
                        <div className="w-2/3 aspect-video relative flex justify-center">
                          <Image
                              src="/materials/pareja1_4.png"
                              alt="Gráfica del crecimiento poblacional de Corea del Sur (2001-2004)"
                              width={400}
                              height={200}
                              className="object-contain"
                          />
                        </div>
                      </li>
                      <p className="text-slate-600">
                        La gráfica superior ilustra el modelo de crecimiento poblacional exponencial para Corea del Sur, utilizando
                        datos del período 2001-2004. Se observa que la población inicial en 2001 (<InlineMath math="t=0" />) era de
                        aproximadamente <strong>47.37 millones</strong> de habitantes. Para el año 2004 (<InlineMath math="t=3" /> años
                        después), la población alcanzó los <strong>48.083 millones</strong>. La línea verde representa la trayectoria de
                        crecimiento continuo basada en la ecuación <InlineMath math="P(t) = 47,370,000 \cdot e^{0.0050t}" />, donde{" "}
                        <InlineMath math="t" /> es el tiempo en años desde 2001. Los puntos rojos destacan los datos observados en 2001
                        y 2004 que se utilizaron para calibrar este modelo.
                      </p>

                      <li className="flex flex-row items-center gap-6">
                        <div className="w-1/3 flex justify-center items-center">
                          <p className="text-sm text-center">
                            <strong>
                              Proyección Poblacional de Corea del Sur <br />
                              (Período 2005-2008)
                            </strong>
                          </p>
                        </div>
                        <div className="w-2/3 aspect-video relative flex justify-center">
                          <Image
                              src="/materials/pareja2_4.png"
                              alt="Gráfica del crecimiento poblacional de Corea del Sur (2005-2008)"
                              width={400}
                              height={200}
                              className="object-contain"
                          />
                        </div>
                      </li>
                      <p className="text-slate-600">
                        Esta segunda gráfica muestra un modelo de crecimiento poblacional exponencial similar, pero calibrado con datos
                        del período 2005-2008. En el año 2005 (<InlineMath math="t=0" /> para este modelo particular), la población
                        inicial se registra en <strong>48.185 millones</strong> de habitantes. Tres años después, en 2008 (
                        <InlineMath math="t=3" />
                        ), la población ascendió a <strong>49.055 millones</strong>. La curva magenta sigue la ecuación{" "}
                        <InlineMath math="P(t) = 48,185,000 \cdot e^{0.0060t}" />, donde <InlineMath math="t" /> representa los años
                        transcurridos desde 2005. Los rombos azules marcan los puntos de datos de 2005 y 2008.
                      </p>

                      <li className="flex flex-row items-center gap-6">
                          <p className="text-sm text-center">
                            <strong>
                              Comparación de datos Población Corea del sur
                            </strong>
                          </p>

                      </li>
                      <p className="text-slate-600 ">
                        El gráfico superpone dos proyecciones del crecimiento poblacional de Corea del Sur, ambas basadas en el modelo
                        logístico pero calibradas con diferentes conjuntos de datos históricos. La curva azul se basa en datos de
                        2001-2004, mientras que la curva verde utiliza datos de 2017-2020. Ambas curvas se extienden desde el año 2000
                        hasta 2025, permitiendo una comparación visual de sus trayectorias. Los puntos azules y rojos indican las
                        proyecciones puntuales para el año 2024 según cada conjunto de datos. La línea roja discontinua representa la
                        capacidad de carga estimada en <strong>52 millones de habitantes</strong>.
                      </p>
                    </ul>

                    <h3 className="text-lg font-bold mt-6 mb-5">Conclusiones</h3>
                    <p className="text-slate-600">
                      Durante el desarrollo de la sección correspondiente al tercer corte, pudimos observar cómo los métodos avanzados de las ecuaciones diferenciales permiten modelar y resolver situaciones complejas del mundo real, como sistemas dinámicos, circuitos eléctricos y procesos físicos diversos. El análisis de estos métodos demostró que, aunque sus procedimientos matemáticos pueden ser exigentes, proporcionan herramientas robustas que permiten comprender y predecir el comportamiento de distintos fenómenos.
                    </p>
                    <p className="text-slate-600 mt-6">
                      Además, la correcta aplicación de estas técnicas fomenta el razonamiento lógico y el pensamiento analítico, habilidades esenciales en la formación de cualquier ingeniero o científico. Finalmente, el uso de ejemplos prácticos y visualizaciones enriqueció el aprendizaje, facilitando la conexión entre la teoría matemática y su utilidad en contextos aplicados.
                    </p>

                  </AccordionContent>
                </AccordionItem>



              </Accordion>
            </CardContent>
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
                    <h4 className="font-medium mb-2">Quiz Interactivo</h4>
                    <p className="text-slate-600 mb-4">
                      Pon a prueba tus conocimientos respondiendo la siguiente pregunta de opción múltiple sobre el modelo de crecimiento exponencial.
                    </p>
                    <MultipleChoiceQuiz3 />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
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


export function MultipleChoiceQuiz3() {
  // Preguntas sobre el método de mínimos cuadrados y ajuste de modelos
  // Las preguntas y respuestas actualizadas
  const preguntas = [
    {
      pregunta: (
          <strong>
            1. ¿Cuál es el objetivo principal del método de mínimos cuadrados?
          </strong>
      ),
      opciones: [
        { id: 'a', texto: <span>Obtener el valor exacto de una variable independiente.</span> },
        { id: 'b', texto: <span>Reducir el error de aproximación en un ajuste de datos experimentales.</span> },
        { id: 'c', texto: <span>Calcular raíces de ecuaciones no lineales.</span> },
        { id: 'd', texto: <span>Hallar el máximo y el mínimo de una función.</span> }
      ],
      respuestaCorrecta: "b",
      explicacion: (
          <ol className="list-decimal pl-6 space-y-1 text-slate-700">
            <p>Explicación</p>
            <li>
              <strong>
                El método de mínimos cuadrados se usa para ajustar una función a datos experimentales minimizando la suma de los cuadrados de las diferencias entre los valores observados y los predichos por el modelo, reduciendo así el error de aproximación.
              </strong>
            </li>
          </ol>
      )
    },
    {
      pregunta: (
          <strong>
            2. ¿Cuál de las siguientes ecuaciones representa una recta ajustada usando el método de mínimos cuadrados para datos <InlineMath math={"(x_i, y_i)"}/> ?
          </strong>
      ),
      opciones: [
        { id: 'a', texto: <span><InlineMath math={"y = mx^2 + c"} /></span> },
        { id: 'b', texto: <span><InlineMath math={"y = a\\sin(x) + b"} /></span> },
        { id: 'c', texto: <span><InlineMath math={"y = mx + b"} /></span> },
        { id: 'd', texto: <span><InlineMath math={"y = ax^3 + bx^2 + cx + d"} /></span> }
      ],
      respuestaCorrecta: "c",
      explicacion: (
          <ol className="list-decimal pl-6 space-y-1 text-slate-700">
            <p>Explicación</p>
            <li>
              <strong>
                El modelo clásico de ajuste lineal por mínimos cuadrados es una ecuación de la forma <InlineMath math={"y = mx + b"} />, donde <InlineMath math={"m"} /> es la pendiente y <InlineMath math={"b"} /> es la ordenada al origen.
              </strong>
            </li>
          </ol>
      )
    },
    {
      pregunta: (
          <strong>
            3. ¿Por qué es importante verificar la dispersión o el error después de aplicar el método de mínimos cuadrados?
          </strong>
      ),
      opciones: [
        { id: 'a', texto: <span>Permite calcular integrales más fácilmente.</span> },
        { id: 'b', texto: <span>Porque ayuda a determinar si el modelo ajustado representa adecuadamente los datos.</span> },
        { id: 'c', texto: <span>Para identificar los valores máximos del conjunto.</span> },
        { id: 'd', texto: <span>Porque reduce el tiempo de cálculo.</span> }
      ],
      respuestaCorrecta: "b",
      explicacion: (
          <ol className="list-decimal pl-6 space-y-1 text-slate-700">
            <p>Explicación</p>
            <li>
              <strong>
                Verificar la dispersión o el error indica si el modelo ajustado es representativo de los datos. Un error pequeño implica un buen ajuste, mientras que uno grande puede requerir otro modelo.
              </strong>
            </li>
          </ol>
      )
    }
  ];


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
