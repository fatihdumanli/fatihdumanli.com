using ServiceStack;

namespace PersonalSite.Services
{
    [Route("/site/set/email", "POST")]
    [Authenticate]
    public class SetEmail : IReturn<bool>
    {
        public string Email { get; set; }
    }
}