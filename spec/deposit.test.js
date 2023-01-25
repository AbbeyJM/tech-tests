const Deposit = require('../deposit')
const Date = require('../date.js')

jest.mock('../date')

describe('Deposit', () => {

    beforeAll(() => {
        Date.mockImplementation(() => {
            return {
                returnDate: () => {
                    return '01/01/2023'
                }
            }
        })
    })

    it('returns statement', () => {
        // const date = new Date('01/01/2024')
        const deposit = new Deposit('credit', 1000.00, Date)

        expect(deposit.returnDeposit()).toEqual({type: 'credit', amount: 1000.00, date:'01/01/2023'})
    })

    it('throws error when no date is provided', () => {
        const deposit = new Deposit('credit', 1000)

        expect(() => {deposit.returnDeposit()}).toThrow('type, amount, and date must be provided')
    })

    it('throws error when no amount has been provided', () => {
        // const date = new Date('01/01/2023')
        const deposit = new Deposit('credit', 0, Date)

        expect(() => {deposit.returnDeposit()}).toThrow('type, amount, and date must be provided')
    })

    it('throws error when type of transaction hasnt been declared', () => {
        // const date = new Date('01/01/2023')
        const deposit = new Deposit('c', 100, Date)

        expect(() => {deposit.returnDeposit()}).toThrow('credit or debit must be declared')
    })
})