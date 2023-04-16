import {PanGestureHandler} from 'react-native-gesture-handler';
import assets from './assets';

import {movieFound} from '../services/redux/MovieDescription/action';
// const dispatch = useDispatch();
// dispatch(movieFound(newAssets.bookingdata));
const newAssets = {
  review: [],
  buzzdata: [
    {
      key: 1,
      img: assets.newmovie,
      data: 'Guide to new upcoming movie trailers in 2023',
      time: 4,
    },
    {
      key: 2,
      img: assets.Comedians,
      data: 'These Comedians are breaking the records',
      time: 8,
    },
    {
      key: 3,
      img: assets.newmovie,
      data: 'Guide to new upcoming movie trailers in 2023',
      time: 18,
    },
    {
      key: 4,
      img: assets.Comedians,
      data: 'These Comedians are breaking the records',
      time: 21,
    },
    {
      key: 5,
      img: assets.newmovie,
      data: 'Guide to new upcoming movie trailers in 2023',
      time: 18,
    },
    {
      key: 6,
      img: assets.Comedians,
      data: 'These Comedians are breaking the records',
      time: 21,
    },
  ],
  actors: [
    {key: 1, img: assets.ProfileLogo, name: 'John'},
    {key: 2, img: assets.ProfileLogo, name: 'Kevin'},
    {key: 3, img: assets.ProfileLogo, name: 'Varun'},
    {key: 4, img: assets.ProfileLogo, name: 'Jack'},
    {key: 5, img: assets.ProfileLogo, name: 'Priya'},
    {key: 6, img: assets.ProfileLogo, name: 'James'},
  ],
  EventData: [
    {
      key: 1,
      votes: '8k',
      stars: '9',
      img: assets.Music1,
      name: 'Arijit Live in Ahmedabad',
      loc: 'Lavish Green Ahmedabad',
      price: '$233',
      type: 'Event',
      act: 'Music Concert',
      time: '12 Dec 2022 at 7:00 PM',
      duration: '5hrs',
      lang: 'Hindi',
      age: '12+ yrs',
      artist: [{key: 1, img: assets.ProfileLogo, name: 'Arijit'}],
    },
    {
      key: 2,
      votes: '8k',
      stars: '9',
      img: assets.Music2,
      name: 'Live NewYear with Darshan Raval',
      loc: 'Venue to be anounced',
      price: '$233',
      type: 'Event',
      act: 'Music Concert',
      time: '31 Dec 2022 at 7:00 PM',
      duration: '6hrs',
      lang: 'Hindi,Gujarati',
      age: '12+ yrs',
      artist: [{key: 1, img: assets.ProfileLogo, name: 'Darshan Raval'}],
    },
    {
      key: 3,
      votes: '8k',
      stars: '9',
      img: assets.Comedy1,
      name: 'Jo Bolta HAi Wahi Hota Hai by Harsh Gujral',
      loc: 'HK HAll:Ahmedabad',
      price: '$233',
      type: 'Event',
      act: 'Comedy Show',
      time: '31 Dec 2022 at 9:00 PM',
      duration: '2hrs',
      lang: 'English,Hindi',
      age: '16+ yrs',
      artist: [{key: 1, img: assets.ProfileLogo, name: 'Harsh Gujral'}],
    },
    {
      key: 4,
      votes: '8k',
      stars: '9',
      img: assets.Comedy2,
      name: 'The Rahul Dua Show',
      loc: 'HK HAll:Ahmedabad',
      price: '$233',
      type: 'Event',
      act: 'Comedy Show',
      time: '14 Nov 2022 at 7:00 PM',
      duration: '1hr',
      lang: 'Hindi',
      age: '18+ yrs',
      artist: [{key: 1, img: assets.ProfileLogo, name: 'Rahul Dua'}],
    },
  ],
  bookingdata: [
    {
      name: 'Black Panther',
      shows: ['2d1bl', '2d2bl'],
    },

    {
      name: 'Avtaar',
      shows: ['2d1av', '2d2av'],
    },
    {
      name: 'Bhediya',
      shows: ['2d1bh', '2d2bh'],
    },
  ],
  showsdata: [
    {
      showName: '2d1bl',
      showTime: '10:00 AM',
      seats: [1, 2, 3, 4, 5],
      cinema: 'Cinepolis:Nexus Ahmedabad One',
      name: 'Black Panther',
    },
    {
      showName: '2d2bl',
      showTime: '10:30 AM',
      seats: [1, 2, 3, 4, 5, 6],
      cinema: 'Cinepolis:Nexus Ahmedabad One',
      name: 'Black Panther',
    },
    {
      showName: '2d1av',
      showTime: '10:00 AM',
      seats: [1, 2, 3, 4, 5],
      cinema: 'Cinepolis:Nexus Ahmedabad One',
      name: 'Avtaar',
    },
    {
      showName: '2d2av',
      showTime: '10:30 AM',
      seats: [1, 4, 5],
      cinema: 'Cinepolis:Nexus Ahmedabad One',
      name: 'Avtaar',
    },
    {
      showName: '2d1bh',
      showTime: '12:00 AM',
      seats: [1, 2, 3, 4, 5],
      cinema: 'Cinepolis:Nexus Ahmedabad One',
      name: 'Bhediya',
    },
    {
      showName: '2d2bh',
      showTime: '2:00 PM',
      seats: [1],
      cinema: 'Cinepolis:Nexus Ahmedabad One',
      name: 'Bhediya',
    },
  ],
  today: [
    {date: 23, name: 'Mon'},
    {date: 24, name: 'Tue'},
    {date: 25, name: 'Wed'},
    {date: 26, name: 'Thu'},
    {date: 27, name: 'Fri'},
    {date: 28, name: 'Sat'},
    {date: 29, name: 'Sun'},
    {date: 30, name: 'Mon'},
  ],
  seats: [
    {
      data: [
        {num: 1, fill: false, key: 1},
        {num: 2, fill: false, key: 2},
        {num: 3, fill: false, key: 3},
        {num: 4, fill: false, key: 4},
        {num: 5, fill: false, key: 5},
      ],
      key: 1,
    },

    {
      data: [
        {num: 6, fill: false, key: 1},
        {num: 7, fill: false, key: 2},
        {num: 8, fill: false, key: 3},
        {num: 9, fill: false, key: 4},
        {num: 10, fill: false, key: 5},
      ],
      key: 2,
    },
    {
      data: [
        {num: 11, fill: false, key: 1},
        {num: 12, fill: false, key: 2},
        {num: 13, fill: false, key: 3},
        {num: 14, fill: false, key: 4},
        {num: 15, fill: false, key: 5},
      ],
      key: 3,
    },
  ],
  seats2: [
    {
      data: [
        {num: 16, fill: false, key: 1},
        {num: 17, fill: false, key: 2},
        {num: 18, fill: false, key: 3},
        {num: 19, fill: false, key: 4},
        {num: 20, fill: false, key: 5},
      ],
      key: 1,
    },
    {
      data: [
        {num: 21, fill: false, key: 1},
        {num: 22, fill: false, key: 2},
        {num: 23, fill: false, key: 3},
        {num: 24, fill: false, key: 4},
        {num: 25, fill: false, key: 5},
      ],
      key: 2,
    },
    {
      data: [
        {num: 26, fill: false, key: 1},
        {num: 27, fill: false, key: 2},
        {num: 28, fill: false, key: 3},
        {num: 29, fill: false, key: 4},
        {num: 30, fill: false, key: 5},
      ],
      key: 3,
    },
  ],
  numseats: [
    {key: 1, fill: false},
    {key: 2, fill: false},
    {key: 3, fill: false},
    {key: 4, fill: false},
    {key: 5, fill: false},
    {key: 6, fill: false},
  ],
};

export default newAssets;
/* [
    {
 
      "movie": "Black Panther",
      "data": [
        {key: 1, time: '10:30 AM', cinema: 'Cinepolis:Nexus Ahmedabad One'},
        {key: 2, time: '10:30 AM', cinema: 'Cinepolis:Nexus Ahmedabad One'},
      ],
"id":"1",
    },

    {

      "movie": 'Avtaar',
      "data": [
        {key: 1, time: '10:30 AM', cinema: "Cinepolis:Nexus Ahmedabad One"},
        {key: 2, time: '10:30 AM', cinema: "Cinepolis:Nexus Ahmedabad One"},
      ],
"id":"2",
    },
    {

      "movie": 'Bhediya',
      "data": [
        {key: 1, time: '10:30 AM', cinema: "Cinepolis:Nexus Ahmedabad One"},
        {key: 2, time: '10:30 AM', cinema: "Cinepolis:Nexus Ahmedabad One"},
      ],
"id":"3",
    },
  ]*/
