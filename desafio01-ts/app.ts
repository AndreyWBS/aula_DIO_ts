import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(50)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.withdraw(20)
console.log(companyAccount)
