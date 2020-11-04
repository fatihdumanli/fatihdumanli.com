using LandingAPI.Model;
using ServiceStack;

namespace PersonalSite.Services
{
    [Route("/info", "GET")]
    [EnableCors(allowedMethods:"GET,POST")]
    public class GetSiteInformation : IReturn<SiteInfoModel>
    {
    }
}