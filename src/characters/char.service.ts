import { Injectable, NotFoundException } from "@nestjs/common";
import { ignoreElements } from "rxjs";
import { Char } from "./char.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { title } from "process";

@Injectable()
export class CharService {
  constructor(@InjectModel("Char") private readonly charModel: Model<Char>) {}

  async getAllChars() {
    const chars = await this.charModel.find().exec();
    return chars.map((c) => ({
      id: c.id,
      birthName: c.birthName,
      courtesyName: c.courtesyName,
      title: c.title,
      sect: c.sect,
      weapon: c.weapon,
      picture: c.picture,
      description: c.description,
    }));
  }

  async getRansomChar() {
    const chars = await this.charModel.find().exec();
    const index = Math.floor(Math.random()*chars.length);
    const char = chars[index];
    return {
        birthName: char.birthName,
        courtesyName: char.courtesyName,
        title: char.title,
        sect: char.sect,
        weapon: char.weapon,
        picture: char.picture,
        description: char.description,
      };
  }

  async insertChar(
    birthName: string,
    courtesyName: string,
    title: string,
    sect: string,
    weapon: Array<string>,
    picture: string,
    description: string
  ) {
    const newChar = new this.charModel({
      birthName: birthName,
      courtesyName: courtesyName,
      title: title,
      sect: sect,
      weapon: weapon,
      picture: picture,
      description: description,
    });
    const result = await newChar.save();
    // console.log(result);
    return result.id as string;
  }

  async getAllLan() {
    const chars = await this.charModel.find().exec();
    const gusu = chars.filter((e) => e.sect === "Gusu Lan");
    return gusu.map((c) => ({
      id: c.id,
      birthName: c.birthName,
      courtesyName: c.courtesyName,
      title: c.title,
      sect: c.sect,
      weapon: c.weapon,
      picture: c.picture,
      description: c.description,
    }));
  }
  async getAllJiang() {
    const chars = await this.charModel.find().exec();
    const jiang = chars.filter((e) => e.sect === "Yunmeng Jiang");
    return jiang.map((c) => ({
      id: c.id,
      birthName: c.birthName,
      courtesyName: c.courtesyName,
      title: c.title,
      sect: c.sect,
      weapon: c.weapon,
      picture: c.picture,
      description: c.description,
    }));
  }
  async getAllJin() {
    const chars = await this.charModel.find().exec();
    const jin = chars.filter((e) => e.sect === "Lanling Jin");
    return jin.map((c) => ({
      id: c.id,
      birthName: c.birthName,
      courtesyName: c.courtesyName,
      title: c.title,
      sect: c.sect,
      weapon: c.weapon,
      picture: c.picture,
      description: c.description,
    }));
  }
  async getAllNie() {
    const chars = await this.charModel.find().exec();
    const nie = chars.filter((e) => e.sect === "Qinghe Nie");
    return nie.map((c) => ({
      id: c.id,
      birthName: c.birthName,
      courtesyName: c.courtesyName,
      title: c.title,
      sect: c.sect,
      weapon: c.weapon,
      picture: c.picture,
      description: c.description,
    }));
  }
  async getAllWen() {
    const chars = await this.charModel.find().exec();
    const wen = chars.filter((e) => e.sect === "Qishan Wen");
    return wen.map((c) => ({
      id: c.id,
      birthName: c.birthName,
      courtesyName: c.courtesyName,
      title: c.title,
      sect: c.sect,
      weapon: c.weapon,
      picture: c.picture,
      description: c.description,
    }));
  }

  async getCharById(charId: string) {
    const char = await await this.findChar(charId);
    return {
      birthName: char.birthName,
      courtesyName: char.courtesyName,
      title: char.title,
      sect: char.sect,
      weapon: char.weapon,
      picture: char.picture,
      description: char.description,
    };
  }

  async getCharByName(name: string) {
    const chars = await this.charModel.find().exec();
    let char;
    try {
      if (name.indexOf("%20") > 0) {
        name = name.replace("%20", " ");
      }
      chars.forEach((e) => {
        if (e.birthName.toLocaleLowerCase() === name.toLocaleLowerCase()) {
          char = e;
        } else if (
          e.courtesyName.toLocaleLowerCase() === name.toLocaleLowerCase()
        ) {
          char = e;
        } else if (e.title.toLocaleLowerCase() === name.toLocaleLowerCase()) {
          char = e;
        }
      });
    } catch (error) {
      throw new NotFoundException(
        "charater does not exist! try again Mo Xuanyu"
      );
    }
    if (!char) {
      throw new NotFoundException(
        "charater does not exist! try again Mo Xuanyu"
      );
    } else {
      return {
        id: char.id,
        birthName: char.birthName,
        courtesyName: char.courtesyName,
        title: char.title,
        sect: char.sect,
        weapon: char.weapon,
        picture: char.picture,
        description: char.description,
      };
    }
  }

  async updateCharByName(
    charName: string,
    birthName: string,
    courtesyName: string,
    title: string,
    sect: string,
    weapon: Array<string>,
    picture: string,
    description: string
  ) {
    const chars = await this.charModel.find().exec();
    let char;
    while(charName.indexOf("%20") > 0) {
      charName = charName.replace("%20", " ");
    }
    chars.forEach((e) => {
      if (e.birthName.toLocaleLowerCase() === charName.toLocaleLowerCase()) {
        char = e;
      } else if (
        e.courtesyName.toLocaleLowerCase() === charName.toLocaleLowerCase()
      ) {
        char = e;
      } else if (e.title.toLocaleLowerCase() === charName.toLocaleLowerCase()) {
        char = e;
      }
    });

    console.log("is array", Array.isArray(weapon));

    console.log(weapon);

    if (!char) {
      throw new NotFoundException(
        "charater does not exist! try again Mo Xuanyu"
      );
    } else {
      const updatedChar = char;

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
        if (Array.isArray(weapon)) {
          weapon.forEach((e) => {
            if (e && updatedChar.weapon.indexOf(e) == -1) {
              updatedChar.weapon.push(e);
            }
          });
        } else {
          if (weapon && updatedChar.weapon.indexOf(weapon) == -1) {
            updatedChar.weapon.push(weapon);
          }
        }
      }
      if (picture) {
        updatedChar.picture = picture;
      }
      if (description) {
        updatedChar.description = description;
      }

      updatedChar.save();
    }

  }

  async updateCharById(
    charId: string,
    birthName: string,
    courtesyName: string,
    title: string,
    sect: string,
    weapon: Array<string>,
    picture: string,
    description: string
  ) {
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
      if (Array.isArray(weapon)) {
        weapon.forEach((e) => {
          if (e && updatedChar.weapon.indexOf(e) == -1) {
            updatedChar.weapon.push(e);
          }
        });
      } else {
        if (weapon && updatedChar.weapon.indexOf(weapon) == -1) {
          updatedChar.weapon.push(weapon);
        }
      }
    }
    if (picture) {
      updatedChar.picture = picture;
    }
    if (description) {
      updatedChar.description = description;
    }
    updatedChar.save();
  }

  async deleteCharById(charId: string) {
    const result = await this.charModel.deleteOne({ _id: charId }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(
        "charater does not exist! try again Xue Yang"
      );
    }
  }

  private async findChar(charId: string): Promise<Char> {
    let char;
    try {
      char = await this.charModel.findById(charId);
    } catch (error) {
      throw new NotFoundException(
        "character does not exist! try again Mo Xuanyu"
      );
    }
    if (!char) {
      throw new NotFoundException(
        "character does not exist try again Mo Xuanyu!"
      );
    }
    return char;
  }
}
