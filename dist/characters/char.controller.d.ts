import { CharService } from './char.service';
export declare class CharController {
    private readonly charsService;
    constructor(charsService: CharService);
    getAllChars(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
        description: string;
    }[]>;
    getRandomChars(): Promise<{
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
        description: string;
    }>;
    addProduct(charBirthName: string, charCourtesyName: string, charTitle: string, charSect: string, charWeapon: Array<string>, charPicture: string, charDescription: string): Promise<{
        id: string;
    }>;
    getCharById(charId: string): Promise<{
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
        description: string;
    }>;
    getCharByName(name: string): Promise<{
        id: any;
        birthName: any;
        courtesyName: any;
        title: any;
        sect: any;
        weapon: any;
        picture: any;
        description: any;
    }>;
    updateCharByName(charName: string, charBirthName: string, charCourtesyName: string, charTitle: string, charSect: string, charWeapon: Array<string>, charPicture: string, charDescription: string): Promise<any>;
    updateCharById(charId: string, charBirthName: string, charCourtesyName: string, charTitle: string, charSect: string, charWeapon: Array<string>, charPicture: string, charDescription: string): Promise<any>;
    deleteCharById(charId: string): Promise<any>;
    getAllLan(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
        description: string;
    }[]>;
    getAllJiang(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
        description: string;
    }[]>;
    getAllJin(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
        description: string;
    }[]>;
    getAllNie(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
        description: string;
    }[]>;
    getAllWen(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
        description: string;
    }[]>;
}
