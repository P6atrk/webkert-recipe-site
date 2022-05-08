import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	displayedColumns: string[] = ['name', 'time', 'button'];
	recipes = DATA;

	constructor() {
	}

	ngOnInit(): void {
	}

}

const DATA: Recipe[] = [
	{ name: 'asdf', time: 12, description: 'descirptionmertazjo' },
	{ name: 'asdf', time: 12, description: 'descirptionmertazjo' },
	{ name: 'asdf', time: 12, description: 'descirptionmertazjo' },
	{ name: 'asdf', time: 12, description: 'descirptionmertazjo' },
	{ name: 'asdf', time: 12, description: 'descirptionmertazjo' },
	{ name: 'asdf', time: 12, description: 'descirptionmertazjo' },
	{ name: 'asdf', time: 12, description: 'descirptionmertazjo' },
	{ name: 'asdf', time: 12, description: 'descirptionmertazjo' },
	{ name: 'asdf', time: 12, description: 'descirptionmertazjo' },
	{ name: 'asdf', time: 12, description: 'descirptionmertazjo' }
];
