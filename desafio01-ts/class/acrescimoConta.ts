import { DioAccount } from "./DioAccount"

export class acrescimoConta extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }
    deposit = (valor: number): void => {
        if (this.validateStatus()) {
            valor = valor + 10
            this.balance = this.balance
            console.log('Voce fez um deposito no valor de: ', valor)
            console.log('o saldo da sua conta é: ', this.balance)
        } else {
            console.log('você não pode depositar o valor')
        }
    }


}
