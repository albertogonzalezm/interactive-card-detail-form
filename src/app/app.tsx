function CardForm() {
  return (
    <form>
      <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
      <input type="text" name="cardholder-name" placeholder="e.g. Jane Applessed" />
      <label htmlFor="card-numer">CARD NUMBER</label>
      <input type="text" name="card-number" maxLength={16} placeholder="e.g. 1234 5678 9123 0000" />
      <div className="down">
        <div className="exp-date">
          <label htmlFor="exp-date">EXP. DATE (MM/YY)</label>
          <div className="inputs-exp-date">
            <input type="text" name="exp-date" minLength={2} maxLength={2} placeholder="MM" />
            <input type="text" name="exp-date" minLength={2} maxLength={2} placeholder="YY" />
          </div>
        </div>
        <div className="cvc">
          <label htmlFor="cvc">CVC</label>
          <div>
            <input type="text" name="cvc" maxLength={3} minLength={3} placeholder="e.g. 123" />
          </div>
        </div>
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
}

function CardImages() {
  return (
    <div className="card-image-desktop">
      <div className="bg-front-card">
        <img src="/images/card-logo.svg" alt="card-logo" />
        <div className="bg-front-card-inter">
          <p className="card-number">0000 0000 0000 0000</p>
          <div className="cardholder-name">
            <p>JANE APPLESEED</p>
            <p>00/00</p>
          </div>
        </div>
      </div>
      <div className="bg-back-card">
        <p>000</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <CardImages />
      <CardForm />
    </>
  );
}
