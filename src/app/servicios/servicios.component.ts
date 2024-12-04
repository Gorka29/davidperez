import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss'
})
export class ServiciosComponent {

  serviciosLista = [
    {
      titulo: 'EVALUACIÓN INICIAL',
      descripcion: 'Realizo una evaluación exhaustiva de tu estado físico actual, historial médico y objetivos específicos. Esto incluye análisis postural, rango de movimiento, fuerza muscular y patrones de movimiento para crear una base sólida para tu tratamiento.',
      isOpen: false
    },
    {
      titulo: 'VALORACIÓN NEUROMUSCULAR',
      descripcion: 'Evalúo en profundidad la función de tus músculos y nervios, incluyendo pruebas de fuerza, control motor, reflejos y coordinación. Esta información es crucial para entender cómo tu sistema nervioso interactúa con tus músculos.',
      isOpen: false
    },
    {
      titulo: 'INTERVENCIÓN TERAPÉUTICA',
      descripcion: 'Aplico técnicas específicas de tratamiento basadas en los resultados de las evaluaciones previas. Esto puede incluir terapia manual, ejercicios terapéuticos, electroterapia y otras modalidades adaptadas a tus necesidades particulares.',
      isOpen: false
    },
    {
      titulo: 'REEVALUACIÓN',
      descripcion: 'Monitoreo regularmente tu progreso mediante evaluaciones periódicas para asegurar que el tratamiento está siendo efectivo. Esto me permite ajustar el plan según sea necesario para optimizar los resultados.',
      isOpen: false
    },
    {
      titulo: 'PROPUESTA DE REHADAPTACIÓN INDIVIDUALIZADA',
      descripcion: 'Desarrollo un programa personalizado de rehabilitación que incluye ejercicios específicos, recomendaciones de actividad física y modificaciones en el estilo de vida, todo adaptado a tus necesidades y objetivos individuales.',
      isOpen: false
    },
    {
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
