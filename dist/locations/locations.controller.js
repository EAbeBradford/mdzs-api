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
exports.LocationsController = void 0;
const common_1 = require("@nestjs/common");
const locations_service_1 = require("./locations.service");
let LocationsController = class LocationsController {
    constructor(locationsService) {
        this.locationsService = locationsService;
    }
    async getAlllocations() {
        const locations = await this.locationsService.getAllLocations();
        return locations;
    }
    async addLocation(locationName, locationSect, locationDestrolyed, locationDescription, locationPicture) {
        const generatedId = await this.locationsService.insertLocation(locationName, locationSect, locationDestrolyed, locationDescription, locationPicture);
        return { id: generatedId };
    }
    async updateLocationById(charId, locationName, locationSect, locationDestrolyed, locationDescription, locationPicture) {
        await this.locationsService.updateLocationById(charId, locationName, locationSect, locationDestrolyed, locationDescription, locationPicture);
        return null;
    }
    async updateLocationByName(locationName, locationSect, locationDestrolyed, locationDescription, locationPicture) {
        await this.locationsService.updateLocationByName(locationName, locationSect, locationDestrolyed, locationDescription, locationPicture);
        return null;
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "getAlllocations", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)("name")),
    __param(1, (0, common_1.Body)("sect")),
    __param(2, (0, common_1.Body)("didItGetDestroyed")),
    __param(3, (0, common_1.Body)("description")),
    __param(4, (0, common_1.Body)("picture")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean, String, String]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "addLocation", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)("name")),
    __param(2, (0, common_1.Body)("sect")),
    __param(3, (0, common_1.Body)("didItGetDestroyed")),
    __param(4, (0, common_1.Body)("description")),
    __param(5, (0, common_1.Body)("picture")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Boolean, String, String]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "updateLocationById", null);
__decorate([
    (0, common_1.Patch)("name/:name"),
    __param(0, (0, common_1.Param)("name")),
    __param(1, (0, common_1.Body)("sect")),
    __param(2, (0, common_1.Body)("didItGetDestroyed")),
    __param(3, (0, common_1.Body)("description")),
    __param(4, (0, common_1.Body)("picture")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean, String, String]),
    __metadata("design:returntype", Promise)
], LocationsController.prototype, "updateLocationByName", null);
LocationsController = __decorate([
    (0, common_1.Controller)("locations"),
    __metadata("design:paramtypes", [locations_service_1.LocationsService])
], LocationsController);
exports.LocationsController = LocationsController;
//# sourceMappingURL=locations.controller.js.map