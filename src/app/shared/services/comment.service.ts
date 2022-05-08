import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Comment } from '../models/comment';
import { Recipe } from '../models/recipe';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class CommentService {

	collectionName = "comments";

	constructor(private afs: AngularFirestore, private authService: AuthService) { }

	create(comment: Comment) {
		this.afs.collection<Comment>(this.collectionName).add(comment);
	}

	readAll() {
		return this.afs.collection<Comment>(this.collectionName).valueChanges();
	}

	readByRecipe(recipe: Recipe) {
		return this.afs.collection<Comment>(
			this.collectionName,
			ref => ref.where("recipe", "==", recipe.name)
		).valueChanges();
	}

	// update(comment: Comment) {
	// 	this.afs.collection(this.collectionName).ref.where("email", "==", comment.email).get().then(querySnapshot => {
	// 		querySnapshot.forEach(doc => {
	// 			this.afs.doc(doc.id).update(comment);
	// 		})
	// 	})
	// }

	// async delete(comment: Comment) {
	// 	this.afs.collection<Comment>(this.collectionName, ref => ref.where('email', '==', comment.email)).get().subscribe(com => {
	// 		com.forEach(async comm => {
	// 			await this.afs.doc(comm.id).delete();
	// 		})
	// 	})
	// }
}