const Account = require('../account')
const Statement = require('../statement')
jest.mock('../account')

describe('Statement', () => {
    beforeAll(() => {
        Account.mockImplementation(() => {
            return {
                getRecord: () => {
                    return [
                        {
                            date: '01/01/2023',
                            amount: 1000,
                            type: "credit",
                            balance: 1000
                        },
                        {
                            date: '05/01/2023',
                            amount: 3000,
                            type: "credit",
                            balance: 4000
                        },
                        ]
                }
            }
        })
    })

    it('prints a statement', () => {
        const account = new Account()
        const statement = new Statement(account)

        expect(statement.printStatement()).toEqual('date || credit || debit || balance\n01/01/2023 || 1000.00 || || 1000.00\n05/01/2023 || 3000.00 || || 4000.00')
    })
})