using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Catalogue.Models;

namespace Catalogue.Controllers
{
    public class HomeController : Controller
    {
        private CatalogueEntities db = new CatalogueEntities();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Create(Item item)
        {
            if (ModelState.IsValid)
            {
                db.Items.Add(item);
                db.SaveChanges();
                return RedirectToAction("Create");
            }

            return View(item);
        }

    }
}