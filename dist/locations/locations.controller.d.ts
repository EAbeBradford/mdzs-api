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
    addProduct(locationName: string, locationSect: string, locationDestrolyed: boolean, locationDescription: string, locationPicture: string): Promise<{
        id: string;
    }>;
}
