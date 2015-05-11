﻿using System.Web;
using System.Web.Optimization;

namespace AngularJSAuthentication.ADAuthentication
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                        "~/Scripts/angular.min.js",
                        "~/Scripts/angular-resource.min.js",
                        "~/Scripts/angular-local-storage.min.js",
                        "~/Scripts/angular-route.min.js"));



#if DEBUG
            bundles.Add(new ScriptBundle("~/bundles/applicationFiles").Include(
                   "~/Scripts/app/app.js",
                   "~/Scripts/app/dataFactory.js",
                   "~/Scripts/app/controlador.js",
                   "~/Scripts/app/authInterceptorService.js",
                   "~/Scripts/app/authService.js"));
#endif

#if !DEBUG



            bundles.Add(new ScriptBundle("~/bundles/applicationFiles").Include(
                "~/Scripts/app/app.js",
                "~/Scripts/app/release/dataFactory.js",
                "~/Scripts/app/controlador.js",
                "~/Scripts/app/authInterceptorService.js",
            "~/Scripts/app/authService.js));

#endif

            bundles.Add(new ScriptBundle("~/bundles/xdomain").Include(
                        "~/Scripts/xdomain.min.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));


        }
    }
}
