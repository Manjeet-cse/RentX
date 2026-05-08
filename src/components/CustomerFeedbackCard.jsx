import React from 'react'

const CustomerFeedbackCard = ({ profilePhoto, name, address, stars, description }) => {
  return (
    <div className='border p-5 w-80 h-60 rounded-3xl '>
      <div className='flex gap-6'>
        <div>
          <img className='rounded-full w-10' src={profilePhoto} alt="" />
        </div>
        <div>
          <div>
            {name}
          </div>
          <div>
            {address}
          </div>
        </div>
      </div>
      <div>
        {
            Array.from({length: stars}, (_, idx) => {
              let starVal = idx + 1;
              return <span
              key={starVal}
              style={{
                fontSize: '1.5rem',
                color: 'gold'
              }}
            >
              ★
            </span>
            })
          }
      </div>
      <div>
        {description}
      </div>

    </div>
  )
}

export default CustomerFeedbackCard
