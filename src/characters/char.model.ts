import * as mongoose from 'mongoose';

export const CharSchema = new mongoose.Schema({
    birthName: {type: String, required:false},
    courtesyName: {type: String, required:false},
    title: {type: String, required:false},
    sect: {type: String, required:false},
    weapon: {type: [String], required:false}, 
    picture: {type: String, required:true},
    description: {type: String, required:false},


});

export interface Char extends mongoose.Document {
    id: string,
    birthName: string,
    courtesyName: string,
    title: string,
    sect: string,
    weapon: Array<string>, 
    picture: string,
    description: string,

}