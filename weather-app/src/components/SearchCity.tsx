import React, { useState } from 'react'
import ShowWeather from './ShowWeather'
import axios from 'axios'
import type { WeatherData } from '../types/Types';

function SearchCity() {

    const [cityName, setCityName] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<WeatherData | undefined>(undefined);
    const myKey: string = import.meta.env.VITE_OPENWEATHERMAP_API;

    const getBgColor = (data?: WeatherData): string => {
        if (!data) return "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1920&auto=format&fit=crop";

        const main = data.weather[0].main.toLowerCase();

        if (main.includes("clear")) return "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1920&auto=format&fit=crop";
        if (main.includes("cloud")) return "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1920&auto=format&fit=crop";
        if (main.includes("rain")) return "https://e1.pxfuel.com/desktop-wallpaper/913/24/desktop-wallpaper-rain-weather-raining-background.jpg";
        if (main.includes("snow")) return "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=1920&auto=format&fit=crop";
        return "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?q=80&w=1920&auto=format&fit=crop";
    }

    const handleCityName = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (cityName.trim().length === 0) {
            setError("Lütfen bir şehir adı giriniz");
            setData(undefined);
            return;
        }
        setError(null);

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=tr&appid=${myKey}`)
            setData(response.data);

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
            else {
                setError("Bir hata oluştu");
            }
        }
    }

    return (
        <div className='min-h-screen bg-cover bg-center transition-all duration-500 w-screen' style={{ backgroundImage: `url(${getBgColor(data)})` }}>
            <div className=' mt-10 px-10 font-poppins'>
                <div className='flex flex-col gap-10'>
                    <div>
                        <h1 className='md:text-5xl text-4xl text-center text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]'>Hava Durumu</h1>
                    </div>

                    <div>
                        <form onSubmit={handleCityName} className='flex flex-col items-center gap-5 sm:px-10'>
                            <input
                                placeholder='Şehir adı giriniz'
                                className='border border-gray-400 shadow-md px-5 py-2 rounded-lg focus:outline-none
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-150 w-full max-w-xl'
                                type="text"
                                value={cityName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCityName(e.target.value)}
                            />

                            <button
                                className='bg-red-400 text-white p-2 sm:p-3 hover:bg-red-500 transition duration-150 w-32 rounded-full text-lg'
                                type='submit'
                            >
                                Araştır
                            </button>
                        </form>
                    </div>
                </div>

                <div className='relative w-full mt-5'>
                    {
                        error && <p className='absolute flex inset-0 items-center justify-center text-white text-base sm:text-xl italic drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]'>{error}</p>
                    }
                </div>


                <div>
                    <ShowWeather weatherProps={data} />
                </div>
            </div>
        </div>
    )
}

export default SearchCity