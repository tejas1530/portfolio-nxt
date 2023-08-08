import React from 'react'

type Props = {}

function Form({}: Props) {
  return (
    <>
    <form className='flex flex-col ' >
                        <div>
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <input type="text" />
                        <textarea />
                        <button>Submit</button>
                    </form>
    </>
  )
}

export default Form