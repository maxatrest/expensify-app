import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import expensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export class ExpensesSummary extends React.Component {
    render() {
        return (
            <div>
                <p>Viewing {this.props.expenses.length} expense{(this.props.expenses.length > 1 || this.props.expenses.length === 0) ? 's' : null} totalling {
                    numeral(expensesTotal(this.props.expenses)/100).format('$0,0.00')
                }</p>
            </div>
        )

    }
}

const mapStateToProps = (state) => ({expenses: selectExpenses(state.expenses, state.filters)})

export default connect(mapStateToProps)(ExpensesSummary)