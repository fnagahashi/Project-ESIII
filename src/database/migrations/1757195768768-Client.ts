import {MigrationInterface, QueryRunner} from "typeorm";

export class Client1757195768768 implements MigrationInterface {
    name = 'Client1757195768768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "creditCard_brand_enum" AS ENUM('Mastercard', 'Visa', 'Elo', 'American Express')`);
        await queryRunner.query(`CREATE TABLE "creditCard" ("id" character varying NOT NULL, "cardName" character varying NOT NULL, "cardNumber" character varying NOT NULL, "brand" "creditCard_brand_enum" NOT NULL, "securityCode" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "clientId" character varying, CONSTRAINT "PK_b2847f559fa03ee6e9e0fd72085" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "client_gender_enum" AS ENUM('male', 'female', 'non-binary', 'not-informed')`);
        await queryRunner.query(`CREATE TABLE "client" ("id" character varying NOT NULL, "name" character varying NOT NULL, "dateBirth" character varying NOT NULL, "cpf" character varying NOT NULL, "gender" "client_gender_enum" NOT NULL, "typePhone" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "deletedAt" TIMESTAMP, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" character varying NOT NULL, "nameAddress" character varying NOT NULL, "cep" character varying NOT NULL, "streetType" character varying NOT NULL, "street" character varying NOT NULL, "neighborhood" character varying NOT NULL, "number" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "country" character varying NOT NULL, "typeResidence" character varying NOT NULL, "typeAddress" character varying NOT NULL, "obs" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "clientId" character varying, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" character varying NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" character varying NOT NULL, "name" character varying NOT NULL, "category" character varying NOT NULL, "desc" character varying NOT NULL, "price" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sales" ("id" character varying NOT NULL, "qtd" character varying NOT NULL, "date" character varying NOT NULL, "price" character varying NOT NULL, "product" character varying NOT NULL, "client" character varying NOT NULL, "total" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "admin" boolean NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "creditCard" ADD CONSTRAINT "FK_70af263ee0ddc26b61ecdb0452b" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_3d3e29e99d821fd75d7cb117e04" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_3d3e29e99d821fd75d7cb117e04"`);
        await queryRunner.query(`ALTER TABLE "creditCard" DROP CONSTRAINT "FK_70af263ee0ddc26b61ecdb0452b"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "sales"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "client"`);
        await queryRunner.query(`DROP TYPE "client_gender_enum"`);
        await queryRunner.query(`DROP TABLE "creditCard"`);
        await queryRunner.query(`DROP TYPE "creditCard_brand_enum"`);
    }

}
