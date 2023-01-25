class Statement {
    constructor(account) {
        this.account = account
    }

    printStatement() {
        const record = this.account.getRecord()
        const columns = "date || credit || debit || balance"

        const formatRecord = record.map((transaction) => {
            return `\n${transaction.date} || ${transaction.type === "credit" ? transaction.amount.toFixed(2) + ' ' : ''}|| ${transaction.type === "debit" ? transaction.amount.toFixed(2) + ' ' : ''}|| ${transaction.balancetoFixed(2)}`
        })
        return `${columns}${formatRecord.join('')}`
    }
}
module.exports = Statement