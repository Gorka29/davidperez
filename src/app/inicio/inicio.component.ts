import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit, AfterViewInit {
  public currentSlide = 0;
  public slides: HTMLElement[] = [];
  private intervalId: any;
  private touchStartX: number = 0;
  private touchEndX: number = 0;
  private minSwipeDistance: number = 50;
  private touchStartY: number = 0;

  ngOnInit() {
    // Dejamos el ngOnInit vacío
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.slides = Array.from(document.querySelectorAll('.carousel-item'));

      // Aseguramos que la primera diapositiva esté activa
      if (this.slides.length > 0) {
        this.slides.forEach((slide, index) => {
          if (index === 0) {
            slide.classList.add('active');
          } else {
            slide.classList.remove('active');
          }
        });
      }

      document.querySelector('.prev')?.addEventListener('click', () => this.prevSlide());
      document.querySelector('.next')?.addEventListener('click', () => this.nextSlide());

      // Añadir eventos touch
      const carousel = document.querySelector('.carousel');
      if (carousel) {
        carousel.addEventListener('touchstart', (e: Event) => this.handleTouchStart(e as TouchEvent));
        carousel.addEventListener('touchmove', (e: Event) => this.handleTouchMove(e as TouchEvent));
        carousel.addEventListener('touchend', () => this.handleTouchEnd());
      }

      this.intervalId = setInterval(() => this.nextSlide(), 8000);
    }, 0);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private resetInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => this.nextSlide(), 8000);
  }

  public goToSlide(index: number) {
    this.slides[this.currentSlide].classList.remove('active');
    this.currentSlide = index;
    this.slides[this.currentSlide].classList.add('active');
    this.resetInterval();
  }

  private nextSlide() {
    this.slides[this.currentSlide].classList.remove('active');
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.slides[this.currentSlide].classList.add('active');
  }

  private prevSlide() {
    this.slides[this.currentSlide].classList.remove('active');
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.slides[this.currentSlide].classList.add('active');
  }

  private handleTouchMove(e: TouchEvent) {
    const touchCurrentX = e.touches[0].clientX;
    const touchCurrentY = e.touches[0].clientY;

    // Calculamos la diferencia en X e Y desde el inicio del toque
    const deltaX = this.touchStartX - touchCurrentX;
    const deltaY = Math.abs(e.touches[0].clientY - this.touchStartY);

    // Solo prevenimos el scroll si el movimiento horizontal es mayor que el vertical
    if (Math.abs(deltaX) > deltaY) {
      e.preventDefault();
    }

    this.touchEndX = touchCurrentX;
  }

  private handleTouchStart(e: TouchEvent) {
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
  }

  private handleTouchEnd() {
    const swipeDistance = this.touchEndX - this.touchStartX;

    if (Math.abs(swipeDistance) > this.minSwipeDistance) {
      if (swipeDistance > 0) {
        this.prevSlide();
      } else {
        this.nextSlide();
      }
      this.resetInterval();
    }

    this.touchStartX = 0;
    this.touchEndX = 0;
  }
}
