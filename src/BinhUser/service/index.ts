import { Injectable } from '@nestjs/common';
@Injectable()
export class BinhService {
  printName() {
    return 'Name: Binh';
  }
  printAge() {
    return 'Age :27';
  }
  printHabbit() {
    return 'Habit: Coding';
  }
  constructor(){
    console.log("123456")
  }
}
