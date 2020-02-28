using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Domain.Todo;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Application.TodoLists;

namespace API.Controllers
{
    public class ToDoListController : BaseController
    {
        private readonly IHttpClientFactory _clientFactory;
        private readonly IMediator _mediator;
        public ToDoListController(IHttpClientFactory clientFactory, IMediator mediator)
        {
            _clientFactory = clientFactory;
            _mediator = mediator;
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

        [HttpPost("search")]
        public async Task<IEnumerable<Item>> Search([FromBody] SearchParam param)
        {
            var request = new GetTodos.Query { Term = param.Term, Type = param.Type };
            return await _mediator.Send(request);
        }
    }
}