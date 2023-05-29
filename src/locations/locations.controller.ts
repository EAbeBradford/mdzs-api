import { Controller, Get, Post, Body } from "@nestjs/common";
import { LocationsService } from "./locations.service";

@Controller("locations")
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  async getAlllocations() {
    const locations = await this.locationsService.getAllLocations();
    return locations;
  }

  @Post()
  async addProduct(
    @Body("name") locationName: string,
    @Body("sect") locationSect: string,
    @Body("didItGetDestroyed") locationDestrolyed: boolean,
    @Body("description") locationDescription: string,
    @Body("picture") locationPicture: string
  ) {
    const generatedId = await this.locationsService.insertLocation(
      locationName,
      locationSect,
      locationDestrolyed,
      locationDescription,
      locationPicture
    );
    return { id: generatedId };
  }
}
