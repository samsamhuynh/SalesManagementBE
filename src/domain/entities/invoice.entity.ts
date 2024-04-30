import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { Customer } from './customer.entity';
import { Employee } from './employee.entity';
import { InvoiceDetail } from './invoice-detail.entity';

@Entity('Invoice')
export class Invoice extends Base {
  @Column()
  CustomerID: string;

  @Column()
  EmployeeID: string;

  @Column()
  InvoiceDate: Date;

  @Column({ nullable: true })
  DeliveryDate?: Date;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'CustomerID' })
  Customer: Customer;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'EmployeeID' })
  Employee: Employee;

  @OneToMany(() => InvoiceDetail, (invoiceDetail) => invoiceDetail.Product)
  InvoiceDetails: InvoiceDetail[];
}
