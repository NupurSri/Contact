import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from './contact';

@Component({
	selector: '<contact-detail></contact-detail>',
	template: `
			<div class="show-contact-details">
				<div>
					<label for="first-name"> First Name: </label>
					<input [(ngModel)]="contact.firstName" type="text" id="first-name">
				</div>
				<div>
					<label for="last-name"> Last Name: </label>
					<input [(ngModel)]="contact.lastName" type="text" id="last-name">
				</div>
				<div>
					<label for="phone"> Phone: </label>
					<input [(ngModel)]="contact.phone" type="text" id="phone">
				</div>
				<div>
					<label for="email"> Email: </label>
					<input [(ngModel)]="contact.email" type="text" id="email">
				</div>
					<button class="btn-primary" (click)="onCreateNew()"> Create new contact from contact</button>
			</div>`,
	inputs: ["contact"],
	styleUrls: ["./css/app.css"]
})

export class ContactDetailComponent{
	public contact: Contact = null;

	constructor(private _router: Router){}

	onCreateNew(){
		this._router.navigate(['/newContact', {firstName:this.contact.firstName, lastName: this.contact.lastName, phone: this.contact.phone, email: this.contact.email}])
	}
}

