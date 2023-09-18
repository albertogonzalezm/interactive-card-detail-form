"use client";
import { useState } from "react";

function CardForm() {
  const [values, setValues] = useState({
    "cardholder-name": "JANE APPLESSED",
    "card-number": "",
    "exp-date-m": "00",
    "exp-date-y": "00",
    cvc: "000",
  });
  const [emptyFields, setEmptyFields] = useState({
    "cardholder-name": false,
    "card-number": false,
    "exp-date-m": false,
    "exp-date-y": false,
    cvc: false,
  });

  function handleChange(event): void {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setEmptyFields({ ...emptyFields, [name]: !value });
  }

  if (values["card-number"]) {
    let correct = values["card-number"].split("");
    correct.splice(4, 0, " ");
    correct.splice(9, 0, " ");
    correct.splice(14, 0, " ");
    values["card-number"] = correct.join("");
  }

  return (
    <>
      <form>
        <div id="cardholder-name">
          <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
          <input
            type="text"
            name="cardholder-name"
            placeholder="e.g. Jane Applessed"
            minLength={2}
            onChange={handleChange}
            style={{
              border: emptyFields["cardholder-name"] ? "1px solid hsl(0, 100%, 66%)" : "",
            }}
          />
          <p
            className="leyend"
            hidden={!emptyFields["cardholder-name"]}
            style={{ color: "hsl(0, 100%, 66%)" }}
          >
            {"Can't be blank"}
          </p>
        </div>
        <div id="card-number">
          <label htmlFor="card-numer">CARD NUMBER</label>
          <input
            type="text"
            name="card-number"
            maxLength={16}
            minLength={16}
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={handleChange}
            style={{
              border: emptyFields["card-number"] ? "1px solid hsl(0, 100%, 66%)" : "",
            }}
          />
          <p
            className="leyend"
            hidden={!emptyFields["card-number"]}
            style={{ color: "hsl(0, 100%, 66%)" }}
          >
            {"Can't be blank"}
          </p>
        </div>
        <div className="down">
          <div className="exp-date-m exp-date-y">
            <label htmlFor="exp-date">EXP. DATE (MM/YY)</label>
            <div className="inputs-exp-date">
              <input
                type="text"
                name="exp-date-m"
                minLength={2}
                maxLength={2}
                placeholder="MM"
                onChange={handleChange}
                style={{
                  border: emptyFields["exp-date-m"] ? "1px solid hsl(0, 100%, 66%)" : "",
                }}
              />
              <input
                type="text"
                name="exp-date-y"
                minLength={2}
                maxLength={2}
                placeholder="YY"
                onChange={handleChange}
                style={{
                  border: emptyFields["exp-date-y"] ? "1px solid hsl(0, 100%, 66%)" : "",
                }}
              />
              <p
                className="leyend"
                hidden={!emptyFields["exp-date-y"] || !emptyFields["exp-date-m"]}
                style={{
                  color: "hsl(0, 100%, 66%)",
                }}
              >
                {"Can't be blank"}
              </p>
            </div>
          </div>
          <div className="cvc">
            <label htmlFor="cvc">CVC</label>
            <div>
              <input
                type="text"
                name="cvc"
                maxLength={3}
                minLength={3}
                placeholder="e.g. 123"
                onChange={handleChange}
                style={{
                  border: emptyFields.cvc ? "1px solid hsl(0, 100%, 66%)" : "",
                }}
              />
              <p
                className="leyend"
                hidden={!emptyFields.cvc}
                style={{ color: "hsl(0, 100%, 66%)" }}
              >
                {"Can't be blank"}
              </p>
            </div>
          </div>
        </div>
        <button type="submit">Confirm</button>
      </form>
      <CardImages data={values} />
    </>
  );
}

function CardImages({ data }) {
  return (
    <div className="card-image-desktop">
      <div className="bg-front-card">
        <img src="/images/card-logo.svg" alt="card-logo" />
        <div className="bg-front-card-inter">
          <p className="card-number">
            {data["card-number"] ? data["card-number"] : "0000 0000 0000 0000"}
          </p>
          <div className="cardholder-name">
            <p>
              {data["cardholder-name"] ? data["cardholder-name"].toUpperCase() : "JANE APPLESSED"}
            </p>
            <p>
              {data["exp-date-m"] ? data["exp-date-m"] : "00"}/
              {data["exp-date-y"] ? data["exp-date-y"] : "00"}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-back-card">
        <p>{data["cvc"] ? data["cvc"] : "000"}</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <CardForm />
    </>
  );
}
