class Statement {
    constructor(account) {
        this.account = account
    }

    printStatement() {
        const record = this.account.getRecord()
        const columns = "date || credit || debit || balance"

        const formatRecord = record.map((deposit) => {
            return `\n${deposit.date} || ${deposit.type === "credit" ? deposit.amount.toFixed(2) + ' ' : ''}|| ${deposit.type === "debit" ? deposit.amount.toFixed(2) + ' ' : ''}|| ${deposit.balance.toFixed(2)}`
        })
        return `${columns}${formatRecord.join('')}`
    }
}
module.exports = Statement