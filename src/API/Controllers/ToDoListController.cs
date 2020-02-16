using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Todo;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoListController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Item> Get()
        {
            var toDoList = new List<Item>();

            toDoList.Add(new Item()
            {
                Id = 0,
                Title = "first title",
                Note = "first note"
            });

            toDoList.Add(new Item()
            {
                Id = 1,
                Title = "second title",
                Note = "second note"
            });

            toDoList.Add(new Item()
            {
                Id = 2,
                Title = "third title",
                Note = "third note"
            });

            return toDoList;
        }
    }
}