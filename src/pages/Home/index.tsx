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
    </main >
  )
}
