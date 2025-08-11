const log = console.log;
async function  connectTODattabase(user,password) {
    if(user=== process.env.USERDATABASE && password=== process.env.PASSWORDDATABASE) {
        log("coxeção bem sucedida");

    } else {
        log("falha");
    }
    
}

export default connectTODattabase;