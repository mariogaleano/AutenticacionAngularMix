using System.Collections.Generic;
using System.Web.Cors;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AngularJSAuthentication.ResourceServer.Controllers
{
    [Authorize]
    [RoutePrefix("api/datatests")]
    [EnableCors("*", "*", "*")]
    public class DatatestsController : ApiController
    {
        [Route("")]
        public List<string> Get()
        {
            var usuario = User.Identity.Name;

            var results = new List<string>();
            for (int i = 0; i < 10; i++)
            {
                results.Add(usuario + " "  + i);
            }

            return results;
        } 
    }
}
