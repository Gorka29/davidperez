import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {

  experiencias = [
    {
      nombreEmpresa: 'CD Santurtzi',
      descripcion: 'Responsabilidades: <br> Rehabilitación personalizada para jugadores lesionados, asegurando su retorno seguro a la competición. Diseño e implementación de programas de readaptación física postlesión. Evaluación biomecánica y estrategias preventivas para reducir el riesgo de lesiones comunes en el deporte de alto rendimiento. Colaboración interdisciplinar con entrenadores y médicos del equipo.',
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

  mostrarDetalles(experiencia: any) {
    Swal.fire({
      title: experiencia.nombreEmpresa,
      html: `
        <img src="${experiencia.imgURL}" alt="${experiencia.nombreEmpresa}" class="mx-auto mb-4 w-32 h-32 object-contain">
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
        popup: 'rounded-popup'
      }
    });
  }

}
