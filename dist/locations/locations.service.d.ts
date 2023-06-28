import { Location } from "./locations.model";
import { Model } from "mongoose";
export declare class LocationsService {
    private readonly locationModel;
    constructor(locationModel: Model<Location>);
    getAllLocations(): Promise<{
        id: string;
        name: string;
        sect: string;
        didItGetDestroyed: boolean;
        description: string;
        picture: string;
    }[]>;
    insertLocation(name: string, sect: string, destrolyed: boolean, description: string, picture: string): Promise<string>;
    getAllLan(): Promise<{
        id: string;
        name: string;
        sect: string;
        didItGetDestroyed: boolean;
        description: string;
        picture: string;
    }[]>;
    getAllJiang(): Promise<{
        id: string;
        name: string;
        sect: string;
        didItGetDestroyed: boolean;
        description: string;
        picture: string;
    }[]>;
    getAllJin(): Promise<{
        id: string;
        name: string;
        sect: string;
        didItGetDestroyed: boolean;
        description: string;
        picture: string;
    }[]>;
    getAllNie(): Promise<{
        id: string;
        name: string;
        sect: string;
        didItGetDestroyed: boolean;
        description: string;
        picture: string;
    }[]>;
    getAllWen(): Promise<{
        id: string;
        name: string;
        sect: string;
        didItGetDestroyed: boolean;
        description: string;
        picture: string;
    }[]>;
    updateLocationById(locationId: string, name: string, sect: string, destrolyed: boolean, description: string, picture: string): Promise<void>;
    updateLocationByName(name: string, sect: string, destrolyed: boolean, description: string, picture: string): Promise<void>;
    deleteCharById(charId: string): Promise<void>;
    private findLocation;
}
