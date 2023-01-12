import { Module } from "@nestjs/common";
import { MongooseModule } from "src/database/mongo/mongoose.module";
import { TestController } from "./controller/test.controller";
@Module({
    imports: [MongooseModule],
    controllers: [TestController]
})
export class TestModule{

}