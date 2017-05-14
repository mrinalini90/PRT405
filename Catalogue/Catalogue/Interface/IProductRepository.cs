using Catalogue.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Catalogue.Interface
{
    interface IProductRepository
    {
        IEnumerable<Item> GetAll();
        Item Get(int id);
        Item Add(Item item);
        bool Update(Item item);
        bool Delete(int id);
    }
}
