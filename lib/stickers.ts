export interface Sticker {
  id: string
  arabic: string
  english: string
  dirName: string
  nestedDirName: string
  baseFileName: string
  formats: string[]
  alt: string
  title: string
}

export const stickers: Sticker[] = [
  {
    id: 'as-salaamu-alaykum-wa-rahmatullahi-wa-barakaatuhu',
    arabic: 'السَّلَامُ عَلَيْكُم ورحمة الله وبركاته',
    english: 'As salaamu alaykum wa rahmatullahi wa barakaatuhu',
    dirName: 'as salaamu alaykum wa rahmatullahi wa barakaatuhu',
    nestedDirName: 'السلام عليكم و رحمة الله و بركاته - As salaamu alaykum wa rahmatullahi wa barakaatuhu ',
    baseFileName: 'As salaamu alaykum wa rahmatullahi wa barakaatuhu - السلام عليكم و رحمة الله و بركاته',
    formats: ['png', 'webp', 'psd', 'xcf'],
    alt: 'As salaamu alaykum wa rahmatullahi wa barakaatuhu - May the peace, mercy, and blessings of Allah be with you',
    title: 'May the peace, mercy, and blessings of Allah be with you in Arabic'
  },
  {
    id: 'wa-alaykum-as-salaam-wa-rahmatullahi-wa-barakaatuhu',
    arabic: 'وعليكم السلام ورحمة الله وبركاته',
    english: 'Wa alaykum as salaam wa rahmatullahi wa barakaatuhu',
    dirName: 'wa alaykum as salaam wa rahmatullahi wa barakaatuhu',
    nestedDirName: 'wa alaykum as salaam wa rahmatullahi wa barakaatuhu - وعليكم السلام و رحمة الله و بركاته ',
    baseFileName: 'wa alaykum as salaam wa rahmatullahi wa barakaatuhu - وعليكم السلام و رحمة الله و بركاته ',
    formats: ['png', 'webp', 'psd', 'xcf'],
    alt: 'Wa alaykum as salaam wa rahmatullahi wa barakaatuhu - May the peace, mercy, and blessings of Allah be with you',
    title: 'May the peace, mercy, and blessings of Allah be with you in Arabic'
  },
  {
    id: 'jayyid',
    arabic: 'جيد',
    english: 'Jayyid',
    dirName: 'jayyid',
    nestedDirName: 'جيد - Jayyid',
    baseFileName: 'Jayyid - جيد',
    formats: ['png', 'webp', 'psd', 'xcf'],
    alt: 'Jayyid - Good',
    title: 'Good in Arabic'
  },
  {
    id: 'tayyib',
    arabic: 'طيب',
    english: 'Tayyib',
    dirName: 'tayyib',
    nestedDirName: 'طيب - Tayyib',
    baseFileName: 'طيب - Tayyib',
    formats: ['png', 'webp', 'psd', 'xcf'],
    alt: 'Tayyib - Okay',
    title: 'Okay in Arabic'
  },
  {
    id: 'inshaaAllah',
    arabic: 'إن شاء الله',
    english: 'inshaaAllah',
    dirName: 'inshaaAllah',
    nestedDirName: 'إن شاء الله - inshaaAllah ',
    baseFileName: 'inshaaAllah - إن شاء الله',
    formats: ['png', 'webp', 'psd', 'xcf'],
    alt: 'inshaaAllah - if Allah wills',
    title: 'inshaaAllah in Arabic'
  },
  {
    id: 'jazakallahu-khairan',
    arabic: 'جزاك الله خيرا',
    english: 'Jazakallahu Khairan',
    dirName: 'jazakallahu khairan',
    nestedDirName: 'جزاك الله خيرا - Jazakallahu Khairan ',
    baseFileName: 'جزاك الله خيرا - Jazakallahu Khairan ',
    formats: ['png', 'webp', 'psd', 'xcf'],
    alt: 'Jazakallahu Khairan - May Allah reward you with good',
    title: 'Jazakallahu Khairan in Arabic'
  },
  {
    id: 'waiyyaaka',
    arabic: 'وإيَّّاكَ',
    english: 'Waiyyaaka',
    dirName: 'waiyyaaka',
    nestedDirName: 'waiyyaaka - وإياك',
    baseFileName: 'waiyyaaka - وإياك',
    formats: ['png', 'webp', 'psd', 'xcf'],
    alt: 'Waiyyaaka - And you too',
    title: 'Waiyyaaka in Arabic'
  }
]

export function getStickerById(id: string): Sticker | undefined {
  return stickers.find(sticker => sticker.id === id)
}

export function getAllStickerIds(): string[] {
  return stickers.map(sticker => sticker.id)
}
