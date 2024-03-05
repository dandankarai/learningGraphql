let games = [
  { id: "1", title: "Zelda", platform: ["Xbox", "PC"] },
  {
    id: "2",
    title: "Dragon Ball Budokai tenkaichin 3",
    platform: ["Playstation"],
  },
  { id: "3", title: "Need for Speed Underground 2", platform: ["PC"] },
];

let authors = [
  { id: "1", name: "mario", verified: true },
  { id: "2", name: "daniel", verified: false },
  { id: "3", name: "alexandre", verified: true },
];

let reviews = [
  { id: "1", rating: 7, content: "Lorem ipsum", author_id: "1", game_id: "2" },
  { id: "2", rating: 10, content: "Lorem ipsum", author_id: "3", game_id: "3" },
];

export default {games, authors, reviews}