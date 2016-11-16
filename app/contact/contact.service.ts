import {Injectable} from '@angular/core';
import {CONTACTS} from './mock-contact';
import {Contact} from './contact';


@Injectable()
export class ContactService{
	getContacts(){
		return Promise.resolve(CONTACTS);
	}

	insertContact(contact: Contact){
		return Promise.resolve(CONTACTS).then((contacts: Contact[]) => contacts.push(contact))
	}
}