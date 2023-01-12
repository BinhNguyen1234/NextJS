import { Injectable, Body,ValidationPipe } from "@nestjs/common";
import { InfoLoginDto } from "../dto/info-login.dto";
@Injectable()
export class AuthService {
    testLogin(Info:InfoLoginDto){
        console.log(Info)
        return Info
    }
}