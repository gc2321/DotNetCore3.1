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

            for (var i = 0; i < 150; i++)
            {
                toDoList.Add(new Item()
                {
                    Id = i + 1,
                    Title = $"{i + 1} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    Note = $"{i + 1} Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                });
            }

            return toDoList;
        }
    }
}