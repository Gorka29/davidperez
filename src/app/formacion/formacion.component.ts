import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, PLATFORM_ID, Inject, OnInit } from '@angular/core';
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
export class FormacionComponent implements OnInit, OnDestroy {
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
      imgURL: '/assets/img/ena.png'
    },
    {
      nombreCurso: 'Postgrado en Fisioterapia Invasiva Avanzada NFD',
      centro: 'Neuromodulación Funcional del Dolor',
      periodo: 'Octubre 2023 - Marzo 2024',
      imgURL: '/assets/img/postgrado.png'
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
  duplicatedFormaciones: any[] = [];
  translateX: number = 0;
  private autoSlideInterval: any;
  private readonly SLIDE_SPEED = 0.5; // pixels por frame
  private animationFrameId: number | null = null;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.duplicatedFormaciones = [...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones,
                                  ...this.formaciones, ...this.formaciones, ...this.formaciones];
    if (this.isBrowser) {
      gsap.registerPlugin(ScrollTrigger);
    }
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.startAutoSlide();
      if (typeof window !== 'undefined') {
        this.isMobile = window.innerWidth <= 768;
        window.addEventListener('resize', () => {
          this.isMobile = window.innerWidth <= 768;
        });
      }
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', () => {
        this.isMobile = window.innerWidth <= 768;
      });
    }
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private startAutoSlide() {
    const animate = () => {
      this.translateX -= this.SLIDE_SPEED;
      this.animationFrameId = requestAnimationFrame(animate);
    };

    animate();
  }

  private getItemWidth(): number {
    if (!this.isBrowser) return 100;

    const screenWidth = document.documentElement.clientWidth;
    if (screenWidth >= 1024) return 33.333;
    if (screenWidth >= 768) return 50;
    return 100;
  }
}
