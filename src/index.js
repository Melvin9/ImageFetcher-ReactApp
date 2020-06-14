import React,{useState} from "react";
import ReactDOM from "react-dom";
import unsplash from './api/unsplash';
import CardComponent from "./components/CardComponent";
import Search from "./components/Search";

const App = () => {
const [imageArray,setImage] = useState([]);
const handleSearch=async(term)=>{
  const result= await unsplash(term);
  setImage(result.data.results);
}
  return (
    <div className="ui container" >
        <br></br>
        <Search onSubmit={handleSearch} />
        <br/>
      <div className="ui three stackable cards">
        {
          imageArray.map(element => {
            return(<CardComponent imageURL={element.urls.regular}/>)
          })
        }
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
