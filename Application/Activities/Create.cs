using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
            public string Category { get; set; }
            public DateTime Date { get; set; }
            public string City { get; set; }
            public string Venue { get; set; }
        }

        public class Handler : IRequestHandler<Command,Unit>
        {
            private readonly DataContext _dataContext;
            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;
            }
            public async Task<Unit> Handle(Command command, CancellationToken cancellationToken)
            {
                var activity = new Activity
                {
                    Id = command.Id,
                    Title = command.Title,
                    Description = command.Description,
                    Category = command.Category,
                    Date = command.Date,
                    City = command.City,
                    Venue = command.Venue
                };

                _dataContext.Activities.Add(activity);
                var success = await _dataContext.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}