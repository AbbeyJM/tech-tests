class Statement {
    constructor() {
        this.balance = 0
        this.record = []
    }

    addDeposit(deposit) {
        const newDeposit = deposit.returnDeposit()

        this.balance += newDeposit.amount
        this.record = [...this.record,
            {
                date: newDeposit.date,
                amount: newDeposit.amount,
                type: "credit",
                balance: this.balance,
            }]
    }
    getRecord() {
        return this.record
    }
}

module.exports = Statement