import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formacion.component.html',
  styleUrl: './formacion.component.scss'
})
export class FormacionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  @ViewChild('experienciasTrack') experienciasTrack!: ElementRef;

  isMobile = false;
  scrollTrigger: ScrollTrigger | null = null;

  formaciones = [
    {
      nombreCurso: 'Formación en Quiromasaje',
      centro: 'ISED',
      periodo: 'Septiembre 2016 - Marzo 2017',
      imgURL: '/assets/img/ised.png'
    },
    {
      nombreCurso: 'Grado en Fisioterapia',
      centro: 'Escuela Universitaria Gimbernat Cantabria',
      periodo: '2023',
      imgURL: '/assets/img/gimbernat.png'
    },
    {
      nombreCurso: 'Curso de Electroneuroacupuntura (ENA)',
      centro: 'Zalla',
      periodo: 'Abril 2023 - Mayo 2023',
      imgURL: '/assets/img/gimbernat.png'
    },
    {
      nombreCurso: 'Postgrado en Fisioterapia Invasiva Avanzada NFD',
      centro: 'Neuromodulación Funcional del Dolor',
      periodo: 'Octubre 2023 - Marzo 2024',
      imgURL: '/assets/img/gimbernat.png'
    },
    {
      nombreCurso: 'Formación en Tendinopatías de Miembros inferiores',
      centro: 'FC Barcelona Innovation Hub',
      periodo: 'Julio 2023 - Agosto 2023',
      imgURL: '/assets/img/fcb.png'
    },
    {
      nombreCurso: 'Diplomado en Gestión de lesiones en deportes de equipo',
      centro: 'FC Barcelona Innovation Hub',
      periodo: 'Julio 2023 - Marzo 2024',
      imgURL: '/assets/img/fcb.png'
    },
    {
      nombreCurso: 'Curso de Fisioterapia en Pádel',
      centro: 'Padelmba',
      periodo: 'Marzo 2024',
      imgURL: '/assets/img/padelmba.png'
    },
    {
      nombreCurso: 'Formación en Métodos de Valoración en Fisioterapia Deportiva',
      centro: 'FC Barcelona Innovation Hub',
      periodo: 'Agosto 2024 - actualidad',
      imgURL: '/assets/img/fcb.png'
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 768;
      window.addEventListener('resize', () => {
        this.isMobile = window.innerWidth <= 768;
      });
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', () => {
        this.isMobile = window.innerWidth <= 768;
      });
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimation();
    }
  }

  private initScrollAnimation() {
    const track = this.experienciasTrack.nativeElement;
    const container = this.scrollContainer.nativeElement;
    const totalWidth = track.scrollWidth;
    const viewportWidth = container.offsetWidth;
    const distance = totalWidth - viewportWidth;

    // const scrollConfig = this.isMobile ? {
    //   trigger: container,
    //   start: "center center",
    //   end: () => `+=${distance * 1.5}px`,
    //   scrub: true,
    //   pin: true,
    //   anticipatePin: 1,
    //   pinSpacing: true,
    //   invalidateOnRefresh: true
    // } : {
    //   trigger: container,
    //   start: "center center",
    //   end: "+=250%",
    //   scrub: 1.5,
    //   pin: true,
    //   anticipatePin: 1,
    //   pinSpacing: true,
    //   snap: {
    //     snapTo: "labels",
    //     duration: {min: 0.2, max: 0.5},
    //     delay: 0,
    //     ease: "power1.inOut"
    //   },
    //   invalidateOnRefresh: true
    // };

    const scrollConfig = {
      // El elemento que activa la animación del scroll
      trigger: container,

      // Define cuando comienza la animación - en este caso cuando el centro del contenedor
      // llega al centro de la ventana
      start: "center center",

      // Define cuando termina la animación - se extiende un 250% adicional del viewport
      end: "+=250%",

      // Suaviza la animación con un valor de 1.5 segundos
      scrub: 1,

      // Fija el elemento en su posición mientras se ejecuta la animación
      pin: true,

      // Prepara el pin antes de que comience la animación
      anticipatePin: 1,

      // Mantiene el espacio ocupado por el elemento fijado
      pinSpacing: true,

      // Configuración para el efecto "snap" (ajuste a puntos específicos)
      snap: {
        // Ajusta a marcadores definidos como "labels"
        snapTo: "labels",
        // Duración del efecto snap entre 0.2 y 0.5 segundos
        duration: {min: 0.2, max: 0.5},
        // Sin retraso en el efecto snap
        delay: 0,
        // Tipo de easing para suavizar el movimiento
        ease: "power1.inOut"
      },

      // Recalcula los valores cuando cambia el tamaño de la ventana
      invalidateOnRefresh: true
    };

    const animation = gsap.to(track, {
      x: -distance,
      ease: "none",
      scrollTrigger: scrollConfig as ScrollTrigger.Vars
    });

    this.scrollTrigger = animation.scrollTrigger || null;
  }
}
