import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import{v4 as uuid} from "uuid";
import { CreditCard} from './creditCard'
import { Client } from "./guest";

export type AddressType = "billing" |"delivery";

@Entity("address")
class Address{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    cep!: string;

    @Column()
    street!: string;

    @Column()
    neighborhood!: string;

    @Column()
    number!: string;

    @Column()
    city!: string;

    @Column()
    state!: string;

    @Column({ nullable: true })
    obs!: string;

    @ManyToOne(() => Client, client => client.addresses)
    client!: Client;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Address };