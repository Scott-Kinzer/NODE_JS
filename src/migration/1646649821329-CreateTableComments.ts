import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableComments1646649821329 implements MigrationInterface {
    // eslint-disable-next-line class-methods-use-this
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Comments',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'text',
                    type: 'varchar',
                    isUnique: true,
                    width: 255,
                    isNullable: false,
                },

                {
                    name: 'authorId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'postId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'like',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'dislike',
                    type: 'int',
                    isNullable: true,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['authorId'],
                    referencedTableName: 'Users',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },

                {
                    columnNames: ['postId'],
                    referencedTableName: 'Posts',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }), true);
    }

    // eslint-disable-next-line class-methods-use-this
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Comments', true);
    }
}
