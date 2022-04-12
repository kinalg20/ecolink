import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AskChemistComponent } from './ask-chemist/ask-chemist.component';
import { BlogComponent } from './blog/blog.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeComponent } from './home.component';
import { ManufactureComponent } from './manufacture/manufacture.component';
import { MediaComponent } from './media/media.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path : 'banner', component: HomeBannerComponent},
  { path : 'about-us', component: AboutUsComponent},
  { path : 'media', component: MediaComponent},
  { path : 'blog', component: BlogComponent},
  { path : 'manufacture', component: ManufactureComponent},
  { path : 'ask-chemist', component: AskChemistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
