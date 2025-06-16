import CharacterCard from './CharacterCard.tsx';
import char_01 from '@assets/images/char_1.jpg';
import char_02 from '@assets/images/char_2.jpg';
import char_03 from '@assets/images/char_3.jpg';

const characters = [
  {
    name: 'Linh',
    image: char_01,
    level: 'easy',
    affection: 100,
    status: 'available',
  },
  {
    name: 'Duyên',
    image: char_02,
    level: 'medium',
    affection: 30,
    status: 'chatting',
  },
  {
    name: 'My',
    image: char_03,
    level: 'hard',
    affection: 20,
    status: 'locked',
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
