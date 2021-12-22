import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalesService } from '../../services/animales.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  animal:any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _animalesService: AnimalesService
  ) {
    // BAD PRACTICE
    /*this.activatedRoute.params.subscribe(params => {
      this.animal = this._animalesService.getAnimal(params["id"]);
      console.log(this.animal);
    });*/
  }

  ngOnInit(): void {
    // GOOD PRACTICE
    this.activatedRoute.params.subscribe((params) => {
      this.animal = this._animalesService.getAnimal(params['id']);
      console.log(this.animal);
    });
  }
}
