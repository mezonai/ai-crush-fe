import CharacterCard from "./CharacterCard.tsx";
import img from "../../../../assets/example_character.jpg"

const characters = [
  {
    name: "Linh",
    image: img,
    level: "easy",
    affection: 30,
    status: "available",
  },
  {
    name: "Linh",
    image: img,
    level: "medium",
    affection: 30,
    status: "chatting",
  },
  {
    name: "Linh",
    image: img,
    level: "hard",
    affection: 20,
    status: "locked",
  },
];

export default function CharacterList() {
  return (
    <div className="flex flex-col gap-4">
      {characters.map((char, idx) => (
        <CharacterCard key={idx} {...char} />
      ))}
    </div>
  );
}
