import { Injectable, NotFoundException } from '@nestjs/common';
import { ignoreElements } from 'rxjs';
import { Char } from './char.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { title } from 'process';

@Injectable()
export class CharService {

    constructor(@InjectModel('Char') private readonly charModel: Model<Char>) { }

    async getAllChars() {
        const chars = await this.charModel.find().exec();
        return chars.map(c => ({ id: c.id, 
            birthName: c.birthName,
            courtesyName: c.courtesyName,
            title: c.title,
            sect: c.sect,
            weapon: c.weapon, 
            picture: c.picture 
        }));
    }

    async insertChar(birthName: string, courtesyName: string, title:string, sect: string, weapon: Array<string>, picture:string) {
        const newChar = new this.charModel({ birthName: birthName, courtesyName:courtesyName, title:title, sect:sect, weapon:weapon, picture:picture });
        const result = await newChar.save();
       // console.log(result);
        return result.id as string;
    }

    async getAllLan(){
        const chars  = await this.charModel.find().exec();
        const gusu = chars.filter((e)=> e.sect==="Gusu Lan");
        return gusu.map(c => ({ id: c.id, 
            birthName: c.birthName,
            courtesyName: c.courtesyName,
            title: c.title,
            sect: c.sect,
            weapon: c.weapon, 
            picture: c.picture 
        }));

    }
    async getAllJiang(){
        const chars  = await this.charModel.find().exec();
        const gusu = chars.filter((e)=> e.sect==="Yunmeng Jiang");
        return gusu.map(c => ({ id: c.id, 
            birthName: c.birthName,
            courtesyName: c.courtesyName,
            title: c.title,
            sect: c.sect,
            weapon: c.weapon, 
            picture: c.picture 
        }));

    }
    async getAllJin(){
        const chars  = await this.charModel.find().exec();
        const gusu = chars.filter((e)=> e.sect==="Lanling Jin");
        return gusu.map(c => ({ id: c.id, 
            birthName: c.birthName,
            courtesyName: c.courtesyName,
            title: c.title,
            sect: c.sect,
            weapon: c.weapon, 
            picture: c.picture 
        }));

    }
    async getAllNie(){
        const chars  = await this.charModel.find().exec();
        const gusu = chars.filter((e)=> e.sect==="Qinghe Nie");
        return gusu.map(c => ({ id: c.id, 
            birthName: c.birthName,
            courtesyName: c.courtesyName,
            title: c.title,
            sect: c.sect,
            weapon: c.weapon, 
            picture: c.picture 
        }));

    }
    async getAllWen(){
        const chars  = await this.charModel.find().exec();
        const gusu = chars.filter((e)=> e.sect==="Qishan Wen");
        return gusu.map(c => ({ id: c.id, 
            birthName: c.birthName,
            courtesyName: c.courtesyName,
            title: c.title,
            sect: c.sect,
            weapon: c.weapon, 
            picture: c.picture 
        }));

    }

    async getCharById(charId: string) {
        const char = await (await this.findChar(charId));
        return { birthName: char.birthName, courtesyName:char.courtesyName, title: char.title, sect: char.sect, weapon: char.weapon, picture: char.picture };
    }

    async getCharByName(name: string) {
    
        const chars = await this.charModel.find().exec();
        let char = chars[0];
        if (name.indexOf("%20")>0){
            name = name.replace("%20", " ")
        }
        chars.forEach((e)=>{
            if(e.birthName.toLocaleLowerCase()===name.toLocaleLowerCase()){
                char = e;
            }
            else if(e.courtesyName.toLocaleLowerCase()===name.toLocaleLowerCase()){
                char = e;
            }
            else if(e.title.toLocaleLowerCase()=== name.toLocaleLowerCase()){
                char = e;
            }
        })

        return { birthName: char.birthName, courtesyName:char.courtesyName, title: char.title, sect: char.sect, weapon: char.weapon, picture: char.picture };
    }

    async updateCharById(charId: string, birthName: string, courtesyName: string, title:string, sect: string, weapon: Array<string>, picture:string) {
        const updatedChar = await this.findChar(charId);

        if (birthName) {
            updatedChar.birthName = birthName;
        }
        if (courtesyName) {
            updatedChar.courtesyName = courtesyName;
        }
        if (title) {
            updatedChar.title = title;
        }
        if (sect) {
            updatedChar.sect = sect;
        }
        if (weapon) {
            weapon.forEach(e => {
                if (e && updatedChar.weapon.indexOf(e) == -1) {
                    updatedChar.weapon.push(e);
                }
            });
        }
        if (picture) {
            updatedChar.picture = picture;
        }
        updatedChar.save();
        // this.products[index] = updatedProduct;
    }

    async deleteCharById(charId: string) {
        const result = await this.charModel.deleteOne({ _id: charId }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException('product does not exist');
        }

    }

    private async findChar(charId: string): Promise<Char> {
        let char;
        try {
            char = await this.charModel.findById(charId)

        } catch (error) {
            throw new NotFoundException('product does not exist');

        }
        if (!char) {
            throw new NotFoundException('product does not exist');
        }
        return char;
    }
}