import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/users/users.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Pets {

    @PrimaryGeneratedColumn()
    @ApiProperty({type: Number, required: true})
    id: number;
    
    @Column()
    @ApiProperty({type: String, required: true})
    name: string;

    @Column()
    @ApiProperty({type: String, required: true})
    specie: string;

    @Column()
    @ApiProperty({type: Number, required: true})
    age: number;

    @Column()
    @ApiProperty({type: Number, required: true})
    idDono: number;

    @ManyToOne(()=> User, (user)=> user.pet)
    @JoinColumn({name: "idDono"})
    user: User;
    

}