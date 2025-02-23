<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Desarrollo de valores'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    .bg-color-11.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-lg-2
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg.order-lg-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Hablar de valores es fundamental en nuestra sociedad. Aunque es un concepto ampliamente reconocido, a menudo su definición carece de profundidad debido a su relación con construcciones culturales y subjetivas que varían entre personas y contextos. Los valores no son universales ni fijos; están influenciados por experiencias personales, tradiciones, creencias y entornos sociales.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además, su interpretación y prioridad pueden cambiar con el tiempo, dependiendo de las dinámicas culturales. Por ejemplo, mientras en algunas sociedades la libertad individual es prioritaria, en otras la cohesión comunitaria es más valorada.
        p(data-aos="fade-left") Los valores son principios fundamentales que guían el comportamiento y las decisiones humanas, promoviendo la convivencia y orientando hacia un propósito en la vida.
    
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/06oM3mE3TUU?si=yhgAqrrpr0WzSUtc" title="Los valores: principios que guían el comportamiento humano" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .bg-full-width.bg-color-12.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Los valores pueden ser contradictorios. Por ejemplo, valorar la honestidad y al mismo tiempo sentir presión social para actuar de forma hipócrita genera conflictos intrapersonales que llevan a la reflexión constante sobre nuestras prioridades y acciones.
    
    h2(data-aos="fade-left") Antivalores: Concepto e impacto
    p.mb-5 Los antivalores son actitudes negativas que afectan el bienestar individual y colectivo. Ejemplos incluyen corrupción, egoísmo, intolerancia, desconfianza, violencia y manipulación. Su impacto es significativo:

    .bg-full-width.bg-fondo-4
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Fragmentación social
                p.text-center Generan desconfianza y polarización.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Normalización cultural
                p.text-center Conductas negativas, como la violencia, pueden perpetuarse.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Desplazamiento de valores positivos
                p.text-center reemplazan la solidaridad y el respeto con individualismo y competitividad. 
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Impacto educativo
                p.text-center exponen a los jóvenes a comportamientos que limitan su desarrollo ético.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Perpetuación de desigualdades
                p.text-center fomentan discriminación, racismo e intolerancia.
              
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema3/17.png', alt='')

        h2(data-aos="fade-left") Estrategias para combatir los antivalores
        p.mb-5 Para combatir los antivalores, es esencial implementar estrategias que fomenten una cultura basada en principios éticos y positivos.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5.mb-4 Educación en valores
              p Promover empatía, honestidad y solidaridad mediante programas educativos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5.mb-4 Fomento del diálogo e inclusión
              p Crear espacios para compartir experiencias y celebrar la diversidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5.mb-4 Modelado de comportamientos positivos
              p Los  líderes sociales deben actuar con integridad para inspirar valores positivos. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/13.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5.mb-4 Promoción de la responsabilidad
              p Inculcar un sentido de impacto comunitario mediante voluntariado y servicio.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .py-4.px-5.bg-color-5(data-aos="fade-right")
          h5 Valores en las organizaciones
          p En un contexto organizacional, los valores guían tanto el comportamiento interno como las relaciones externas. Las empresas avanzadas consideran sus vínculos con empleados, clientes y la sociedad, fundamentando sus mejoras en valores específicos como credibilidad, transparencia, equidad y responsabilidad.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/14.png", alt="", data-aos="zoom-in")
    
    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/15.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="19.5%" y="21.5%" numero="+")
                h5 Credibilidad
                p Percepción de prácticas basadas en comunicación, competencia e integridad.
      
              .bg-color-white.box-shadow.p-3(x="80%" y="21%" numero="+")
                h5 Equidad
                p Justicia e imparcialidad en las decisiones organizacionales.
      
              .bg-color-white.box-shadow.p-3(x="96%" y="50%" numero="+")
                h5 Flexibilidad
                p Capacidad de adaptarse a cambios y responder con agilidad a nuevas demandas del entorno.
      
              .bg-color-white.box-shadow.p-3(x="79.5%" y="80.5%" numero="+")
                h5 Respeto
                p Valoración de las opiniones, derechos y diferencias individuales, fomentando la  inclusión.
      
              .bg-color-white.box-shadow.p-3(x="19.5%" y="80.5%" numero="+")
                h5 Responsabilidad
                p Asumir consecuencias de acciones y decisiones, promoviendo prácticas éticas y sostenibles.
              .bg-color-white.box-shadow.p-3(x="4%" y="49.5%" numero="+")
                h5 Honestidad
                p Transparencia y sinceridad en todas las interacciones dentro y fuera de la organización.
    

  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2(data-aos="fade-left")
        h5 Impacto de los valores organizacionales
        p Integrar estos valores genera un ambiente laboral saludable y productivo, fomentando la diversidad, la inclusión, la toma de decisiones informadas y la transparencia. Esto fortalece la confianza y satisfacción laboral, lo que se traduce en mejores resultados empresariales.
        .bg-color-13.mb-3.p-4
          p.mb-0 Los valores son fundamentales para la convivencia y el desarrollo social. Reflexionar sobre ellos permite construir sociedades más justas, equitativas y cohesionadas. 
        p Promover valores positivos y combatir antivalores requiere un esfuerzo colectivo que comienza con la educación, el liderazgo ético y el diálogo inclusivo. Integrar estos principios en contextos organizacionales y educativos fortalece el tejido social y contribuye a un mundo más solidario y humano.

      .col-lg-4.order-1.mb-3.mb-lg-0(data-aos="zoom-in")
        img.img-fluid(src='@/assets/curso/tema3/16.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
          
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/62391?page=67" target="_blank" rel="noopener noreferrer") Peiró i Gregòri, S. (2013). Valores educativos y convivencia: ( ed.). ECU.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.ethicsandcompliance.eu/" target="_blank" rel="noopener noreferrer") Men’s Barbershop - Your Way to a Stylish Look. (s. f.).    
           
            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/spotify.png' :style="{'max-width':'24px'}")
              a(href="https://open.spotify.com/episode/65kJAFCQa4hymiOfwTOSCl?si=vIrXTw8-TbOeT4NakVRj7Q&nd=1&dlsi=58120b0721764679 " target="_blank" rel="noopener noreferrer") Ética profesional. (2022, 7 marzo). Spotify. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Desarrollo de valores',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes características es fundamental en un profesional de seguridad y salud en el trabajo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Capacidad para trabajar solo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Disposición para trabajar en equipo',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Habilidades en la venta',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Conocimiento en marketing',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'La promoción de la salud mental en el trabajo es importante porque:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Solo afecta los empleados en puestos de liderazgo',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Mejora la comunicación y el apoyo emocional',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'No tiene impacto en la productividad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Es un requisito legal únicamente',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: 'La ética profesional en el manejo de quejas implica:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Escuchar sin interrumpir y considerar las preocupaciones de los empleados',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Desestimar las quejas como irrelevantes',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Actuar sin consultar a los afectados',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Tomar decisiones apresuradas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'La confidencialidad en el rol de seguridad y salud en el trabajo es crucial porque:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Permite el acceso a información sensible sin restricciones',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Mantiene la confianza de los empleados y cumple con regulaciones de privacidad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Es irrelevante para el bienestar de los trabajadores',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Facilita el despido de empleados con problemas de salud',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'El liderazgo en el ámbito de la seguridad y salud laboral debe estar alineado con:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Las preferencias personales del líder',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La dirección estratégica de la organización',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Las metas de otros departamentos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La reducción de costos únicamente',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
