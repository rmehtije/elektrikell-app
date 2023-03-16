import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useSelector, useDispatch } from 'react-redux';
import { setHourRange } from '../services/stateService';
import { useParams, useNavigate } from 'react-router-dom';

function Durations() {
    const { durationParam } = useParams();
    const navigate = useNavigate();

    // useSelector eto hook kotoryj slushajet redux oblako i jesli izmenitsa sostojanije to useSelector 
    // inicializiruet otrisovka komponenta
    // useSelectro prinemajet funkciju kak argument i eta funkciqja opredelajet kakoje sostojanije slushat'

    const hourRange = useSelector((state) => state.hourRange);

    // Dlja inicializirovanija izmenenija sostojanija ispol'zujetsa dispatch
    // dispatch eto tot kto otpravit action v oblako store / redux sostojanie
    // dispatch peredast nash action v redux reducer, tot zapustit funckcqju kotoraja izmenit sostojanije, 4to potom podhvatit useSelector
    const dispatch = useDispatch();

    const durations = [1, 2, 3, 4, 6, 8];

    const handleClick = (duration) => {
        if(durationParam) {
            navigate(`/`);
        }
        // v dispatch peredajom action a v action peredajom novqje dannye o sostojanii.
        // v reducer peredastsa object { type: setHourRange, payload: duration };
        dispatch(setHourRange(duration));
    };

    // Eventy:
    // Sobytija eto 4toto proizoshlo v brauzere.
    // Naprimer: pol'zovatel' nazhal 4toto u nas na projekte to brauzer shvatil eto sobitije i peredal nashemu projektu
    // Jesli u nas stoit v etom meste trigger sobitija to etot trigger zapuskajet obrabot4ik sobitija.
    // triggery nazqvajutsa s kljuchevova slova 'on'
    // obrabotchiki my privykli nazqvat' s kljuchevogo slovo 'handle'
    // Brazuer peredajot v obrabot4ik object event v kotorom soderzhitsa vsja informacija ob etom sobytii.

    return (
        <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-center">
            <ButtonGroup aria-label="First group">
                {durations.map(duration => {
                    const selectedDuration = durationParam ? +durationParam : hourRange;
                    return (
                        <Button
                            key={duration}
                            active={duration === selectedDuration}
                            onClick={(event) => (console.log('event', event),handleClick(duration))}>
                            {duration}h
                        </Button>
                    )
                }
                )}
            </ButtonGroup>
        </ButtonToolbar>
    );
}

export default Durations;
