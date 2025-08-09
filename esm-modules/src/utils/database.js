async function connectDataBAse(dataName) {
    //logica da conexão
    console.log(`conecatando ao database ${dataName}`);
    
} 

async function desconnectDatabase() {

    console.log("desconectando");
    
}

const databesetype = {
    userType: "admin",
    databaseType: "mysql",
}

export{ connectDataBAse, desconnectDatabase, databesetype };