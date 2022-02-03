using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Project3.Data;
using Project3.Data.Models;

namespace Project3.Data.Services
{
    public class BookService : IBookService
    {
        public void AddBook(Book newBook)
        {
            Data.Books.Add(newBook);
            //throw new NotImplementedException();
        }

        public void DeleteBook(int id)
        {
            var book = Data.Books.FirstOrDefault(n => n.Id == id);
            if(book!=null)
            {
                Data.Books.Remove(book);
            }
            //throw new NotImplementedException();
        }

        public List<Book> GetAllBooks()
        {
            return Data.Books.ToList();
            //throw new NotImplementedException();
        }

        public Book GetBookById(int id)
        {
            return Data.Books.FirstOrDefault(n => n.Id == id);
            //throw new NotImplementedException();
        }

        public void UpdateBook(int id, Book newBook)
        {
            var oldbook = Data.Books.FirstOrDefault(n => n.Id == id);
            if (oldbook != null)
            {
                oldbook.Title = newBook.Title;
                oldbook.Author = newBook.Author;
                oldbook.Description = newBook.Description;
                oldbook.Rate = newBook.Rate;
                oldbook.StartDate = newBook.StartDate;
                oldbook.EndDate = newBook.EndDate;
                oldbook.DateRead = newBook.DateRead;
            }
            //throw new NotImplementedException();
        }
    }
}
