﻿// <auto-generated />
using Absolute.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Absolute.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    partial class DatabaseContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("Absolute.Models.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("Body")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("Absolute.Models.Project", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("LongDescription")
                        .HasColumnType("text");

                    b.Property<string>("Materials")
                        .HasColumnType("text");

                    b.Property<string>("PhotoURL")
                        .HasColumnType("text");

                    b.Property<string>("PhotoURLGrid1")
                        .HasColumnType("text");

                    b.Property<string>("PhotoURLGrid2")
                        .HasColumnType("text");

                    b.Property<string>("PhotoURLGrid3")
                        .HasColumnType("text");

                    b.Property<string>("PhotoURLGrid4")
                        .HasColumnType("text");

                    b.Property<string>("PhotoURLGrid5")
                        .HasColumnType("text");

                    b.Property<string>("PhotoURLGrid6")
                        .HasColumnType("text");

                    b.Property<string>("PhotoURLGrid7")
                        .HasColumnType("text");

                    b.Property<string>("PhotoURLGrid8")
                        .HasColumnType("text");

                    b.Property<string>("ShortDescription")
                        .HasColumnType("text");

                    b.Property<string>("Title")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Projects");
                });
#pragma warning restore 612, 618
        }
    }
}
