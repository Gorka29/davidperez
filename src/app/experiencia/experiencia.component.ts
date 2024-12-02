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
      imgURL: '/assets/img/cdSanturtzi.png'
    },
    {
      nombreEmpresa: 'Centro Joseba Alonso Fisioterapia Avanzada',
      descripcion: '- Evaluación y tratamiento mediante ecografía y técnicas invasivas. <br> - Uso de aparatología de última generación en fisioterapia. <br> - Atención a pacientes privados y de mutuas. <br> - Rehabilitación de pacientes con lesiones traumáticas y postquirúrgicas.',
      periodo: 'Junio 2022 - Julio 2023',
      imgURL: '/assets/img/clinicaJosebaAlonso.png'
    },
    {
      nombreEmpresa: 'ITF Getxo',
      descripcion: '- Recuperación de lesiones: Asistencia inmediata para lesiones musculares y articulares durante la competición. <br> - Prevención de lesiones: Tratamientos preventivos y asesoramiento para evitar lesiones de los tenistas. <br> - Rehabilitación postpartido: Técnicas de recuperación para aliviar fatiga y optimizar el rendimiento.',
      periodo: 'Julio 2023',
      imgURL: '/assets/img/itf.png'
    },
    {
      nombreEmpresa: 'CD Santurtzi',
      descripcion: '- Atención urgente a jugadores de categorías inferiores: Proporcioné asistencia rápida y eficaz a jóvenes jugadores en su desarrollo. <br> - Rehabilitación y readaptación individualizada: Implementé planes de recuperación personalizados para optimizar la reintegración deportiva. <br> - Asistencia al primer equipo y ascenso logrado: Brindé soporte físico al primer equipo, contribuyendo al ascenso a la 3ª RFEF.',
      periodo: 'Temporada 23/24',
      imgURL: '/assets/img/cdSanturtzi.png'
    },
    {
      nombreEmpresa: 'Clínica Jon Ibañez Fisioterapia',
      descripcion: '- Valoración y tratamiento con ecografía y procedimientos invasivos: Uso de ecografía para diagnóstico y técnicas invasivas para tratar lesiones y mejorar la recuperación. <br> - Atención a pacientes privados, especialmente en el ámbito deportivo: Proporcionar servicios de fisioterapia a pacientes particulares, enfocándose en deportistas para optimizar su rendimiento y recuperación. <br> - Rehabilitación de pacientes con lesiones traumáticas y postquirúrgicas: Diseño de planes de recuperación para personas que sufren lesiones traumáticas o intervenciones quirúrgicas, restaurando su funcionalidad y movilidad.',
      periodo: 'Noviembre 2023 - Julio 2024',
      imgURL: '/assets/img/clinica-jon-ibanez.png'
    },
    {
      nombreEmpresa: 'Arenas Club de Getxo',
      descripcion: '- Fisioterapeuta del equipo en 2ª RFEF. <br> - Responsable de la rehabilitación y readaptación de jugadores lesionados. <br> - Fisioterapeuta del Juvenil División de Honor Nacional. <br> - Encargado de la recuperación y readaptación de jugadores jóvenes con lesiones de larga duración. <br> - Responsable de diseñar planes preventivos para evitar lesiones.',
      periodo: 'Temporada 23/24',
      imgURL: '/assets/img/arenasClub.png'
    },
    {
      nombreEmpresa: 'ITF Getxo',
      descripcion: '- Atención inmediata a los tenistas antes y después de la competición. <br> - Tratamientos de recuperación muscular y mejora de rendimiento. <br> - Aplicación de vendajes deportivos para garantizar la protección durante la competición.',
      periodo: 'Julio 2024',
      imgURL: '/assets/img/itf.png'
    },
    {
      nombreEmpresa: 'Club Portugalete',
      descripcion: '- Fisioterapeuta del equipo en 3ª RFEF. <br> - Encargado de la rehabilitación y readaptación de jugadores lesionados. <br> - Colaboración con los diferentes profesionales del club en trabajo interdisciplinario. <br> - Diseño de planes preventivos basados en valoraciones neuromusculares para prevenir lesiones.',
      periodo: 'Temporada 24/25',
      imgURL: '/assets/img/clubPortugalete.png'
    },
    {
      nombreEmpresa: 'Metropolitan Bilbao',
      descripcion: '- Aplicación de técnicas invasivas: Uso de  neuromodulación para aliviar el dolor muscular, reducir la inflamación y acelerar la recuperación funcional en zonas específicas. <br> - Vendajes neuromusculares: Colocación de cintas elásticas para mejorar la circulación, reducir el dolor, facilitar el movimiento y prevenir lesiones musculares o articulares durante la actividad física. <br> - Técnicas manuales: Masajes, estiramientos y movilizaciones articulares para aliviar tensiones musculares, mejorar la movilidad, reducir el dolor y restaurar la función musculoesquelética. <br> - Gestión de planes de rehabilitación: Diseño y seguimiento de planes personalizados de ejercicios y terapia activa para mejorar la movilidad, fortalecer musculatura y prevenir futuras lesiones.',
      periodo: 'Octubre 2024 - Actualidad',
      imgURL: '/assets/img/metropolitan.png'
    },
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
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
            markers: false, // Para debug
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
        confirmButton: 'bg-[#cdbfb0] hover:bg-[#bfad9c]'
      },
      confirmButtonText: 'Cerrar',
    });
  }

}
