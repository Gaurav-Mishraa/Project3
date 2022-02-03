import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {

    book: Book;

    constructor(private service: BookService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.service.getBookById(this.route.snapshot.params.id).subscribe(data => {
            this.book = data;
        })
    }

}
