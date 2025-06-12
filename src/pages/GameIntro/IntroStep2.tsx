// src/pages/gameIntro/steps/IntroStep2.tsx
export default function IntroStep2() {
  const characters = [
    {
      name: "Linh",
      image: "/src/assets/characters/linh.jpg", // Thay bằng đúng path ảnh bạn dùng
      status: "Đang tán",
      level: "Dễ",
      affection: 30,
    },
    {
      name: "Trang",
      image: "/src/assets/characters/trang.jpg",
      status: "Đang tán",
      level: "Dễ",
      affection: 30,
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold text-center mb-6">Chi tiết nhân vật</h3>

      <div className="flex flex-col gap-6">
        {characters.map((char, idx) => (
          <div key={idx} className="bg-white bg-opacity-90 rounded-2xl flex p-4 shadow-lg">
            <img
              src={char.image}
              alt={char.name}
              className="w-28 h-36 object-cover rounded-xl"
            />
            <div className="ml-4 flex-1">
              <h4 className="text-lg font-bold text-pink-700 mb-1">{char.name}</h4>

              <div className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Status: </span>
                <span className="inline-flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                  💬 {char.status}
                </span>
              </div>

              <div className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Cấp độ: </span>
                <span className="inline-flex items-center bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                  😊 {char.level}
                </span>
              </div>

              <div className="text-sm text-gray-700 mb-1">
                <span className="font-medium">Độ thiện cảm: </span>
                <div className="flex items-center mt-1">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mr-2">
                    <div
                      className="h-full bg-pink-500"
                      style={{ width: `${char.affection}%` }}
                    ></div>
                  </div>
                  <span className="text-pink-600 text-xs font-medium flex items-center gap-1">
                    💓 {char.affection}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
