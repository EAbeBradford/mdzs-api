import { Module } from '@nestjs/common';
//import { loc } from './char.controller';
import { LocationsService } from './locations.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationsController } from './locations.controller';
//import { CharSchema } from './char.model';

@Module({
  //imports: [ProductModule],
  // imports: [MongooseModule.forFeature([{ name: 'Char', schema: CharSchema }])],
  imports:[],
  controllers: [LocationsController],
  providers: [LocationsService]
})
export class LocationsModule { }