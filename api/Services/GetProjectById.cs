using System;
using ServiceStack;

namespace PersonalSite.Services
{
    
    [Route("/site/project/{Id}", "GET")]
    public class GetProjectById : IReturn<Model.ProjectItem>
    {
        public Guid Id { get; set; }        
    }
}