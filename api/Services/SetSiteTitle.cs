using ServiceStack;

namespace LandingAPI.Services
{
    [Route("/site/set/sitetitle", "POST")]
    [Authenticate]
    public class SetSiteTitle : IReturn<bool>
    {
        public string SiteTitle { get; set; }        
    }
}