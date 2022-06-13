import React from 'react'

export default function AddColor() {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <input
        id='search'
        type='text'
        role='searchbox'
        placeholder='Add color name'
      />
    </form>
  )
}