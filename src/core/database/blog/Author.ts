import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table
export class Author extends Model<Author>{
    @Column({
        type:DataType.INTEGER,
        primaryKey: true
    })
    id: number;

    @Column(DataType.STRING)
    name: string;
}