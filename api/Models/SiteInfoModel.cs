using System;
using System.Collections.Generic;

namespace LandingAPI.Model
{
    public class SiteInfoModel
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string ProfilePicture { get; set; }
        public string SiteTitle { get; set; }
        public IList<SocialMediaAccount> SocialMediaAccounts { get; set; }
        public string OverviewText { get; set; }
        public long Version { get; set; }
        
    }
}