# 🌤️ Weather App

Bu proje, anlık hava durumu bilgilerini sorgulamanızı sağlayan modern bir web uygulamasıdır. **React** ve **TypeScript** kullanılarak geliştirilmiş olup, **OpenWeatherMap API** üzerinden veri çekmektedir. Arka plan görselleri, hava durumuna göre dinamik olarak değişerek kullanıcıya görsel bir deneyim sunar.

## 🚀 Özellikler

- **Şehir Arama**: Kullanıcıların istediği şehrin hava durumunu sorgulayabilmesi.
- **Anlık Hava Durumu**: Sıcaklık, hissedilen sıcaklık, nem, rüzgar hızı ve bulut oranı gibi detaylı veriler.
- **Dinamik Arka Plan**: Hava durumuna (açık, bulutlu, yağmurlu, karlı vb.) göre otomatik değişen arka plan görselleri.
- **Hata Yönetimi**: Geçersiz şehir isimleri veya API hataları için kullanıcı bilgilendirmesi.
- **Modern Arayüz**: Tailwind CSS ile tasarlanmış şık ve responsive kart yapısı.
- **Tip Güvenliği**: TypeScript ile geliştirilerek daha güvenli ve sürdürülebilir kod yapısı.

## 📂 Proje Yapısı

- `src/components/SearchCity.tsx`: Şehir arama inputu ve arka plan yönetimini sağlayan ana bileşen.
- `src/components/ShowWeather.tsx`: API'den gelen hava durumu verilerini görselleştiren kart bileşeni.
- `src/types/Types.tsx`: API yanıtları ve props'lar için TypeScript tip tanımlamaları.
- `src/App.tsx`: Uygulamanın ana kapsayıcısı.
- `src/main.tsx`: Uygulama giriş noktası.

## 💻 Kullanılan Teknolojiler ve Yazılım Dilleri
- React
- Vite
- TypeScript
- Axios (HTTP İstekleri için)
- Tailwind CSS
- OpenWeatherMap API

## 🛠 Kurulum ve Kullanım

Projeyi yerelde çalıştırmak için:

1. Node.js bilgisayarınızda kurulu olmalı: https://nodejs.org (LTS sürümü önerilir)
2. Bu projeyi bilgisayarınıza indirin/klonlayın
3. Proje klasörüne girin
4. Terminal/Powershell’i bu klasörde açın
5. Bağımlılıkları yükleyin
     ```bash
     npm install
     ```

6. **Önemli:** Projenin ana dizininde `.env` adında bir dosya oluşturun ve OpenWeatherMap API anahtarınızı içine şu şekilde ekleyin:
     ```env
     VITE_OPENWEATHERMAP_API=sizin_api_anahtariniz
     ```

7. Geliştirme sunucusunu başlatın
     ```bash
     npm run dev
     ```
     
8. Tarayıcıda verilen yerel adresi ziyaret edin (örn. `http://localhost:5173`).

### Build Alma
1. Üretim için optimize build almak:
     ```bash
     npm run build
     ```
2. Ardından önizleme için:
     ```bash
     npm run preview
     ```

## 📜 License
Bu proje **MIT lisansı** altında sunulmaktadır. Daha fazla bilgi için LICENSE dosyasına göz atabilirsiniz.