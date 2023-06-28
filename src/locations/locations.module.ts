import { Module } from '@nestjs/common';
//import { loc } from './char.controller';
import { LocationsService } from './locations.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationsController } from './locations.controller';
import { LocationSchema } from './locations.model';
//import { CharSchema } from './char.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Locations', schema: LocationSchema }])],
  controllers: [LocationsController],
  providers: [LocationsService]
})
export class LocationsModule { }