import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Sample {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  twitchId: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: false, default: true })
  join: boolean;

  @Column({ nullable: false, default: true })
  token: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
