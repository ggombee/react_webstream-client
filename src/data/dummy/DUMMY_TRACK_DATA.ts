export interface ITrack { 
  id: number, 
  trackimg: string, 
  name: string, 
  makerInfo : Maker,
  genre: string, 
  mood: Mood[],
  isLiked: boolean,
  price:  number, 
  addPlaylist: boolean,
}

export interface Mood  {
  id : number,
  moodname : string
}

export interface Maker  {
  id : number,
  makername : string
}

export const DUMMY_TRACK_DATA: ITrack[] = [
  { 
    id: 1, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 1,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 2, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 2,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 3, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 3,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 4, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 4,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 5, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 5,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 6, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 6,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 7, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 7,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 8, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 8,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 9, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 9,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 10, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 10,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 11, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 11,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 12, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 12,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 13, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 13,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 14, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 14,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 15, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 15,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 16, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 16,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 17, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 17,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 18, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 18,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 19, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 19,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
  { 
    id: 20, 
    trackimg: '', 
    name: 'No More', 
    genre: 'POP',
    makerInfo:{
      id : 20,
      makername : 'kely',
    },
    mood: [
      {
        id : 1,
        moodname : 'happy'
      },
      {
        id : 2,
        moodname : 'sexy'
      }
    ],
    isLiked: false,
    price: 40000,
    addPlaylist: false,
  },
]
  