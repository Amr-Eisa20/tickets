import { useEffect, useState } from "react";
// Import Components
import TicketForm from "./Components/TicketForm/TicketForm";
import TicketsList from "./Components/TicketsList/TicketsList";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("tickets")) || [];
  const [inputSub, setInputSub] = useState("");
  const [inputPriority, setInputPriority] = useState("");
  const [inputStatus, setInputStatus] = useState("");
  const [inputDisc, setInputDisc] = useState("");
  const [tickets, setTickets] = useState(initialState);
  const [editTickets, setEditTickets] = useState(null);

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  return (
    <>
      <TicketForm
        inputSub={inputSub}
        inputPriority={inputPriority}
        inputStatus={inputStatus}
        inputDisc={inputDisc}
        setInputSub={setInputSub}
        setInputPriority={setInputPriority}
        setInputStatus={setInputStatus}
        setInputDisc={setInputDisc}
        tickets={tickets}
        setTickets={setTickets}
        editTickets={editTickets}
        setEditTickets={setEditTickets}
      />
      <TicketsList
        setInputSub={setInputSub}
        setInputPriority={setInputPriority}
        setInputStatus={setInputStatus}
        setInputDisc={setInputDisc}
        tickets={tickets}
        setEditTickets={setEditTickets}
      />
    </>
  );
};

export default App;
