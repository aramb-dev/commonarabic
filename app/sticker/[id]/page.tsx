import { getStickerById, getAllStickerIds } from '@/lib/stickers'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = {
  params: { id: string }
}

export async function generateStaticParams() {
  const ids = getAllStickerIds()
  return ids.map((id) => ({
    id: id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sticker = getStickerById(params.id)

  if (!sticker) {
    return {
      title: 'Sticker Not Found',
    }
  }

  const imageUrl = `/stickers/${sticker.dirName}/${sticker.nestedDirName}/${sticker.baseFileName}.png`

  return {
    title: 'Commonly Used Arabic Phrases | Abdur-Rahman Bilal',
    description: `${sticker.arabic} - ${sticker.english} Sticker`,
    openGraph: {
      title: 'Commonly Used Arabic Phrases | Abdur-Rahman Bilal',
      description: `${sticker.arabic} - ${sticker.english} Sticker`,
      images: [imageUrl],
      type: 'website',
      url: `https://commonarabic.aramservices.com/sticker/${params.id}/`,
    },
  }
}

export default function StickerPage({ params }: Props) {
  const sticker = getStickerById(params.id)

  if (!sticker) {
    notFound()
  }

  const getFileUrl = (format: string) => {
    return `/stickers/${sticker.dirName}/${sticker.nestedDirName}/${sticker.baseFileName}.${format}`
  }

  return (
    <ul>
      <a href={getFileUrl('png')}>
        <li>Download .png</li>
      </a>
      <br /><br />
      <a href={getFileUrl('webp')}>
        <li>Download .webp</li>
      </a>
      <br /><br />
      <a href={getFileUrl('psd')}>
        <li>Download .psd</li>
      </a>
      <br /><br />
      <a href={getFileUrl('xcf')}>
        <li>Download .xcf</li>
      </a>
      <br /><br />
      <hr />
      <a href="https://bit.ly/commonarabic-rdff">
        <li>
          If you want a different file format not listed here, click this link to open an <br /> issue on GitHub, and I will supply you
          <br />
          with the file format as soon as possible, inshaaAllah.
        </li>
      </a>
    </ul>
  )
}
