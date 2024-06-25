import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'

import {About} from './about/about.component'
export const ROUTES: Routes = [
    {path: '', component: HomeComponent}
    {path: 'about', component: AboutComponent}
]
