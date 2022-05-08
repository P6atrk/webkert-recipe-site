import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	signupForm = new FormGroup({
		name: new FormControl(''),
		email: new FormControl(''),
		password: new FormControl(''),
		rePassword: new FormControl(''),
	});


	constructor() { }

	ngOnInit(): void {
	}

	onSubmit() {
		console.log("signup")
	}

}
