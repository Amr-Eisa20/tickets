import { Fragment, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "./TicketForm.scss";
const TicketForm = ({
  inputSub,
  inputPriority,
  inputDisc,
  inputStatus,
  setInputSub,
  setInputPriority,
  setInputDisc,
  setInputStatus,
  tickets,
  setTickets,
  editTickets,
  setEditTickets,
}) => {


  useEffect(() => {
    if (editTickets) {
      setInputSub(editTickets.sub);
      setInputPriority(editTickets.priority);
      setInputDisc(editTickets.disc);
      setInputStatus(editTickets.status);
    } else {
      setInputSub("");
      setInputPriority("");
      setInputDisc("");
      setInputStatus("");
    }
  }, [editTickets]);
  // handel the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTickets) {
      updateTicket(editTickets.id , inputSub , inputPriority , inputDisc , inputStatus);
    } else {
      setTickets([
        ...tickets,
        {
          id: uuidv4(),
          sub: inputSub,
          priority: inputPriority,
          disc: inputDisc,
          status: inputStatus,
        }
      ]);
    }
    setInputSub("");
    setInputPriority("");
    setInputDisc("");
    setInputStatus("");
  };

  // update the ticket
  const updateTicket = () => {
    if (editTickets) {
      const newTickets = tickets.map((ticket) => {
        if (ticket.id === editTickets.id) {
          return {
            ...ticket,
            sub: inputSub,
            priority: inputPriority,
            disc: inputDisc,
            status: inputStatus,
          };
        } else {
          return ticket;
        }
      }
      );
      setTickets(newTickets);
      setEditTickets(null);
    } else {
      const newTicket = {
        id: uuidv4(),
        sub: inputSub,
        priority: inputPriority,
        disc: inputDisc,
        status: inputStatus,
      };
      setTickets([...tickets, newTicket]);
      setInputSub("");
      setInputPriority("");
      setInputDisc("");
      setInputStatus("");
    }
  }

  return (
    <Fragment>
      <Container>
        <div className="ticket_form" onSubmit={handleSubmit}>
          <h2 className="py-4">Ticket Information</h2>
          <div className="form">
            <Form>
              <Row>
                <Col xs={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Subject *</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      value={inputSub}
                      onChange={(e) => setInputSub(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Label>Priority *</Form.Label>
                  <Form.Select
                    value={inputPriority}
                    onChange={(e) => setInputPriority(e.target.value)}
                    required
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </Form.Select>
                </Col>
                <Col xs={6}>
                  <Form.Label>Status *</Form.Label>
                  <Form.Select
                    value={inputStatus}
                    onChange={(e) => setInputStatus(e.target.value)}
                    required
                  >
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                  </Form.Select>
                </Col>
                <Col xs={6}>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="1"
                      value={inputDisc}
                      onChange={(e) => setInputDisc(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Button type="submit">
                {editTickets ? "Update Ticket" : "Add Ticket"}
              </Button>
            </Form>
          </div>
        </div>

      </Container>
    </Fragment>
  );
};

export default TicketForm;
