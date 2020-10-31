using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SiteInfo",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    OverviewText = table.Column<string>(nullable: true),
                    Version = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SiteInfo", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SocialMediaAccounts",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    PlatformId = table.Column<int>(nullable: false),
                    Username = table.Column<string>(nullable: true),
                    SiteInfoModelId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SocialMediaAccounts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SocialMediaAccounts_SiteInfo_SiteInfoModelId",
                        column: x => x.SiteInfoModelId,
                        principalTable: "SiteInfo",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SocialMediaAccounts_SiteInfoModelId",
                table: "SocialMediaAccounts",
                column: "SiteInfoModelId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SocialMediaAccounts");

            migrationBuilder.DropTable(
                name: "SiteInfo");
        }
    }
}
