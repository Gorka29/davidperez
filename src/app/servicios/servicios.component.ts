import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {

  serviciosLista = [
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-spreadsheet"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h2"/><path d="M14 13h2"/><path d="M8 17h2"/><path d="M14 17h2"/></svg>',
      titulo: 'EVALUACIÓN INICIAL',
      descripcion: 'Realizo una evaluación exhaustiva de tu estado físico actual, historial médico y objetivos específicos. Esto incluye análisis postural, rango de movimiento, fuerza muscular y patrones de movimiento para crear una base sólida para tu tratamiento.',
      isOpen: false
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>',
      titulo: 'VALORACIÓN NEUROMUSCULAR',
      descripcion: 'Evalúo en profundidad la función de tus músculos y nervios, incluyendo pruebas de fuerza, control motor, reflejos y coordinación. Esta información es crucial para entender cómo tu sistema nervioso interacta con tus músculos.',
      isOpen: false
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>',
      titulo: 'INTERVENCIÓN TERAPÉUTICA',
      descripcion: 'Aplico técnicas específicas de tratamiento basadas en los resultados de las evaluaciones previas. Esto puede incluir terapia manual, ejercicios terapéuticos, electroterapia y otras modalidades adaptadas a tus necesidades particulares.',
      isOpen: false
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-check"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>',
      titulo: 'REEVALUACIÓN',
      descripcion: 'Monitoreo regularmente tu progreso mediante evaluaciones periódicas para asegurar que el tratamiento está siendo efectivo. Esto me permite ajustar el plan según sea necesario para optimizar los resultados.',
      isOpen: false
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>',
      titulo: 'PROPUESTA DE REHADAPTACIÓN INDIVIDUALIZADA',
      descripcion: 'Desarrollo un programa personalizado de rehabilitación que incluye ejercicios específicos, recomendaciones de actividad física y modificaciones en el estilo de vida, todo adaptado a tus necesidades y objetivos individuales.',
      isOpen: false
    },
    {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-stethoscope"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>',
      titulo: 'SEGUIMIENTO CONTÍNUO',
      descripcion: 'Mantengo un seguimiento constante de tu evolución, ajustando el tratamiento según sea necesario y proporcionando apoyo continuo para asegurar resultados óptimos a largo plazo y prevenir recaídas.',
      isOpen: false
    },
  ];

  servicios = [
    {
      nombreMaquina:'Presoterapia',
      descripcion: 'Es un tratamiento que utiliza presión de aire para estimular el sistema linfático y circulatorio, ayudando a reducir retención de líquidos, celulitis, fatiga y mejorar la circulación.',
      imgURL: '/assets/img/fotosServicios/presoterapia.webp',
      imgLoading: 'lazy',
      imageLoaded: false
    },
    {
      nombreMaquina:'Pistola de masaje',
      descripcion: 'Es un dispositivo que emite vibraciones rápidas para relajar músculos, aliviar tensión, mejorar la circulación, reducir dolores y acelerar la recuperación tras actividades físicas intensas.',
      imgURL: '/assets/img/fotosServicios/pistolaMasaje.webp',
      imgLoading: 'lazy',
      imageLoaded: false
    },
    {
      nombreMaquina:'Cupping',
      descripcion: 'Utiliza succión mediante copas colocadas sobre la piel para mejorar la circulación, aliviar dolores musculares, reducir inflamación, eliminar toxinas y promover relajación general.',
      imgURL: '/assets/img/fotosServicios/cupping.webp',
      imgLoading: 'lazy',
      imageLoaded: false
    },
    {
      nombreMaquina:'TENS',
      descripcion: 'La electroestimulación TENS utiliza impulsos eléctricos para estimular nervios, aliviando dolores crónicos, musculares o articulares, promoviendo relajación, mejorando la recuperación y reduciendo inflamaciones localizadas.',
      imgURL: '/assets/img/fotosServicios/tens.webp',
      imgLoading: 'lazy',
      imageLoaded: false
    },
    {
      nombreMaquina:'Neuromodulación',
      descripcion: 'La neuromodulación emplea estímulos eléctricos para optimizar la función neuromuscular, mejorar el rendimiento, acelerar la recuperación, aliviar dolores agudos o crónicos y prevenir lesiones mediante el control del sistema nervioso.',
      imgURL: '/assets/img/fotosServicios/neuromodulación.webp',
      imgLoading: 'lazy',
      imageLoaded: false
    },
    {
      nombreMaquina:'Kinesiotape',
      descripcion: 'Es una cinta elástica adhesiva que se aplica sobre la piel para estabilizar músculos y articulaciones, reducir dolor, mejorar circulación, disminuir inflamación y facilitar la recuperación sin limitar el movimiento.',
      imgURL: '/assets/img/fotosServicios/kinesiotape.webp',
      imgLoading: 'lazy',
      imageLoaded: false
    },
    {
      nombreMaquina:'Vendaje deportivo',
      descripcion: 'El vendaje funcional deportivo utiliza cintas adhesivas no elásticas o elásticas para limitar movimientos específicos, proteger articulaciones o músculos lesionados, prevenir recaídas, reducir dolor y permitir actividad deportiva controlada.',
      imgURL: '/assets/img/fotosServicios/vendajeDeportivo.webp',
      imgLoading: 'lazy',
      imageLoaded: false
    },
    {
      nombreMaquina:'Valoración funcional',
      descripcion: 'Es una de las partes más importantes del tratamiento, con el objetivo de buscar los desequilibrios funcionales que estén provocando la lesión; y así poder encontrar las causas (descompensaciones funcionales) que conllevan a las consecuencias (lesión).',
      imgURL: '/assets/img/fotosServicios/valoracionFuncional.webp',
      imgLoading: 'lazy',
      imageLoaded: false
    },
    {
      nombreMaquina:'Readaptación',
      descripcion: 'Es el plan de ejercicios que el fisioterapeuta plantea para que el paciente realice con el acompañamiento profesional para complementar los tratamientos de fisioterapia que realice para su recuperación.',
      imgURL: '/assets/img/fotosServicios/readaptacion.webp',
      imgLoading: 'lazy',
      imageLoaded: false
    }
  ];

  ngOnInit() {
    this.servicios.forEach(servicio => {
      servicio.imageLoaded = true;
    });
  }

  toggleServicio(servicio: any) {
    servicio.isOpen = !servicio.isOpen;
  }

}
