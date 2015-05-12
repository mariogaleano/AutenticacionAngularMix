using Newtonsoft.Json.Serialization;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;

namespace AngularJSAuthentication.API
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            // Web API routes
            config.MapHttpAttributeRoutes();

            //var corsAttr = new EnableCorsAttribute("https://mgadauthentication.azurewebsites.net,https://mgresourceserver.azurewebsites.net", "*", "*");
            //var corsAttr = new EnableCorsAttribute("https://mgadauthentication.azurewebsites.net", "*", "*");

            //var corsAttr =new EnableCorsAttribute(
                    //"https://mgadauthentication.azurewebsites.net,https://mgresourceserver.azurewebsites.net", "*",
                    //"GET, POST");

            //var corsAttr = new EnableCorsAttribute("*", "*", "OPTIONS");
            //config.EnableCors(corsAttr);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var jsonFormatter = config.Formatters.OfType<JsonMediaTypeFormatter>().First();
            jsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}
