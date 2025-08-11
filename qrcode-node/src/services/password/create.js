import chalk from "chalk";
import handle from "./handle.js";

async function createpassword(){
    console.log(chalk.green(""));
    const password = await handle();
    console.log(password);
    
}

export default  createpassword;