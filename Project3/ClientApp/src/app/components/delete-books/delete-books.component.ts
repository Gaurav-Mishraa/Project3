import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-delete-books',
  templateUrl: './delete-books.component.html',
  styleUrls: ['./delete-books.component.css']
})
export class DeleteBooksComponent implements OnInit {

    book: any;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private service: BookService) { }

    ngOnInit() {
        this.service.getBookById(this.route.snapshot.params.id).subscribe(data => {
            this.book = data;
        })
    }

    deleteBook(id: number) {
        this.service.deleteBook(id).subscribe(data => {
            this.router.navigate(["/books"]);
        })
    }

}
