import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private auth: AngularFireAuth) { }

	login(email: string, password: string) {
		return this.auth.signInWithEmailAndPassword(email, password);
	}

	logout() {
		return this.auth.signOut();
	}

	signup(email: string, password: string) {
		return this.auth.createUserWithEmailAndPassword(email, password);
	}

	getUser() {
		return this.auth.user;
	}
}
