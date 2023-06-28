import { LocationsService } from "./locations.service";
export declare class LocationsController {
    private readonly locationsService;
    constructor(locationsService: LocationsService);
    getAlllocations(): Promise<{
        id: string;
        name: string;
        sect: string;
        didItGetDestroyed: boolean;
        description: string;
        picture: string;
    }[]>;
    addLocation(locationName: string, locationSect: string, locationDestrolyed: boolean, locationDescription: string, locationPicture: string): Promise<{
        id: string;
    }>;
    updateLocationById(charId: string, locationName: string, locationSect: string, locationDestrolyed: boolean, locationDescription: string, locationPicture: string): Promise<any>;
    updateLocationByName(locationName: string, locationSect: string, locationDestrolyed: boolean, locationDescription: string, locationPicture: string): Promise<any>;
}
