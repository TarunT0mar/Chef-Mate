import "../components-css/comp.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [upValue, setUpValue] = useState(true)

  function handleInputChange(e) {
    setInputValue(e.target.value);

        setUpValue(true)
     
   
  }

  function setValue(e) {
    e.preventDefault();
    const newIngredients = inputValue.split(/\s*,\s*/); // trims spaces
    setIngredients(newIngredients);
    console.log(newIngredients);
    console.log(inputValue);
    setUpValue(false)
    setInputValue("")
    
  }

  


  

  return (
    <div className="Main">
      <form>
        <input
          type="text"
          placeholder="eg. oregano"
          aria-label="Add Ingredients"
          value={inputValue}
          onChange={handleInputChange}
        />

        <button onClick={setValue} disabled={inputValue == ""}>
          { (upValue)? <FaArrowUp  className="arrow-button"/> : <FaArrowDown  className="arrow-button"/>}
        </button>

        {ingredients.length > 0 && ingredients[0] ? (
          <div className="ingredients-Holder">
            <h2>Ingredients on Hand</h2>
            <ul>
              {ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="recipi">
              <div className="recipi-details">
                <h3>Ready for Recipi?</h3>
                <p>Generate a recipe from your ingredients.</p>
              </div>
              <div className="div">
                <button className="recipi-button">Get a recipe</button>
              </div>
            </div>
          </div>
        ) : (
          console.log("working write")
        )}
      </form>
    </div>
  );
}
