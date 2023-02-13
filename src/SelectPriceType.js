import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SelectPriceType({ activePrice, setActivePrice }) {
  return (
    <ButtonGroup>
      <Button active={activePrice === 'low'} onClick={() => setActivePrice('low')}>Odavad Tunnid</Button>
      <Button active={activePrice === 'high'} onClick={() => setActivePrice('high')}>Tipptunnid</Button>
    </ButtonGroup>
  );
}

export default SelectPriceType;
