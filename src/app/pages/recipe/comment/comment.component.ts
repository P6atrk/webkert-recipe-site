import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


	commentForm = new FormGroup({
		comment: new FormControl(''),
	});

	constructor() { }

	ngOnInit(): void {
	}

	onSubmit() {
		console.log("comment was made");
	}

}
