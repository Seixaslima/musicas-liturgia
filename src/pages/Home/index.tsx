import style from './home.module.css'
import MusicBanner from '@/components/MusicBanner/MusicBanner'
import json from "@/data/musicas.json"
import { Metadata } from 'next'
import Script from 'next/script'

const musicas = process.env.teste ? json.musicas_test : json.musicas

export const metadata: Metadata = {

}

export default function Home() {
  return (
    <main className={style.container} >
      {musicas.map(musica => (
        <MusicBanner key={musica.id} src={musica.url} title={musica.title} />
      ))}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1129823157320382"
        crossOrigin='anonymous'></script>
      <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-1129823157320382"
        data-ad-slot="1017959153"></ins>
      <Script>
        {'(adsbygoogle = window.adsbygoogle || []).push({ });'}
      </Script>
    </main >
  )
}
