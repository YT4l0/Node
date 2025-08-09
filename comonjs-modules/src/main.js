const {getFullName, productType} = require("./services/produts"); //desestruturação
const config = require("./services/config");
const database = require("./services/database");

async function main() {
//   console.log("olá");
//   product.getFullName("408", "mousepad");
//   product.getProductLabel("aaaaaaa");

    getFullName("1", "teclado");
    

  database.connectToDatabase("postgres");
  database.disconetDatabase();

 

  console.log(config.client);
  console.log(productType)
 

}

main();
