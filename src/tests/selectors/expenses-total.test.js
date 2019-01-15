import expenses from '../fixtures/expenses'
import selectExpensesTotal from '../../selectors/expenses-total'

test('Should return zero when no expenses',() =>{
    expect(selectExpensesTotal([])).toBe(0)
})

test('Should return total when only one expense',() =>{
    expect(selectExpensesTotal([expenses[0]])).toBe(195)
})

test('Should return total when multiple expenses',() =>{
    expect(selectExpensesTotal(expenses)).toBe(114195)
})