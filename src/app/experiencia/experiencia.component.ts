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
      descripcion: '- Asistencia inmediata para jugadores de categorías inferiores <br> - Rehabilitación y readaptación personalizada <br> - Colaboración interdisciplinar con cuerpos técnicos del club',
      periodo: 'Temporada 21/22',
      imgURL: '/assets/img/cdSanturtzi.png'
    },
    {
      nombreEmpresa: 'Centro Joseba Alonso Fisioterapia Avanzada',
      descripcion: 'Descripción de la experiencia',
      periodo: 'Junio 2022 - Julio 2023',
      imgURL: '/assets/img/clinicaJosebaAlonso.png'
    },
    {
      nombreEmpresa: 'ITF Getxo',
      descripcion: 'Descripción de la experiencia',
      periodo: 'Julio 2023',
      imgURL: '/assets/img/itf.png'
    },
    {
      nombreEmpresa: 'CD Santurtzi',
      descripcion: 'Primer equipo División de Honor Regional y Categorías inferiores',
      periodo: 'Temporada 23/24',
      imgURL: '/assets/img/cdSanturtzi.png'
    },
    {
      nombreEmpresa: 'Clínica Jon Ibañez Fisioterapia',
      descripcion: 'Descripción de la experiencia',
      periodo: 'Noviembre 2023 - Julio 2024',
      imgURL: '/assets/img/clinica-jon-ibanez.png'
    },
    {
      nombreEmpresa: 'Arenas Club de Getxo',
      descripcion: 'Primer equipo 2 RFEF y Juvenil División de Honor Nacional',
      periodo: 'Temporada 23/24',
      imgURL: '/assets/img/arenasClub.png'
    },
    {
      nombreEmpresa: 'ITF Getxo',
      descripcion: 'Descripción de la experiencia',
      periodo: 'Julio 2024',
      imgURL: '/assets/img/itf.png'
    },
    {
      nombreEmpresa: 'Club Portugalete',
      descripcion: 'Primer equipo 3 RFEF',
      periodo: 'Temporada 24/25',
      imgURL: '/assets/img/clubPortugalete.png'
    },
    {
      nombreEmpresa: 'Metropolitan Bilbao',
      descripcion: 'Tratamiento de lesiones musculoesqueléticas, rehabilitación post-quirúrgica y terapia manual. Atención personalizada a pacientes y elaboración de planes de tratamiento individualizados.',
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
        <img src="${experiencia.imgURL}" alt="${experiencia.nombreEmpresa}" class="mx-auto mb-4 w-24 h-24 md:w-32 md:h-32 object-contain">
        <p><strong>${experiencia.periodo}</strong></p>
        <p class="mt-4 text-gray-600 leading-relaxed">${experiencia.descripcion}</p>
      `,
      imageAlt: experiencia.nombreEmpresa,
      showClass: {
        popup: 'animate__animated animate__bounceInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'rounded-popup swal-mobile'
      },
    });
  }

}
