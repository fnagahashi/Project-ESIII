import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import{v4 as uuid} from "uuid";

@Entity("sales")
class sales{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    qtd!: string;

    @Column()
    date!: string;

    @Column()
    price!: string;

    @Column()
    product!: string;

    @Column()
    client!: string;

    @Column()
    total!: string;

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

export {sales};