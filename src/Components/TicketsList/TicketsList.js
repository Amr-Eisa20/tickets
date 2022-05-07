import { Fragment, useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./TicketsList.scss";
const TicketsList = ({
  setInputSub,
  setInputPriority,
  setInputDisc,
  setInputStatus,
  tickets,
  setEditTickets,
}) => {
    const [visable , setVisable] = useState(2);

    // handel the visable tickets
    const handleVisable = () => {
        setVisable(visable + 2);
    }
  // handelEdit
  const handleUpdate = ({ id }) => {
    const findTicket = tickets.find((ticket) => ticket.id === id);
    setEditTickets(findTicket);
    setInputSub(findTicket.sub);
    setInputPriority(findTicket.priority);
    setInputDisc(findTicket.disc);
    setInputStatus(findTicket.status);
    window.scrollTo({ top: 50, behavior: "smooth" });
  };

  return (
    <Fragment>
      <Container>
        <div className="tickets_list">
          <div className="tickets_list_header">
            <div className="tickets_list_header_item">
              <span>Subject</span>
            </div>
            <div className="tickets_list_header_item">
              <span>Priority</span>
            </div>
            <div className="tickets_list_header_item">
              <span>Status</span>
            </div>
            <div className="tickets_list_header_item">
              <span>Description</span>
            </div>
            <div className="tickets_list_header_item">
              <span>Actions</span>
            </div>
          </div>
          <ul className="tickets_list_items">
            {tickets.slice(0 , visable).map((ticket, id) => (
              <li key={id}>
                <span>{ticket.sub}</span>
                <span>{ticket.priority}</span>
                <span>{ticket.status}</span>
                <span>{ticket.disc}</span>
                <div className="ticket_actions">
                  <Button
                    onClick={() => handleUpdate(ticket)}
                  >
                    Update
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          {tickets.length > visable && ( <Button className="show_more" onClick={handleVisable}>Show More</Button>)}
        </div>
      </Container>
    </Fragment>
  );
};

export default TicketsList;
