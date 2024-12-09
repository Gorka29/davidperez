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

      this.intervalId = setInterval(() => this.nextSlide(), 8000);
    }, 0);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  public goToSlide(index: number) {
    this.slides[this.currentSlide].classList.remove('active');
    this.currentSlide = index;
    this.slides[this.currentSlide].classList.add('active');
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
}
