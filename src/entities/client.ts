import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import{v4 as uuid} from "uuid";
import { CreditCard} from './creditCard'
import { Address } from "./address";
import { Gender } from "../controller/client/Gender";

@Entity("client")
class Client{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    name!: string;

    @Column()
    dateBirth!: string;

    @Column()
    cpf!: string;

    @Column({
        type: "enum",
        enum: Gender,
    })
    gender!: Gender;

    @Column()
    typePhone!: string;

    @Column()
    phone!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @OneToMany(() => CreditCard, creditCard => creditCard.client, {cascade: true})
    creditCards!: CreditCard[];

    @OneToMany(() => Address, address => address.client, {cascade: true})
    addresses!: Address[];

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

export { Client };