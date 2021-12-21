import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-tarjeta',
  templateUrl: './animal-tarjeta.component.html',
  styleUrls: ['./animal-tarjeta.component.css'],
})
export class AnimalTarjetaComponent implements OnInit {
  @Input() animal: any = {};
  @Input() index: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  verAnimal() {
    this.router.navigate(['/animal', this.index]);
  }
}
