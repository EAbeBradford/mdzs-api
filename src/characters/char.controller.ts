import { Controller, Post, Patch, Delete, Body, Get, Param } from '@nestjs/common';
import { CharService } from './char.service';

@Controller('characters')
export class CharController {
    constructor(private readonly charsService: CharService) { }
    
    @Get()
    async getAllChars() {
        const chars = await this.charsService.getAllChars();
        return chars;
    }

    @Post()
    async addProduct(
        @Body('birthName') charBirthName: string, 
        @Body('courtesyName') charCourtesyName: string, 
        @Body('title') charTitle: string,
        @Body('sect') charSect: string, 
        @Body('weapon') charWeapon: Array<string>, 
        @Body('picture') charPicture: string,
        ) {

        const generatedId = await this.charsService.insertChar(charBirthName, charCourtesyName, charTitle, charSect, charWeapon, charPicture);
        return { id: generatedId };
    }

    @Get(':id')
    async getCharById(@Param('id') charId: string,) {
        const char  = await this.charsService.getCharById(charId);
    
        return char;
    }

    @Patch(':id')
    async updateCharById(
        @Param('id') charId: string,
        @Body('birthName') charBirthName: string, 
        @Body('courtesyName') charCourtesyName: string, 
        @Body('title') charTitle: string,
        @Body('sect') charSect: string, 
        @Body('weapon') charWeapon: Array<string>, 
        @Body('picture') charPicture: string,
    ) {
        await this.charsService.updateCharById(charId, charBirthName, charCourtesyName, charTitle, charSect, charWeapon, charPicture);
        return null;
    }

    @Delete(':id')
    async deleteCharById(@Param('id') charId: string,) {
        await this.charsService.deleteCharById(charId);
        return null;
    }

    @Get('sect/lan')
    async getAllLan(){
        const chars = await this.charsService.getAllLan();
        return chars;
    }
    @Get('sect/jiang')
    async getAllJiang(){
        const chars = await this.charsService.getAllJiang();
        return chars;
    }
    @Get('sect/jin')
    async getAllJin(){
        const chars = await this.charsService.getAllJin();
        return chars;
    }
    @Get('sect/nie')
    async getAllNie(){
        const chars = await this.charsService.getAllNie();
        return chars;
    }
    @Get('sect/wen')
    async getAllWen(){
        const chars = await this.charsService.getAllWen();
        return chars;
    }

}