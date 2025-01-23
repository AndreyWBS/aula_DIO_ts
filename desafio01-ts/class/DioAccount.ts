export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if (this.validateStatus()) {
      this.balance = this.balance + valor
      console.log('Voce fez um deposito no valor de: ', valor)
      console.log('o saldo da sua conta é: ', this.balance)
    }else{
      console.log('você não pode depositar o valor')
    }
  }

  withdraw = (valor: number): void => {
    if (this.validateStatus() && this.validadeSaque(valor) ) {
      this.balance = this.balance - valor
      console.log('Você fez um saque no valor de: ', valor)
      console.log('o saldo da sua conta é: ', this.balance)
    } else {
      console.log('você não pode sacar o valor')

    }
  }


  getBalance = (): void => {
    console.log(this.balance)
  }
  private validadeSaque = (valor : number): boolean =>{
    return valor < this.balance
  }
  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
