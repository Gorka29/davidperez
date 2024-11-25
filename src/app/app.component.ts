import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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

import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollService } from './scroll.service';
import { ViewportScroller } from '@angular/common';

gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ServiciosComponent, ContactoComponent, InicioComponent, SobreMiComponent, ExperienciaComponent, FormacionComponent, TestimoniosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'davidperez';

  constructor(private router: Router, private scrollService: ScrollService, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const tree = this.router.parseUrl(this.router.url);
      if (tree.fragment) {
        this.scrollService.scrollToElement(tree.fragment);
      }
    });
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
}
