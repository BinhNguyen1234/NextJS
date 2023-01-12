import { Controller, Get } from "@nestjs/common";
@Controller({
    path: "signup",
    version: "1"
})
export class SignUpController{
    @Get()
    checkroute(){
        return "signup"
    }
}