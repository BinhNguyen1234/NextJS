import { IsEmail, IsNotEmpty } from "class-validator"
export class InfoLoginDto {
    @IsEmail()
    @IsNotEmpty()
    username
    @IsNotEmpty()
    password
}