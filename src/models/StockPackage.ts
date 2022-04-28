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
import User from "./User";

@Entity("stock_packages")
class StockPackage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  user_id: string;

  @ManyToOne(() => Package, (packageColmun) => packageColmun.stock_packages)
  @JoinColumn({ name: "package_id" })
  package: Package;

  @Column()
  package_id: string;

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
