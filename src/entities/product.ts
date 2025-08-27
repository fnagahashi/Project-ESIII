import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import{v4 as uuid} from "uuid";

@Entity("product")
class product{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    name!: string;

    @Column()
    category: string;

    @Column()
    desc!: string;

    @Column()
    price!: string;

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

export {product};