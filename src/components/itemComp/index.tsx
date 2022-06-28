import React from "react";
import Carousel from "nuka-carousel";
import css from "./itemComp.css";
type PropsItem = {
  pictures: [any];
  title: string;
  price: string;
};
function Item(props: PropsItem) {
  return (
    <div>
      <Carousel>
        {props.pictures.map((pic) => (
          <div className={css.containerImg}>
            <img src={pic.secure_url} alt="" />
          </div>
        ))}
      </Carousel>
      <div>
        <h3>{props.title}</h3>
        <h3>{"$" + props.price}</h3>
      </div>
    </div>
  );
}
export { Item };
