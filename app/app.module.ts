import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule  }   from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ContactListComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact/contact-detail.component';
import { routing } from './app.router';
import { NewContactComponent } from './contact/new-contact.component';

@NgModule({
	imports: [BrowserModule, routing, FormsModule, ReactiveFormsModule],
	declarations: [AppComponent, ContactListComponent,ContactDetailComponent,NewContactComponent],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})

export class AppModule{

}