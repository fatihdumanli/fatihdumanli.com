using LandingAPI.Enums;
using ServiceStack;

namespace LandingAPI.Services
{
    [Route("/site/set/socialmedia/{Platform}")]
    [Authenticate]
    public class SetSocialMediaAccount : IReturn<bool>
    {
        public string Platform { get; set; }
        public string Username { get; set; }
        
    }
}