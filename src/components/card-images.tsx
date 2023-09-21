export default function CardImages({ data }: any) {
  return (
    <div className="card-image-desktop">
      <div className="bg-front-card">
        <img src="/images/card-logo.svg" alt="card-logo" />
        <p className="card-number">
          {data["card-number"] ? data["card-number"] : "0000 0000 0000 0000"}
        </p>
        <div className="cardholder">
          <p className="card-name">
            {data["cardholder-name"] ? data["cardholder-name"].toUpperCase() : "JANE APPLESSED"}
          </p>
          <p className="card-exp-date">
            {data["exp-date-m"] ? data["exp-date-m"] : "00"}/
            {data["exp-date-y"] ? data["exp-date-y"] : "00"}
          </p>
        </div>
      </div>
      <div className="bg-back-card">
        <p>{data["cvc"] ? data["cvc"] : "000"}</p>
      </div>
    </div>
  );
}
