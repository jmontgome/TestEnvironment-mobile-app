using Microsoft.AspNetCore.Mvc;
using System.Net.Mime;
using Core.Models;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : Controller
    {
        [HttpPost("object_type_parameter")]
        [Consumes(MediaTypeNames.Application.Json)]
        [Produces(MediaTypeNames.Application.Json, Type = typeof(Test))]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> TestServerObjectTransaction(Test value)
        {
            try
            {
                return new JsonResult(new Test() { Message = "Message received!" });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }

        [HttpPost("string_type_parameter")]
        [Consumes(MediaTypeNames.Application.Json)]
        [Produces(MediaTypeNames.Application.Json, Type = typeof(Test))]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<IActionResult> TestServerSimpleTransaction([FromBody] string value)
        {
            try
            {
                ContentResult result = this.Content("Message received!");
                result.StatusCode = 200;
                return result;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return null;
            }
        }
    }
}