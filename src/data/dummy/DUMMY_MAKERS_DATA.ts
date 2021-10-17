import { ITrack } from './DUMMY_TRACK_DATA'
import { Mood } from './DUMMY_TRACK_DATA'

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

export const DUMMY_MAKER_DATA: Maker[] = [
  {
    id: 1,
    makerName: 'Kely Bear',
    makerImg: '',
    bestTrackInfo: [
      {
        id: 1,
        trackimg: '',
        name: 'Stay',
        genre: 'POP',
        imgSrc: 'beat1',
        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
      {
        id: 2,
        trackimg: '',
        name: 'Levitating',
        genre: 'POP',
        imgSrc: 'beat2',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
    ],
    isFollowed: true,
    totalBeats: 1053,
    totalFollower: '4.3K',
    moodInfo: [
      {
        id: 1,
        moodname: 'Happy',
      },
      {
        id: 2,
        moodname: 'Sexy',
      },
      {
        id: 3,
        moodname: 'Cozy',
      },
    ],
  },
  {
    id: 2,
    makerName: 'Kely Bear',
    makerImg: '',
    bestTrackInfo: [
      {
        id: 1,
        trackimg: '',
        name: 'Stay',
        genre: 'POP',
        imgSrc: 'beat1',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
      {
        id: 2,
        trackimg: '',
        name: 'Levitating',
        genre: 'POP',
        imgSrc: 'beat2',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
    ],
    isFollowed: false,
    totalBeats: 1053,
    totalFollower: '4.3K',
    moodInfo: [
      {
        id: 1,
        moodname: 'Happy',
      },
      {
        id: 2,
        moodname: 'Sexy',
      },
      {
        id: 3,
        moodname: 'Cozy',
      },
    ],
  },
  {
    id: 3,
    makerName: 'Kely Bear',
    makerImg: '',
    bestTrackInfo: [
      {
        id: 1,
        trackimg: '',
        name: 'Stay',
        genre: 'POP',
        imgSrc: 'beat1',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
      {
        id: 2,
        trackimg: '',
        name: 'Levitating',
        genre: 'POP',
        imgSrc: 'beat2',
        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
    ],
    isFollowed: true,
    totalBeats: 1053,
    totalFollower: '4.3K',
    moodInfo: [
      {
        id: 1,
        moodname: 'Happy',
      },
      {
        id: 2,
        moodname: 'Sexy',
      },
      {
        id: 3,
        moodname: 'Cozy',
      },
    ],
  },
  {
    id: 4,
    makerName: 'Kely Bear',
    makerImg: '',
    bestTrackInfo: [
      {
        id: 1,
        trackimg: '',
        name: 'Stay',
        genre: 'POP',
        imgSrc: 'beat1',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
      {
        id: 2,
        trackimg: '',
        name: 'Levitating',
        genre: 'POP',
        imgSrc: 'beat2',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
    ],
    isFollowed: true,
    totalBeats: 1053,
    totalFollower: '4.3K',
    moodInfo: [
      {
        id: 1,
        moodname: 'Happy',
      },
      {
        id: 2,
        moodname: 'Sexy',
      },
      {
        id: 3,
        moodname: 'Cozy',
      },
    ],
  },
  {
    id: 5,
    makerName: 'Kely Bear',
    makerImg: '',
    bestTrackInfo: [
      {
        id: 1,
        trackimg: '',
        name: 'Stay',
        genre: 'POP',
        imgSrc: 'beat1',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
      {
        id: 2,
        trackimg: '',
        name: 'Levitating',
        genre: 'POP',
        imgSrc: 'beat2',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
    ],
    isFollowed: true,
    totalBeats: 1053,
    totalFollower: '4.3K',
    moodInfo: [
      {
        id: 1,
        moodname: 'Happy',
      },
      {
        id: 2,
        moodname: 'Sexy',
      },
      {
        id: 3,
        moodname: 'Cozy',
      },
    ],
  },
  {
    id: 6,
    makerName: 'Kely Bear',
    makerImg: '',
    bestTrackInfo: [
      {
        id: 1,
        trackimg: '',
        name: 'Stay',
        genre: 'POP',
        imgSrc: 'beat1',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
      {
        id: 2,
        trackimg: '',
        name: 'Levitating',
        genre: 'POP',
        imgSrc: 'beat2',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
    ],
    isFollowed: true,
    totalBeats: 1053,
    totalFollower: '4.3K',
    moodInfo: [
      {
        id: 1,
        moodname: 'Happy',
      },
      {
        id: 2,
        moodname: 'Sexy',
      },
      {
        id: 3,
        moodname: 'Cozy',
      },
    ],
  },
  {
    id: 7,
    makerName: 'Kely Bear',
    makerImg: '',
    bestTrackInfo: [
      {
        id: 1,
        trackimg: '',
        name: 'Stay',
        genre: 'POP',
        imgSrc: 'beat1',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
      {
        id: 2,
        trackimg: '',
        name: 'Levitating',
        genre: 'POP',
        imgSrc: 'beat2',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
    ],
    isFollowed: true,
    totalBeats: 1053,
    totalFollower: '4.3K',
    moodInfo: [
      {
        id: 1,
        moodname: 'Happy',
      },
      {
        id: 2,
        moodname: 'Sexy',
      },
      {
        id: 3,
        moodname: 'Cozy',
      },
    ],
  },
  {
    id: 8,
    makerName: 'Kely Bear',
    makerImg: '',
    bestTrackInfo: [
      {
        id: 1,
        trackimg: '',
        name: 'Stay',
        genre: 'POP',
        imgSrc: 'beat1',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
      {
        id: 2,
        trackimg: '',
        name: 'Levitating',
        genre: 'POP',
        imgSrc: 'beat2',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
    ],
    isFollowed: true,
    totalBeats: 1053,
    totalFollower: '4.3K',
    moodInfo: [
      {
        id: 1,
        moodname: 'Happy',
      },
      {
        id: 2,
        moodname: 'Sexy',
      },
      {
        id: 3,
        moodname: 'Cozy',
      },
    ],
  },
  {
    id: 9,
    makerName: 'Kely Bear',
    makerImg: '',
    bestTrackInfo: [
      {
        id: 1,
        trackimg: '',
        name: 'Stay',
        genre: 'POP',
        imgSrc: 'beat1',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
      {
        id: 2,
        trackimg: '',
        name: 'Levitating',
        genre: 'POP',
        imgSrc: 'beat2',

        mood: [
          {
            id: 1,
            moodname: 'happy',
          },
          {
            id: 2,
            moodname: 'sexy',
          },
        ],
        isLiked: false,
        price: 40000,
        addPlaylist: false,
      },
    ],
    isFollowed: true,
    totalBeats: 1053,
    totalFollower: '4.3K',
    moodInfo: [
      {
        id: 1,
        moodname: 'Happy',
      },
      {
        id: 2,
        moodname: 'Sexy',
      },
      {
        id: 3,
        moodname: 'Cozy',
      },
    ],
  },
]
