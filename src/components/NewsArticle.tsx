import { Calendar, User } from 'lucide-react';

export default function NewsArticle() {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-colors duration-300">
      <div className="relative h-96">
        <img
          src="/images/7a80fe0cdd88af8a7f429a2af9943dcc.png"
          alt="Limbus Game Dungeon"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-orange-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
            BREAKING NEWS
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-orange-500" />
            <span>2025</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-orange-500" />
            <span>Jhon Ege</span>
          </div>
          <span className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-xs font-semibold text-purple-700 dark:text-purple-300">
            PC GAMING
          </span>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Her Bulduğun Uzvun Olabilir: Limbus, Oyuncuyu Parçalayıp Tekrar Birleştiren Dungeon Crawler Türünde Yepyeni Bir Yapım
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 font-medium leading-relaxed">
          <strong className="text-orange-600 dark:text-orange-400">Slogan: Her Uzuv Yeni Bir Yetenek, Her Oda Yeni Bir Kombin!</strong> FPS Aksiyonunun Hızı, Roguelite'ın Derinliği ve Birbirinden Farklı Karakter Buildleri "Limbus"ta.
        </p>

        <div className="my-8">
          <img
            src="/images/image 2 copy.png"
            alt="Limbus Running Skeleton"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <strong>İSTANBUL, TÜRKİYE - 2025</strong>
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Bağımsız oyun stüdyosu Vudi Games, dungeon crawler ve karakter inşa etmeyi kelimenin tanlamıyla ele alan tuhaf ve heyecan verici yeni oyunu <strong className="text-orange-600 dark:text-orange-400">Limbus</strong>'u duyurmaktan gurur duyar. Oyuncular, temel bir gövdeyi kontrol ederek girdikleri procedural zindanlarda düşmanlarla savaşıp, buldukları canavar uzuvları, dungeon eşyaları anlık olarak değiştirerek sürekli gelişen bir savaş gövdesine dönüşüyor.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
            Detaylar: Vücudunuz, Savaş Alanınız
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <strong className="text-orange-600 dark:text-orange-400">Limbus</strong>, tehlikeli ve stilize zindanlarda geçen, first person bir Aksiyon Dungeon Crawler oyunudur. Oyunun temel mekaniği, oyuncuların düşmanlardan veya sandıklardan toplanan çeşitli uzuvları kullanarak karakterlerini anlık olarak değiştirmelerine dayanır.
          </p>

          <ul className="space-y-6 mb-8">
            <li className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-slate-900 dark:text-white">Dinamik Uzuv Sistemi:</strong> Oyunun temel döngüsü bu slogana dayanır: <strong className="text-purple-600 dark:text-purple-400">"Her Uzuv Yeni Bir Yetenek, Her Oda Yeni Bir Kombin!"</strong> Her uzuv (ahtopot kolu, darbeli matkap, ağaç kökü ya da devasa osmanlı topu gibi) benzersiz dövüş yetenekleri, hareket mekanikleri sunar.
            </li>
          </ul>

          <div className="my-8">
            <img
              src="/images/image 1.png"
              alt="Limbus Gameplay UI"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <ul className="space-y-6 mb-8">
            <li className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-slate-900 dark:text-white">Sürekli Değişen Oynanış:</strong> Oyun, çeşitli düşmanları ve harita tasarımların üstesinden gelebilmek için uzuv kombinasyonlarını denemeyi teşvik eden derin bir <strong className="text-purple-600 dark:text-purple-400">Karakter İnşa Sistemi</strong> sunar.
            </li>
            <li className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-slate-900 dark:text-white">Roguelite Etkileri:</strong> Prosedürel olarak oluşturulan haritalar, her oturumda farklı bir deneyim sunar. Ölüm, oyuncuyu başa döndürürken, keşfedilen uzuv tipleri veya meta-ilerleme unsurları oyuncuya kazandırılır.
            </li>
            <li className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-slate-900 dark:text-white">Stilize Görsel Kimlik:</strong> Oyunun sanat yönü, karanlık ama mizahi unsurlarla dengelenmiş, tuhaf bir ortaçağ-fantastik zindan estetiğine sahiptir. Birinci şahış perspektif, oyuncunun kendi tuhaf uzuvlarını görmesini sağlayarak deneyime hem komedi hem de derinlik katar.
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <img
              src="/images/image 2.png"
              alt="Limbus Character Model"
              className="w-full rounded-lg shadow-md"
            />
            <img
              src="/images/e22c1a9791f7dab2627a772265469663.png"
              alt="Limbus Skull Detail"
              className="w-full rounded-lg shadow-md"
            />
            <img
              src="/images/image.png"
              alt="Limbus Dungeon Environment"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div className="bg-purple-100 dark:bg-purple-900/30 border-l-4 border-orange-600 dark:border-orange-500 p-6 my-8 rounded">
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              <strong>Limbus</strong>, PC için <strong>2026'nın İlk yarısında</strong>.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
            Geliştiriciden Açıklama
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Vudi Games Yaratıcı Yönetmeni Jhon Mehmet oyun hakkında şunları söyledi:
          </p>

          <blockquote className="border-l-4 border-orange-600 dark:border-orange-500 pl-6 py-4 my-6 bg-orange-50 dark:bg-orange-900/20 rounded-r italic">
            <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              "Limbus ile oyunculara, anında veya bir sonraki zindana girmeden önce hangi uzuv kombinasyonunun en iyi sonucu vereceğini tahmin etme ve deneme özgürlüğü sunmak bizi gerçekten heyecanlandıran bir fikirdi. Limbus; hızlı aksiyonu seven, reflekslerine güvenen ve her oturumda benzersiz bir 'build' keşfetmekten hoşlanan oyunculara hitap ediyor."
            </p>
          </blockquote>

          <div className="my-8">
            <img
              src="/images/image 2 copy.png"
              alt="Limbus Skull Character"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
            Ek Bilgiler
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Oyuncular, <strong className="text-orange-600 dark:text-orange-400">Limbus</strong>'u hemen istek listesine ekleyebilir ve yayınlandığı zaman haberdar olabilirler:
          </p>

          <a
            href="https://store.steampowered.com//Limbus/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-600 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:from-orange-700 hover:to-purple-700 transition-all mb-8"
          >
            Steam'de İstek Listesine Ekle
          </a>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-12">
            Vudi Games Hakkında
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Vudi Games, 2024 yılında BEYKOZ ÜNİVERSİTESİNDE kurulmuş bağımsız bir oyun stüdyosudur. Stüdyo, yenilikçimsi oyun mekanikleri ve benzersizimsi sanatsal vizyonlarla oyuncu deneyimini yeniden şekillendirmeyeşimsi odaklanmışımsıdır.
          </p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Kurucu Önderler:
          </h3>

          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>Ege Mert</li>
            <li>Yaprak İnkaya</li>
            <li>Barış Gülsaray</li>
            <li>Mehmet A. Atik</li>
          </ul>

          <div className="bg-gradient-to-br from-slate-900 to-purple-900 text-white p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold mb-3">İletişim:</h3>
            <p className="mb-2"><strong>Unvan:</strong> Jhon Ege</p>
            <p className="mb-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:egemert669@gmail.com" className="text-orange-400 hover:text-orange-300 transition-colors">
                egemert669@gmail.com
              </a>
            </p>
            <p>
              <strong>Website:</strong>{' '}
              <a href="http://www.ege.com" className="text-orange-400 hover:text-orange-300 transition-colors">
                www.ege.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
