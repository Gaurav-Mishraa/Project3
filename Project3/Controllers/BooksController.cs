using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project3.Data.Models;
using Project3.Data.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private IBookService _service;

        public BooksController(IBookService service)
        {
            _service = service;

        }

        //API Endpoint Creation
        //creation/addition of new book
        [HttpPost("AddBook")]
        public IActionResult AddBook([FromBody] Book book)
        {
            try
            {
                if (book.Author != null && book.Title != null && book.Description != null)
                {
                    _service.AddBook(book);
                    return Ok(book);
                }
                return BadRequest("Book was not added");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
           
            //return Ok("Record Added Sucessfully");
        }

        //API Endpoint for getting all records data
        [HttpGet("[action]")]
        public IActionResult GetBooks()
        {
            var allbooks = _service.GetAllBooks();
            return Ok(allbooks);

        }

        //API Endpointfor updation of records
        [HttpPut("UpdateBook/{id}")]
        public IActionResult UpdateBooks(int id,[FromBody] Book book)
        {
            _service.UpdateBook(id, book);
            return Ok(book);
        }

        //API for Deletion of record
        [HttpDelete("Deletebook/{id}")]
        public IActionResult DeleteBook(int id)
        {
            _service.DeleteBook(id);
            return Ok("Deleted Record!!");
        }

        //End point for reding single book
        [HttpGet("SignleBook/{id}")]
        public IActionResult GetBooksById(int id)
        {
            var book = _service.GetBookById(id);
            return Ok(book);
        }
    }
}
