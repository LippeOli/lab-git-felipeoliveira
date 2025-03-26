import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetsDto } from './dto/create-pets.dto';
import { UpdatePetsDto } from './dto/update-pets.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @Post()
  create(@Body() createPetsDto: CreatePetsDto) {
    return this.petsService.create(createPetsDto);
  }

    @Get()
    findAll(){
        return this.petsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.petsService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdatePetsDto) {
      return this.petsService.update(+id, updateUserDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.petsService.remove(+id);
    }
  
}