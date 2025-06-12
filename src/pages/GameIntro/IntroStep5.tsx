import heart from "../../assets/icons/heart-circle.svg";

// Sử dụng **...** để đánh dấu phần cần in đậm
const PLAY_TURN_DETAIL_LIST = [
  "Tán người đầu tiên được thưởng **1 lượt chơi**",
  "Tán trên 3 người / ngày được thưởng **3 token**",
  "Tán nhanh được thưởng **5 token**",
];

// Parse chuỗi có dấu ** để render <b> hoặc <strong>
function renderFormattedText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, lineIdx) => {
    const segments = line.split(/(\*\*.*?\*\*)/); // Tách đoạn được bao bởi **
    return (
      <p key={lineIdx} className="mb-1">
        {segments.map((seg, i) => {
          if (seg.startsWith("**") && seg.endsWith("**")) {
            return (
              <span key={i} className="font-semibold normal-case">
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
      <ul className="space-y-4">
        {PLAY_TURN_DETAIL_LIST.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <img src={heart} alt="" />
            <div className="text-left text-sm leading-relaxed">{renderFormattedText(item)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
