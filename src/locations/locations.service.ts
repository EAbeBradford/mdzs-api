import { Injectable, NotFoundException } from '@nestjs/common';
import { ignoreElements } from 'rxjs';
import { Location } from './locations.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { title } from 'process';


@Injectable()
export class LocationsService {
  getHello(): string {
    return 'Welcome to the Cultivation World locations!';
  }
}
