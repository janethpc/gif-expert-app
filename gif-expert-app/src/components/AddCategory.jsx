import { useState } from "react";



export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState([])
    const onInputChange = ({target}) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        //setCategories( categories => [inputValue, ...categories]);
        setinputValue('');
    }

  return (

    <form onSubmit={onSubmit}>
        <input /*proptypes*/
            type="text"
            placeholder="Buscar Giph"
            value={ inputValue }
            onChange={ onInputChange }
            />
    </form>
  )
}
