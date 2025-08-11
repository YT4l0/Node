import prompt from "prompt";
import qrCode from "../../prompt/prompt-qrcode.js";
import handle from "./handle.js";

async function  createQrcode() {
    prompt.get(qrCode, handle)
    prompt.start();

    
}

export default createQrcode;