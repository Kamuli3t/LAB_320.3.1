function Score({ scores }) {
  return (
    <ul>
      {scores.map((score, index) => (
        <li key={index}>
          Date: {score.date}, Score: {score.score}
        </li>
      ))}
    </ul>
  );
}

export default Score;
