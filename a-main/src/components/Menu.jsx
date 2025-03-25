import { useState } from "react";
import MenuItem from "./MenuItem";
import dataMenu from "../data/dataMenu";

function Menu() {
  const [menuItems] = useState(dataMenu);

  return (
    <>
      <div id="restaurante">
        <h1>Dessert</h1>
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            name={item.name}
            category={item.category}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default Menu;
