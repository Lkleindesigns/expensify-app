import React from 'react'
import { shallow } from 'enzyme'
import numeral from 'numeral'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('Should correctly render expenses total with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={12} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should correctly render expenses total with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={12345} />)
    expect(wrapper).toMatchSnapshot()    
})