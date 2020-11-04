using ServiceStack;

namespace PersonalSite.Services
{
    [Route("/site/set/overview", "POST")]
    public class SetOverview : IReturn<bool>
    {
        public string Overview { get; set; }        
    }
}