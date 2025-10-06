import vampireDairiesImg from "@/assets/images/vampire_diaries.jpg";
import jawanImg from "@/assets/images/jawan.jpg";
import pathanImg from "@/assets/images/pathan2.jpg";
import moneyHeistImg from "@/assets/images/money_heist.jpg";
import inceptionImg from "@/assets/images/iinception.jpg";
import forrestGumpImg from "@/assets/images/forest_gump.jpg";
import baahubaliImg from "@/assets/images/bahu.jpg";
import captainAmericaImg from "@/assets/images/captain_america.jpg";
import ironManImg from "@/assets/images/iron.jpg";
import thorImg from "@/assets/images/thor.jpg";
import darkKnightImg from "@/assets/images/the_dark_knight.jpg";
import gotImg from "@/assets/images/got.jpg";

// vampire dairies
import vd1 from "@/assets/images/cast/vampire/1.jpg";
import vd2 from "@/assets/images/cast/vampire/2.jpg";
import vd3 from "@/assets/images/cast/vampire/3.jpg";
import vd4 from "@/assets/images/cast/vampire/4.jpg";
import vd5 from "@/assets/images/cast/vampire/5.jpg";

// jawan
import jw1 from "@/assets/images/cast/jawan/1.jpg";
import jw2 from "@/assets/images/cast/jawan/2.jpg";
import jw3 from "@/assets/images/cast/jawan/3.jpg";
import jw4 from "@/assets/images/cast/jawan/4.jpg";

// pathan
import pt1 from "@/assets/images/cast/pathan/1.jpg";
import pt2 from "@/assets/images/cast/pathan/2.jpg";
import pt3 from "@/assets/images/cast/pathan/3.jpg";
import pt4 from "@/assets/images/cast/pathan/4.png";

// money heist
import mh1 from "@/assets/images/cast/money_heist/1.jpg";
import mh2 from "@/assets/images/cast/money_heist/2.jpg";
import mh3 from "@/assets/images/cast/money_heist/3.jpg";
import mh4 from "@/assets/images/cast/money_heist/4.jpg";
import mh5 from "@/assets/images/cast/money_heist/5.jpg";

// inception
import ic1 from "@/assets/images/cast/inception/1.jpg";
import ic2 from "@/assets/images/cast/inception/2.jpg";
import ic3 from "@/assets/images/cast/inception/3.jpg";
import ic4 from "@/assets/images/cast/inception/4.jpg";
import ic5 from "@/assets/images/cast/inception/5.jpg";

// forrest gump
import fg1 from "@/assets/images/cast/forestgump/1.jpg";
import fg2 from "@/assets/images/cast/forestgump/2.jpg";
import fg3 from "@/assets/images/cast/forestgump/3.jpg";
import fg4 from "@/assets/images/cast/forestgump/4.jpg";

// baahubali
import bh1 from "@/assets/images/cast/bahubali/1.jpg";
import bh2 from "@/assets/images/cast/bahubali/2.jpg";
import bh3 from "@/assets/images/cast/bahubali/3.jpg";
import bh4 from "@/assets/images/cast/bahubali/4.jpg";

// captain america
import ca1 from "@/assets/images/cast/captain_america/1.jpg";
import ca2 from "@/assets/images/cast/captain_america/2.jpg";
import ca3 from "@/assets/images/cast/captain_america/3.jpg";
import ca4 from "@/assets/images/cast/captain_america/4.jpg";

// iron man
import im1 from "@/assets/images/cast/iron_man/1.jpg";
import im2 from "@/assets/images/cast/iron_man/2.jpg";
import im3 from "@/assets/images/cast/iron_man/3.jpg";
import im4 from "@/assets/images/cast/iron_man/4.jpg";

// thor
import tr1 from "@/assets/images/cast/thor/1.jpg";
import tr2 from "@/assets/images/cast/thor/2.jpg";
import tr3 from "@/assets/images/cast/thor/3.jpg";
import tr4 from "@/assets/images/cast/thor/4.jpg";

// dark knight
import dk1 from "@/assets/images/cast/dark_knight/1.jpg";
import dk2 from "@/assets/images/cast/dark_knight/2.jpg";
import dk3 from "@/assets/images/cast/dark_knight/3.jpg";
import dk4 from "@/assets/images/cast/dark_knight/4.jpg";

