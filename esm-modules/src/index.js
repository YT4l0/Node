import {desconnectDatabase, databesetype} from "./utils/database.js";
import { getFromApi } from "./utils/api.js";

desconnectDatabase()

console.log(databesetype);

getFromApi()
