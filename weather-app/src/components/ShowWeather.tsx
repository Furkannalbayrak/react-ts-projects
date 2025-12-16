import type { WeatherData } from '../types/Types'

interface WeatherProps {
  weatherProps?: WeatherData
}

function ShowWeather({ weatherProps }: WeatherProps) {
  if(!weatherProps) return null;

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-6 rounded-2xl shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-4">{weatherProps.name}, {weatherProps.sys.country}</h2>

        <div className="flex flex-col items-center gap-2 mb-4">
          <p className="text-5xl font-semibold">{Math.round(weatherProps.main.temp)}°C</p>
          <p className="capitalize text-lg">{weatherProps.weather[0].description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-md">
          <div className="flex flex-col items-center bg-white/20 p-2 rounded-lg">
            <span className="font-medium">Hissedilen</span>
            <span>{Math.round(weatherProps.main.feels_like)}°C</span>
          </div>
          <div className="flex flex-col items-center bg-white/20 p-2 rounded-lg">
            <span className="font-medium">Nem</span>
            <span>{weatherProps.main.humidity}%</span>
          </div>
          <div className="flex flex-col items-center bg-white/20 p-2 rounded-lg">
            <span className="font-medium">Rüzgar</span>
            <span>{weatherProps.wind.speed} m/s</span>
          </div>
          <div className="flex flex-col items-center bg-white/20 p-2 rounded-lg">
            <span className="font-medium">Bulut Oranı</span>
            <span className="capitalize">{weatherProps.clouds.all}%</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShowWeather