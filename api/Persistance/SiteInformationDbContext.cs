using LandingAPI.Model;
using Microsoft.EntityFrameworkCore;
using PersonalSite.Model;
using System;

namespace LandingAPI.Persistance
{
    public class SiteInformationDbContext : DbContext
    {
       protected override void OnConfiguring(DbContextOptionsBuilder builder)
       {
           builder.UseSqlite("Data Source=siteInfo.db");
       }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = Guid.NewGuid(),
                    Username = "fatih",
                    Password = "60b5cf7240d65952b2910c697fc2f84c"
                }
            );
        }

        public DbSet<SocialMediaAccount> SocialMediaAccounts { get; set; }
       public DbSet<SiteInfoModel> SiteInfo { get; set; }
       public DbSet<User> Users { get; set; }

    }
}