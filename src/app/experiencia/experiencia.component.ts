import { Component, OnInit, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Swal from 'sweetalert2';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent implements OnInit, AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  experiencias = [
    {
      nombreEmpresa: 'CD Santurtzi',
      descripcion: '- <b>Asistencia inmediata</b> para jugadores de categorías inferiores. <br> - <b>Rehabilitación</b> y <b>readaptación</b> personalizada.<br> - <b>Colaboración interdisciplinar</b> con cuerpos técnicos del club.',
      periodo: 'Temporada 21/22',
      imgURL: '/assets/img/fotosExperiencias/cdSanturtzi.webp',
      imageLoaded: false
    },
    {
      nombreEmpresa: 'Centro Joseba Alonso Fisioterapia Avanzada',
      descripcion: '- <b>Evaluación</b> y <b>tratamiento</b> con <b>ecografía</b> y <b>técnicas invasivas</b>. <br> - Uso de <b>aparatología avanzada</b> en fisioterapia. <br> - Atención a <b>pacientes privados</b> y de <b>mutuas</b>. <br> - <b>Rehabilitación</b> de pacientes con <b>lesiones traumáticas</b> y <b>postquirúrgicas</b>.',
      periodo: 'Junio 2022 - Julio 2023',
      imgURL: '/assets/img/fotosExperiencias/clinicaJosebaAlonso.webp',
      imageLoaded: false
    },
    {
      nombreEmpresa: 'ITF Getxo',
      descripcion: '- Asistencia inmediata para <b>lesiones musculares</b> y <b>articulares</b> en <b>competición</b>. <br> - Realización de tratamientos <b>preventivos</b> y <b>asesoramiento</b> para evitar <b>lesiones</b> de los <b>tenistas</b>. <br> - Aplicación de técnicas para <b>aliviar fatiga</b> y <b>optimizar rendimiento</b>.',
      periodo: 'Julio 2023',
      imgURL: '/assets/img/fotosExperiencias/itf.webp',
      imageLoaded: false
    },
    {
      nombreEmpresa: 'CD Santurtzi',
      descripcion: '- Creación de <b>planes de recuperación individualizados</b> para la vuelta a la competición. <br> - Atención <b>urgente</b>, <b>rápida</b> y <b>eficaz</b> a jugadores de la cantera. <br> - Soporte al primer equipo, logrando un <b>ascenso a 3ª RFEF</b>.',
      periodo: 'Temporada 23/24',
      imgURL: '/assets/img/fotosExperiencias/cdSanturtzi.webp',
      imageLoaded: false
    },
    {
      nombreEmpresa: 'Clínica Jon Ibañez Fisioterapia',
      descripcion: '- Uso de <b>ecografía</b> y procedimientos invasivos para <b>diagnóstico</b> y <b>recuperación</b>. <br> - Atención a pacientes privados, especialmente <b>deportistas</b>, para <b>rendimiento</b> y <b>recuperación</b>. <br> - Rehabilitación de lesiones traumáticas y postquirúrgicas.',
      periodo: 'Noviembre 2023 - Julio 2024',
      imgURL: '/assets/img/fotosExperiencias/clinica-jon-ibanez.webp',
      imageLoaded: false
    },
    {
      nombreEmpresa: 'Arenas Club de Getxo',
      descripcion: '- Fisioterapeuta y readaptador en <b>2ª RFEF</b>. <br> - Fisioterapeuta del <b>Juvenil División de Honor Nacional</b>. <br> - <b>Recuperación</b> de lesiones de <b>larga duración</b> en jugadores jóvenes. <br> - Diseño de <b>planes preventivos</b> para evitar <b>lesiones</b>.',
      periodo: 'Temporada 23/24',
      imgURL: '/assets/img/fotosExperiencias/arenasClub.webp',
      imageLoaded: false
    },
    {
      nombreEmpresa: 'ITF Getxo',
      descripcion: '- <b>Atención inmediata a tenistas</b> antes y después de la competición. <br> - <b>Recuperación muscular</b> y mejora de <b>rendimiento</b>. <br> - Aplicación de <b>vendajes deportivos</b> para protección en competición.',
      periodo: 'Julio 2024',
      imgURL: '/assets/img/fotosExperiencias/itf.webp',
      imageLoaded: false
    },
    {
      nombreEmpresa: 'Club Portugalete',
      descripcion: '- Fisioterapeuta en <b>3ª RFEF</b>. <br> - Rehabilitación y readaptación de jugadores lesionados. <br> - Trabajo <b>interdisciplinario</b> con profesionales del club. <br> - Diseño de <b>planes preventivos</b> basados en <b>valoraciones neuromusculares</b>.',
      periodo: 'Temporada 24/25',
      imgURL: '/assets/img/fotosExperiencias/clubPortugalete.webp',
      imageLoaded: false
    },
    {
      nombreEmpresa: 'Metropolitan Bilbao',
      descripcion: '- Elaboración y supervisión de <b>planes personalizados</b>. <br> - Uso de <b>técnicas manuales</b>. <br> - Implementación de técnicas invasivas como la <b>neuromodulación</b>. <br> - Realización de <b>vendajes deportivos</b>.',
      periodo: 'Octubre 2024 - Actualidad',
      imgURL: '/assets/img/fotosExperiencias/metropolitan.webp',
      imageLoaded: false
    },
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
      this.experiencias.forEach(experiencia => {
        experiencia.imageLoaded = true;
      });
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const experienciaCards = document.querySelectorAll('.experiencia-card');
      experienciaCards.forEach((card, index) => {
        gsap.set(card, {
          opacity: 0,
          y: 100
        });

        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 65%",
            toggleActions: "play none none reverse",
            markers: true, // Para debug
          }
        });
      });
    }
  }

  mostrarDetalles(experiencia: any) {
    Swal.fire({
      title: experiencia.nombreEmpresa,
      html: `
        <p style="margin-top: -15px;">${experiencia.periodo}</p>
        <img src="${experiencia.imgURL}" alt="${experiencia.nombreEmpresa}" class="mx-auto my-4 w-24 h-24 md:w-32 md:h-32 object-contain">
        <p class="mt-4 text-gray-600 leading-relaxed text-start">${experiencia.descripcion}</p>
      `,
      imageAlt: experiencia.nombreEmpresa,
      showClass: {
        popup: 'animate__animated animate__bounceInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'rounded-popup swal-mobile',
        confirmButton: 'px-4 py-2 font-semibold bg-white border-[2px] border-solid border-[#cdbfb0] text-[#cdbfb0] rounded-lg transition-colors duration-300 hover:bg-[#b5a797] hover:text-white'
      },
      confirmButtonText: 'Cerrar',
    });
  }

}
