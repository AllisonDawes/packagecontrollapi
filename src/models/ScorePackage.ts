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

@Entity("score_packages")
class ScorePackage {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  user_id: string;

  @ManyToOne(() => Package, (packageColmun) => packageColmun.score_packages)
  @JoinColumn({ name: "package_id" })
  package: Package;

  @Column()
  package_id: string;

  @Column("integer")
  score: number;

  @Column("timestamp with time zone")
  date: Date;

  @Column("boolean")
  conform: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ScorePackage;
