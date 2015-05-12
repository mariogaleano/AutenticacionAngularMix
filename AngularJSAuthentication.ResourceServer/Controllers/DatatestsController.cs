using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AngularJSAuthentication.ResourceServer.Controllers
{
    [Authorize]
    [RoutePrefix("api/datatests/{cantidad}")]
    [EnableCors("*", "*", "*")]
    public class DatatestsController : ApiController
    {
        [Route("")]
        public List<string> Get(int cantidad = 10)
        {
            var usuario = User.Identity.Name;

            if (cantidad > 200)
                cantidad = 200;

            var results = new List<string>();
            for (int i = 0; i < cantidad; i++)
            {
                results.Add(usuario + " "  + i);
            }

            return results;
        } 
    }
}
