import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ContactListComponent } from './contact/contact.component';
import { NewContactComponent } from './contact/new-contact.component';
//import { NewContactFormBuilderComponent } from './contact/new-contact-formbuilder.component';

export const routes: Routes = [
	{path: 'contact', component: ContactListComponent },
	{path: 'newContact', component: NewContactComponent},
	{ path: '', component: ContactListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);