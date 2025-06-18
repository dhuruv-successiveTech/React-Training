export const Weather = ({ temperature }) => {
  return (
    temperature!=="" ? (
        temperature > 25 ? (
    <div
      style={{
        display: "flex",
        color: "DarkOrange",
        flexDirection: "column",
        gap: "10px",
        margin: "1rem",
      }}
    >
      <p>The Temperature is {temperature}</p>
      <p>It's sunny today!</p>
    </div>
  ) : temperature < 10 ? (
    <div
      style={{
        display: "flex",
        color: "blue",
        flexDirection: "column",
        gap: "10px",
        margin: "1rem",
      }}
    >
      <p>The Temperature is {temperature}</p>
      <p>It's cold today!</p>
    </div>
  ): (
    <div
      style={{
        display: "flex",
        color: "green",
        flexDirection: "column",
        gap: "10px",
        margin: "1rem",
      }}
    >
      <p>The Temperature is {temperature}</p>
      <p>It's pleasent weather today!</p>
    </div>
  )
    ):(
        <div
      style={{
        display: "flex",
        color: "red",
        flexDirection: "column",
        gap: "10px",
        margin: "1rem",
      }}
    >
      <p>Please select temperature</p>
    </div>
    )

)
};
