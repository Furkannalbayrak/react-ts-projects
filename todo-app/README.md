# Todo App

Bu proje, günlük görevlerinizi yönetmenizi sağlayan modern bir yapılacaklar listesi uygulamasıdır. Vite ile oluşturulmuş olup, state yönetimi için **Redux Toolkit** ve şık bir arayüz için **Tailwind CSS** kullanılmıştır. TypeScript ile geliştirilerek tip güvenliği ve kod kalitesi ön planda tutulmuştur.

## 🚀 Özellikler

- **Görev Ekleme**: Kullanıcıların hızlıca yeni yapılacaklar (todo) oluşturmasını sağlar.
- **Görev Listeleme**: Eklenen tüm görevlerin anlık olarak listelenmesi.
- **Görev Düzenleme**: Mevcut görevlerin içeriğinin güncellenebilmesi ve değiştirilmesi.
- **Görev Silme**: Tamamlanan veya artık gerekmeyen görevlerin listeden kaldırılması.
- **Modern Arayüz**: Tailwind CSS ile tasarlanmış, temiz ve kullanıcı dostu görünüm.
- **Responsive Tasarım**: Mobil ve masaüstü cihazlara tam uyumlu esnek yapı.

## 📂 Proje Yapısı

- `src/components/TodoCreate.tsx`: Yeni görev girişi için input alanı ve ekleme butonunu içeren bileşen.
- `src/components/TodoList.tsx`: Eklenen görevlerin listelendiği ana kapsayıcı alan.
- `src/components/Todos.tsx`: Her bir görev kartının tasarımı; düzenleme ve silme işlemlerini yönetir.
- `src/redux/todoSlice.tsx`: Redux Toolkit slice yapısı; state, reducer ve action tanımlamaları.
- `src/redux/store.tsx`: Uygulamanın global state deposunun yapılandırılması.
- `src/types/Types.tsx`: Proje genelinde kullanılan TypeScript tip ve interface tanımları.
- `src/App.tsx`: Uygulamanın ana bileşeni ve yerleşim düzeni.
- `src/main.tsx`: Uygulama giriş noktası.

## 💻 Kullanılan Teknolojiler ve Yazılım Dilleri
- React
- Vite
- TypeScript
- Redux Toolkit (State Yönetimi)
- Tailwind CSS
- React Icons

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