using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Domain.Todo;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ToDoListController : BaseController
    {
        private readonly IHttpClientFactory _clientFactory;
        public ToDoListController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        [HttpGet]
        public IEnumerable<Item> Get()
        {
            var toDoList = new List<Item>();

            var client = _clientFactory.CreateClient("github");
            //var response = await client.GetAsync("/users/octocat/orgs");

            for (var i = 0; i < 150; i++)
            {
                toDoList.Add(new Item()
                {
                    Id = i + 1,
                    Title = $"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    Note = $"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                });
            }
        
            return toDoList;
        }
    }
}