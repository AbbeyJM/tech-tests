class Statement {
    constructor() {
        this.balance = 0
        this.record = []
    }

    addDeposit(deposit) {
        const {amount, date, type} = deposit.returnDeposit()

        if (type === 'credit') {
            this.balance += amount
        }
        else if (type === 'debit') {
            this.balance -= amount
        }

        this.record = [{
            date,
            amount,
            type,
            balance: this.balance,
        },
        ...this.record, ]
        }
            
    getRecord() {
        return this.record
    }
}

module.exports = Statement