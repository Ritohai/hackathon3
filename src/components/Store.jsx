import React, { useState } from "react";

function Store(props) {
  const { handleOnClickStore, items, setItems } = props;
  const hanleDelete = false;
  return (
    <div>
      <h2 style={{ color: "white+" }}>Gio hang</h2>
      <table className="table" border="1">
        <thead>
          <td>San pham</td>
          <td>
            <p>Tổng số lượng:</p>
          </td>
          <td>Gia:</td>
          <td>Xóa</td>
        </thead>
        <tbody className="store">
          <td>
            <img src="https://purepng.com/public/uploads/large/apple-watch-pcq.png" />
          </td>
          <td className="store-tbody">
            <button>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <p>12</p>
            <button>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </td>
          <td>10</td>
          <td>
            <button>Xóa</button>
          </td>
        </tbody>
        <tbody className="store">
          <td>
            <img src="https://purepng.com/public/uploads/large/apple-watch-pcq.png" />
          </td>
          <td className="store-tbody">
            <button>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <p>12</p>
            <button>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </td>
          <td>10</td>
          <td>
            <button onClick={hanleDelete}>Xóa</button>
          </td>
        </tbody>
        ;
      </table>
    </div>
  );
}

export default Store;
