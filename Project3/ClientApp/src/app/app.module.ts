import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component'
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { DeleteBooksComponent } from './components/delete-books/delete-books.component';
import { NewBooksComponent } from './components/new-books/new-books.component';
import { ShowBooksComponent } from './components/show-books/show-books.component';
import { UpdateBooksComponent } from './components/update-books/update-books.component';
import { BookService } from './services/book.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BooksComponent,
    DeleteBooksComponent,
    NewBooksComponent,
    ShowBooksComponent,
    UpdateBooksComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule, 
      ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'books', component: BooksComponent },
        { path: 'new-book', component: NewBooksComponent },
        { path: 'update-book/:id', component: UpdateBooksComponent },
        { path: 'delete-book/:id', component: DeleteBooksComponent },
        { path: 'show-book/:id', component: ShowBooksComponent },


    ])
    ],
    providers: [BookService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
