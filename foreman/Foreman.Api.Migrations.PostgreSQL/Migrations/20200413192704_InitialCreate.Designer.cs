/*
Crucible
Copyright 2020 Carnegie Mellon University.
NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
Released under a MIT (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
Carnegie Mellon(R) and CERT(R) are registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.
DM20-0181
*/

// <auto-generated />
using System;
using Foreman.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Foreman.Api.Migrations.PostgreSQL.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20200413192704_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:PostgresExtension:uuid-ossp", ",,")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("Foreman.Core.Models.WebHook", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id")
                        .HasDefaultValueSql("uuid_generate_v4()");

                    b.Property<DateTime>("CreatedUtc")
                        .HasColumnName("created_utc");

                    b.Property<string>("Description")
                        .HasColumnName("description");

                    b.Property<bool>("MustAuthenticate")
                        .HasColumnName("must_authenticate");

                    b.Property<string>("Payload")
                        .HasColumnName("payload");

                    b.Property<int>("PostbackMethod")
                        .HasColumnName("postback_method");

                    b.Property<string>("PostbackUrl")
                        .HasColumnName("postback_url");

                    b.Property<int>("Status")
                        .HasColumnName("status");

                    b.HasKey("Id");

                    b.ToTable("webhooks");
                });

            modelBuilder.Entity("Foreman.Core.Models.WorkOrder", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id")
                        .HasDefaultValueSql("uuid_generate_v4()");

                    b.Property<DateTime>("CreatedUtc")
                        .HasColumnName("created_utc");

                    b.Property<DateTime>("End")
                        .HasColumnName("end");

                    b.Property<string>("GroupName")
                        .HasColumnName("group_name");

                    b.Property<int>("Job")
                        .HasColumnName("job");

                    b.Property<int?>("JobKey")
                        .HasColumnName("job_key");

                    b.Property<DateTime>("Start")
                        .HasColumnName("start");

                    b.Property<int>("Status")
                        .HasColumnName("status");

                    b.Property<Guid>("WebhookId")
                        .HasColumnName("webhook_id");

                    b.HasKey("Id");

                    b.ToTable("workorders");
                });

            modelBuilder.Entity("Foreman.Core.Models.WorkOrder+WorkOrderParameter", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id");

                    b.Property<string>("Name")
                        .HasColumnName("name");

                    b.Property<string>("Value")
                        .HasColumnName("value");

                    b.Property<Guid?>("WorkOrderId")
                        .HasColumnName("work_order_id");

                    b.HasKey("Id");

                    b.HasIndex("WorkOrderId");

                    b.ToTable("workorderparameters");
                });

            modelBuilder.Entity("Foreman.Core.Models.WorkOrder+WorkOrderResult", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id");

                    b.Property<DateTime>("CreatedUtc")
                        .HasColumnName("created_utc");

                    b.Property<string>("Payload")
                        .HasColumnName("payload");

                    b.Property<Guid?>("WorkOrderId")
                        .HasColumnName("work_order_id");

                    b.HasKey("Id");

                    b.HasIndex("WorkOrderId");

                    b.ToTable("workorderresults");
                });

            modelBuilder.Entity("Foreman.Core.Models.WorkOrder+WorkOrderTrigger", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("id");

                    b.Property<string>("GroupName")
                        .HasColumnName("group_name");

                    b.Property<int>("Interval")
                        .HasColumnName("interval");

                    b.Property<Guid?>("WorkOrderId")
                        .HasColumnName("work_order_id");

                    b.HasKey("Id");

                    b.HasIndex("WorkOrderId");

                    b.ToTable("workordertriggers");
                });

            modelBuilder.Entity("Foreman.Core.Models.WorkOrder+WorkOrderParameter", b =>
                {
                    b.HasOne("Foreman.Core.Models.WorkOrder")
                        .WithMany("Params")
                        .HasForeignKey("WorkOrderId");
                });

            modelBuilder.Entity("Foreman.Core.Models.WorkOrder+WorkOrderResult", b =>
                {
                    b.HasOne("Foreman.Core.Models.WorkOrder")
                        .WithMany("Results")
                        .HasForeignKey("WorkOrderId");
                });

            modelBuilder.Entity("Foreman.Core.Models.WorkOrder+WorkOrderTrigger", b =>
                {
                    b.HasOne("Foreman.Core.Models.WorkOrder")
                        .WithMany("Triggers")
                        .HasForeignKey("WorkOrderId");
                });
#pragma warning restore 612, 618
        }
    }
}

