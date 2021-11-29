import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required, 
      Validators.minLength(3),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(19),
      Validators.maxLength(19),
      Validators.pattern(/^([0-9]{4})([0-9]{4})([0-9]{4})([0-9]{4})$/)
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/[1-9]/),
      Validators.minLength(3),
      Validators.maxLength(3)
    ]),
  })

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onSubmit = (event: Event):void => {
    event.preventDefault();
  }

  onReset = ():void => {
    this.cardForm.reset()
  }

}
