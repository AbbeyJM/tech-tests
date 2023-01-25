const Account = require('../account')
const Deposit = require('../deposit')

jest.mock('../deposit')

describe('Account', () => {
    it('updates the account record with a deposit', () => {
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
})