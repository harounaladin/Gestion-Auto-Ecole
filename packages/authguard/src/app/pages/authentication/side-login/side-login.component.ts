import { Component } from '@angular/core';
import { CoreService } from 'src/app/services/core.service';
import { RouterModule, Router } from '@angular/router';
import { LoginService } from '../../../login.service';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-side-login',
  standalone: true,
  imports: [RouterModule, MaterialModule, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './side-login.component.html',
  providers: [LoginService],
})
export class AppSideLoginComponent {
  options = this.settings.getOptions();
  msg = '';
  constructor(
    private settings: CoreService,
    private service: LoginService,
    private routes: Router
  ) {}

  check(uname: string, p: string) {
    const output = this.service.checkusernameandpassword(uname, p);
    if (output == true) {
      this.routes.navigate(['/starter']);
    } else {
      this.msg = 'Invalid Username or Password';
    }
  }
}
