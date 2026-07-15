import React from 'react'

const ListIterator = ({ items }) => {
  return (
    items.map((element, index) => <li key={index}>{element}</li>)
  )
}

export default ListIterator