export type MusicNote =
  | "C"
  | "C#"
  | "Db"
  | "D"
  | "D#"
  | "Eb"
  | "E"
  | "F"
  | "F#"
  | "Gb"
  | "G"
  | "G#"
  | "Ab"
  | "A"
  | "A#"
  | "Bb"
  | "B"
export type MusicPreparedNote = {
  note: MusicNote
  duration: string
  accidental?: MusicAccidental
  octave: number
}
export type MusicPosition = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
export type MusicAccidental = "b" | "#"
export type MusicClef = "bass" | "treble" | "alto" | "tenor"
