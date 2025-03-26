import { ApiProperty } from "@nestjs/swagger";
import { Pets } from "src/pets/pets.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    @ApiProperty({type: Number, required: true})
    id: number;
    
    @Column()
    @ApiProperty({type: String, required: true})
    name: string;

    @Column({ unique: true })
    @ApiProperty({type: String, required: true})
    email: string;

    @OneToMany(()=> Pets, (pets)=> pets.user)
    pet: Pets[];

}