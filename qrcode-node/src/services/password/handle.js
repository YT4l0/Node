async function permitedCharacteres() {
  let permited = [];

  if (process.env.UPPERCASE_LETTERS === "true") {
    permited.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  if (process.env.UPPERCASE_LETTERS === "true") {
    permited.push(..."abcdefghijklmnopqrstuvwxyz");
  }

  if (process.env.NUMBERS === "true") {
    permited.push(..."01234567890");
  }

  if (process.env.SPECIAL_CHARACTERES === "true") {
    permited.push(..."ç^~`´*&¨$#@");
  }

  return permited;
}

async function handle() {
  let characters = [];
  let password = "";

  const passwordlenght = process.env.PASSWORD_LENGHT;
  characters = await permitedCharacteres();

  for (let i = 0; i < passwordlenght; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
  
}

export default handle;
