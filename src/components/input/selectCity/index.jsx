import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Option from '@mui/joy/Option';
import Select, { selectClasses } from '@mui/joy/Select';
import { PropTypes } from 'react-proptypes';
import './styles.css';

export default function SelectCity({ setSelectInput, selectInput }) {
  (function handleChangeAnimal(e) {
    e.preventDefault();
    e.stopPropagation();
    return;
  });

  return (
    <Select
      className="inputSelectCity"
      placeholder={selectInput}
      indicator={<KeyboardArrowDown />}
      sx={{
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(180deg)',
          },
        },
      }}
      value={selectInput}
      onChange={(e) => setSelectInput(e.target.textContent)}
    >
      <Option value="Cidade">Cidade</Option>
      <Option value="Estado">Estado</Option>
    </Select>
  );
}

SelectCity.propTypes = {
  setSelectInput: PropTypes.func.isRequired,
  selectInput: PropTypes.string.isRequired,
};
