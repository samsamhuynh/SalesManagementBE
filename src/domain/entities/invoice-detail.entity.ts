import { IsPositive } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Base } from './base.entity';
import { Invoice } from './invoice.entity';
import { Product } from './product.entity';

@Entity('InvoiceDetail')
export class InvoiceDetail extends Base {
  @Column()
  InvoiceID: string;

  @Column()
  ProductID: string;

  @Column()
  @IsPositive()
  Quantity: number;

  @ManyToOne(() => Invoice)
  @JoinColumn({ name: 'InvoiceID' })
  Invoice: Invoice;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'ProductID' })
  Product: Product;
}
