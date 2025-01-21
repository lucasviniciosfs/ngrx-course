import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Store} from "@ngrx/store";

import {AuthService} from "../auth.service";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {Router} from "@angular/router";
import { loginAction } from '../auth.actions';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
      private fb:FormBuilder,
      private auth: AuthService,
      private router:Router,
    private store: Store) {

      this.form = fb.group({
          email: ['test@angular-university.io', [Validators.required]],
          password: ['test', [Validators.required]]
      });

  }

  ngOnInit() {

  }

  login() {
    this.auth.login(
        this.form.get('email').value,
        this.form.get('password').value
    )
    .pipe(
        tap((user) => {
            this.store.dispatch(loginAction({user}))
            this.router.navigateByUrl('/courses')
        })
    )
    .subscribe(
        noop,
        () => {alert('Deu ruim')}
    )

  }

}

