import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import{v4 as uuid} from "uuid";
import { Address } from "./address";

@Entity("guest")
class Guest{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    name!: string;

    @Column()
    dateBirth!: string;

    @Column()
    cpf!: string;

    @Column()
    phone!: string;

    @Column()
    email!: string;

    @Column()
    isActive!: boolean;

    @OneToMany(() => Address, address => address.client, {cascade: true})
    addresses!: Address[];

    @DeleteDateColumn()
    deletedAt?: Date;

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

export { Guest };