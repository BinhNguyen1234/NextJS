import { Controller, Get } from '@nestjs/common';
import { BinhService } from '../service';
@Controller('info')
export class BinhController {
  constructor(private binhService: BinhService) {}
  @Get('name')
  returnName() {
    return this.binhService.printName();
  }
  @Get('age')
  returnAge() {
    return this.binhService.printAge();
  }
  @Get('habit')
  returnHabit() {
    return this.binhService.printHabbit;
  }
}
