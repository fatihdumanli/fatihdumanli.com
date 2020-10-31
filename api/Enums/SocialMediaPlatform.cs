namespace LandingAPI.Enums
{
    public class SocialMediaPlatform : Enumeration
    {
        public static SocialMediaPlatform Facebook = new SocialMediaPlatform(1, "Facebook");
        public static SocialMediaPlatform Twitter = new SocialMediaPlatform(2, "Twitter");
        public static SocialMediaPlatform Instagram = new SocialMediaPlatform(3, "Instagram");
        public static SocialMediaPlatform Medium = new SocialMediaPlatform(4, "Medium");
        public static SocialMediaPlatform GitHub = new SocialMediaPlatform(5, "GitHub");
        public static SocialMediaPlatform LinkedIn = new SocialMediaPlatform(6, "LinkedIn");


        public SocialMediaPlatform(int id, string name) : base(id, name)
        {      
        }
    }
}