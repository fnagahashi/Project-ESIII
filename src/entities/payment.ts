import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import{v4 as uuid} from "uuid";

@Entity("payment")
class payment{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    valor!: string;

    @Column()
    formaPagamento!: string;

    @Column()
    isPaid!: boolean;

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

export { payment };