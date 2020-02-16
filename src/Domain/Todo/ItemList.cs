using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Todo
{
    public class ItemList
    {
        public ItemList()
        {
            Items = new List<Item>();
        }
        public int Id { get; set; }
        public string Title { get; set; }
        public string Colour { get; set; }
        public IList<Item> Items { get; set; }
    }
}
