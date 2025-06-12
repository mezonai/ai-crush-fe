import heart from "../../assets/icons/heart-circle.svg";

// Sử dụng **...** để đánh dấu phần cần in đậm
const PLAY_TURN_DETAIL_LIST = [
  "Người mới sẽ được tặng **5 lượt chơi miễn phí**",
  "Lượt chơi sẽ **tự động hồi theo thời gian**\n" +
  "Tối đa số lượt là **5/5**\n" +
  "Khi người chơi có tối đa số lượt <5 hoặc tiêu tốn lượt chơi (ví dụ: trả lời một câu hỏi), hệ thống sẽ bắt đầu đếm ngược thời gian để hồi lượt.\n" +
  "Thời gian hồi cho mỗi lượt là cố định (Ví dụ: 5 h một lượt – có thể tùy chỉnh theo thiết kế game).",
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

export default function IntroStep4() {
  return (
    <div className="text-[#535862]">
      <h3 className="text-xl font-bold mb-4 text-left">Chi tiết lượt chơi</h3>
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
