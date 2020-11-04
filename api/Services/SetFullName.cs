using ServiceStack;

namespace LandingAPI.Services
{
    [Route("/site/set/fullname", "POST")]
    public class SetFullName : IReturn<bool>
    {
        public string FullName { get; set; }
    }
}