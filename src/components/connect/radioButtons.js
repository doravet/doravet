import React from 'react'

const RadioButtons = ({ id }) => {
  return (
    <div className='border-t py-3'>
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <label for="html" className='inline-block mx-3'>  Option {id}</label>
    </div>
  )
}

export default RadioButtons