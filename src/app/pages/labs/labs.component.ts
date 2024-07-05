import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  curso = signal('Bienvenido a Angular');
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear el proyecto',
    'Crear componentes'
  ]);
  persona = {
    name: 'Sebastian',
    age: 21
  }
  disabled = false;

  clickHandler(){
    alert('Hola');
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.curso.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    
  }
}
