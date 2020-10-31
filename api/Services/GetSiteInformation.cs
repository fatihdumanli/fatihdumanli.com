using LandingAPI.Model;
using ServiceStack;

namespace LandingAPI.Services
{
    [Route("/info", "GET")]
    [EnableCors(allowedMethods:"GET,POST")]
    public class GetSiteInformation : IReturn<SiteInfoModel>
    {
    }
}