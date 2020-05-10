using Microsoft.AspNetCore.Mvc;
using Planted.UseCases;

namespace Planted.Controllers
{
    public abstract class PlantedController : Controller
    {

        public ActionResult<T> UseCaseResponse<T>(IUseCaseResult<T> useCaseResult)
        {
            if (!useCaseResult.IsSuccess)
            {
                return BadRequest(useCaseResult.Message);
            }

            return Ok(useCaseResult.Data);
        }

        public ActionResult UseCaseResponse(IUseCaseResult useCaseResult)
        {
            if (!useCaseResult.IsSuccess)
            {
                return BadRequest(useCaseResult.Message);
            }

            return Ok();
        }
    }
}
