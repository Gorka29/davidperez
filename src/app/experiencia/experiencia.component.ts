import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
      puesto: 'Fisioterapeuta',
      descripcion: 'Primer equipo División de Honor Regional y Categorías inferiores',
      periodo: 'Temporada 21/22',
      imgURL: '/assets/img/cdSanturtzi.png'
    },
    {
      nombreEmpresa: 'Centro Joseba Alonso Fisioterapia Avanzada',
      puesto: 'Fisioterapeuta',
      descripcion: 'Descripción de la experiencia',
      periodo: 'Junio 2022 - Julio 2023',
      imgURL: '/assets/img/clinicaJosebaAlonso.png'
    },
    {
      nombreEmpresa: 'ITF Getxo',
      puesto: 'Fisioterapeuta',
      descripcion: 'Descripción de la experiencia',
      periodo: 'Julio 2023',
      imgURL: '/assets/img/itf.png'
    },
    {
      nombreEmpresa: 'CD Santurtzi',
      puesto: 'Fisioterapeuta',
      descripcion: 'Primer equipo División de Honor Regional y Categorías inferiores',
      periodo: 'Temporada 23/24',
      imgURL: '/assets/img/cdSanturtzi.png'
    },
    {
      nombreEmpresa: 'Clínica Jon Ibañez Fisioterapia',
      puesto: 'Fisioterapeuta',
      descripcion: 'Descripción de la experiencia',
      periodo: 'Noviembre 2023 - Julio 2024',
      imgURL: '/assets/img/clinica-jon-ibanez.png'
    },
    {
      nombreEmpresa: 'Arenas Club de Getxo',
      puesto: 'Fisioterapeuta',
      descripcion: 'Primer equipo 2 RFEF y Juvenil División de Honor Nacional',
      periodo: 'Temporada 23/24',
      imgURL: '/assets/img/arenasClub.png'
    },
    {
      nombreEmpresa: 'ITF Getxo',
      puesto: 'Fisioterapeuta',
      descripcion: 'Descripción de la experiencia',
      periodo: 'Julio 2024',
      imgURL: '/assets/img/itf.png'
    },
    {
      nombreEmpresa: 'Club Portugalete',
      puesto: 'Fisioterapeuta',
      descripcion: 'Primer equipo 3 RFEF',
      periodo: 'Temporada 24/25',
      imgURL: '/assets/img/clubPortugalete.png'
    },
    {
      nombreEmpresa: 'Metropolitan Bilbao',
      puesto: 'Fisioterapeuta',
      descripcion: 'Tratamiento de lesiones musculoesqueléticas, rehabilitación post-quirúrgica y terapia manual. Atención personalizada a pacientes y elaboración de planes de tratamiento individualizados.',
      periodo: 'Octubre 2024 - Actualidad',
      imgURL: '/assets/img/metropolitan.png'
    },
  ];

}
