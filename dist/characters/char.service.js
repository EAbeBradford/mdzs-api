"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CharService = class CharService {
    constructor(charModel) {
        this.charModel = charModel;
    }
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
        const index = Math.floor(Math.random() * chars.length);
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
    async insertChar(birthName, courtesyName, title, sect, weapon, picture, description) {
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
        return result.id;
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
    async getCharById(charId) {
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
    async getCharByName(name) {
        const chars = await this.charModel.find().exec();
        let char;
        try {
            if (name.indexOf("%20") > 0) {
                name = name.replace("%20", " ");
            }
            chars.forEach((e) => {
                if (e.birthName.toLocaleLowerCase() === name.toLocaleLowerCase()) {
                    char = e;
                }
                else if (e.courtesyName.toLocaleLowerCase() === name.toLocaleLowerCase()) {
                    char = e;
                }
                else if (e.title.toLocaleLowerCase() === name.toLocaleLowerCase()) {
                    char = e;
                }
            });
        }
        catch (error) {
            throw new common_1.NotFoundException("charater does not exist! try again Mo Xuanyu");
        }
        if (!char) {
            throw new common_1.NotFoundException("charater does not exist! try again Mo Xuanyu");
        }
        else {
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
    async updateCharByName(charName, birthName, courtesyName, title, sect, weapon, picture, description) {
        const chars = await this.charModel.find().exec();
        let char;
        while (charName.indexOf("%20") > 0) {
            charName = charName.replace("%20", " ");
        }
        chars.forEach((e) => {
            if (e.birthName.toLocaleLowerCase() === charName.toLocaleLowerCase()) {
                char = e;
            }
            else if (e.courtesyName.toLocaleLowerCase() === charName.toLocaleLowerCase()) {
                char = e;
            }
            else if (e.title.toLocaleLowerCase() === charName.toLocaleLowerCase()) {
                char = e;
            }
        });
        console.log("is array", Array.isArray(weapon));
        console.log(weapon);
        if (!char) {
            throw new common_1.NotFoundException("charater does not exist! try again Mo Xuanyu");
        }
        else {
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
                }
                else {
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
    async updateCharById(charId, birthName, courtesyName, title, sect, weapon, picture, description) {
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
            }
            else {
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
    async deleteCharById(charId) {
        const result = await this.charModel.deleteOne({ _id: charId }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException("charater does not exist! try again Xue Yang");
        }
    }
    async findChar(charId) {
        let char;
        try {
            char = await this.charModel.findById(charId);
        }
        catch (error) {
            throw new common_1.NotFoundException("character does not exist! try again Mo Xuanyu");
        }
        if (!char) {
            throw new common_1.NotFoundException("character does not exist try again Mo Xuanyu!");
        }
        return char;
    }
};
CharService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Char")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CharService);
exports.CharService = CharService;
//# sourceMappingURL=char.service.js.map