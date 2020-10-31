using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class update1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "SocialMediaAccounts",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<long>(
                name: "Version",
                table: "SocialMediaAccounts",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "SocialMediaAccounts");

            migrationBuilder.DropColumn(
                name: "Version",
                table: "SocialMediaAccounts");
        }
    }
}
