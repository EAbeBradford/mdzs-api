import { Injectable, NotFoundException } from "@nestjs/common";
import { ignoreElements } from "rxjs";
import { Location } from "./locations.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { title } from "process";

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel("Locations") private readonly locationModel: Model<Location>
  ) {}

  async getAllLocations() {
    const locations = await this.locationModel.find().exec();
    return locations.map((l) => ({
      id: l.id,
      name: l.name,
      sect: l.sect,
      didItGetDestroyed: l.didItGetDestroyed,
      description: l.description,
      picture: l.picture,
    }));
  }

  async insertLocation(
    name: string,
    sect: string,
    destrolyed: boolean,
    description: string,
    picture: string
  ) {
    const newLocation = new this.locationModel({
      name: name,
      sect: sect,
      didItGetDestroyed: destrolyed,
      description: description,
      picture: picture,
    });
    const result = await newLocation.save();
    // console.log(result);
    return result.id as string;
  }

  async getAllLan() {
    const chars = await this.locationModel.find().exec();
    const gusu = chars.filter((e) => e.sect === "Gusu Lan");
    return gusu.map((l) => ({
      id: l.id,
      name: l.name,
      sect: l.sect,
      didItGetDestroyed: l.didItGetDestroyed,
      description: l.description,
      picture: l.picture,
    }));
  }
  async getAllJiang() {
    const chars = await this.locationModel.find().exec();
    const jiang = chars.filter((e) => e.sect === "Yunmeng Jiang");
    return jiang.map((l) => ({
      id: l.id,
      name: l.name,
      sect: l.sect,
      didItGetDestroyed: l.didItGetDestroyed,
      description: l.description,
      picture: l.picture,
    }));
  }
  async getAllJin() {
    const chars = await this.locationModel.find().exec();
    const jin = chars.filter((e) => e.sect === "Lanling Jin");
    return jin.map((l) => ({
      id: l.id,
      name: l.name,
      sect: l.sect,
      didItGetDestroyed: l.didItGetDestroyed,
      description: l.description,
      picture: l.picture,
    }));
  }
  async getAllNie() {
    const chars = await this.locationModel.find().exec();
    const nie = chars.filter((e) => e.sect === "Qinghe Nie");
    return nie.map((l) => ({
      id: l.id,
      name: l.name,
      sect: l.sect,
      didItGetDestroyed: l.didItGetDestroyed,
      description: l.description,
      picture: l.picture,
    }));
  }
  async getAllWen() {
    const chars = await this.locationModel.find().exec();
    const wen = chars.filter((e) => e.sect === "Qishan Wen");
    return wen.map((l) => ({
      id: l.id,
      name: l.name,
      sect: l.sect,
      didItGetDestroyed: l.didItGetDestroyed,
      description: l.description,
      picture: l.picture,
    }));
  }

  // async getCharById(charId: string) {
  //     const char = await (await this.findChar(charId));
  //     return { birthName: char.birthName, courtesyName:char.courtesyName, title: char.title, sect: char.sect, weapon: char.weapon, picture: char.picture };
  // }

  // async getCharByName(name: string) {

  //     const chars = await this.locationModel.find().exec();
  //     let char = chars[0];
  //     if (name.indexOf("%20")>0){
  //         name = name.replace("%20", " ")
  //     }
  //     chars.forEach((e)=>{
  //         if(e.birthName.toLocaleLowerCase()===name.toLocaleLowerCase()){
  //             char = e;
  //         }
  //         else if(e.courtesyName.toLocaleLowerCase()===name.toLocaleLowerCase()){
  //             char = e;
  //         }
  //         else if(e.title.toLocaleLowerCase()=== name.toLocaleLowerCase()){
  //             char = e;
  //         }
  //     })

  //     return { birthName: char.birthName, courtesyName:char.courtesyName, title: char.title, sect: char.sect, weapon: char.weapon, picture: char.picture };
  // }

  // async updateCharByName(charName: string, birthName: string, courtesyName: string, title:string, sect: string, weapon: Array<string>, picture:string) {
  //     const chars = await this.locationModel.find().exec();
  //     let char = chars[0];
  //     if (charName.indexOf("%20")>0){
  //         charName = charName.replace("%20", " ")
  //     }
  //     chars.forEach((e)=>{
  //         if(e.birthName.toLocaleLowerCase()===charName.toLocaleLowerCase()){
  //             char = e;
  //         }
  //         else if(e.courtesyName.toLocaleLowerCase()===charName.toLocaleLowerCase()){
  //             char = e;
  //         }
  //         else if(e.title.toLocaleLowerCase()=== charName.toLocaleLowerCase()){
  //             char = e;
  //         }
  //     })

  //     console.log("is array", Array.isArray(weapon));

  //     console.log(weapon);

  //     const updatedChar = char;

  //     if (birthName) {
  //         updatedChar.birthName = birthName;
  //     }
  //     if (courtesyName) {
  //         updatedChar.courtesyName = courtesyName;
  //     }
  //     if (title) {
  //         updatedChar.title = title;
  //     }
  //     if (sect) {
  //         updatedChar.sect = sect;
  //     }
  //     if (weapon) {

  //         if(Array.isArray(weapon)){
  //             weapon.forEach(e => {
  //                 if (e && updatedChar.weapon.indexOf(e) == -1) {
  //                     updatedChar.weapon.push(e);
  //                 }
  //             });

  //         }
  //         else{
  //             if (weapon && updatedChar.weapon.indexOf(weapon) == -1) {
  //                 updatedChar.weapon.push(weapon);
  //             }
  //         }
  //     }
  //     if (picture) {
  //         updatedChar.picture = picture;
  //     }
  //     updatedChar.save();
  // }

  async updateLocationById(
    locationId: string,
    name: string,
    sect: string,
    destrolyed: boolean,
    description: string,
    picture: string
  ) {
    const updatedLocation = await this.findLocation(locationId);

    if (name) {
      updatedLocation.name = name;
    }
    if (destrolyed) {
      updatedLocation.didItGetDestroyed = destrolyed;
    }
    if (title) {
      updatedLocation.description = description;
    }
    if (sect) {
      updatedLocation.sect = sect;
    }

    if (picture) {
      updatedLocation.picture = picture;
    }
    updatedLocation.save();
  }
  async updateLocationByName(
    name: string,
    sect: string,
    destrolyed: boolean,
    description: string,
    picture: string
  ) {
    const locations = await this.locationModel.find().exec();

    let location;
    while (name.indexOf("%20") > 0) {
      name = name.replace("%20", " ");
    }
    locations.forEach((e) => {
      if (e.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
        location = e;
      } 
    });
    const updatedLocation = location;

    if (name) {
      updatedLocation.name = name;
    }
    if (destrolyed) {
      updatedLocation.didItGetDestroyed = destrolyed;
    }
    if (title) {
      updatedLocation.description = description;
    }
    if (sect) {
      updatedLocation.sect = sect;
    }

    if (picture) {
      updatedLocation.picture = picture;
    }
    updatedLocation.save();
  }

  async deleteCharById(charId: string) {
    const result = await this.locationModel.deleteOne({ _id: charId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException("location does not exist");
    }
  }

  private async findLocation(locationId: string): Promise<Location> {
    let location;
    try {
      location = await this.locationModel.findById(locationId);
    } catch (error) {
      throw new NotFoundException("location does not exist");
    }
    if (!location) {
      throw new NotFoundException("location does not exist");
    }
    return location;
  }
}
