import { Injectable } from '@nestjs/common';

@Injectable()
export class LocationsService {
  getHello(): string {
    return 'Welcome to the Cultivation World locations!';
  }
}
