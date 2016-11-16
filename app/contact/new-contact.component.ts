import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import {ContactService} from './contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	templateUrl: './app/contact/views/new-contact.component.html',
	styleUrls: ["./css/app.css"],
	providers: [ContactService]
})

export class NewContactComponent implements OnInit{
	public lastNamePassed:string;
	newContactForm: FormGroup;
		
	constructor(private _contactService: ContactService, 
		private _route: Router, 
		private _routeParam: ActivatedRoute, 
		private _fBuilder:FormBuilder){}

	onSubmitTemplateBased():void{
		let newContact:Contact = { firstName:this.newContactForm.value.firstName, 
			lastName:this.newContactForm.value.lastName, 
			phone:this.newContactForm.value.phone, 
			email: this.newContactForm.value.email};

		this._contactService.insertContact(newContact);
		this._route.navigate(['/contact']);
	}

	ngOnInit(): any{
			this._routeParam.params.subscribe(param => {
			this.lastNamePassed = param['lastName'];
		});

		this.newContactForm = this._fBuilder.group({
			firstName: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[a-zA-Z ]+$')]],
			lastName: [this.lastNamePassed, [Validators.required, Validators.maxLength(30), Validators.pattern('^[A-Za-z ]+$')]],
			phone: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
			email: ['', [Validators.required, Validators.pattern("^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")]]
		})

	}
	
}
