import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/shared/models/user';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	updateProfileForm = new FormGroup({
		name: new FormControl(''),
	});

	user: User;


	constructor() { 
		this.user = {
			name: "USERNAME",
			email: "EMAIL"
		}
	}

	ngOnInit(): void {
	}

	onSubmit() {
		console.log("profile update");
	}

}
