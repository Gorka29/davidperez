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
