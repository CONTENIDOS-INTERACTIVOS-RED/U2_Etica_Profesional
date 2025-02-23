<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Perfil del profesional con compromiso ético'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El profesional en seguridad y salud en el trabajo (SST) con compromiso ético se distingue por integrar principios fundamentales de calidad humana y profesional en su desempeño. Este perfil no solo prioriza el cumplimiento de las normativas legales, sino también el desarrollo de una cultura organizacional basada en el respeto, la integridad y la responsabilidad compartida.
        h5.mb-4(data-aos="fade-left") Características esenciales del profesional ético en SST
        p(data-aos="fade-left") El profesional ético en el Sistema de Seguridad y Salud en el Trabajo (SST) se caracteriza por cualidades que garantizan un desempeño orientado al bienestar de los trabajadores y al cumplimiento de principios éticos.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/3.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5.mb-4 Calidad como persona y profesional
              ul.lista-ul
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Respeto por los derechos y dignidad de los trabajadores. 
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Empatía y orientación al servicio como pilares de su desempeño.  
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Liderazgo con integridad y actuación como modelo de conducta ética.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/4.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5.mb-4 Compromiso con la confidencialidad y el secreto profesional
              ul.lista-ul
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Manejo responsable de información sensible, como diagnósticos médicos y datos personales.  
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Garantiza un entorno seguro donde los empleados puedan expresar inquietudes sin temor a represalias.  
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Cumple estrictamente con las regulaciones de privacidad y confidencialidad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/5.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5.mb-4 Disposición al trabajo en equipo y colaboración
              ul.lista-ul
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Fomenta la comunicación abierta y el apoyo mutuo en la organización. 
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Reconoce la importancia de la cooperación para prevenir riesgos y promover un ambiente seguro. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/tema2/6.png")
            .col-lg-7.order-lg-1.mb-3.mb-lg-0
              h5.mb-4 Promoción de la cultura de seguridad y salud
              ul.lista-ul
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Involucra a todos los niveles de la organización en la construcción de políticas y prácticas preventivas. 
                li.mb-2.d-flex.bg-color-6
                  i.far.fa-arrow-alt-circle-right 
                  p.mb-0 Fomenta la formación continua y el desarrollo de programas de bienestar físico y mental.
    
    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        h2(data-aos="fade-left") Principios éticos que guían su labor
        p.mb-5.text-bold En el ámbito de la Seguridad y Salud en el Trabajo (SST), los principios éticos de autonomía, beneficencia y justicia desempeñan un papel esencial.

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/7.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Autonomía
                p.mb-0 Respetar el derecho de los trabajadores a tomar decisiones informadas sobre su salud.
                p.mb-0 Fomentar la participación activa en la identificación de riesgos y la elaboración de políticas preventivas.

          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Beneficencia
                p.mb-0 Actuar proactivamente en la identificación y mitigación de riesgos laborales.
                p.mb-0 Promover el bienestar físico y mental de los empleados mediante programas integrales de salud.

          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/9.png" alt="")
              .custom-image-card__text.p-4.text-center
                h5.mb-2 Justicia
                p.mb-0 Garantizar igualdad de condiciones para todos los trabajadores, independientemente de su posición o características personales.
                p.mb-0 Gestionar riesgos y tomar decisiones de manera transparente y equitativa.

    h2(data-aos="fade-left") Habilidades clave del profesional en SST
    p.mb-5 Garantizar la Seguridad y Salud en el Trabajo (SST) requiere un enfoque integral que combine identificación de riesgos, resolución de problemas, promoción del bienestar mental y liderazgo ético.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8 
        AcordionA(tipo="b")
          .div(titulo="Identificación y gestión de riesgos")
            ul.lista-ul
              li.mb-2.d-flex.bg-color-6
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Evaluar condiciones laborales y proponer medidas preventivas y correctivas.  
              li.mb-2.d-flex.bg-color-6
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Implementar inspecciones periódicas para detectar y resolver posibles peligros.
    
          .div(titulo="Capacidad para resolver problemas")
            ul.lista-ul
              li.mb-2.d-flex.bg-color-6
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Abordar situaciones complejas de manera ética, considerando tanto la eficacia como el impacto en los empleados.  
              li.mb-2.d-flex.bg-color-6
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Promover soluciones colaborativas que refuercen el compromiso de los trabajadores con la seguridad.
    
          .div(titulo="Promoción de la salud mental en el trabajo")
            ul.lista-ul
              li.mb-2.d-flex.bg-color-6
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Crear un entorno que fomente la comunicación abierta y el apoyo emocional.   
              li.mb-2.d-flex.bg-color-6
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Implementar políticas que prevengan el estrés y el acoso laboral.
          .div(titulo="Liderazgo ético y compromiso con la mejora continua")
            ul.lista-ul
              li.mb-2.d-flex.bg-color-6
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Establecer políticas y objetivos en SST alineados con la dirección estratégica de la organización.    
              li.mb-2.d-flex.bg-color-6
                i.far.fa-arrow-alt-circle-right 
                p.mb-0 Ser un catalizador de cambio, promoviendo estándares más altos y una cultura organizacional saludable.
    
    h2(data-aos="fade-left") Ética y confidencialidad: elementos críticos
    p.mb-5 El manejo de información sensible, como diagnósticos médicos o situaciones personales que puedan afectar el rendimiento laboral, exige un compromiso ético absoluto. Este profesional debe garantizar que:

    .row.mb-5
      .col-lg-8.mb-3.mn-mb-lg-0
        p.p-3.text-bold.text-white.bg-color-7 La información sea tratada con estricta confidencialidad.
        p.p-3.text-bold.bg-color-9 Los empleados protegidos por su estado de salud no sean objeto de discriminación ni despidos ilegales.
        p.p-3.text-bold.bg-color-8 Se adopten medidas proactivas para evitar repercusiones legales o reputacionales que puedan surgir por un manejo inadecuado de los datos.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/11.png", alt="").mb-4.mb-lg-0
    
    h2(data-aos="fade-left") Impacto del compromiso ético en la organización
    p.mb-5 Un profesional con compromiso ético contribuye significativamente a:

   
    .row.mb-5
      .col-lg-4.text-center.mb-3.mg-lg-0(data-aos="fade-up")
        h5.mb-0.p-4.bg-color-10.pst Crear un entorno laboral seguro y saludable
        div.p-4.bg-color-2.pst-1 
          p.mb-0 Disminuir la incidencia de accidentes y enfermedades laborales.
          p.mb-0 Mejorar la satisfacción y productividad de los empleados.

      .col-lg-4.text-center.mb-3.mg-lg-0(data-aos="fade-down")
        h5.mb-0.py-4.bg-color-9.text-white.pst Fortalecer la confianza y la reputación organizacional
        div.p-4.bg-color-1.pst-1 
          p.mb-0 Desarrollar una cultura de respeto y transparencia.
          p.mb-0 Cumplir con los estándares legales y éticos, proyectando una imagen de responsabilidad social.
      .col-lg-4.text-center.mb-3.mg-lg-0(data-aos="fade-up")
        h5.mb-0.p-4.bg-color-8.pst Fomentar un clima organizacional positivo
        div.p-4.bg-color-5.pst-1 
          p.mb-0 Promover la motivación y el sentido de pertenencia de los empleados.
          p.mb-0 Construir relaciones laborales basadas en la confianza mutua.
    
    .bg-full-width-2.bg-h85
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6(data-aos="fade-left").mb-3.mb-lg-0
            p.mb-0 El profesional en seguridad y salud en el trabajo con compromiso ético no solo protege la integridad de los empleados, sino que también fortalece la sostenibilidad y reputación de la organización. Este perfil combina calidad humana, conocimientos técnicos y principios éticos para abordar los desafíos laborales de manera integral. Al priorizar el bienestar de los trabajadores y fomentar una cultura de seguridad, se convierte en un agente de cambio positivo, contribuyendo al éxito colectivo y al desarrollo de entornos laborales más justos y saludables.
          .col-lg-6(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/tema2/12.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
          

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/44818?page=1" target="_blank" rel="noopener noreferrer") Vallejo Dacosta, R. (2016). Marco jurídico de la seguridad y salud en el trabajo: (3 ed.). Prensas de la Universidad de Zaragoza. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://hbr.org/topic/subject/business-ethics " target="_blank" rel="noopener noreferrer") Business ethics. (2008, 21 marzo). HBR.   
           
            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Z9xyYiv1OO4" target="_blank" rel="noopener noreferrer") Universidad Continental - Modalidad a Distancia. (2021, 29 abril). Ética en la Vida Profesional.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
