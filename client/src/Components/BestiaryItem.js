//import { useState } from 'react'

const BItem = ({ Data, Heading }) => {
    //<b>{Heading}</b>
    return (
        <>
            <div className='item'>
                {Heading}  {Data}
        </div>

            </>
        )

}

export default BItem
