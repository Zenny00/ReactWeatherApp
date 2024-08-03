
export default function ForecastSelector(props) {
  return (
    <div>
      <div>Select Forecast</div>
      <div>
        <button className="button" onClick={() => props.button_function(1)}>
        1 Day
        </button>
        <button className="button" onClick={() => props.button_function(3)}>
        3 Days
        </button>
        <button className="button" onClick={() => props.button_function(7)}>
        7 Days
        </button>
      </div>
    </div>
  );
}
