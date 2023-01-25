class Deposit {
    constructor(type, amount, date) {
        this.type = type
        this.amount = amount
        this.date = date
    }

    returnDeposit() {
        if (!this.amount) throw new Error('type, amount, and date must be provided')
        if (!this.date) throw new Error('type, amount, and date must be provided')
        
        if (this.type === 'credit' || this.type === 'debit') {
            return { type: this.type, amount: this.amount, date: this.date.returnDate() }
        } else throw new Error('credit or debit must be declared.')
    }
}

module.exports = Deposit