import { Controller, Get, Post, Body, Patch, Param } from "@nestjs/common";
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
  async addLocation(
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

  @Patch(":id")
  async updateLocationById(
    @Param("id") charId: string,
    @Body("name") locationName: string,
    @Body("sect") locationSect: string,
    @Body("didItGetDestroyed") locationDestrolyed: boolean,
    @Body("description") locationDescription: string,
    @Body("picture") locationPicture: string
  ) {
    await this.locationsService.updateLocationById(
      charId,
      locationName,
      locationSect,
      locationDestrolyed,
      locationDescription,
      locationPicture
    );
    return null;
  }

  @Patch("name/:name")
  async updateLocationByName(
   
    @Param("name") locationName: string,
    @Body("sect") locationSect: string,
    @Body("didItGetDestroyed") locationDestrolyed: boolean,
    @Body("description") locationDescription: string,
    @Body("picture") locationPicture: string
  ) {
    await this.locationsService.updateLocationByName(
      locationName,
      locationSect,
      locationDestrolyed,
      locationDescription,
      locationPicture
    );
    return null;
  }
}
