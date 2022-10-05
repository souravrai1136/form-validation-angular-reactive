import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      age: ['', [Validators.required]],
      number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[6-9]\d{9}$')]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
    })
  }
  onSubmit() {
    console.log(this.user.value)
  }
  get name() {
    return this.user.get('name');
  }
  get age() {
    return this.user.get('age');
  }
  get number() {
    return this.user.get('number');
  }
  get email() {
    return this.user.get('email');
  }
}
