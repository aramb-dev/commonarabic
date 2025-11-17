import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const stickers = [
    {
      id: 'as-salaamu-alaykum-wa-rahmatullahi-wa-barakaatuhu',
      arabic: 'السَّلَامُ عَلَيْكُم ورحمة الله وبركاته',
      english: 'As salaamu alaykum wa rahmatullahi wa barakaatuhu',
      imagePath: '/stickers/as salaamu alaykum wa rahmatullahi wa barakaatuhu/السلام عليكم و رحمة الله و بركاته - As salaamu alaykum wa rahmatullahi wa barakaatuhu /As salaamu alaykum wa rahmatullahi wa barakaatuhu - السلام عليكم و رحمة الله و بركاته.png',
      alt: 'As salaamu alaykum wa rahmatullahi wa barakaatuhu - May the peace, mercy, and blessings of Allah be with you',
      title: 'May the peace, mercy, and blessings of Allah be with you in Arabic'
    },
    {
      id: 'wa-alaykum-as-salaam-wa-rahmatullahi-wa-barakaatuhu',
      arabic: 'وعليكم السلام ورحمة الله وبركاته',
      english: 'Wa alaykum as salaam wa rahmatullahi wa barakaatuhu',
      imagePath: '/stickers/wa alaykum as salaam wa rahmatullahi wa barakaatuhu/wa alaykum as salaam wa rahmatullahi wa barakaatuhu - وعليكم السلام و رحمة الله و بركاته /wa alaykum as salaam wa rahmatullahi wa barakaatuhu - وعليكم السلام و رحمة الله و بركاته .png',
      alt: 'Wa alaykum as salaam wa rahmatullahi wa barakaatuhu - May the peace, mercy, and blessings of Allah be with you',
      title: 'May the peace, mercy, and blessings of Allah be with you in Arabic'
    },
    {
      id: 'jayyid',
      arabic: 'جيد',
      english: 'Jayyid',
      imagePath: '/stickers/jayyid/جيد - Jayyid/Jayyid - جيد.png',
      alt: 'Jayyid - Good',
      title: 'Good in Arabic'
    },
    {
      id: 'tayyib',
      arabic: 'طيب',
      english: 'Tayyib',
      imagePath: '/stickers/tayyib/طيب - Tayyib/طيب - Tayyib.png',
      alt: 'Tayyib - Okay',
      title: 'Okay in Arabic'
    },
    {
      id: 'inshaaAllah',
      arabic: 'إن شاء الله',
      english: 'inshaaAllah',
      imagePath: '/stickers/inshaaAllah/إن شاء الله - inshaaAllah /inshaaAllah - إن شاء الله.png',
      alt: 'inshaaAllah - if Allah wills',
      title: 'inshaaAllah in Arabic'
    },
    {
      id: 'jazakallahu-khairan',
      arabic: 'جزاك الله خيرا',
      english: 'Jazakallahu Khairan',
      imagePath: '/stickers/jazakallahu khairan/جزاك الله خيرا - Jazakallahu Khairan /جزاك الله خيرا - Jazakallahu Khairan .png',
      alt: 'Jazakallahu Khairan - May Allah reward you with good',
      title: 'Jazakallahu Khairan in Arabic'
    },
    {
      id: 'waiyyaaka',
      arabic: 'وإيَّّاكَ',
      english: 'Waiyyaaka',
      imagePath: '/stickers/waiyyaaka/waiyyaaka - وإياك/waiyyaaka - وإياك.png',
      alt: 'Waiyyaaka - And you too',
      title: 'Waiyyaaka in Arabic'
    }
  ]

  return (
    <>
      <header>
        <h1 className="headertxt">
          Commonly Used Arabic Phrases by{' '}
          <a href="https://aramb.aramservices.com">Abdur-Rahman Bilal</a>
        </h1>
      </header>
      <main>
        <div className="whereuse">
          <h2>Where can I use them?</h2>
          <hr />
          <p>
            You can use them anywhere! All you need to do is upload a .png file to wherever you want them.
            <br /><br />
            They are published officially on{' '}
            <a href="https://bit.ly/commonarabictelegram">Telegram</a> and some third-party{' '}
            <a href="https://www.whatsapp.com/">WhatsApp</a> sticker apps.
            <br /><br />
          </p>
          <ol>
            <li>
              <a href="https://t.me">Telegram</a> Sticker ={' '}
              <a href="https://bit.ly/commonarabictelegram">click here</a>
            </li>
            <li>
              <a href="https://getstickerpack.com/">Sticker Maker Studio</a> Sticker ={' '}
              <a href="https://bit.ly/commonarabicstkmakerstudio">click here</a>
            </li>
            <li>
              <a href="https://bit.ly/commonarabicstkmaker">Sticker Maker</a> Sticker = code: NV4XK1
            </li>
          </ol>
          <br /><br />
          This sticker pack is still being updated often.
        </div>

        <div id="downloads">
          <h3>Downloads</h3>
          <p>
            <ul>
              {stickers.map((sticker, index) => (
                <Link href={`/sticker/${sticker.id}`} key={sticker.id}>
                  <li>
                    {index > 0 && <><br /><br /></>}
                    {sticker.arabic} - {sticker.english}
                    <br />
                    <img
                      src={sticker.imagePath}
                      alt={sticker.alt}
                      title={sticker.title}
                    />
                    <br />
                    {index === 0 && <br />}
                    Downloads
                  </li>
                </Link>
              ))}
            </ul>
          </p>
        </div>
      </main>
      <br /><br /><br /><br />
    </>
  )
}
