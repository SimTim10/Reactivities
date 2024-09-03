using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using Persistence;
using SQLitePCL;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }
            public string? Title { get; set; }
            public string? Description { get; set; }
            public string? Category { get; set; }
            public DateTime? Date { get; set; }
            public string? City { get; set; }
            public string? Venue { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _dataContext;

            public Handler(DataContext dataContext)
            {
                _dataContext = dataContext;
            }
            public async Task<Unit> Handle(Command command, CancellationToken cancellationToken)
            {
                var activity = await _dataContext.Activities.FindAsync(command.Id);

                if (activity == null) throw new Exception("Activity not found");

                activity.Title = command.Title ?? activity.Title;
                activity.Description = command.Description ?? activity.Description;
                activity.Category = command.Category ?? activity.Category;
                activity.Date = command.Date ?? activity.Date;
                activity.City = command.City ?? activity.City;
                activity.Venue = command.Venue ?? activity.Venue;

                // _dataContext.Activities.Update(activity);

                var success = await _dataContext.SaveChangesAsync() > 0; 

                if(success) return Unit.Value;

                throw new Exception("Problem saving changes");
            }
        }
    }
}