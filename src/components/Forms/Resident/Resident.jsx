import React, { Component } from "react";
import { createResident } from "../../../api/resident";
import Form from "../Form";

const headerText = "Стать резидентом";
const mainText =
  <div>
  <span>{`Резидентом Atom Space может стать каждый мотивированный подросток`}</span> 
   <span className={`bold`}>{ ` от 14 до 19 лет `} </span>
   <span>{`, который хочет связать свое будущее с миром IT, и готов изучать, исследовать, интересоваться, спрашивать, пробовать, экспериментировать, создавать, проверять, ошибаться и начинать сначала.`}</span>
  </div>;
const inputData = [
  {
    id: "name",
    placeholder: "Имя:",
    type: 'text',
  },
  {
    id: "number",
    placeholder: "Телефон: (ex. 380635522111)",
    type: 'number',
    validate: (val) => val.match(/^[0-9]{12}$/),
  },
  {
    id: "email",
    placeholder: "Email:",
    type: 'email',
    validate: (val) => val.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})$/),
  },
  {
    id: "information",
    placeholder: "Почему хочешь стать резидентом?",
    type: 'text',
  }
];
const beButton = `Стать резидентом`;
export class Resident extends Component {
  render() {
    return (
      <section className={"form-container"}>
        <Form
          inputData={inputData}
          {...this.props}
          createOrder={createResident}
          headerText={headerText}
          mainText={mainText}
          beButton={beButton}
        />
      </section>
    );
  }
}