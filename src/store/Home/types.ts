export interface Maker {
  id: number
  makerName: string
  makerImg?: string
  bestTrackInfo: Track[]
  isFollowed?: boolean
  totalBeats?: number
  totalFollower?: string
  moodInfo: Mood[]
}

export interface Track {
  id: number
  trackimg: string
  name: string
  genre: string
  mood: Mood[]
  imgSrc: string
  isLiked: boolean
  price: number
  addPlaylist: boolean
}

export interface ITrack {
  id: number
  trackimg: string
  name: string
  makerInfo: IMaker
  genre: string
  mood: Mood[]
  isLiked: boolean
  price: number
  addPlaylist: boolean
}

export interface Mood {
  id: number
  moodname: string
}

export interface IMaker {
  id: number
  makerName: string
}
