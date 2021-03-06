import { Model, Table, Column, DataType, HasMany, DefaultScope, ForeignKey } from 'sequelize-typescript';

import { Role } from './Role';
import { Right } from './Right';

@Table({ tableName:'admin_role_right'} )
export class RoleRight extends Model<RoleRight> {

  @ForeignKey(() => Right)
  @Column
  right_id: number;

  @ForeignKey(() => Role)
  @Column
  role_id: number;
}