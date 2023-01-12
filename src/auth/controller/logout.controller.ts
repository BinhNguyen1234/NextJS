import { Controller, Get } from "@nestjs/common";
@Controller({
    path: "logout",
    version: "1"
})
export class LogoutController{
    @Get()
    checkroute(){
        return "signup"
    }
}