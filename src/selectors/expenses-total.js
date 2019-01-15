export default (expenses) => {
    let total = 0
    if (expenses.length) {
        expenses.map((expense) => {
            total += expense.amount
        })
        return total
    } else if (expenses.length === 0) {
        return 0
    } else {
        return 'Error'
    }
}