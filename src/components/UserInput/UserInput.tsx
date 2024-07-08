
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

interface IIfoodShoppingList {
  origin: string,
  description: string,
  unitPrice: number,
  weight: {
      value: number,
      unit: string,
      unitWeight: number
  }
}

interface IUserInputProps {
  setShoppingList: React.Dispatch<React.SetStateAction<IIfoodShoppingList[]>>;
}

function UserInput({ setShoppingList }: IUserInputProps ) {
  const [input, setInput] = useState<string>('');
  const validateInput = () => {
      try {
        const parsedInput: IIfoodShoppingList[] = JSON.parse(input);
        setShoppingList(parsedInput);
      } catch(e) {
        console.error(e);
      }
  }
  return (
    <div>
      <TextField id="outlined-basic" label="Your Ifood shopping list goes here" variant="outlined" value={input}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value)}/>
      <Button variant="contained" onClick={validateInput}>Validar</Button>
    </div>);
}

export default UserInput;
