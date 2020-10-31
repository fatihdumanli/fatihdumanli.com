using LandingAPI.Model;
using Microsoft.EntityFrameworkCore;
using PersonalSite.Model;

namespace LandingAPI.Persistance
{
    public class SiteInformationDbContext : DbContext
    {
       protected override void OnConfiguring(DbContextOptionsBuilder builder)
       {
           builder.UseSqlite("Data Source=siteInfo.db");
       }

       public DbSet<SocialMediaAccount> SocialMediaAccounts { get; set; }
       public DbSet<SiteInfoModel> SiteInfo { get; set; }
       public DbSet<User> Users { get; set; }

    }
}