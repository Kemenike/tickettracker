import React from 'react'
import Textbox from '../ui/Textbox'

function TicketInputField() {
  return (
    <div>
      <form action="">
        <Textbox
          title='ticket-number-textbox'
          label='Ticket Number'
        />
        <Textbox
          title='department-id'
          label='Department ID'
        />
        <Textbox
          title='ticket-time'
          label='Time Spent'
        />
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default TicketInputField