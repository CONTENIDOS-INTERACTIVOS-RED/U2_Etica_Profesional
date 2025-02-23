<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Principios básicos de la ética profesional aplicados a la seguridad y salud en el trabajo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") La ética profesional en el ámbito de la seguridad y salud en el trabajo (SST) es un componente fundamental que guía las decisiones y acciones de los profesionales y las organizaciones, asegurando el respeto a los derechos y la dignidad de los trabajadores. La ética se traduce en principios básicos que fomentan la confianza, la transparencia, el respeto y la responsabilidad compartida entre empleadores y empleados, fortaleciendo la cultura organizacional y promoviendo un entorno laboral saludable.
    
    h2(data-aos="fade-left") Relación entre ética y SST
    p.mb-5 La ética en la SST se basa en valores que orientan la conducta hacia la protección integral del trabajador, no solo cumpliendo con las normativas legales, sino también asumiendo un compromiso genuino con el bienestar físico, mental y social de los empleados.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", alt="").mb-4.mb-lg-0
      .col-lg-8 
        AcordionA(tipo="b")
          .div(titulo="Construcción de confianza")
            p La ética refuerza la credibilidad del profesional y la organización, fomentando relaciones basadas en el respeto mutuo y el compromiso con la seguridad.
    
          .div(titulo="Toma de decisiones responsables")
            p Proporciona un marco para evaluar las consecuencias de las acciones, optando por soluciones que prioricen la integridad y el bienestar de los colaboradores.
    
          .div(titulo="Prevención de riesgos")
            p Actuar éticamente implica identificar, evaluar y mitigar riesgos de manera proactiva, protegiendo tanto a los trabajadores como a la organización.
          .div(titulo="Promoción de un ambiente laboral saludable")
            p Un entorno ético fomenta prácticas que valoran a los empleados, incrementan la satisfacción laboral y potencian la productividad.
          .div(titulo="Impacto en los grupos de interés")
            p La ética laboral trasciende el ámbito organizacional, influyendo positivamente en la sociedad y el medio ambiente.
    
    h2(data-aos="fade-left") Principios éticos aplicados al SST
    p.mb-5 Los principios éticos aplicados al Sistema de Seguridad y Salud en el Trabajo (SST) son fundamentales para garantizar un entorno laboral seguro y equitativo.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5.mb-4 Autonomía
              ul.lista-ul
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Respetar el derecho de los trabajadores a tomar decisiones informadas sobre su salud y seguridad. 
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Facilitar el consentimiento informado proporcionando información clara sobre riesgos y medidas de protección. 
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Fomentar la participación activa en la identificación de riesgos y elaboración de políticas de seguridad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5.mb-4 Beneficencia
              ul.lista-ul
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Actuar en beneficio de los trabajadores implementando medidas preventivas para mitigar riesgos. 
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Promover el bienestar físico y mental a través de programas de salud, ergonomía y apoyo psicológico. 
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Asumir la responsabilidad organizacional de proporcionar los recursos y la capacitación necesarios para garantizar un entorno seguro.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5.mb-4 Justicia
              ul.lista-ul
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Garantizar igualdad de condiciones para todos los trabajadores, independientemente de su puesto o características personales.
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Asegurar la transparencia en la gestión de riesgos, considerando las necesidades y preocupaciones de todos. 
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Promover la responsabilidad compartida entre empleadores y empleados para crear un ambiente laboral seguro.
    
    .bg-full-width-2.bg-fondo-2
      .p-4.p-md-5

        h2(data-aos="fade-left") Normativa en Colombia: Decreto 1072 de 2015
        p El Decreto 1072 establece lineamientos clave para el cumplimiento ético en la SST:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/6.svg" alt="" style="width: 90px")
              h5.text-center Cumplimiento de normas y reglamentos
              p.mb-0.text-center Los colaboradores deben adherirse rigurosamente al SG-SST, reportando cualquier incidente o irregularidad.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/7.svg" alt="" style="width: 90px")
              h5.text-center Uso adecuado de elementos de protección personal (EPP)
              p.mb-0.text-center Los empleados están obligados a mantener y utilizar correctamente los EPP proporcionados.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/8.svg" alt="" style="width: 90px")
              h5.text-center Participación activa
              p.mb-0.text-center Es fundamental asistir a entrenamientos y seguir protocolos establecidos.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/9.svg" alt="" style="width: 90px")
              h5.text-center Responsabilidad en la información
              p.mb-0.text-center Proporcionar datos veraces sobre su estado de salud para facilitar la gestión de riesgos.
    
    h2(data-aos="fade-left") Responsabilidades del empleador en el SG-SST
    p.mb-5 El empleador tiene el deber ético y legal de garantizar un entorno laboral seguro:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8 
        AcordionA(tipo="b")
          .div(titulo="Identificación y control de riesgos")
            p Evaluar peligros asociados a las actividades laborales para prevenir accidentes y enfermedades.
    
          .div(titulo="Cumplimiento normativo")
            p Implementar políticas alineadas con las regulaciones vigentes para garantizar la seguridad y salud en el trabajo.
    
          .div(titulo="Provisión de EPP gratuitos")
            p Proveer equipos de protección adecuados para minimizar riesgos laborales y asegurar la seguridad de los empleados.
          .div(titulo="Fomento de la cultura de seguridad")
            p Promover la participación activa de los empleados en la identificación y gestión de riesgos laborales.
    
    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Impacto de incumplimientos éticos
        p.mb-5 Tanto empleadores como empleados pueden incurrir en conductas que violan principios éticos, como:
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Por parte del empleador
                p.mb-0 Intentos de ahorro mediante el incumplimiento de normativas, desestimación de directrices o falta de priorización de la SST.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/12.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Por parte del empleado
                p.mb-0 Proporcionar información falsa, alterar síntomas o incumplir con los procedimientos establecidos.
    
    p.mb-4 Estas acciones generan desconfianza, afectan la reputación organizacional y pueden acarrear consecuencias legales.

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La ética en la seguridad y salud en el trabajo es un pilar esencial que garantiza no solo el cumplimiento normativo, sino también el bienestar integral de los trabajadores. La aplicación de principios como autonomía, beneficencia y justicia fortalece la confianza mutua, fomenta un clima organizacional saludable y contribuye al desarrollo sostenible de las empresas. Priorizar la ética en el ámbito laboral no es solo una obligación legal, sino un imperativo moral que refuerza la reputación y sostenibilidad organizacional, mientras protege la dignidad y la vida de los empleados.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/38824 " target="_blank" rel="noopener noreferrer") López Zavala, R. (2009). Huellas de la profesionalidad: ética profesional en la formación universitaria: ( ed.). Plaza y Valdés (México). 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.coursera.org/ " target="_blank" rel="noopener noreferrer") Coursera. (s. f.). Coursera | Online Courses & Credentials From Top Educators. Join for Free.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://slack.com/intl/es-co" target="_blank" rel="noopener noreferrer") Slack. (s. f.). Herramientas de administración del trabajo y de productividad con IA. Slack. 
            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=jirP8EIVdqU" target="_blank" rel="noopener noreferrer") Mtro. Luis Eduardo Perez Ortiz Cancino. (2022, 27 julio). La Ética en la Gestión Integral de Riesgos de Desastre.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
