using ServiceStack;

namespace PersonalSite.Services
{
    [Route("/site/set/fullname", "POST")]
    public class SetFullName : IReturn<bool>
    {
        public string FullName { get; set; }
    }
}