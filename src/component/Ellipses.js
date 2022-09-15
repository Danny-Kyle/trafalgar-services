import React from 'react'

const Ellipses = ({src, onClick}) => {
  return (
    <div>
        <img src={src} alt="" className="h-2 cursor-pointer w-2" onClick={onClick} />
    </div>
  )
}

export default Ellipses