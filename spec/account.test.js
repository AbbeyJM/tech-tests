const Account = require('../account')
const Deposit = require('../deposit')

jest.mock('../deposit')

describe('Account', () => {
    it('has a new deposit and updates', () => {
        Deposit.mockImplementation(() => {
            return {
                returnDeposit: () => {
                    return {type: 'credit', amount: 1000, date: '14/01/2023'}
                }
            }
        })

        const deposit = new Deposit()
        const account = new Account()

        account.addDeposit(deposit)
        account.addDeposit(deposit)

        expect(account.getRecord()).toEqual([
            {
                date: '14/01/2023',
                amount: 1000,
                type: 'credit',
                balance: 2000
            },
            {
                date: '14/01/2023',
                amount: 1000,
                type: 'credit',
                balance: 1000
            }])
    })

    it('has a new withdrawal and updates', () => {
        Deposit.mockImplementation(() => {
            return {
                returnDeposit: () => {
                    return {type: 'debit', amount: 500.00, date: '01/01/2023'}
                }
            }
        })
        
        const deposit = new Deposit()

        const account = new Account()

        account.addDeposit(deposit)
        account.addDeposit(deposit)

        expect(account.getRecord()).toEqual([
            {
                date: '01/01/2023',
                amount: 500.00,
                type: "debit",
                balance: -1000
            },
            {
                date: '01/01/2023',
                amount: 500.00,
                type: "debit",
                balance: -500
            }])

    })
})