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

  ngOnInit(): void {
    setTimeout(() => {
      const imagen = document.querySelector('img');
      imagen?.classList.remove('hidden');
    }, 100);
  }
}
