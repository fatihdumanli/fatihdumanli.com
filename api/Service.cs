using System;
using System.Collections.Generic;
using System.Linq;
using LandingAPI.Enums;
using LandingAPI.Model;
using LandingAPI.Persistance;

namespace PersonalSite
{
    public class Service : ServiceStack.Service
    {

        SiteInformationDbContext dbContext = new SiteInformationDbContext();

        public object Any(Services.GetSiteInformation request)
        {
            var siteInfo = dbContext.SiteInfo.SingleOrDefault();
            siteInfo.SocialMediaAccounts = dbContext.SocialMediaAccounts.ToList();
            var projects = dbContext.Projects.ToList();

            var info = new { siteInfo = siteInfo, 
                projects = dbContext.Projects.ToList() };   
          
            return info;
        }

        public object Any(Services.SetFullName request)
        {
            SiteInfoModel siteInformation = dbContext.SiteInfo.SingleOrDefault();

            if (siteInformation == null)
            {
                siteInformation = new SiteInfoModel();
                siteInformation.Version = 1;
                siteInformation.Name = request.FullName;
                dbContext.SiteInfo.Add(siteInformation);
            }

            siteInformation.Name = request.FullName;
            siteInformation.Version = siteInformation.Version + 1;
            dbContext.SaveChanges();
            return true;
        }

        public object Any(Services.SetEmail request)
        {
            SiteInfoModel siteInformation = dbContext.SiteInfo.SingleOrDefault();

            if (siteInformation == null)
            {
                siteInformation = new SiteInfoModel();
                siteInformation.Version = 1;
                siteInformation.Email = request.Email;
                dbContext.SiteInfo.Add(siteInformation);
            }

            siteInformation.Email = request.Email;
            siteInformation.Version = siteInformation.Version + 1;

            dbContext.SaveChanges();
            return true;
        }


        public object Any(Services.SetSocialMediaAccount request)
        {
            SocialMediaPlatform platform = null;

            try
            {
                platform = SocialMediaPlatform.FromDisplayName<SocialMediaPlatform>(request.Platform);
            }

            catch
            {
                return string.Format("Please use one of those platforms {0}", string.Join(',', SocialMediaPlatform.GetAll<SocialMediaPlatform>().Select(w => w.Name)));
            }


            var socialMediaAccount = dbContext.SocialMediaAccounts.Where(sm => sm.PlatformId == platform.Id).SingleOrDefault();

            if (socialMediaAccount == null)
            {
                socialMediaAccount = new SocialMediaAccount() { PlatformId = platform.Id, Username = request.Username };
                socialMediaAccount.Version = 1;
                dbContext.SocialMediaAccounts.Add(socialMediaAccount);
                dbContext.SaveChanges();
                return true;
            }


            socialMediaAccount.Username = request.Username;
            dbContext.SaveChanges();
            return true;
        }

        public object Any(Services.SetOverview request)
        {
            SiteInfoModel siteInformation = dbContext.SiteInfo.SingleOrDefault();

            if (siteInformation == null)
            {
                siteInformation = new SiteInfoModel();
                siteInformation.Version = 1;
                siteInformation.OverviewText = request.Overview;
                dbContext.SiteInfo.Add(siteInformation);
            }

            siteInformation.OverviewText = request.Overview;
            siteInformation.Version = siteInformation.Version + 1;
            dbContext.SaveChanges();
            return true;
        }

        public object Any(Services.SetProfilePicture request)
        {
            SiteInfoModel siteInformation = dbContext.SiteInfo.SingleOrDefault();

            if (siteInformation == null)
            {
                siteInformation = new SiteInfoModel();
                siteInformation.Version = 1;
                siteInformation.ProfilePicture = request.ProfilePicture;
                dbContext.SiteInfo.Add(siteInformation);
            }

            siteInformation.ProfilePicture = request.ProfilePicture;
            siteInformation.Version = siteInformation.Version + 1;
            dbContext.SaveChanges();
            return true;
        }

        public object Any(Services.SetSiteTitle request)
        {
            SiteInfoModel siteInformation = dbContext.SiteInfo.SingleOrDefault();

            if (siteInformation == null)
            {
                siteInformation = new SiteInfoModel();
                siteInformation.Version = 1;
                siteInformation.SiteTitle = request.SiteTitle;
                dbContext.SiteInfo.Add(siteInformation);
            }

            siteInformation.SiteTitle = request.SiteTitle;
            siteInformation.Version = siteInformation.Version + 1;
            dbContext.SaveChanges();
            return true;
        }


        public object Any(Services.AddOrUpdateProjectItem request)
        {

            if (request.Id == Guid.Empty)
            {
                var projectItem = new Model.ProjectItem()
                {
                    Id = Guid.NewGuid(),
                    Name = request.Name,
                    Description = request.Description,
                    Thumbnail = request.Thumbnail,
                    Link = request.Link
                };


                dbContext.Projects.Add(projectItem);
                dbContext.SaveChanges();
                return true;
            }

            else
            {
                var projectItem = dbContext.Projects.Where(p => p.Id == request.Id).SingleOrDefault();
                projectItem.Name = request.Name;
                projectItem.Description = request.Description;
                projectItem.Thumbnail = request.Thumbnail;
                projectItem.Link = request.Link;
                dbContext.Projects.Update(projectItem);
                dbContext.SaveChanges();
                return true;
            }


        }

        public object Any(Services.GetProjectById request)
        {
            var project = dbContext.Projects.Where(p => p.Id == request.Id).SingleOrDefault();
            return project;            
        }

    }
}