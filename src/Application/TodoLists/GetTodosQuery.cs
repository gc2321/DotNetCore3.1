﻿using Domain.Todo;
using FluentValidation;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Application.TodoLists
{
    public class GetTodosQuery
    {
        public class Query : IRequest<TodoList>
        {
            public int Id { get; set; }
            public string Title { get; set; }
        }

        public class QueryValidator : AbstractValidator<Query>
        {
            public QueryValidator()
            {
                RuleFor(x => x.Id).NotEmpty();
                RuleFor(x => x.Title).NotEmpty();
            }
        }

        public class Handler : IRequestHandler<Query, TodoList>
        {    
            public Handler()
            {
               
            }

            public async Task<TodoList> Handle(Query request, CancellationToken cancellationToken)
            {
                return null;
            }

          
        }
    }
}