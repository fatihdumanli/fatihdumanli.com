using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class update3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SiteTitle",
                table: "SiteInfo",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SiteTitle",
                table: "SiteInfo");
        }
    }
}
