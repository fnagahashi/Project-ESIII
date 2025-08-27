import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import{v4 as uuid} from "uuid";
import { Client } from "./client";

@Entity("creditCard")
class CreditCard{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    number!: string;

    @Column()
    name!: string;

    @Column()
    brand!: string;

    @Column()
    securityCode!: string;

    @ManyToOne(() => Client, client => client.creditCards)
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

export { CreditCard };