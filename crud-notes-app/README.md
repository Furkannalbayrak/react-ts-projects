# 📝 CRUD Notes App

Bu proje, notlarınızı kolayca yönetmenizi sağlayan modern bir not alma uygulamasıdır. **React** ve **TypeScript** kullanılarak geliştirilmiş olup, state yönetimi için **Context API** ve **useReducer** hook'u kullanılmıştır. Veriler **LocalStorage** üzerinde saklanarak kalıcılık sağlanır.

## 🚀 Özellikler

- **Not Ekleme**: Başlık ve içerik girerek yeni notlar oluşturabilirsiniz.
- **Not Listeleme**: Eklenen notları renkli kartlar halinde görüntüleyebilirsiniz.
- **Not Düzenleme**: Mevcut notların içeriğini güncelleyebilirsiniz.
- **Not Silme**: İstenmeyen notları kalıcı olarak silebilirsiniz.
- **Not Arama**: Başlık veya içeriğe göre notlar arasında anlık arama yapabilirsiniz.
- **Veri Kalıcılığı**: LocalStorage entegrasyonu sayesinde notlarınız tarayıcı kapansa bile kaybolmaz.
- **Modern Arayüz**: Tailwind CSS ile tasarlanmış şık ve responsive görünüm.

## 📂 Proje Yapısı

- `src/components/Notes.tsx`: Notların listelendiği, eklendiği ve düzenlendiği ana bileşen.
- `src/context/NoteContext.tsx`: Context API ve useReducer ile global state yönetimi.
- `src/types/NodeTypes.ts`: TypeScript tip ve interface tanımlamaları.
- `src/App.tsx`: Uygulamanın ana kapsayıcısı ve Context Provider sarmalayıcısı.
- `src/main.tsx`: Uygulama giriş noktası.

## 💻 Kullanılan Teknolojiler ve Yazılım Dilleri
- React
- Vite
- TypeScript
- Context API & useReducer
- Tailwind CSS
- React Icons
- LocalStorage

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

6. Geliştirme sunucusunu başlatın
     ```bash
     npm run dev
     ```
     
7. Tarayıcıda verilen yerel adresi ziyaret edin (örn. `http://localhost:5173`).

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