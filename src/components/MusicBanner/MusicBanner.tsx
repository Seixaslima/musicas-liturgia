import style from "./MusicBanner.module.css"
import MusicPlayer from '../MusicPlayer/MusicPlayer'

interface IMusicBanner {
  src: string,
  title: string
}

export default function MusicBanner({ src, title }: IMusicBanner) {
  return (
    <div className={style.music_banner}>
      <h3 className={style.title}> {title} </h3>
      <MusicPlayer src={src} />
    </div>
  )
}
