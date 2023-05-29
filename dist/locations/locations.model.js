"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationSchema = void 0;
const mongoose = require("mongoose");
exports.LocationSchema = new mongoose.Schema({
    name: { type: String, required: false },
    sect: { type: String, required: false },
    didItGetDestroyed: { type: Boolean, required: false },
    description: { type: String, required: false },
    picture: { type: String, required: true },
});
//# sourceMappingURL=locations.model.js.map