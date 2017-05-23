using System.Web;
using System.Web.Optimization;

namespace Test
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/materialize/css/materialize.css",
                      "~/Content/site.css",
                      "~/Content/materialize/font/material-design-icons/ Material-Design-Icons.ttf",
                      "~/Content/materialize/font/material-design-icons/ Material-Design-Icons.woff",
                      "~/Content/materialize/font/material-design-icons/ Material-Design-Icons.woff2",
                      "~/Content/materialize/font/material-design-icons/ Material-Design-Icons.eot"));

            bundles.Add(new ScriptBundle("~/bundles/materialize").Include(
                   "~/Scripts/materialize/materialize.js"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                "~/Scripts/angular.js",
                "~/Scripts/angular-route.js"));

            bundles.Add(new ScriptBundle("~/bundles/angularControllersJs")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .Include("~/Scripts/AngularJs.js")
                );
        }
    }
}
