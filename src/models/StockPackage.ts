import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Package from "./Package";

@Entity("stock_packages")
class StockPackage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Package, (packageColmun) => packageColmun.stock_packages)
  @JoinColumn({ name: "package_id" })
  package: Package;

  @Column("integer")
  input: number;

  @Column("integer")
  output: number;

  @Column("timestamp with time zone")
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default StockPackage;
