import operations from "./oparations.js";
import {promises as fs} from "fs";

init();
writeReadJson();

console.log(operations.soma(2,3));
console.log(operations.subtrai(500,300));

async function init(){
    try{
        await fs.writeFile("test.txt","blblbllblblblblbl");
        await fs.appendFile("test.txt", "\ntesteapenm file file");
        const data = await fs.readFile("test.txt", "utf-8");
        console.log(data);
    }catch (err){
        console.log(err);
    }
}

async function writeReadJson(){
    try{
        const array = [
            "gol", "palio", "uno", "e por ai vai"
        ];
        const obj = {
            carros:array
        };
        await fs.writeFile("teste.json", JSON.stringify(obj));
    } catch (err){
        console.log(err);
    }
}