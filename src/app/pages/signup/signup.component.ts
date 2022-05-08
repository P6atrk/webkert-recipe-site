import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	signupForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl('')
	});


	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit(): void {
	}

	onSubmit() {
		this.authService.signup(this.signupForm.get("email")?.value,this.signupForm.get("password")?.value).then(() => {
			this.router.navigateByUrl("/main");
		});
	}

}
