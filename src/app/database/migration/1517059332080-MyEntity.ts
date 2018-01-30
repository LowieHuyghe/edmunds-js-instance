import {
  MigrationInterface,
  QueryRunner
} from 'typeorm'

export class MyEntity1517059332080 implements MigrationInterface {
  /**
   * Up the migration
   * @param {QueryRunner} queryRunner
   * @returns {Promise<any>}
   */
  async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE TABLE my_entity (
        id     INTEGER       PRIMARY KEY AUTOINCREMENT,
        title  VARCHAR(255)  NOT NULL,
        text   VARCHAR(500)  NOT NULL
      )
    `)
  }

  /**
   * Down the migration
   * @param {QueryRunner} queryRunner
   * @returns {Promise<any>}
   */
  async down (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      DROP TABLE my_entity
    `)
  }
}
