import { fetchZipResults } from './search_bar/search_bar.ts';

export default function ForecastSelector(props) {
  const result = fetchZipResults("21629");
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
      <div>
        {result[0].longitude}
      </div>
    </div>
  );
}
