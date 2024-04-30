import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDatabase1714492226733 implements MigrationInterface {
    name = 'CreateDatabase1714492226733'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Customer" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "IsDeleted" boolean NOT NULL DEFAULT false, "CreatedBy" character varying NOT NULL, "CreatedOn" TIMESTAMP NOT NULL DEFAULT now(), "UpdatedBy" character varying, "UpdatedOn" TIMESTAMP DEFAULT now(), "DeletedBy" character varying, "DeletedOn" TIMESTAMP, "FullName" character varying NOT NULL, "Address" character varying NOT NULL, "PhoneNumber" character varying NOT NULL, CONSTRAINT "PK_cf3de828ba34319b20feedde6e3" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "Employee" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "IsDeleted" boolean NOT NULL DEFAULT false, "CreatedBy" character varying NOT NULL, "CreatedOn" TIMESTAMP NOT NULL DEFAULT now(), "UpdatedBy" character varying, "UpdatedOn" TIMESTAMP DEFAULT now(), "DeletedBy" character varying, "DeletedOn" TIMESTAMP, "LastName" character varying NOT NULL, "FirstName" character varying NOT NULL, "Gender" boolean, "DateOfBirth" TIMESTAMP NOT NULL, "Address" character varying NOT NULL, "PhoneNumber" character varying NOT NULL, CONSTRAINT "PK_f0f4637f4649a2b0fb85335cd28" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "Product" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "IsDeleted" boolean NOT NULL DEFAULT false, "CreatedBy" character varying NOT NULL, "CreatedOn" TIMESTAMP NOT NULL DEFAULT now(), "UpdatedBy" character varying, "UpdatedOn" TIMESTAMP DEFAULT now(), "DeletedBy" character varying, "DeletedOn" TIMESTAMP, "productName" character varying NOT NULL, "unit" character varying NOT NULL, "price" numeric(18,2) NOT NULL, CONSTRAINT "PK_b9e83eb0041db584b3a0762a035" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "InvoiceDetail" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "IsDeleted" boolean NOT NULL DEFAULT false, "CreatedBy" character varying NOT NULL, "CreatedOn" TIMESTAMP NOT NULL DEFAULT now(), "UpdatedBy" character varying, "UpdatedOn" TIMESTAMP DEFAULT now(), "DeletedBy" character varying, "DeletedOn" TIMESTAMP, "InvoiceID" uuid NOT NULL, "ProductID" uuid NOT NULL, "Quantity" integer NOT NULL, CONSTRAINT "PK_c7fa61b842e192dc6482189ec7d" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "Invoice" ("Id" uuid NOT NULL DEFAULT uuid_generate_v4(), "IsDeleted" boolean NOT NULL DEFAULT false, "CreatedBy" character varying NOT NULL, "CreatedOn" TIMESTAMP NOT NULL DEFAULT now(), "UpdatedBy" character varying, "UpdatedOn" TIMESTAMP DEFAULT now(), "DeletedBy" character varying, "DeletedOn" TIMESTAMP, "CustomerID" uuid NOT NULL, "EmployeeID" uuid NOT NULL, "InvoiceDate" TIMESTAMP NOT NULL, "DeliveryDate" TIMESTAMP, CONSTRAINT "PK_fd67c1f67387df3b791cd0e622c" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`ALTER TABLE "InvoiceDetail" ADD CONSTRAINT "FK_9e1887751dadefeac8ff11d4f93" FOREIGN KEY ("InvoiceID") REFERENCES "Invoice"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "InvoiceDetail" ADD CONSTRAINT "FK_ed03dfd33bd0cf05f76caff831d" FOREIGN KEY ("ProductID") REFERENCES "Product"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Invoice" ADD CONSTRAINT "FK_8845e067f04c85f6a501b6d8661" FOREIGN KEY ("CustomerID") REFERENCES "Customer"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Invoice" ADD CONSTRAINT "FK_a8fb8f4ad8399c8cdc508ac81d8" FOREIGN KEY ("EmployeeID") REFERENCES "Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Invoice" DROP CONSTRAINT "FK_a8fb8f4ad8399c8cdc508ac81d8"`);
        await queryRunner.query(`ALTER TABLE "Invoice" DROP CONSTRAINT "FK_8845e067f04c85f6a501b6d8661"`);
        await queryRunner.query(`ALTER TABLE "InvoiceDetail" DROP CONSTRAINT "FK_ed03dfd33bd0cf05f76caff831d"`);
        await queryRunner.query(`ALTER TABLE "InvoiceDetail" DROP CONSTRAINT "FK_9e1887751dadefeac8ff11d4f93"`);
        await queryRunner.query(`DROP TABLE "Invoice"`);
        await queryRunner.query(`DROP TABLE "InvoiceDetail"`);
        await queryRunner.query(`DROP TABLE "Product"`);
        await queryRunner.query(`DROP TABLE "Employee"`);
        await queryRunner.query(`DROP TABLE "Customer"`);
    }

}
