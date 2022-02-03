using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project3.Data;
using Project3.Data.Models;

namespace Project3.Data.Services
{
    public interface IBookService
    {
        //all method signatures
        List<Book> GetAllBooks();

        Book GetBookById(int id);

        void UpdateBook(int id, Book newBook);

        void DeleteBook(int id);

        void AddBook(Book newBook);
    }
}
