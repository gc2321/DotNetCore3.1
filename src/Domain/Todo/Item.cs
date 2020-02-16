using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Todo
{
    public class Item
    {
        public int Id { get; set; }
        public int ListId { get; set; }
        public string Title { get; set; }
        public string Note { get; set; }
        public bool Done { get; set; }
        public DateTime? Reminder { get; set; }
        public PriorityLevel Priority { get; set; }

    }
}
