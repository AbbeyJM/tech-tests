class Deposit {
    constructor(amount) {
        this.amount = amount
        this.date = date
    }

    returnDeposit() {
        if (!this.amount) throw new Error('amount must be provided')
        if (!this.date) throw new Error('date must be provided')

        return {amount: this.amount, date: this.date.returnDate()}
    }
}

module.exports = Deposit