import { Component,OnInit } from '@angular/core';
import { Contact } from './contact';
import {ContactService} from './contact.service';

@Component({
	selector: '<contact-list></contact-list>',
	template: ` <h2 class="contact-list-heading"> Click on below contacts to see/edit details</h2>
				<ul class="nav">
					<li *ngFor="let contact of contacts" [class.clicked]="selectedContact === contact">
						<h3 (click)="onSelect(contact)" ><span>{{contact.firstName}} {{contact.lastName}}</span></h3>
					</li>
				</ul>
				<contact-detail *ngIf="selectedContact != null" [contact]="selectedContact"></contact-detail>`,
	providers: [ContactService],
	styleUrls: ["./css/app.css"]

})

export class ContactListComponent implements OnInit{
	public contacts: Contact[];

	public showDetails = false;
	public selectedContact = null;

	constructor(private _contactService: ContactService){}

	onSelect(contact){
		this.selectedContact = contact;
	}
	getContacts(){
		this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
	}
	ngOnInit(): any{
		this.getContacts();
	}
}