import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import StockPackage from "./StockPackage";

@Entity("packages")
class Package {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => StockPackage, (stock_packages) => stock_packages.package)
  stock_packages: StockPackage;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default Package;
