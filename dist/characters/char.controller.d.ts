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
    }[]>;
    addProduct(charBirthName: string, charCourtesyName: string, charTitle: string, charSect: string, charWeapon: Array<string>, charPicture: string): Promise<{
        id: string;
    }>;
    getCharById(charId: string): Promise<{
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }>;
    getCharByName(name: string): Promise<{
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }>;
    updateCharByName(charName: string, charBirthName: string, charCourtesyName: string, charTitle: string, charSect: string, charWeapon: Array<string>, charPicture: string): Promise<any>;
    updateCharById(charId: string, charBirthName: string, charCourtesyName: string, charTitle: string, charSect: string, charWeapon: Array<string>, charPicture: string): Promise<any>;
    deleteCharById(charId: string): Promise<any>;
    getAllLan(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }[]>;
    getAllJiang(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }[]>;
    getAllJin(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }[]>;
    getAllNie(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }[]>;
    getAllWen(): Promise<{
        id: string;
        birthName: string;
        courtesyName: string;
        title: string;
        sect: string;
        weapon: string[];
        picture: string;
    }[]>;
}
