import * as mongoose from 'mongoose';

export const LocationSchema = new mongoose.Schema({
    name: {type: String, required:false},
    sect: {type: String, required:false},
    didItGetDestroyed: {type: Boolean, required:false},
    description: {type: String, required:false},
    picture: {type: String, required:true},

});

export interface Location extends mongoose.Document {
    id: string,
    name: string,
    didItGetDestroyed: boolean,
    description: string,
    sect: string,
    picture: string,
}