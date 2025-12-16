
export interface WeatherData{
    clouds:{
        all: number,
    }
    main:{
        feels_like: number,
        humidity: number,
        temp: number,
    };
    name:string;
    sys:{
        country: string;
    };
    weather:{
        description: string,
        main: string,
    }[];
    wind:{
        speed: number,
    };
}