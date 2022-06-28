import React, { useState } from "react";
import { Item } from "components/itemComp";
import { useGetItem, useMyDate } from "hooks/hooks";
import css from "./itemPage.css";
function GetItem() {
  ///////ESTO ERA DE PRUEBA PARA PODER MANIPULAR BIEN LOS OBJETOS DE DATA ASI LOS UILIZO EN EL DESAFIO Y PRACTICO LOS HOOKS ATOMS CUSTOM HOOKS :DDDDD
  const [objectData, setObjectData] = useState({});
  const item = useGetItem();
  ///////ESTO ERA DE PRUEBA PARA PODER MANIPULAR BIEN LOS OBJETOS DE DATA ASI LOS UILIZO EN EL DESAFIO Y PRACTICO LOS HOOKS ATOMS CUSTOM HOOKS :DDDDD
  const data = useMyDate(objectData);
  const saveData = (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const cellphone = e.target.cellphone.value;
    setObjectData({ nombre, cellphone });
  };

  return item ? (
    <div className={css.containerGetPage}>
      <Item
        title={item.title}
        price={item.price}
        pictures={item.pictures}
      ></Item>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={saveData}
      >
        <input type="text" name="nombre" placeholder="nombre" />
        <input type="text" name="cellphone" placeholder="cellphone" />
        <button>enviar</button>
        {/* ///////ESTO ERA DE PRUEBA PARA PODER MANIPULAR BIEN LOS OBJETOS DE DATA ASI LOS UILIZO EN EL DESAFIO Y PRACTICO LOS HOOKS ATOMS CUSTOM HOOKS :DDDDD  */}
        <h3>{data["nombre"]}</h3>
        <h1>{data["cellphone"]}</h1>
      </form>
    </div>
  ) : null;
}
export { GetItem };
