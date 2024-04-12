import style from "./MusicPlayer.module.css"

interface IMusicPlayer {
  src: string
}

export default function MusicPlayer({ src }: IMusicPlayer) {
  return (
    <audio controls className={style.player}>
      <source src={src.replace('.mp3', ".ogg")} type="audio/ogg" />
      <source src={src} type="audio/mpeg" />
    </audio>
  )
}
