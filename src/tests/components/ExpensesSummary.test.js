import React from 'react'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'
import { shallow } from 'enzyme'

test('Should capture Expenses Summary when only one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should capture Expenses Summary when multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})
