import { useState } from 'react'

export const useInput = (initialState={}) => {
    const [input, setInput] = useState(initialState);
    
      // Function to handle input changes
      const onInputValue = ({target}) => {
        const { name, value } = target; // Extract name and value from the input that triggered the event
        setInput({
          ...input, // Keep the existing values
          [name]: value // Update the corresponding field
        });
      };

      const onResetInput = ()=>{
        setInput(initialState)
      }
  
    return {...input, input, onInputValue, onResetInput}
}
