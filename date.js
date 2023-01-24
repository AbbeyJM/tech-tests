class Date {
    constructor(date) {
        this.date = date
    }

    returnDate() {
        if (typeof this.date === 'string') {
            
            const splitDate = this.date.split('/')

            if (splitDate.length === 3
                && splitDate[0].length === 2
                && splitDate[1].length === 2
                && splitDate[2].length === 4) {
                    return this.date
            } else throw new Error('date must be in dd/mm/yyyy format')
        } else throw new Error('date must be in a string format')
    }
}

module.exports = Date