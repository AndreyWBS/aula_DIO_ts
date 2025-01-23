import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (valor: number): void => {
    if (this.validateStatus()) {
      this.balance = this.balance + valor
      console.log('Voce pegou um empréstimo no valor de ', valor)
      console.log('e o saldo da sua conta é:', this.balance)
    }else{
      console.log('você não pode pegar um emprestimo')

    }
  }
}
