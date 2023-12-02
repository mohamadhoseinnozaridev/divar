import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { MainPageComponent } from './page/main/main-page.component';
import { OriginalComponent } from './page/main/original/original.component';
import { Navbar_orginalComponent } from './components/navbar_orginal/navbar_orginal.component';
import { Select_cit_orginaComponent } from './components/select_cit_orgina/select_cit_orgina.component';
import { Side_orginal_rightComponent } from './components/side_orginal_right/side_orginal_right.component';
import { Side_orginal_leftComponent } from './components/side_orginal_left/side_orginal_left.component';
import { SuportComponent } from './components/suport/suport.component';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    MainPageComponent,
    OriginalComponent,
    Navbar_orginalComponent,
    Select_cit_orginaComponent,
    Side_orginal_rightComponent,
    Side_orginal_leftComponent,
    SuportComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [ProductService, CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
