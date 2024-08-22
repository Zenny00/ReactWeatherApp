export default function Query({ before, normalText, after, query, setQuery }) {
  const handleClick = () => {
    setQuery(`${before}${normalText}${after}`);
  };

  return (
    <tr onClick={handleClick}>
      <td
        style={{
          maxWidth: "300px",
          height: "auto",
          wordWrap: "break-word",
          textAlign: "start",
          cursor: "pointer"
        }}
      >
        <span style={{ fontWeight: "bold" }}>{before}</span>
        {normalText}
        <span style={{ fontWeight: "bold" }}>{after}</span>
      </td>
    </tr>
  );
}
