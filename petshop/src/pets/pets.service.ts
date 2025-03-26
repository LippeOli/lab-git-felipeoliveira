import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pets } from './pets.entity';
import { CreatePetsDto } from './dto/create-pets.dto';
import { UpdatePetsDto } from './dto/update-pets.dto';
import { create } from 'domain';

@Injectable()
export class PetsService{
    constructor(
        @InjectRepository(Pets)
        private petsRepository: Repository<Pets>,
    ) {}


    create(createPetsDto: CreatePetsDto): Promise<Pets> {
        const pet = this.petsRepository.create(createPetsDto)
        return this.petsRepository.save(pet);
    }

    findAll() {
        return this.petsRepository.find();
      }
    
    findOne(id: number) {
        return this.petsRepository.findOne({ where: { id }, relations: { user: false }
        });
    }
    
    async update(id: number, updateUserDto: UpdatePetsDto) {
        await this.petsRepository.update(id, updateUserDto);
        return this.findOne(id);
    }
    
    remove(id: number) {
       return this.petsRepository.delete(id);
    }
}