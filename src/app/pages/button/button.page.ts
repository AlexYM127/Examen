import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  nombre: string = 'Fernando';
  usuario = {
  email: '',
  password: ''
}
  constructor() { }
  ngOnInit() {
}
  onSubmit(formulario: NgForm) {
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
}
}
