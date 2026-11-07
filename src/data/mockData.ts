export type Post = {
  id: string;
  username: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
};

export type ExplorePost = {
  id: string;
  username: string;
  avatar: string;
  image: string;
  caption: string;
  likes: number;
  views: string;
  category: string;
};

export const PROFILE_IMAGE =
  "https://media.newyorker.com/photos/5dfab39dde5fcf00086aec77/master/pass/Lane-Cats.jpg";

const CAT_IMAGE_1 =
  "https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg";

const CAT_IMAGE_2 = "https://www.cats.org.uk/media/13139/220325case013.jpg";

const CAT_IMAGE_3 = "https://media.tenor.com/81hRg8ueuGoAAAAM/cat.gif";

const CAT_IMAGE_4 =
  "https://hips.hearstapps.com/hmg-prod/images/white-cat-breeds-kitten-in-grass-67bf648a54a3b.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*";

const PFP_IMAGE_1 =
  "https://cdna.artstation.com/p/assets/images/images/010/750/948/large/edouard-bouvee-doude-3d.jpg?1526028359";

const PFP_IMAGE_2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfoP3dyp7PAmxXsEZSP3zSu14YOeadnI28uYtc-ow9bbcRJfJDKYf266Jb&s=10";

const PFP_IMAGE_3 =
  "https://st2.depositphotos.com/3758943/6040/i/450/depositphotos_60400957-stock-photo-the-man-in-the-office.jpg";

export const STORIES = [
  {
    id: "1",
    username: "Your story",
    image: PROFILE_IMAGE,
  },
  {
    id: "2",
    username: "poppy",
    image: PFP_IMAGE_1,
  },
  {
    id: "3",
    username: "Steven",
    image: CAT_IMAGE_3,
  },
  {
    id: "4",
    username: "Bob",
    image: PFP_IMAGE_3,
  },
];

export const POSTS: Post[] = [
  {
    id: "1",
    username: "cloudcats",
    avatar: CAT_IMAGE_1,
    image: CAT_IMAGE_2,
    caption: "This is my cat. His name is potentially Arnold Schwarzenegger.",
    likes: 137,
  },
  {
    id: "2",
    username: "whiskerworld",
    avatar: CAT_IMAGE_4,
    image: CAT_IMAGE_1,
    caption: "My cats chill as heck man",
    likes: 140,
  },
  {
    id: "3",
    username: "the_crazy_humonoid_cat",
    avatar: PROFILE_IMAGE,
    image: CAT_IMAGE_3,
    caption: "This is my brother Steven.",
    likes: 46,
  },
];

export const EXPLORE_POSTS: ExplorePost[] = [
  {
    id: "e1",
    username: "catworld",
    avatar: PFP_IMAGE_1,
    image: CAT_IMAGE_1,
    caption: "Cats and stuff",
    likes: 13,
    views: "137K",
    category: "Cats",
  },
  {
    id: "e2",
    username: "kittycentral",
    avatar: PROFILE_IMAGE,
    image: CAT_IMAGE_2,
    caption: "Little kitten sigma.",
    likes: 1409,
    views: "1.4M",
    category: "Cats",
  },
  {
    id: "e3",
    username: "gamingzone",
    avatar: PFP_IMAGE_3,
    image: CAT_IMAGE_3,
    caption: "Steven locked in.",
    likes: 8123,
    views: "121K",
    category: "Retro Gaming",
  },
  {
    id: "e4",
    username: "chessclub",
    avatar: PFP_IMAGE_2,
    image: CAT_IMAGE_4,
    caption: "Lil bros special (Steven better).",
    likes: 4123,
    views: "850K",
    category: "Chess",
  },
  {
    id: "e5",
    username: "catlovers",
    avatar: CAT_IMAGE_2,
    image: CAT_IMAGE_1,
    caption: "Cats and stuff",
    likes: 1421,
    views: "1.7M",
    category: "Cats",
  },
  {
    id: "e6",
    username: "CatLovers",
    avatar: PFP_IMAGE_3,
    image: CAT_IMAGE_3,
    caption: "Steven here",
    likes: 1414,
    views: "296K",
    category: "Cats",
  },
  {
    id: "e7",
    username: "CatMedia",
    avatar: PFP_IMAGE_1,
    image: CAT_IMAGE_4,
    caption: "My little kitten.",
    likes: 535,
    views: "1.9M",
    category: "Retro Gaming",
  },
  {
    id: "e8",
    username: "kittypictures",
    avatar: CAT_IMAGE_3,
    image: CAT_IMAGE_2,
    caption: "Kitten on pillow.",
    likes: 134,
    views: "144K",
    category: "Cats",
  },
  {
    id: "e9",
    username: "techcat",
    avatar: PFP_IMAGE_2,
    image: CAT_IMAGE_1,
    caption: "Cat brothers.",
    likes: 514,
    views: "607K",
    category: "Technology",
  },
  {
    id: "e10",
    username: "catcentral",
    avatar: CAT_IMAGE_4,
    image: CAT_IMAGE_3,
    caption: "Internet viral Steven.",
    likes: 441,
    views: "21K",
    category: "Cats",
  },
  {
    id: "e11",
    username: "chessmasters",
    avatar: PFP_IMAGE_3,
    image: CAT_IMAGE_2,
    caption: "My little kitten.",
    likes: 134,
    views: "89K",
    category: "Chess",
  },
  {
    id: "e12",
    username: "retrogaming",
    avatar: PFP_IMAGE_1,
    image: CAT_IMAGE_4,
    caption: "Little cat.",
    likes: 514,
    views: "500K",
    category: "Retro Gaming",
  },
];

export type Conversation = {
  id: string;
  name: string;
  image: string;
  preview: string;
  time: string;
  active: boolean;
};

export const CONVERSATIONS: Conversation[] = [
  {
    id: "1",
    name: "Me",
    image: PROFILE_IMAGE,
    preview: "Sent you a reel",
    time: "2m",
    active: true,
  },
  {
    id: "2",
    name: "Maya",
    image: PFP_IMAGE_1,
    preview: "I can't lie I'm a dude if you couldn't tell by the pfp cat....",
    time: "15m",
    active: true,
  },
  {
    id: "3",
    name: "Daniel",
    image: PFP_IMAGE_3,
    preview: "Hey are you a cat or a dude",
    time: "1h",
    active: false,
  },
  {
    id: "4",
    name: "Brother Steven",
    image: CAT_IMAGE_3,
    preview: "Active 54m ago",
    time: "",
    active: false,
  },
  {
    id: "5",
    name: "benjamin franklin",
    image: PFP_IMAGE_2,
    preview: "Active today",
    time: "",
    active: false,
  },
  {
    id: "6",
    name: "Lil bro",
    image: CAT_IMAGE_4,
    preview: "You shared a reel.",
    time: "1d",
    active: false,
  },
];

export const NOTES = [
  {
    id: "1",
    name: "Your note",
    note: "Inspo needed...",
    image: PROFILE_IMAGE,
  },
  {
    id: "2",
    name: "Alex",
    note: "Listening...",
    image: PFP_IMAGE_3,
  },
  {
    id: "4",
    name: "Steven",
    note: "I think my brother is half hooman",
    image: CAT_IMAGE_3,
  },
];
