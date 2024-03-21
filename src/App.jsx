import { useState } from "react";
import "./App.css";

const DisplayImages = () => {
  const images = [
    "https://via.placeholder.com/50x50?text=Image1",
    "https://via.placeholder.com/50x50?text=Image2",
    "https://via.placeholder.com/50x50?text=Image3",
  ];

  const [currentImage, setImage] = useState(0);

  const imageList = images.map((img, ind) => (
    <img
      key={ind}
      onClick={() => setImage(ind)}
      src={img}
      alt={`image ${ind + 1}`}
    />
  ));

  return (
    <div>
      <img
        src={images[currentImage]}
        style={{ width: "100px", height: "100px" }}
      />
      <br />
      {imageList}
    </div>
  );
};
/* 
const ListItems = () => {
  const [currentList, setCurrentList] = useState([]);

  const generateList = () => {
     const newList = [...currentList, currentList.length + 1];
    console.log(newList)
    setCurrentList(newList)
  };

  return (
    <>
      <button onClick={generateList}>Add Item</button>
      <ul>
        {currentList.map((item, index) => (
          <li key={index}>item: {item}</li>
        ))}
      </ul>
    </>
  );
}; */
/* 
const ListItems = () => {
  const [currentItem, setCurrentItem] = useState([]);

  const itemsArray = () => {
    const itemsList = [...currentItem, currentItem.length + 1];
    console.log(itemsList);
    setCurrentItem(itemsList);
  };

  const createList = currentItem.map((item, index) => (
    <li key={index}>Item {item}</li>
  ));

  return (
    <div>
      <button onClick={itemsArray}>Add item</button>
      <ul>{createList}</ul>
    </div>
  );
}; */

const ListItems = () => {
  const [currentListItem, setCurrentListItem] = useState([]);

  const generateItems = () => {
    const items = [...currentListItem, currentListItem.length + 1];
    console.log(items);
    setCurrentListItem(items);
  };

  const listItems = currentListItem.map((item) => <li>Item {item}</li>);
  return (
    <div>
      <button onClick={generateItems}>Add Item</button>
      <ul>{listItems}</ul>
    </div>
  );
};

//tp sequentially generate colors
const ChangeBackgroundColor = () => {
  const colors = [
    "lightblue",
    "lightgreen",
    "lightpink",
    "lightyellow",
    "lightgrey",
  ];

  const [currentColor, setCurrentColor] = useState(0);

  const getNextColor = () => {
   const nextColor = (currentColor + 1)% colors.length;
    console.log(nextColor)
    setCurrentColor(nextColor)
  }

  return (
    <div style={{backgroundColor: colors[currentColor], height: '80px', paddingTop: "30px", paddingLeft: "10px"}}>
      <p>Background Color is {colors[currentColor]}</p>
      <button onClick={getNextColor}>Change Color</button>
    </div>
  );
};
/* 
// using math random method to randomly generate colors
const ChangeBackgroundColor = () => {
  const colors = [
    "lightblue",
    "lightgreen",
    "lightpink",
    "lightyellow",
    "lightgrey",
  ];

  const [currentColor, setNextColor] = useState(0);

  const getNextColor = () => {
    const nextColor = Math.floor(Math.random() * colors.length)
    console.log(nextColor)
    setNextColor(nextColor)
  }

  return (
    <div style={{backgroundColor : colors[currentColor], paddingTop: '100px'}}>
      <p>Background Color is {colors[currentColor]}</p>
    <button onClick={getNextColor}>Click me</button>
    </div>
  )
} */

const ToggleLoading = () => {
  const [currentState, setCurrentState] = useState(false);
  return (
    <div>
      <p>{currentState ? "Loading...." : "Content has loaded."}</p>
    <button onClick={()=> setCurrentState(!currentState)}>Toggle Loading</button>
    </div>
  )
}

const ItemSelector = () => {
  const items = ['Item 1', "Item 2", "Item 3"];
const [currentItem, setCurrentItem] = useState('');

const itemList = items.map((item, index) => (<p key={index} onClick={()=> setCurrentItem(item)} style={{color: currentItem === item ? "blue" : "black"}}>{item}</p>))
  
  return (
    <div>
      {itemList}
      <p>Selected Item: {currentItem}</p>
    </div>
  )
}
export default function App() {
  return (
    <main>
      <DisplayImages />
      <hr />
      <ListItems />
      <hr />
      <ChangeBackgroundColor/>
      <hr/>
      <ToggleLoading/>
      <hr/>
      <ItemSelector/>
    </main>
  );
}
