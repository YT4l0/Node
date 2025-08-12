

async function getBaseEmail(senderName : string): Promise<string> {
    let base = await getHeaderText()
    
    base += `ola .${senderName}@example.com`;

    base += "oi oi";

    return base
    
}

async function getHeaderText():Promise<string> {

    return "email para voce"

}



export default getBaseEmail;
