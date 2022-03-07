import { Column, CreateDateColumn, DeleteDateColumn } from 'typeorm';

export class CommonFields {
    @Column(
        {
            nullable: false,
            default: Date.now(),
        },
    )
    @CreateDateColumn({
        type: 'timestamp',
    })
        createdAt: string;

    @Column({

    })
    @DeleteDateColumn({
        type: 'timestamp',
    })
        deletedAt?: string;
}
