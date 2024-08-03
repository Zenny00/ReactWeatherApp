
export default function ForecastSelector(props) {
  return (
    <div>
      <div>Select Forecast</div>
      <div>
        <button className="button" onClick={props.buttonFunction}>
        1 Day
        </button>
        <button className="button" onClick={props.buttonFunction>
        3 Days
        </button>
        <button className="button" onClick={props.buttonFunction>
        7 Days
        </button>
      </div>
    </div>
  );
}
