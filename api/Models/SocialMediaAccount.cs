using System;
using System.Globalization;
using LandingAPI.Enums;

namespace LandingAPI.Model
{
    public class SocialMediaAccount 
    {
        public Guid Id { get; set; }
        public int PlatformId { get; set; }

        public string Platform {
            get{
                return SocialMediaPlatform.FromValue<SocialMediaPlatform>(PlatformId).Name.ToLower(new CultureInfo("en-US", false));
            }
        }
        public string Username { get; set; }
        public bool IsActive { get; set; } = true;
        public long Version { get; set; }
    }
}