import { Injectable } from "@nestjs/common";
import { BinhService } from ".";
@Injectable()
export class TestService {

    printTest(){
        return "OK"
    }
}