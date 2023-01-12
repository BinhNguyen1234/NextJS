import { Body } from "@nestjs/common";
import { Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { InfoLoginDto } from "../dto/info-login.dto";
import { AuthService } from "../service/auth.service";
@Controller({
    path: "login",
    version: "1"
})
export class LoginController{
    private authService :AuthService;
    constructor(authService:AuthService){
        this.authService = authService
    }
    @Post()
    @UsePipes(ValidationPipe)
    checkroute(@Body() Info:InfoLoginDto){
        return this.authService.testLogin(Info)
    }
}