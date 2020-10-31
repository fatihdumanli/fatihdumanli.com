using ServiceStack;

namespace LandingAPI.Services
{
    [Route("/site/set/profilepicture")]
    public class SetProfilePicture : IReturn<bool>
    {
        public string ProfilePicture { get; set; }        
    }
}