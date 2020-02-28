using Domain.Todo;
using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.TodoLists
{
    public class GetTodos
    {
        public class Query : IRequest<IEnumerable<Item>>
        {
            public string Term { get; set; }
            public string Type { get; set; }
        }

        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.Term).NotEmpty();
                RuleFor(x => x.Type).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Query, IEnumerable<Item>>
        {
            public Handler()
            {

            }

            public async Task<IEnumerable<Item>> Handle(Query request, CancellationToken cancellationToken)
            {
                var toDoList = new List<Item>();
                for (var i = 0; i < 7; i++)
                {
                    toDoList.Add(new Item()
                    {
                        Id = i + 1,
                        Title = $"Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        Note = $"Duis aute irure cillum dolore eu fugiat nulla pariatur."
                    });
                }

                var responseTask = Task.Run(()=> toDoList);
                var response = await responseTask;

                return toDoList;
            }
        }


    }
}
}
