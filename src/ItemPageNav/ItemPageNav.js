import React from 'react'
import MyContext from '../contexts/MyContext'
import Button from '../Buttons/Button'
import { findItem, findCategory } from '../item-helpers'
import './ItemPageNav.css'

export default class ItemPageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => { }
    },
    match: {
      params: {}
    }
  }
  static contextType = MyContext;

  render() {
    const { items, categories, } = this.context
    const { itemId } = this.props.match.params
    const item = findItem(items, itemId) || {}
    const category = findCategory(categories, item.categoryid)
    return (
      <div className='ItemPageNav'>
        <Button
          tag='button'
          role='link'
          onClick={() => this.props.history.goBack()}
          className='ItemPageNav__back'
        >
         Back
        </Button>
        {category && (
          <h3 className='ItemPageNav__category-name'>
            {category.name}
          </h3>
        )}
      </div>
    )
  }
}