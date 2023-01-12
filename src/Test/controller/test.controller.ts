import { Get,Controller } from "@nestjs/common";
import { MongooseService } from "src/database/mongo/service/mongoose.service";
@Controller("test")
export class TestController{
    private DbService
    constructor(dbService : MongooseService){
        this.DbService = dbService
    }
    @Get("check")
    isOk(){
        return "this route ok"
    }
    @Get("close")
    closeConntection(){
        this.DbService.close()
    }
    @Get("connect")
    connectDb(){
        this.DbService.connect()
    }
}