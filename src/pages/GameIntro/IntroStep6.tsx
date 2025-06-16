import bonus from '@assets/icons/bonus_icon.svg';

const PLAY_TURN_DETAIL_LIST = [
  'Có thể dùng token để **mua lượt** và **mở khóa nhân vật**',
  'Token có thể **nạp rút** qua hệ sinh thái MEZON',
];

function renderFormattedText(text: string) {
  const lines = text.split('\n');
  return lines.map((line, lineIdx) => {
    const segments = line.split(/(\*\*.*?\*\*)/);
    return (
      <p key={lineIdx} className="mb-1">
        {segments.map((seg, i) => {
          if (seg.startsWith('**') && seg.endsWith('**')) {
            return (
              <span key={i} className="font-bold normal-case">
                {seg.slice(2, -2)}
              </span>
            );
          }
          return <span key={i}>{seg}</span>;
        })}
      </p>
    );
  });
}

export default function IntroStep6() {
  return (
    <div className="text-[#535862]">
      <h3 className="text-xl font-bold mb-4 text-left">Sử dụng token</h3>
      <ul className="space-y-4 gap-4">
        {PLAY_TURN_DETAIL_LIST.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <img src={bonus} alt="" />
            <div className="text-left text-sm leading-relaxed">{renderFormattedText(item)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
