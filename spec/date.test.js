const Date = require('../date')

describe('Date', () => {

    it('returns the date', () => {
        const date = new Date('14/09/2023')
        expect(date.returnDate()).toBe('14/09/2023')

    })

    it('throws error if the date is not in a string format', () => {
        const date = new Date(2359)
        expect(() => {date.returnDate()}).toThrow('date must be in a string format')
    })

    it('throws error if the string is not in dd/mm/yyyy format', () => {
        const date = new Date('14.09.2023')
        expect(() => {date.returnDate()}).toThrow('date must be in dd/mm/yyyy format')

    })
})