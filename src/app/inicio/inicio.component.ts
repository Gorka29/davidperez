import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit{

  @Output() sectionSelected = new EventEmitter<string>();
  private readonly ANIMATION_DELAY = 100;
  private readonly SVG_SELECTOR = '#davidperezfisioterapia';

  constructor() {}

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        const texto = document.querySelector(this.SVG_SELECTOR) as SVGPathElement;
        const dyp = document.querySelector('#dyp') as SVGPathElement;
        const paloArriba1 = document.querySelector('#paloArriba1') as SVGLineElement;
        const paloArriba2 = document.querySelector('#paloArriba2') as SVGPathElement;
        const paloAbajo1 = document.querySelector('#paloAbajo1') as SVGLineElement;
        const paloAbajo2 = document.querySelector('#paloAbajo2') as SVGPathElement;

        if (texto) {
          this.iniciarAnimacion(texto);
        }
        if (dyp) {
          this.animarDyp(dyp);
        }
        if (paloArriba1 && paloArriba2 && paloAbajo1 && paloAbajo2) {
          this.animarPalos(paloArriba1, paloArriba2, paloAbajo1, paloAbajo2);
        }
      }, this.ANIMATION_DELAY);
    }
  }

  private iniciarAnimacion(texto: SVGPathElement): void {
    try {
      const longitud = texto.getTotalLength();
      const configuracionInicial = {
        fill: 'transparent',
        stroke: 'black',
        strokeWidth: 1,
        strokeDasharray: longitud,
        strokeDashoffset: longitud
      };

      gsap.set(texto, configuracionInicial);

      gsap.timeline()
        .to(texto, {
          duration: 2,
          strokeDashoffset: 0,
          ease: 'power1.inOut',
          fill: 'black',
          stroke: 'black',
        })
        .to(texto, {
          duration: 0.5,
          strokeWidth: 1,
          ease: 'power1.inOut'
        });
    } catch (error) {
      console.error('Error durante la animación del texto:', error);
    }
  }

  private animarDyp(dyp: SVGPathElement): void {
    try {
      gsap.set(dyp, {
        opacity: 0
      });

      gsap.to(dyp, {
        duration: 1,
        opacity: 1,
        delay: 1.3, // Se inicia después de la animación del texto principal
        ease: 'power1.inOut'
      });
    } catch (error) {
      console.error('Error durante la animación del DYP:', error);
    }
  }

  private animarPalos(
    paloArriba1: SVGLineElement,
    paloArriba2: SVGPathElement,
    paloAbajo1: SVGLineElement,
    paloAbajo2: SVGPathElement
  ): void {
    try {
      // Configuración inicial
      gsap.set([paloArriba1, paloArriba2, paloAbajo1, paloAbajo2], {
        opacity: 0
      });

      // Timeline para la animación
      const timeline = gsap.timeline({
        delay: 2 // Comienza después de las animaciones anteriores
      });

      // Animar líneas verticales
      timeline.to([paloArriba1, paloAbajo1], {
        duration: 0.5,
        opacity: 1,
        transformOrigin: "center center",
        ease: "power2.out"
      });

      // Animar líneas horizontales
      timeline.to([paloArriba2, paloAbajo2], {
        duration: 0.3,
        opacity: 1,
        transformOrigin: "center center",
        ease: "power2.out"
      }, "+=0.2"); // Comienza un poco antes de que termine la animación anterior

    } catch (error) {
      console.error('Error durante la animación de los palos:', error);
    }
  }

}
