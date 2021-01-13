using Microsoft.EntityFrameworkCore.Migrations;

namespace Absolute.Migrations
{
    public partial class AddPhotoURLToProject : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhotoURL",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhotoURLGrid1",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhotoURLGrid2",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhotoURLGrid3",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhotoURLGrid4",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhotoURLGrid5",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhotoURLGrid6",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhotoURLGrid7",
                table: "Projects",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhotoURLGrid8",
                table: "Projects",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoURL",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "PhotoURLGrid1",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "PhotoURLGrid2",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "PhotoURLGrid3",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "PhotoURLGrid4",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "PhotoURLGrid5",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "PhotoURLGrid6",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "PhotoURLGrid7",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "PhotoURLGrid8",
                table: "Projects");
        }
    }
}
