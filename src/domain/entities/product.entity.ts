import { IsPositive } from 'class-validator';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';
import { Base } from './base.entity';
import { InvoiceDetail } from './invoice-detail.entity';

@Entity('Product')
export class Product extends Base {
  @Column()
  productName: string;

  @Column()
  unit: string;

  @Column('numeric', { precision: 18, scale: 2 })
  @IsPositive()
  price: number;

  @BeforeInsert()
  @BeforeUpdate()
  formatPrice() {
    this.price = parseFloat(this.price.toFixed(2));
  }

  @OneToMany(() => InvoiceDetail, (invoiceDetail) => invoiceDetail.Product)
  InvoiceDetails: InvoiceDetail[];
}
