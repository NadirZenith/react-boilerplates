import React from 'react'
import FilterLink from '../containers/FilterLink'
import * as todoActionsFilters from '../constants/todo';

const Footer = () => (
    <p>
        Show:
        {''}
        <FilterLink filter={todoActionsFilters.SHOW_ALL}>
          All
        </FilterLink>
        {', '}
        <FilterLink filter={todoActionsFilters.SHOW_ACTIVE}>
          Active
        </FilterLink>
        {', '}
        <FilterLink filter={todoActionsFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
    </p>
)

export default Footer
