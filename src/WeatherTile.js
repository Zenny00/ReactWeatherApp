export default function WeatherTile(props) {
  return (
    <div>
      <div>Icon</div>
      <div>Time: {props.time}</div>
      <div>Temperature: {props.temperature}</div>
    </div>
  );
}

