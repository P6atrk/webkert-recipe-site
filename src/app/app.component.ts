import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { AuthService } from './shared/services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'webkert-recipe-site';

	user?: firebase.default.User | null;

	constructor(private authService: AuthService) {

	}

	ngOnInit(): void {
		this.authService.getUser().subscribe(user => {
			this.user = user;
			localStorage.setItem("user", JSON.stringify(this.user));
		  }, error => {
			localStorage.setItem("user", JSON.stringify("null"));
		  });
	}
}
