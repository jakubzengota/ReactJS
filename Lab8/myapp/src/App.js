import './App.css';
import React, { useState } from 'react'; 
import useCollapse from 'react-collapsed';
import { Button, Card, Container} from 'react-bootstrap';

function App() {
  
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div>
        <Card  style={{width: '75%', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>
          <Card.Header>Pokaż ukryta wiadość</Card.Header>
          <Card.Body>
            <Button 
                {...getToggleProps({
                  onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}
                
              >
                {isExpanded ? 'Ukryj' : 'Pokaż'}
              </Button>
              <p {...getCollapseProps()}>Ukryte do wiadomości (UDW, ang. blind carbon copy, BCC), do wiadomości
                  (DW, ang. carbon copy, CC) – funkcja poczty elektronicznej, umożliwiająca wysłanie wiadomości do wielu odbiorców naraz. 
                  Pole UDW pozwala na wysyłkę wiadomości w taki sposób, że odbiorcy nie widzą wzajemnie swoich adresów. UDW jest zalecanym
                  sposobem wysyłki do większej liczby odbiorców, zapobiegającym ujawnieniu w niektórych przypadkach danych wrażliwych
                  (możliwości skojarzenia osób i firm z daną instytucją oraz wysyłki niechcianej poczty przez współadresatów).
              <ReadMore /></p>
          </Card.Body>
        </Card>
    </div>
  );
}

//Nieodkryta sekcja wiadomości
function ReadMore() {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  
  return (
    <div>
      <section {...getCollapseProps()}>Do: w tym polu umieszczany jest adres odbiorcy wiadomości
        DW: w tym polu można umieścić adresy, na które wiadomość również ma dotrzeć (odbiorca widzi to pole)
        UDW: w tym polu można umieścić adresy, na które wiadomość również ma dotrzeć, ale nikt poza nadawcą nie widzi jego zawartości
        </section>
      <Button 
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
        variant="light"
      >
        {isExpanded ? 'Pokaż mniej' : 'Wiecej'}
      </Button>
    </div>
  );
}
export default App;