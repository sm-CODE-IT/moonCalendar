const WeatherItem = ({
  themeMode,
  weather_id,
  weather_descript,
  onClick,
  isSelected,
}) => {
  const weather_img =
    process.env.PUBLIC_URL + `/assets/${themeMode}${weather_descript}.png`;
  console.log("WeatherItem", weather_img);
  return (
    <div
      className={[
        "WeatherItem",
        isSelected ? `WeatherItem_icon_on` : "WeatherItem_icon_off",
      ].join(" ")}
      onClick={() => onClick(weather_id)}
    >
      <img src={weather_img} className="weather_icon" />
    </div>
  );
};

export default WeatherItem;
