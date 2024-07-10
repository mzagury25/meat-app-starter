import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import {RouterModule, Routes, Routes} from '@angular/router';



const Routes : Routes = [
{path:'', component: AboutComponent}
]


@NgModule({
    declarations:[AboutComponent],
    imports: [RouterModule, RouterModule.forChild(ROUTES)]
   
})
export class AboutModule {}
