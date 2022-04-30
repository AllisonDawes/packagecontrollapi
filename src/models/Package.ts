import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import ScorePackage from "./ScorePackage";

@Entity("packages")
class Package {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => ScorePackage, (score_packages) => score_packages.package)
  score_packages: ScorePackage;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default Package;
