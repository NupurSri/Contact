import { Component } from '@angular/core';
import { routing } from './app.router';
import { FormGroup, Validators, FormControl, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
	selector: 'my-app',
	template: `<div>
			<ul class="nav nav-pills">
				  <li role="presentation"><a routerLink="/contact" >Contact List</a></li>
				  <li role="presentation"><a routerLink="/newContact" >New Contact </a></li>
			</ul>
			<router-outlet></router-outlet>
			</div>
			
			`,
	styleUrls: ["./css/app.css"]
	
})

export class AppComponent{
	public contacts = [
		{firstName:"Nupur", lastName: "Srivastava", phone: "12345678", email: "abc@def.com"},
		{firstName:"Dipankit", lastName: "Saha", phone: "12345678", email: "ghi@def.com"},
		{firstName:"Dolly", lastName: "Srivastava", phone: "12345678", email: "gfg@def.com"},
		{firstName:"K K", lastName: "Srivastava", phone: "12345678", email: "kk@def.com"}
		];

	public showDetails = false;
	public selectedContact = {};

	onSelect(contact){
		this.selectedContact = contact;
	}

	
}