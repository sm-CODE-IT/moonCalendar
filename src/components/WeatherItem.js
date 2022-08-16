const WeatherItem = ({
  weather_id,
  weather_img,
  weather_descript,
  onClick,
  isSelected,
}) => {
  return (
    <div
      className={[
        'WeatherItem',
        isSelected ? `WeatherItem_icon_on` : 'WeatherItem_icon_off',
      ].join(' ')}
      onClick={() => onClick(weather_id)}
    >
      <img src={weather_img} className="weather_icon" />
    </div>
  )
}

export default WeatherItem
