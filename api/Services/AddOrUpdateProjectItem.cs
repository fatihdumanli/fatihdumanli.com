using System;
using ServiceStack;

namespace PersonalSite.Services
{
    [Route("/site/add/project", "POST")]
    public class AddOrUpdateProjectItem : IReturn<bool>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Link { get; set; }
        public string Thumbnail { get; set; }

    }
}