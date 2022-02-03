import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit {


    book: any;
    updateBookForm: FormGroup;

    constructor(private service: BookService,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder) { }

    ngOnInit() {
        this.service.getBookById(this.route.snapshot.params.id).subscribe(data => {
            this.book = data;
            
            this.updateBookForm = this.fb.group({
                id: [data.id],
                title: [data.title, Validators.required],
                author: [data.author, Validators.required],
                description: [data.description, Validators.compose([Validators.required, Validators.minLength(30)])],
                rate: [data.rate],
                dateStart: [this.formatDate(data.dateStart)],
                dateRead: [this.formatDate(data.dateRead)],
            })

        })
    }

    formatDate(date: Date) {
        if (date) {
            return new Date(date).toISOString().substring(0, 10);
        }
    }

    onSubmit() {
        this.service.updateBook(this.updateBookForm.value).subscribe(data => {
            this.router.navigate(["/books"]);
        })
    }

}
