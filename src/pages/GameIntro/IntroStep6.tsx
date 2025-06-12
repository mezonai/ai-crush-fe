import heart from "../../assets/icons/heart-circle.svg"

const PLAY_TURN_DETAIL_LIST = [
  "Người mới sẽ được tặng <strong>5 lượt chơi miễn phí</strong>",
  "Lượt chơi sẽ <strong>tự động hồi theo thời gian</strong>\n" +
  "Tối đa số lượt là <strong>5/5</strong>\n" +
  "Khi người chơi có tối đa số lượt <5 hoặc tiêu tốn lượt chơi (ví dụ: trả lời một câu hỏi), hệ thống sẽ bắt đầu đếm ngược thời gian để hồi lượt.\n" +
  "Thời gian hồi cho mỗi lượt là cố định  (Ví dụ: 5 h một lượt – có thể tùy chỉnh theo thiết kế game).",
];

export default function IntroStep6() {
  return (
    <div className="text-[#535862]">
      <h3 className="text-xl font-bold mb-4 text-left">Cách chơi</h3>
      <ul className="space-y-4">
        {PLAY_TURN_DETAIL_LIST.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <img src={heart} alt={''}/>
            <span className={'text-left'}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}