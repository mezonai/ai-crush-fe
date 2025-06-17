import { useNavigate } from 'react-router-dom';
import { Button } from '@components/ui/button.tsx';
import arrowLeft from '@assets/icons/arrow_left.svg';
import char_01 from '@assets/images/char_1.jpg';

export default function CharacterDetail() {
  // const { character_id } = useParams();
  const navigate = useNavigate();

  // Mocked character data (sau này có thể fetch từ API hoặc context)
  const character = {
    name: 'Linh',
    quote: 'Tình yêu là ánh sáng dẫn lối trong những đêm tối, là sức mạnh giúp ta vượt qua mọi thử thách.',
    job: 'Người mẫu',
    level: '💗',
    status: 'Tán thành công',
    affection: 100,
    image: char_01,
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Character Image */}
      <div className="">
        {/*<div className="flex items-center justify-start">*/}
        {/*  <Button*/}
        {/*    onClick={() => navigate('/characters')}*/}
        {/*    className="bg-white/70 px-4 py-6 rounded-xl shadow hover:bg-pink-100 transition absolute top-4 left-4">*/}
        {/*    <img src={arrowLeft} alt="Back" />*/}
        {/*  </Button>*/}
        {/*</div>*/}
        <div className="absolute top-0 left-0 w-full">
          <div className="w-[90%] mx-auto pt-4">
            <Button
              onClick={() => navigate('/characters')}
              className="bg-white/70 px-4 py-6 rounded-xl shadow hover:bg-pink-100 transition">
              <img src={arrowLeft} alt="Back" />
            </Button>
          </div>
        </div>
        <img src={character.image} alt={character.name} className="w-full object-cover h-[50vh] object-center" />
      </div>

      {/* Info Card */}
      <div className="flex-1 overflow-y-auto px-4 pt-4">
        <h2 className="text-pink-800 text-2xl font-bold">{character.name}</h2>

        <div className="bg-pink-100 rounded-xl px-4 py-3 my-3 text-pink-900 text-base leading-relaxed flex gap-2">
          <div className={'text-4xl'}>“</div>
          <div className="text-center">{character.quote}</div>
          <div className={'text-4xl flex items-end'}>”</div>
        </div>

        <div className="space-y-2 text-gray-700 text-base">
          <div>
            <span className="font-medium">Nghề nghiệp: </span>
            {character.job}
          </div>
          <div>
            <span className="font-medium">Cấp độ: </span>
            <span className="items-center bg-[#FDF2FA] px-2 py-1 rounded-full text-xs border border-[#FCCEEE]">
              {character.level}
            </span>
          </div>
          <div>
            <span className="font-medium">Status: </span>
            <span className="text-green-600 font-medium">💚 {character.status}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Độ thiện cảm: </span>
            <span className="text-pink-600 font-bold">{character.affection}%</span>
          </div>
          <div className="w-full bg-pink-100 h-2 rounded-full">
            <div className="bg-pink-500 h-2 rounded-full" style={{ width: `${character.affection}%` }}></div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="px-4 pb-6">
        <button className="w-full bg-pink-500 hover:bg-pink-600 transition text-white font-semibold py-3 rounded-2xl shadow-lg">
          💞 Tán lại
        </button>
      </div>
    </div>
  );
}
