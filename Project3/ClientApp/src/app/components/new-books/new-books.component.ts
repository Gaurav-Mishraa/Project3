import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/*import { error } from 'console';*/
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.css']
})
export class NewBooksComponent implements OnInit {

    addBookForm: FormGroup;
    showError: boolean = false;
  public books:Book[];

    constructor(private service: BookService, private fb: FormBuilder, private router: Router) { }

    ngOnInit() {
        this.addBookForm = this.fb.group({
            id: [Math.floor(Math.random() * 1000)],
            title: [null, Validators.required],
            author: [null, Validators.required],
            description: [null, Validators.compose([Validators.required, Validators.minLength(30)])],
            rate: [null],
            dateStart: [null],
            dateRead: [null],
        })
    }

    onSubmit() {
        this.service.addBook(this.addBookForm.value).subscribe(data => {
            this.router.navigate(["/books"]);
        }, error => {
            this.showError = true;
        })
    }

}
