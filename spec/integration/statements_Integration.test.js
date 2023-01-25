const Date = require('../../date.js')
const Deposit = require('../../deposit.js')
const Account = require('../../account.js')
const Statement = require('../../statement.js')

describe('statement', () => {
    it('prints a statement after making a deposit', () => {
        const date = new Date('10/01/2023')
        const deposit = new Deposit('credit', 1000.00, date)

        const date2 = new Date('11/01/2023')
        const deposit2 = new Deposit ('credit', 4000, date2)

        const account = new Account()
        account.addDeposit(deposit)
        account.addDeposit(deposit2)
        const statement = new Statement(account)
        
        expect(statement.printStatement()).toBe(
            'date || credit || debit || balance\n11/01/2023 || 4000.00 || || 5000.00\n10/01/2023 || 1000.00 || || 1000.00')
    })

    it('prints a statement after making a deposit and withdrawal', () => {
        const date = new Date('10/01/2023')
        const deposit = new Deposit('credit', 1000.00, date)

        const date2 = new Date('11/01/2023')
        const withdrawal = new Deposit('debit', 500, date2)

        const account = new Account()
        account.addDeposit(deposit)
        account.addDeposit(withdrawal)
        const statement = new Statement(account)

        expect(statement.printStatement()).toBe(
            'date || credit || debit || balance\n11/01/2023 || || 500.00 || 500.00\n10/01/2023 || 1000.00 || || 1000.00')
    })
})