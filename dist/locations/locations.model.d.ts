import * as mongoose from 'mongoose';
export declare const LocationSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    picture: string;
    name?: string;
    sect?: string;
    description?: string;
    didItGetDestroyed?: boolean;
}>;
export interface Location extends mongoose.Document {
    id: string;
    name: string;
    didItGetDestroyed: boolean;
    description: string;
    sect: string;
    picture: string;
}
