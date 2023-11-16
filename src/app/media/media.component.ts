import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {
  AC1: number=0;
  AC2: number=0;
  AG: number=0;
  AF: number=0;
  resultado: number = 0;
  
  calcular(){
    this.resultado = (this.AC1*0.15)+(this.AC2*0.30)+(this.AG*0.10)+(this.AF*0.45)
  }
  
}
