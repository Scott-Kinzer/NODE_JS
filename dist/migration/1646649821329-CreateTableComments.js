"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableComments1646649821329 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableComments1646649821329 {
    // eslint-disable-next-line class-methods-use-this
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
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
        });
    }
    // eslint-disable-next-line class-methods-use-this
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('Comments', true);
        });
    }
}
exports.CreateTableComments1646649821329 = CreateTableComments1646649821329;
//# sourceMappingURL=1646649821329-CreateTableComments.js.map