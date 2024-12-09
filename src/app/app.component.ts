import { Component, EventEmitter, Output } from '@angular/core';
import { ServiciosComponent } from "./servicios/servicios.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { InicioComponent } from "./inicio/inicio.component";
import { SobreMiComponent } from "./sobre-mi/sobre-mi.component";
import { ExperienciaComponent } from "./experiencia/experiencia.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { FormacionComponent } from "./formacion/formacion.component";
import { TestimoniosComponent } from "./testimonios/testimonios.component";
import { filter } from 'rxjs/operators';
import { NavigationEnd, RouterModule, Router } from '@angular/router';

import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollService } from './scroll.service';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ServiciosComponent, ContactoComponent, InicioComponent, SobreMiComponent, ExperienciaComponent, FormacionComponent, TestimoniosComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'davidperez';
  @Output() sectionSelected = new EventEmitter<string>();
  private readonly ANIMATION_DELAY = 100;

  constructor(private router: Router, private scrollService: ScrollService) {}

  ngOnInit() {
    setTimeout(() => {
      const logoMovimiento = document.getElementById('logoMovimiento');
      const headerMovimiento = document.getElementById('headerMovimiento');
      const footerMovimiento = document.getElementById('footerMovimiento');
      const inicio = document.getElementById('inicio');

      if (logoMovimiento && headerMovimiento && footerMovimiento && inicio) {
        logoMovimiento.classList.remove('hidden');
        headerMovimiento.classList.remove('hidden');
        footerMovimiento.classList.remove('hidden');
        inicio.classList.remove('hidden');
      }
    }, 0);
    setTimeout(() => {
      window.scrollTo(0, 0);

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = '0';
      document.body.style.left = '0';
    }, 0);

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        this.scrollService.scrollToElement(tree.fragment);
      }
    });

    if (typeof document !== 'undefined') {
      setTimeout(() => {
        const texto = document.querySelector("#davidperezfisioterapia") as SVGPathElement;
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

    gsap.fromTo("#logoDiv",
      {
        backgroundColor: "#cdbfb0",
        width: "100%",
        height: "100vh"
      },
      {
        width: "100%",
        height: "0",
        delay: 2.4,
        ease: "sine.inOut",
        onComplete: () => {
          this.restaurarScroll();
        }
      }
    );

    gsap.fromTo("#logoMovimiento svg",
      {
        y: "45vh",
        opacity: 1,
        width: 330,   // Tamaño final original
        height: 262,  // Tamaño final original
      },
      {
        y: 0,
        opacity: 1,
        width: 100,   // Tamaño inicial más pequeño
        height: 65,   // Mantenemos la proporción (262/330 * 100)
        duration: 1,
        delay: 2,
        ease: "power2.inOut",
        marginTop: "63px"
      }
    );

    gsap.fromTo("#headerMovimiento, .contenedor-principal, #footerMovimiento",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: "power2.inOut",
      }
    );
  }

  private iniciarAnimacion(texto: SVGPathElement): void {
    try {
      const longitud = texto.getTotalLength();
      const configuracionInicial = {
        fill: 'transparent',
        stroke: 'white',
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
          fill: 'white',
          stroke: 'white',
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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculamos el offset basado en la altura del header
      const header = document.querySelector('header');
      const offset = header ? header.getBoundingClientRect().height : 0;

      // Calculamos la posición final de una vez
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Realizamos el scroll suave en una sola operación
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  private restaurarScroll(): void {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    document.body.style.left = '';

    // Reinicializar ScrollTrigger después de restaurar el scroll
    ScrollTrigger.refresh();
  }
}
