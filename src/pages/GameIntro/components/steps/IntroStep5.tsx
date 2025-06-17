import bonus from '@assets/icons/bonus_icon.svg';

const PLAY_TURN_DETAIL_LIST = [
  'Tán người đầu tiên được thưởng **1 lượt chơi**',
  'Tán trên 3 người / ngày được thưởng **3 token**',
  'Tán nhanh được thưởng **5 token**',
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

export default function IntroStep5() {
  return (
    <div className="text-[#535862]">
      <h3 className="text-xl font-bold mb-4 text-left">Bonus</h3>
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
