class Deposit {
    constructor(amount) {
        this.amount = amount
    }

    returnDeposit() {
        if (!this.amount) throw new Error('amount must be provided')

        return {amount: this.amount}
    }
}

module.exports = Deposit