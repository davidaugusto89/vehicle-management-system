import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateVehiclesTable0002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE vehicles (
        id SERIAL PRIMARY KEY,
        brand_id INT NOT NULL,
        model_id INT NOT NULL,
        year INT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        deleted_at TIMESTAMP DEFAULT NULL,
        FOREIGN KEY (brand_id) REFERENCES brands(id),
        FOREIGN KEY (model_id) REFERENCES models(id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE vehicles;`);
  }
}
