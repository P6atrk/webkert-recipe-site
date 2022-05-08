import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Comment } from '../models/comment';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

	collectionName = "recipes";

	constructor(private afs: AngularFirestore) { }

	readAll() {
		return this.afs.collection<Recipe>(this.collectionName).valueChanges();
	}

	readByName(name: string) {
		return this.afs.collection<Recipe>(this.collectionName, ref => ref.
			where("name", "==", name)).get();
	}
}