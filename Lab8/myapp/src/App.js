import './App.css';
import React, { useState } from 'react'; 
import useCollapse from 'react-collapsed';
import { Button, Card,} from 'react-bootstrap';

//Funkcja 1
function App() {
  //Zmienne w tym pakiecie muszą pozostać takie same z uwagi na boolean(isExpanded)
  //Sprawdzenie czy button active, jezeli tak pokazuje ukryta wiadomość
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  return (
    //Użycie kompontu Card z react-bootstrap
    <div>
        <Card  style={{width: '75%', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>
          <Card.Header>Pokaż ukryta wiadość</Card.Header>
          <Card.Body>
            <Button variant="primary"
                {...getToggleProps({
                  onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                })}>
                {isExpanded ? 'Ukryj' : 'Pokaż'}
              </Button>
              <p style={{padding: "10px", marginTop: "10px", marginBottom: "10px"}} {...getCollapseProps()}>Ukryte do wiadomości (UDW, ang. blind carbon copy, BCC), do wiadomości
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
//Funkcja 2
//Tutaj sprawdzanie czy button active, jezeli tak - rozwinięcie tekstu
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
        variant="success"
      >
        {isExpanded ? 'Pokaż mniej' : 'Wiecej'}
      </Button>
    </div>
  );
}
export default App;