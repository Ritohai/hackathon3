import React, { useState } from "react";
import Store from "./Store";

function Card(props) {
  const { item, setItem, updateQuery } = props;
  const [count, setCount] = useState(0);
  const handleDown = (i) => {
    setCount((pre) => {
      const counter = pre > 0 ? pre - 1 : 0;
      updateQuery(counter, i);
      return counter;
    });
  };
  const handleUp = (i) => {
    setCount((pre) => {
      const counter = pre + 1;
      updateQuery(counter, i);
      return counter;
    });
  };

  return (
    <div>
      <div className="card-phone">
        {item.map((e, i) => {
          return (
            <div key={i} className="phone">
              <img src={e.imageUrl} />
              <div className="model-phone">
                <div className="icon-phone">
                  <i className="fa-brands fa-apple"></i>
                </div>
              </div>
              <div className="infor-phone">
                <button>
                  {e.name} <i className="fa-solid fa-caret-down"></i>
                </button>
                <div>
                  <div>{e.heading}</div>
                  <div>{e.des}</div>
                  <div>
                    <p>Price: ${e.price}</p>
                    <div className="total">
                      <button onClick={() => handleDown(i)}>
                        <i className="fa-solid fa-chevron-left"></i>
                      </button>
                      <p>{e.qty}</p>
                      <button onClick={() => handleUp(i)}>
                        <i className="fa-solid fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                  <button>Buy</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Store setItems={setItem} items={item} />
    </div>
  );
}

export default Card;
