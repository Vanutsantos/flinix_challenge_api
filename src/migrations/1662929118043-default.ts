import { MigrationInterface, QueryRunner } from "typeorm";

export class default1662929118043 implements MigrationInterface {
    name = 'default1662929118043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(16) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(16) NOT NULL, "create_time" TIMESTAMP NOT NULL DEFAULT 'now()', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "doctors" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "crm" character varying(45) NOT NULL, "created_by" integer NOT NULL, CONSTRAINT "PK_8207e7889b50ee3695c2b8154ff" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "productivities" ("id" SERIAL NOT NULL, "service_at" TIMESTAMP NOT NULL, "value" numeric NOT NULL, "description" character varying(255) NOT NULL, "doctor_id" integer NOT NULL, CONSTRAINT "PK_20c0c849ad235226df3a7b930db" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "productivities"`);
        await queryRunner.query(`DROP TABLE "doctors"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
