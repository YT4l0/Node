import prompt from "prompt";

import mainPrompt from "./prompt/prompt-main.js";

import createQrcode from "./services/qrcode/create.js";
import createpassword from "./services/password/create.js";

async function main() {

  prompt.get(mainPrompt, async (errorMonitor, choose) => {
    if (choose.select == 1) {

      await createQrcode()
      
    }
    if (choose.select == 2) {
      await createpassword()
    }
  });

  prompt.start();
}

main();
