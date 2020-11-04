using ServiceStack;

namespace LandingAPI.Services
{
    [Route("/site/set/sitetitle", "POST")]
    public class SetSiteTitle : IReturn<bool>
    {
        public string SiteTitle { get; set; }        
    }
}