import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

export class Base {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ default: false })
  IsDeleted: boolean;

  @Column()
  CreatedBy: string;

  @CreateDateColumn()
  CreatedOn: Date;

  @Column({ nullable: true })
  UpdatedBy?: string;

  @UpdateDateColumn({ nullable: true })
  UpdatedOn?: Date;

  @Column({ nullable: true })
  DeletedBy?: string;

  @DeleteDateColumn({ nullable: true })
  DeletedOn?: Date;
}
