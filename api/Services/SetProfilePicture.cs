using ServiceStack;

namespace LandingAPI.Services
{
    [Route("/site/set/profilepicture")]
    [Authenticate]
    public class SetProfilePicture : IReturn<bool>
    {
        public string ProfilePicture { get; set; }        
    }
}