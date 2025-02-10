import { Component } from '@angular/core';
import { authService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor(
      private authService: authService,
      private router: Router)
      {}

  onLogin(): void {

    this.authService.login('pellegrineschi86@gmail.com', '123456')
    .subscribe(user => {
      this.router.navigate(['/'])
    })

  }



}
