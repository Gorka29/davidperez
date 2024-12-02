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

  servicios = [
    {
      nombreMaquina:'Presoterapia',
      descripcion: 'Es un tratamiento que utiliza presión de aire para estimular el sistema linfático y circulatorio, ayudando a reducir retención de líquidos, celulitis, fatiga y mejorar la circulación.',
      // imgUrl: 'https://lh3.googleusercontent.com/d/1-QNKYSEjM_uIhiCZyzA1hTEKaIKcvR8M'
      imgURL: '/assets/img/presoterapia.jpg'
    },
    {
      nombreMaquina:'Pistola de masaje',
      descripcion: 'Es un dispositivo que emite vibraciones rápidas para relajar músculos, aliviar tensión, mejorar la circulación, reducir dolores y acelerar la recuperación tras actividades físicas intensas.',
      imgURL: 'https://lh3.googleusercontent.com/d/1awZrizD2Y4Hx3WrrQeWPO7f8zXlOh1ID'
      // imgURL: '/assets/img/pistolaMasaje.jpg'
    },
    {
      nombreMaquina:'Cupping',
      descripcion: 'Utiliza succión mediante copas colocadas sobre la piel para mejorar la circulación, aliviar dolores musculares, reducir inflamación, eliminar toxinas y promover relajación general.',
      imgURL: 'https://lh3.googleusercontent.com/d/1-QNKYSEjM_uIhiCZyzA1hTEKaIKcvR8M'
      // imgURL: '/assets/img/cupping.jpg'
    },
    {
      nombreMaquina:'TENS',
      descripcion: 'La electroestimulación TENS utiliza impulsos eléctricos para estimular nervios, aliviando dolores crónicos, musculares o articulares, promoviendo relajación, mejorando la recuperación y reduciendo inflamaciones localizadas.',
      imgURL: 'https://lh3.googleusercontent.com/d/1SIW4acdXfKK_VwnZ0Sr6VT2FRNxDzUHu'
      // imgURL: '/assets/img/tens.jpg'
    },
    {
      nombreMaquina:'Neuromodulación',
      descripcion: 'La neuromodulación emplea estímulos eléctricos para optimizar la función neuromuscular, mejorar el rendimiento, acelerar la recuperación, aliviar dolores agudos o crónicos y prevenir lesiones mediante el control del sistema nervioso.',
      imgURL: 'https://lh3.googleusercontent.com/d/1FC4dQTx6Yz3vNmQMicWN7VuBBxk0_B7b'
      // imgURL: '/assets/img/neuromodulación.jpg'
    },
    {
      nombreMaquina:'Kinesiotape',
      descripcion: 'Es una cinta elástica adhesiva que se aplica sobre la piel para estabilizar músculos y articulaciones, reducir dolor, mejorar circulación, disminuir inflamación y facilitar la recuperación sin limitar el movimiento.',
      imgURL: 'https://lh3.googleusercontent.com/d/1bcFHwqqXYuuTbk3fJ4nEErebXI09xyjj'
      // imgURL: '/assets/img/kinesiotape.jpg'
    },
    {
      nombreMaquina:'Vendaje deportivo',
      descripcion: 'El vendaje funcional deportivo utiliza cintas adhesivas no elásticas o elásticas para limitar movimientos específicos, proteger articulaciones o músculos lesionados, prevenir recaídas, reducir dolor y permitir actividad deportiva controlada.',
      imgURL: 'https://lh3.googleusercontent.com/d/1sary3fhoetB1bmoQ9qVksmqAWQkn-uXC'
      // imgURL: '/assets/img/vendajeDeportivo.jpg'
    },
    {
      nombreMaquina:'Valoración funcional',
      descripcion: 'Es una de las partes más importantes del tratamiento, con el objetivo de buscar los desequilibrios funcionales que estén provocando la lesión; y así poder encontrar las causas (descompensaciones funcionales) que conllevan a las consecuencias (lesión).',
      // imgURL: 'https://lh3.googleusercontent.com/d/1_qg_YlfkuMjVhCqGrB--xwzPJbxeHCk0'
      imgURL: '/assets/img/valoracionFuncional.jpg'
    },
    {
      nombreMaquina:'Readaptación',
      descripcion: 'Es el plan de ejercicios que el fisioterapeuta plantea para que el paciente realice con el acompañamiento profesional para complementar los tratamientos de fisioterapia que realice para su recuperación.',
      // imgURL: ''
      imgURL: '/assets/img/readaptacion.jpg'
    }
  ];

}
