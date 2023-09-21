import { MigrationInterface, QueryRunner } from "typeorm";

export class Projeto1690213729243 implements MigrationInterface {
    name = 'Projeto1690213729243'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" RENAME COLUMN "desription" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" RENAME COLUMN "description" TO "desription"`);
    }

}
