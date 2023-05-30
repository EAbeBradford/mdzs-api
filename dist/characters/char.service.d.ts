import { Char } from "./char.model";
import { Model } from "mongoose";
export declare class CharService {
    private readonly charModel;
    constructor(charModel: Model<Char>);
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
    insertChar(birthName: string, courtesyName: string, title: string, sect: string, weapon: Array<string>, picture: string, description: string): Promise<string>;
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
    updateCharByName(charName: string, birthName: string, courtesyName: string, title: string, sect: string, weapon: Array<string>, picture: string, description: string): Promise<void>;
    updateCharById(charId: string, birthName: string, courtesyName: string, title: string, sect: string, weapon: Array<string>, picture: string, description: string): Promise<void>;
    deleteCharById(charId: string): Promise<void>;
    private findChar;
}
