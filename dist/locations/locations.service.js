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
exports.LocationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LocationsService = class LocationsService {
    constructor(locationModel) {
        this.locationModel = locationModel;
    }
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
    async insertLocation(name, sect, destrolyed, description, picture) {
        const newLocation = new this.locationModel({
            name: name,
            sect: sect,
            didItGetDestroyed: destrolyed,
            description: description,
            picture: picture,
        });
        const result = await newLocation.save();
        return result.id;
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
    async deleteCharById(charId) {
        const result = await this.locationModel.deleteOne({ _id: charId }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException("product does not exist");
        }
    }
};
LocationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Locations")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LocationsService);
exports.LocationsService = LocationsService;
//# sourceMappingURL=locations.service.js.map