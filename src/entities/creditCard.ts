import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import{v4 as uuid} from "uuid";
import { Client } from "./guest";
import { Brand } from "../controller/creditCard/Brand";

@Entity("creditCard")
class CreditCard{
    @PrimaryColumn()
    readonly id!: string;
    
    @Column()
    cardName!: string;

    @Column()
    cardNumber!: string;

    @Column({
        type: "enum",
        enum: Brand,
    })
    brand!: Brand;

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