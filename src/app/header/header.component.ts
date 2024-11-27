import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { RouterModule, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  @Output() sectionSelected = new EventEmitter<string>();
  private readonly ANIMATION_DELAY = 0;
  private readonly SVG_SELECTOR = '#davidperezfisioterapia';

  menuAbierto = false;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      const texto = typeof document !== 'undefined' ? document.querySelector(this.SVG_SELECTOR) as SVGPathElement : null;
      const dyp = typeof document !== 'undefined' ? document.querySelector('#dyp') as SVGPathElement : null;
      const paloArriba1 = typeof document !== 'undefined' ? document.querySelector('#paloArriba1') as SVGLineElement : null;
      const paloArriba2 = typeof document !== 'undefined' ? document.querySelector('#paloArriba2') as SVGPathElement : null;
      const paloAbajo1 = typeof document !== 'undefined' ? document.querySelector('#paloAbajo1') as SVGLineElement : null;
      const paloAbajo2 = typeof document !== 'undefined' ? document.querySelector('#paloAbajo2') as SVGPathElement : null;

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

  private iniciarAnimacion(texto: SVGPathElement): void {
    try {
      const longitud = texto.getTotalLength();
      const configuracionInicial = {
        fill: 'transparent',
        stroke: 'white',
        strokeWidth: 0.5,
        strokeDasharray: longitud,
        strokeDashoffset: longitud
      };

      gsap.set(texto, configuracionInicial);

      const timeline = gsap.timeline();
      timeline
        .to(texto, {
          duration: 1,
          strokeDashoffset: 0,
          ease: 'power1.in'
        })
        .to(texto, {
          duration: 0.3,
          fill: 'white',
          stroke: 'white',
          strokeWidth: 1,
          ease: 'power1.inOut'
        }, '-=0.3');
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
        delay: 1.6 // Comienza después de las animaciones anteriores
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
      }, "+=0.5"); // Comienza un poco antes de que termine la animación anterior

    } catch (error) {
      console.error('Error durante la animación de los palos:', error);
    }
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  cerrarMenu() {
    this.menuAbierto = false;
  }

  onSectionClick(sectionId: string) {
    this.sectionSelected.emit(sectionId);
    this.cerrarMenu();
  }

}
