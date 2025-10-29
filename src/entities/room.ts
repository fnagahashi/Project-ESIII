import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn, BeforeInsert} from "typeorm";
import{v4 as uuid} from "uuid";

@Entity("room")
class room{
    @PrimaryColumn()
    readonly id!: string;

    @Column({ 
        type: 'varchar', 
        length: 5,
        unique: true 
    })
    roomCode: string;

    @BeforeInsert()
    generateNumericCode() {
        if (!this.roomCode) {
            const randomNum = Math.floor(1000 + Math.random() * 9000);
            this.roomCode = randomNum.toString();
        }
    }

    @Column()
    type: string;

    @Column()
    isActive: boolean;

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

export {room};