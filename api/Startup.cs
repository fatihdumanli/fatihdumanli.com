using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Funq;
using LandingAPI.Persistance;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using PersonalSite.Authorization;
using PersonalSite.Model;
using ServiceStack;
using ServiceStack.Auth;

namespace api
{
    class AppHost : ServiceStack.AppHostBase
    {
        public AppHost() : base("Personal", typeof(Startup).Assembly)
        {
            Plugins.Add(new CorsFeature());
            Plugins.Add(new AuthFeature(() => new AuthUserSession(),
                new IAuthProvider[] {
                    new SiteAuthProvider()
                }));
        }

        public override void Configure(Container container)
        {
            var userRepo = new SiteAuthRepository();
            container.Register<IUserAuthRepository>(userRepo);
        }
    }


    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                SiteInformationDbContext context = new SiteInformationDbContext();
                context.Database.Migrate();
            }

            app.UseServiceStack(new AppHost());

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Hello World!");
                });
            });
        }
    }
}
