using ServiceStack;

namespace LandingAPI.Services
{
    [Route("/site/set/overview", "POST")]
    public class SetOverview : IReturn<bool>
    {
        public string Overview { get; set; }        
    }
}