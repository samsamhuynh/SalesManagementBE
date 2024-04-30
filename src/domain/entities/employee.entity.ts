import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Invoice } from './invoice.entity';

@Entity('Employee')
export class Employee extends Base {
  @Column()
  LastName: string;

  @Column()
  FirstName: string;

  @Column({ nullable: true })
  Gender?: boolean;

  @Column()
  DateOfBirth: Date;

  @Column()
  Address: string;

  @Column()
  PhoneNumber: string;

  @OneToMany(() => Invoice, (invoice) => invoice.Employee)
  Invoices: Invoice[];
}
