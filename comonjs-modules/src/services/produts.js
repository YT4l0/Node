//tudo que lida com produto
const productType = {
    version: "digital",
    tax: "x1",
}
async function getFullName(codeid, productName) {
  console.log("\n");
  return console.log(" product " + codeid + "---" + productName + "");
}



async function getProductLabel(productName) {
  console.log("\n");
  console.log("produto " + productName);
}

module.exports = {
  getFullName,
  getProductLabel,
  productType,
};
