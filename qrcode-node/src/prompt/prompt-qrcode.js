import chalk from "chalk"

const promptQrCode = [
    {
        name: "link",
        description: chalk.green.bold("digite o link para criar o qr code"),

    },{
        name: "type",
        description: chalk.green.bold("escolha entre o tipo 1 - normal e 2 -  terminal"),

        pattern: /^[1-2]+$/,
        message: chalk.red.italic("ecolha apenas entre 1 e 2"),
        required: true,
    }

]

export default promptQrCode;