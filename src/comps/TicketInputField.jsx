import "./TicketInputField.css";
import { useState } from 'react';

function TicketInputField() {
  const [formPayload, setFormPayload] = useState({});

  return (
    <div className="ticket_input__container container">
      <div className="row">
        <label htmlFor="ticket_number_input">Ticket Number</label>
        <input name="ticket_number_input" onBlur={e =>
          { console.log(e.target.value);
            setFormPayload({ ...formPayload, ticketNumber: e.target.value })}}/>
      </div>
      <div className="row">
        <label htmlFor="department_input">Department</label>
        <input name="department_input" />
      </div>
      <div className="row">
        <label htmlFor="time_spent_input">Time Spent</label>
        <input name="time_spent_input" />
      </div>
      <input type="submit" />
    </div>
  )
}

export default TicketInputField;