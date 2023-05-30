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
exports.CharController = void 0;
const common_1 = require("@nestjs/common");
const char_service_1 = require("./char.service");
let CharController = class CharController {
    constructor(charsService) {
        this.charsService = charsService;
    }
    async getAllChars() {
        const chars = await this.charsService.getAllChars();
        return chars;
    }
    async addProduct(charBirthName, charCourtesyName, charTitle, charSect, charWeapon, charPicture, charDescription) {
        const generatedId = await this.charsService.insertChar(charBirthName, charCourtesyName, charTitle, charSect, charWeapon, charPicture, charDescription);
        return { id: generatedId };
    }
    async getCharById(charId) {
        const char = await this.charsService.getCharById(charId);
        return char;
    }
    async getCharByName(name) {
        const char = await this.charsService.getCharByName(name);
        return char;
    }
    async updateCharByName(charName, charBirthName, charCourtesyName, charTitle, charSect, charWeapon, charPicture, charDescription) {
        await this.charsService.updateCharByName(charName, charBirthName, charCourtesyName, charTitle, charSect, charWeapon, charPicture, charDescription);
        return null;
    }
    async updateCharById(charId, charBirthName, charCourtesyName, charTitle, charSect, charWeapon, charPicture, charDescription) {
        await this.charsService.updateCharById(charId, charBirthName, charCourtesyName, charTitle, charSect, charWeapon, charPicture, charDescription);
        return null;
    }
    async deleteCharById(charId) {
        await this.charsService.deleteCharById(charId);
        return null;
    }
    async getAllLan() {
        const chars = await this.charsService.getAllLan();
        return chars;
    }
    async getAllJiang() {
        const chars = await this.charsService.getAllJiang();
        return chars;
    }
    async getAllJin() {
        const chars = await this.charsService.getAllJin();
        return chars;
    }
    async getAllNie() {
        const chars = await this.charsService.getAllNie();
        return chars;
    }
    async getAllWen() {
        const chars = await this.charsService.getAllWen();
        return chars;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharController.prototype, "getAllChars", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('birthName')),
    __param(1, (0, common_1.Body)('courtesyName')),
    __param(2, (0, common_1.Body)('title')),
    __param(3, (0, common_1.Body)('sect')),
    __param(4, (0, common_1.Body)('weapon')),
    __param(5, (0, common_1.Body)('picture')),
    __param(6, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Array, String, String]),
    __metadata("design:returntype", Promise)
], CharController.prototype, "addProduct", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharController.prototype, "getCharById", null);
__decorate([
    (0, common_1.Get)('/name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharController.prototype, "getCharByName", null);
__decorate([
    (0, common_1.Patch)('/name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __param(1, (0, common_1.Body)('birthName')),
    __param(2, (0, common_1.Body)('courtesyName')),
    __param(3, (0, common_1.Body)('title')),
    __param(4, (0, common_1.Body)('sect')),
    __param(5, (0, common_1.Body)('weapon')),
    __param(6, (0, common_1.Body)('picture')),
    __param(7, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Array, String, String]),
    __metadata("design:returntype", Promise)
], CharController.prototype, "updateCharByName", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('birthName')),
    __param(2, (0, common_1.Body)('courtesyName')),
    __param(3, (0, common_1.Body)('title')),
    __param(4, (0, common_1.Body)('sect')),
    __param(5, (0, common_1.Body)('weapon')),
    __param(6, (0, common_1.Body)('picture')),
    __param(7, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, Array, String, String]),
    __metadata("design:returntype", Promise)
], CharController.prototype, "updateCharById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharController.prototype, "deleteCharById", null);
__decorate([
    (0, common_1.Get)('sect/lan'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharController.prototype, "getAllLan", null);
__decorate([
    (0, common_1.Get)('sect/jiang'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharController.prototype, "getAllJiang", null);
__decorate([
    (0, common_1.Get)('sect/jin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharController.prototype, "getAllJin", null);
__decorate([
    (0, common_1.Get)('sect/nie'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharController.prototype, "getAllNie", null);
__decorate([
    (0, common_1.Get)('sect/wen'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharController.prototype, "getAllWen", null);
CharController = __decorate([
    (0, common_1.Controller)('characters'),
    __metadata("design:paramtypes", [char_service_1.CharService])
], CharController);
exports.CharController = CharController;
//# sourceMappingURL=char.controller.js.map