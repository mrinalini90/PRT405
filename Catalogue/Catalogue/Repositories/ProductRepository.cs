using Catalogue.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Catalogue.Models;

namespace Catalogue.Repositories
{
    public class ProductRepository : IProductRepository
    {
        TestEntities ProductDB = new TestEntities();
        public Item Add(Item item)
        {
            if (item == null)
            {
                throw new ArgumentException("item");
            }

            ProductDB.Items.Add(item);
            ProductDB.SaveChanges();
            return item;
        }

        public bool Delete(int id)
        {
            Item products = ProductDB.Items.Find(id);
            ProductDB.Items.Remove(products);
            ProductDB.SaveChanges();
            return true;
        }

        public Item Get(int id)
        {
            return ProductDB.Items.Find(id);
        }

        public IEnumerable<Item> GetAll()
        {
            return ProductDB.Items;
        }

        public bool Update(Item item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }

            var products = ProductDB.Items.Single(a => a.Id == item.Id);
            products.Name = item.Name;
            products.Category = item.Category;
            products.Price = item.Price;
            ProductDB.SaveChanges();

            return true;
        }
    }
}