import { Controller, Get, Inject } from '@nestjs/common';
import { BinhService } from '../service';
import { TestService } from '../service/test.service';
@Controller({
  path: 'binh',
  version: ['1'],
})
export class BinhController {
  constructor(@Inject("BINH_SERVICE")private binhService: BinhService) {}
  @Get('name')
  returnName() {
    return this.binhService.printName()
  }
  @Get('age')
  returnAge() {
    return this.binhService.printAge();
  }
  @Get('habit')
  returnHabit() {
    return this.binhService.printHabbit();
  }
}
