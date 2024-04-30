import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Invoice } from './invoice.entity';

@Entity('Customer')
export class Customer extends Base {
  @Column()
  FullName: string;

  @Column()
  Address: string;

  @Column()
  PhoneNumber: string;

  @OneToMany(() => Invoice, (invoice) => invoice.Customer)
  Invoices: Invoice[];
}
