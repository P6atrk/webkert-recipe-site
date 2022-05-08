import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	loginForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl(''),
	});

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	}

	onSubmit() {
		this.authService.login(this.loginForm.get("email")?.value, this.loginForm.get("password")?.value).then(() => {
			this.router.navigateByUrl("/main");
		});
	}
}
