import { Routes } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { title: "HomeComponent", path: '', component: HomeComponent },
    { title: "HomeComponent", path: 'home', component: HomeComponent },
    { title: "StoreComponent", path: 'store', component: StoreComponent },
    { title: "AboutComponent", path: 'about', component: AboutComponent },
    { title: "ContactComponent", path: 'contact', component: ContactComponent }
];
