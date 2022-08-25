import React from 'react'

const MyInput = ({ id, type, name, value, onChange, placeholder }) => {
  const inType = ['error', 'success'].includes(type) ? type : 'default'
  return (
    <div className="input">
      <input
        className={['MyInput', `MyInput_${inType}`].join(' ')}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{ fontFamily: 'Nanum Myeongjo' }}
      />{' '}
      <span class="underline"></span>
    </div>
  )
}
export default MyInput