// got
import gt1 from "@/assets/images/cast/got/1.jpg";
import gt2 from "@/assets/images/cast/got/2.jpg";
import gt3 from "@/assets/images/cast/got/3.jpg";
import gt4 from "@/assets/images/cast/got/4.jpg";
import gt5 from "@/assets/images/cast/got/5.jpg";

export interface CastMember {
  image: string;
  name: string;
  role: string;
  episode: number;
  year: number;
}

export interface Movie {
  id: string;
  title: string;
  poster: string;
  description: string;
  creators: string[];
  stars: string[];
  genre: string[];
  releaseYear: number;
  episodes: number;
  videos: number;
  photos: number;
  rating: number;
  ratingCount: number;
  language: string;
  country: string;
  duration: string;
  youtubeUrl: string;
  topCast: CastMember[];
  tags: string[];
}

export const movies: Movie[] = [
  {
    id: "mv001",
    title: "The Vampire Diaries",
    poster: vampireDairiesImg.src,
    description:
      "The lives, loves, dangers, and disasters in Mystic Falls — a teenage girl torn between two vampire brothers.",
    creators: ["Julie Plec", "Kevin Williamson"],
    stars: ["Nina Dobrev", "Paul Wesley", "Ian Somerhalder"],
    genre: ["Drama", "Fantasy", "Horror"],
    releaseYear: 2009,
    episodes: 171,
    videos: 24,
    photos: 85,
    rating: 8.3,
    ratingCount: 450000,
    language: "English",
    country: "USA",
    duration: "42m per ep",
    youtubeUrl: "https://www.youtube.com/embed/BmVmhjjkN4E",
    topCast: [
      {
        image: vd1.src,
        name: "Nina Dobrev",
        role: "Elena Gilbert",
        episode: 171,
        year: 2009,
      },
      {
        image: vd2.src,
        name: "Paul Wesley",
        role: "Stefan Salvatore",
        episode: 171,
        year: 2009,
      },
      {
        image: vd3.src,
        name: "Ian Somerhalder",
        role: "Damon Salvatore",
        episode: 171,
        year: 2009,
      },
      {
        image: vd4.src,
        name: "Kat Graham",
        role: "Bonnie Bennett",
        episode: 171,
        year: 2009,
      },
      {
        image: vd5.src,
        name: "Candice King",
        role: "Caroline Forbes",
        episode: 171,
        year: 2009,
      },
    ],
    tags: ["vampire", "romance", "supernatural"],
  },
  {
    id: "mv002",
    title: "Jawan",
    poster: jawanImg.src,
    description:
      "A man driven by a personal vendetta takes on corruption and injustice with explosive consequences.",
    creators: ["Atlee Kumar"],
    stars: ["Shah Rukh Khan", "Nayanthara", "Vijay Sethupathi"],
    genre: ["Action", "Thriller", "Drama"],
    releaseYear: 2023,
    episodes: 1,
    videos: 12,
    photos: 50,
    rating: 7.9,
    ratingCount: 190000,
    language: "Hindi",
    country: "India",
    duration: "2h 49m",
    youtubeUrl: "https://www.youtube.com/embed/MWOlnZSnXJo",
    topCast: [
      {
        image: jw1.src,
        name: "Shah Rukh Khan",
        role: "Azad / Vikram Rathore",
        episode: 1,
        year: 2023,
      },
      {
        image: jw2.src,
        name: "Nayanthara",
        role: "Narmada Rai",
        episode: 1,
        year: 2023,
      },
      {
        image: jw3.src,
        name: "Vijay Sethupathi",
        role: "Kali Gaikwad",
        episode: 1,
        year: 2023,
      },
      {
        image: jw4.src,
        name: "Jackie Shroff",
        role: "Major Dhyanchand",
        episode: 1,
        year: 2023,
      },
    ],
    tags: ["action", "revenge", "patriotism"],
  },
  {
    id: "mv003",
    title: "Pathaan",
    poster: pathanImg.src,
    description:
      "An exiled RAW agent returns to protect his nation from a deadly mercenary threatening global chaos.",
    creators: ["Siddharth Anand"],
    stars: ["Shah Rukh Khan", "Deepika Padukone", "John Abraham"],
    genre: ["Action", "Thriller"],
    releaseYear: 2023,
    episodes: 1,
    videos: 10,
    photos: 40,
    rating: 7.2,
    ratingCount: 210000,
    language: "Hindi",
    country: "India",
    duration: "2h 26m",
    youtubeUrl: "https://www.youtube.com/embed/vqu4z34wENw",
    topCast: [
      {
        image: pt1.src,
        name: "Shah Rukh Khan",
        role: "Pathaan",
        episode: 1,
        year: 2023,
      },
      {
        image: pt2.src,
        name: "Deepika Padukone",
        role: "Rubina Mohsin",
        episode: 1,
        year: 2023,
      },
      {
        image: pt3.src,
        name: "John Abraham",
        role: "Jim",
        episode: 1,
        year: 2023,
      },
      {
        image: pt4.src,
        name: "Dimple Kapadia",
        role: "Nilofer",
        episode: 1,
        year: 2023,
      },
    ],
    tags: ["spy", "espionage", "thriller"],
  },
  {
    id: "mv004",
    title: "Money Heist",
    poster: moneyHeistImg.src,
    description:
      "A criminal mastermind, known as 'The Professor', recruits eight thieves to carry out an ambitious heist.",
    creators: ["Álex Pina"],
    stars: ["Álvaro Morte", "Úrsula Corberó", "Pedro Alonso"],
    genre: ["Crime", "Drama", "Thriller"],
    releaseYear: 2017,
    episodes: 41,
    videos: 30,
    photos: 120,
    rating: 8.2,
    ratingCount: 600000,
    language: "Spanish",
    country: "Spain",
    duration: "50m per ep",
    youtubeUrl: "https://www.youtube.com/embed/hMANIarjT50",
    topCast: [
      {
        image: mh1.src,
        name: "Álvaro Morte",
        role: "The Professor",
        episode: 41,
        year: 2017,
      },
      {
        image: mh2.src,
        name: "Úrsula Corberó",
        role: "Tokyo",
        episode: 41,
        year: 2017,
      },
      {
        image: mh3.src,
        name: "Pedro Alonso",
        role: "Berlin",
        episode: 41,
        year: 2017,
      },
      {
        image: mh4.src,
        name: "Miguel Herrán",
        role: "Rio",
        episode: 41,
        year: 2017,
      },
      {
        image: mh5.src,
        name: "Itziar Ituño",
        role: "Lisbon",
        episode: 41,
        year: 2017,
      },
    ],
    tags: ["heist", "thriller", "team"],
  },
  {
    id: "mv005",
    title: "Inception",
    poster: inceptionImg.src,
    description:
      "A skilled thief who steals secrets through dream-sharing technology is offered a chance to have his past forgiven.",
    creators: ["Christopher Nolan"],
    stars: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    genre: ["Sci-Fi", "Thriller"],
    releaseYear: 2010,
    episodes: 1,
    videos: 18,
    photos: 70,
    rating: 8.8,
    ratingCount: 2400000,
    language: "English",
    country: "USA",
    duration: "2h 28m",
    youtubeUrl: "https://www.youtube.com/embed/YoHD9XEInc0",
    topCast: [
      {
        image: ic1.src,
        name: "Leonardo DiCaprio",
        role: "Cobb",
        episode: 1,
        year: 2010,
      },
      {
        image: ic2.src,
        name: "Joseph Gordon-Levitt",
        role: "Arthur",
        episode: 1,
        year: 2010,
      },
      {
        image: ic3.src,
        name: "Elliot Page",
        role: "Ariadne",
        episode: 1,
        year: 2010,
      },
      {
        image: ic4.src,
        name: "Tom Hardy",
        role: "Eames",
        episode: 1,
        year: 2010,
      },
      {
        image: ic5.src,
        name: "Ken Watanabe",
        role: "Saito",
        episode: 1,
        year: 2010,
      },
    ],
    tags: ["dream", "heist", "psychological"],
  },
  {
    id: "mv006",
    title: "Forrest Gump",
    poster: forrestGumpImg.src,
    description:
      "A simple man with a big heart witnesses defining moments in American history through his extraordinary life.",
    creators: ["Robert Zemeckis"],
    stars: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    genre: ["Drama", "Romance"],
    releaseYear: 1994,
    episodes: 1,
    videos: 14,
    photos: 65,
    rating: 8.8,
    ratingCount: 2200000,
    language: "English",
    country: "USA",
    duration: "2h 22m",
    youtubeUrl: "https://www.youtube.com/embed/bLvqoHBptjg",
    topCast: [
      {
        image: fg1.src,
        name: "Tom Hanks",
        role: "Forrest Gump",
        episode: 1,
        year: 1994,
      },
      {
        image: fg2.src,
        name: "Robin Wright",
        role: "Jenny Curran",
        episode: 1,
        year: 1994,
      },
      {
        image: fg3.src,
        name: "Gary Sinise",
        role: "Lt. Dan Taylor",
        episode: 1,
        year: 1994,
      },
      {
        image: fg4.src,
        name: "Mykelti Williamson",
        role: "Bubba Blue",
        episode: 1,
        year: 1994,
      },
    ],
    tags: ["life", "drama", "classic"],
  },
  {
    id: "mv007",
    title: "Baahubali",
    poster: baahubaliImg.src,
    description:
      "A young man uncovers his royal heritage and seeks to reclaim the throne of his kingdom.",
    creators: ["S. S. Rajamouli"],
    stars: ["Prabhas", "Rana Daggubati", "Anushka Shetty"],
    genre: ["Action", "Adventure", "Drama"],
    releaseYear: 2015,
    episodes: 2,
    videos: 20,
    photos: 80,
    rating: 8.0,
    ratingCount: 160000,
    language: "Telugu",
    country: "India",
    duration: "2h 39m",
    youtubeUrl: "https://www.youtube.com/embed/VdafjyFK3ko?si=96yIMcrXWsGpdz40",
    topCast: [
      {
        image: bh1.src,
        name: "Prabhas",
        role: "Amarendra Baahubali",
        episode: 2,
        year: 2015,
      },
      {
        image: bh2.src,
        name: "Rana Daggubati",
        role: "Bhallaladeva",
        episode: 2,
        year: 2015,
      },
      {
        image: bh3.src,
        name: "Anushka Shetty",
        role: "Devasena",
        episode: 2,
        year: 2015,
      },
      {
        image: bh4.src,
        name: "Ramya Krishnan",
        role: "Sivagami",
        episode: 2,
        year: 2015,
      },
    ],
    tags: ["epic", "mythology", "war"],
  },
  {
    id: "mv008",
    title: "Captain America: The First Avenger",
    poster: captainAmericaImg.src,
    description:
      "During World War II, Steve Rogers transforms into the super-soldier Captain America to fight HYDRA.",
    creators: ["Joe Johnston"],
    stars: ["Chris Evans", "Hayley Atwell", "Hugo Weaving"],
    genre: ["Action", "Adventure", "Superhero"],
    releaseYear: 2011,
    episodes: 1,
    videos: 16,
    photos: 55,
    rating: 6.9,
    ratingCount: 900000,
    language: "English",
    country: "USA",
    duration: "2h 4m",
    youtubeUrl: "https://www.youtube.com/embed/JerVrbLldXw",
    topCast: [
      {
        image: ca1.src,
        name: "Chris Evans",
        role: "Steve Rogers / Captain America",
        episode: 1,
        year: 2011,
      },
      {
        image: ca2.src,
        name: "Hayley Atwell",
        role: "Peggy Carter",
        episode: 1,
        year: 2011,
      },
      {
        image: ca3.src,
        name: "Hugo Weaving",
        role: "Red Skull",
        episode: 1,
        year: 2011,
      },
      {
        image: ca4.src,
        name: "Sebastian Stan",
        role: "Bucky Barnes",
        episode: 1,
        year: 2011,
      },
    ],
    tags: ["marvel", "superhero", "war"],
  },
  {
    id: "mv009",
    title: "Iron Man",
    poster: ironManImg.src,
    description:
      "After being held captive, billionaire Tony Stark builds a high-tech suit to fight evil.",
    creators: ["Jon Favreau"],
    stars: ["Robert Downey Jr.", "Gwyneth Paltrow", "Jeff Bridges"],
    genre: ["Action", "Sci-Fi", "Superhero"],
    releaseYear: 2008,
    episodes: 1,
    videos: 18,
    photos: 70,
    rating: 7.9,
    ratingCount: 1100000,
    language: "English",
    country: "USA",
    duration: "2h 6m",
    youtubeUrl: "https://www.youtube.com/embed/8ugaeA-nMTc",
    topCast: [
      {
        image: im1.src,
        name: "Robert Downey Jr.",
        role: "Tony Stark / Iron Man",
        episode: 1,
        year: 2008,
      },
      {
        image: im2.src,
        name: "Gwyneth Paltrow",
        role: "Pepper Potts",
        episode: 1,
        year: 2008,
      },
      {
        image: im3.src,
        name: "Jeff Bridges",
        role: "Obadiah Stane",
        episode: 1,
        year: 2008,
      },
      {
        image: im4.src,
        name: "Terrence Howard",
        role: "James Rhodes",
        episode: 1,
        year: 2008,
      },
    ],
    tags: ["marvel", "tech", "hero"],
  },
  {
    id: "mv010",
    title: "Thor",
    poster: thorImg.src,
    description:
      "The powerful god Thor is cast out of Asgard and must learn humility to reclaim his power.",
    creators: ["Kenneth Branagh"],
    stars: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston"],
    genre: ["Action", "Fantasy", "Superhero"],
    releaseYear: 2011,
    episodes: 1,
    videos: 15,
    photos: 60,
    rating: 7.0,
    ratingCount: 900000,
    language: "English",
    country: "USA",
    duration: "1h 55m",
    youtubeUrl: "https://www.youtube.com/embed/JOddp-nlNvQ",
    topCast: [
      {
        image: tr1.src,
        name: "Chris Hemsworth",
        role: "Thor",
        episode: 1,
        year: 2011,
      },
      {
        image: tr2.src,
        name: "Natalie Portman",
        role: "Jane Foster",
        episode: 1,
        year: 2011,
      },
      {
        image: tr3.src,
        name: "Tom Hiddleston",
        role: "Loki",
        episode: 1,
        year: 2011,
      },
      {
        image: tr4.src,
        name: "Anthony Hopkins",
        role: "Odin",
        episode: 1,
        year: 2011,
      },
    ],
    tags: ["marvel", "god", "asgard"],
  },
  {
    id: "mv011",
    title: "The Dark Knight",
    poster: darkKnightImg.src,
    description:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos.",
    creators: ["Christopher Nolan"],
    stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    genre: ["Action", "Crime", "Drama"],
    releaseYear: 2008,
    episodes: 1,
    videos: 22,
    photos: 90,
    rating: 9.0,
    ratingCount: 2800000,
    language: "English",
    country: "USA",
    duration: "2h 32m",
    youtubeUrl: "https://www.youtube.com/embed/EXeTwQWrcwY",
    topCast: [
      {
        image: dk1.src,
        name: "Christian Bale",
        role: "Bruce Wayne / Batman",
        episode: 1,
        year: 2008,
      },
      {
        image: dk2.src,
        name: "Heath Ledger",
        role: "Joker",
        episode: 1,
        year: 2008,
      },
      {
        image: dk3.src,
        name: "Aaron Eckhart",
        role: "Harvey Dent",
        episode: 1,
        year: 2008,
      },
      {
        image: dk4.src,
        name: "Michael Caine",
        role: "Alfred",
        episode: 1,
        year: 2008,
      },
    ],
    tags: ["dc", "hero", "crime"],
  },
  {
    id: "mv012",
    title: "Game of Thrones",
    poster: gotImg.src,
    description:
      "Noble families fight for control of the Seven Kingdoms of Westeros while an ancient enemy returns.",
    creators: ["David Benioff", "D. B. Weiss"],
    stars: ["Emilia Clarke", "Kit Harington", "Peter Dinklage"],
    genre: ["Drama", "Fantasy", "Adventure"],
    releaseYear: 2011,
    episodes: 73,
    videos: 50,
    photos: 200,
    rating: 9.2,
    ratingCount: 2500000,
    language: "English",
    country: "USA",
    duration: "55m per ep",
    youtubeUrl: "https://www.youtube.com/embed/KPLWWIOCOOQ",
    topCast: [
      {
        image: gt1.src,
        name: "Emilia Clarke",
        role: "Daenerys Targaryen",
        episode: 73,
        year: 2011,
      },
      {
        image: gt2.src,
        name: "Kit Harington",
        role: "Jon Snow",
        episode: 73,
        year: 2011,
      },
      {
        image: gt3.src,
        name: "Peter Dinklage",
        role: "Tyrion Lannister",
        episode: 73,
        year: 2011,
      },
      {
        image: gt4.src,
        name: "Lena Headey",
        role: "Cersei Lannister",
        episode: 73,
        year: 2011,
      },
      {
        image: gt5.src,
        name: "Nikolaj Coster-Waldau",
        role: "Jaime Lannister",
        episode: 73,
        year: 2011,
      },
    ],
    tags: ["fantasy", "kingdom", "war"],
  },
];
