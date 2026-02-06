export default function CommunityPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="relative h-[340px] md:h-[420px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/community-header.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pb-12 w-full">
          <p className="text-white/50 text-xs tracking-wider mb-2">
            더작은교회
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white font-serif">
            공동체 소개
          </h1>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-lg md:text-xl font-bold mb-12 pb-5 border-b-2 border-gray-900">
            더작은 교회의 공동체를 소개합니다
          </h2>

          {/* 청년부 */}
          <div className="mb-14 pb-14 border-b border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-serif">
              청년부
            </h3>
            <div className="text-gray-500 text-[15px] leading-[1.9] space-y-4">
              <p>
                학업과 직장, 관계와 미래의 고민 속에서 주님을 더 알아가고,
                <br />
                삶의 자리에서 믿음을 살아내도록 함께 걷는 공동체입니다.
              </p>
              <p>
                예배와 말씀 나눔, 진솔한 교제를 통해 서로를 세워 주며,
                <br />
                주님의 사랑인 섬김과 이웃 사랑을 실천합니다.
              </p>
              <p>
                &ldquo;더 작은 자&rdquo; 한 사람의 이야기를 귀히 여기며,
                <br />
                누구도 혼자 남겨두지 않는 공동체가 되기를 지향합니다.
              </p>
            </div>
          </div>

          {/* 장년부 */}
          <div className="mb-14 pb-14 border-b border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-serif">
              장년부
            </h3>
            <div className="text-gray-500 text-[15px] leading-[1.9] space-y-4">
              <p>
                가정과 일터, 삶의 책임이 커지는 시기에
                <br />
                말씀으로 중심을 세우고 서로를 돌보는 공동체입니다.
              </p>
              <p>
                예배와 기도 가운데 주님의 사랑을 다시 붙들고,
                <br />
                그 사랑이 가정과 이웃을 향한 삶으로
                <br />
                자연스럽게 이어지도록 서로를 격려합니다.
              </p>
              <p>
                한 사람의 필요를 놓치지 않고 함께 기도하며 동행합니다.
              </p>
            </div>
          </div>

          {/* 영유아부 */}
          <div className="pb-14 border-b border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-serif">
              영유아부
            </h3>
            <div className="text-gray-500 text-[15px] leading-[1.9] space-y-4">
              <p>
                가장 작은 아이 한 사람 한 사람을
                <br />
                주님의 사랑으로 품고 축복하는 공동체입니다.
              </p>
              <p>
                눈높이에 맞춘 찬양과 말씀, 따뜻한 돌봄 속에서
                <br />
                &ldquo;교회는 안전하고 사랑받는 곳&rdquo;으로 기억하도록 돕고,
              </p>
              <p>
                부모와 가정이 함께 기도하며 가정예배와 믿음의 기초가
                <br />
                삶 속에서 자연스럽게 이어지도록 동행합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
