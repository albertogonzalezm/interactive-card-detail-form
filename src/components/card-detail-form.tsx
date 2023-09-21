"use client";
import { useState } from "react";
import CardImages from "@/components/card-images";
import CompleteState from "./complete-state";

export default function CardForm() {
  const [values, setValues] = useState({
    "cardholder-name": "",
    "card-number": "",
    "exp-date-m": "",
    "exp-date-y": "",
    cvc: "",
  });
  const [emptyFields, setEmptyFields] = useState({
    "cardholder-name": false,
    "card-number": false,
    "exp-date-m": false,
    "exp-date-y": false,
    cvc: false,
  });
  const [completeState, setCompleteState] = useState(false);

  function handleChange(event: any) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setEmptyFields({ ...emptyFields, [name]: !value });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    let obj = {};
    for (const key in values) {
      if (!values[key]) {
        obj[key] = !values[key];
      }
    }

    if (Object.keys(obj).length) {
      setEmptyFields({ ...emptyFields, ...obj });
      return;
    }
    setCompleteState(true);
    return;
  }

  if (values["card-number"] && values["card-number"].length <= 16) {
    let x = values["card-number"].match(/.{1,4}/g);
    if (x) {
      values["card-number"] = x.join(" ");
    }
  }

  return (
    <>
      <CompleteState state={!completeState} />
      <div className="formdiv" hidden={completeState}>
        <form>
          <div id="cardholder-name">
            <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
            <input
              type="text"
              name="cardholder-name"
              placeholder="e.g. Jane Applessed"
              minLength={2}
              maxLength={32}
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
            <div className="exp-date">
              <label htmlFor="exp-date-m exp-date-y">EXP. DATE (MM/YY)</label>
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
                hidden={!emptyFields["exp-date-y"] && !emptyFields["exp-date-m"]}
                style={{
                  color: "hsl(0, 100%, 66%)",
                }}
              >
                {"Can't be blank"}
              </p>
            </div>
            <div className="cvc">
              <label htmlFor="cvc">CVC</label>
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
          <button type="submit" onClick={handleSubmit}>
            Confirm
          </button>
        </form>
      </div>
      <CardImages data={values} />
    </>
  );
}
