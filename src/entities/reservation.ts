import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import{v4 as uuid} from "uuid";

@Entity("reservation")
class reservation{
    @PrimaryColumn()
    readonly id!: string;

    @Column()
    datecheckIn!: string;

    @Column()
    datecheckOut!: string;

    @Column()
    noShow!: boolean;

    @Column()
    qntAdultos!: number;

    @Column()
    qntCriancas!: number;

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

export {reservation};