import { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import './TableRadioButton.css';

// Type for the radio option
type RadioOption = {
  label: string;
  value: string;
};

// Props for the RadioButtonGroup component
type RadioButtonGroupProps = {
  name: string;
  options: RadioOption[];
  onChange: (value: string) => void;
  defaultValue?: string;
};

// RadioButtonGroup component
const TableRadioButton: React.FC<RadioButtonGroupProps> = ({
  name,
  options,
  onChange,
  defaultValue,
}) => {
  // State to manage the selected value
  const [value, setValue] = useState<string | undefined>(defaultValue);

  // Handle radio button change
  const handleChange = (val: string) => {
    setValue(val);
    onChange(val);
  };

  return (
    <ButtonGroup className="table-radio-group">
      {options.map((option, idx) => (
        <ToggleButton
          key={idx}
          id={`radio-${name}-${idx}`}
          type="radio"
          variant={value === option.value ? 'blue' : 'outline-blue'}
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={(e) => handleChange(e.currentTarget.value)}
          className={value === option.value ? 'selected' : ''}
        >
          {option.label}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
};

export default TableRadioButton;
