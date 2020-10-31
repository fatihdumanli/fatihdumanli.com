using LandingAPI.Model;
using Microsoft.EntityFrameworkCore;

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
    }
}