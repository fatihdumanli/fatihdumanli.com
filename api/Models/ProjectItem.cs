using System;

namespace PersonalSite.Model
{
    public class ProjectItem
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Thumbnail { get; set; }
        public string Link { get; set; }
        
    }
}