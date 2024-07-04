import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  curso = 'Bienvenido a Angular';
  tasks = [
    'Instalar el Angular CLI',
    'Crear el proyecto',
    'Crear componentes'
  ];
  persona = {
    name: 'Sebastian',
    age: 21
  }
}
