import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { StaticContentService } from './static-content.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { TodoService } from './todo.service';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAlbumComponent } from './album/create-album.component';
import { ListAlbumComponent } from './album/list-album.component';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';
import { GalleryComponent } from './homepage/gallery.component';
import { AboutusComponent } from './homepage/aboutus.component';
import { SlidersComponent } from './homepage/sliders.component';
import { FooterComponent } from './homepage/footer.component';
import { FullpageComponent } from './homepage/fullpage.component';
import { StaticpageComponent } from './portfolio/staticpage.component';
import { PortfoliofrontComponent } from './portfolio/portfoliofront.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { OcassionsStaticpageComponent } from './occasions/occasions-staticpage.component';
import { OccasionTypeComponent } from './occasions/occasion-type.component';
import { ServicesStaticpageComponent } from './services/services-staticpage.component';
import { ServicesTypeComponent } from './services/services-type.component';
import { CountactusStaticComponent } from './contactus/countactus-static.component';
import { AboutusStaticComponent } from './contactus/aboutus-static.component';
import { RegisterComponent } from './register/register.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { CareersComponent } from './static/careers.component';
import { HowToBecomePartnerComponent } from './static/how-to-become-partner.component';
import { PricingComponent } from './static/pricing.component';
import { FaqComponent } from './static/faq.component';
import { PrivacyPolicyComponent } from './static/privacy-policy.component';
import { TermsConditionsComponent } from './static/terms-conditions.component';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    CreateAlbumComponent,
    ListAlbumComponent,
    GalleryComponentComponent,
    GalleryComponent,
    AboutusComponent,
    SlidersComponent,
    FooterComponent,
    FullpageComponent,
    StaticpageComponent,
    PortfoliofrontComponent,
    AppComponent,
    TodoListComponent,
    UserListComponent,
    LoginComponent,
    OcassionsStaticpageComponent,
    OccasionTypeComponent,
    ServicesStaticpageComponent,
    ServicesTypeComponent,
    CountactusStaticComponent,
    AboutusStaticComponent,
    RegisterComponent,
    OurStoryComponent,
    CareersComponent,
    HowToBecomePartnerComponent,
    PricingComponent,
    FaqComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    BlogComponent
    
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8000'],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [
    AuthService,
    AuthGuard,
    TodoService,
    UserService,
    StaticContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function tokenGetter() {
  return localStorage.getItem('access_token');
}