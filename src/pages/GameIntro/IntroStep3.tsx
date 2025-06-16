import heart from '@assets/icons/heart-circle.svg';

const HOW_TO_PLAY_LIST = [
  'Người chơi có thể lựa chọn nhân vật theo cấp độ',
  'Mỗi lượt chơi cho phép người chơi trả lời một câu hỏi',
  'Người chơi trả lời câu hỏi để tăng/giảm độ thiện cảm của nhân vật',
  'Người chơi có thể chờ hồi lượt chơi hoặc mua thêm lượt',
  'Khi đạt đến % ❤️ cố định sẽ được thưởng token',
  'Khi tán thành công nhân vật sẽ được thưởng token và huy hiệu nhân vật đó',
];

export default function IntroStep3() {
  return (
    <div className="text-[#535862]">
      <h3 className="text-xl font-bold mb-4 text-left">Cách chơi</h3>
      <ul className="flex flex-col space-y-4 gap-4">
        {HOW_TO_PLAY_LIST.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <img src={heart} alt={''} />
            <span className={'text-left'}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
