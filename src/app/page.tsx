import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/hero-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-2xl mx-auto">
          <p className="text-xs md:text-sm tracking-[0.3em] text-white/60 mb-8 fade-in-up uppercase">
            The Smallest Church
          </p>
          <h1
            className="text-xl md:text-3xl lg:text-4xl leading-[1.8] md:leading-[1.8] font-bold fade-in-up fade-in-up-delay-1 font-serif"
          >
            그 작은 자가 천 명을 이루겠고
            <br />
            그 약한 자가 강국을 이룰 것이라
            <br />
            때가 되면 나 여호와가 속히 이루리라
          </h1>
          <p className="mt-8 text-base md:text-lg text-white/70 tracking-wider fade-in-up fade-in-up-delay-2 font-serif">
            이사야 60:22
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] tracking-[0.2em]">SCROLL</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </section>

      {/* ===== CHURCH INTRO SECTION ===== */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-3 uppercase">
            The Smallest Church
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-14 font-serif">
            THE 작은 교회
          </h2>

          <div className="space-y-8 text-gray-500 text-[15px] leading-[1.9]">
            <p>
              The Smallest Church는
              <br />
              &ldquo;작은 자, 더 작은 자&rdquo; 한 사람을 귀히 여깁니다.
            </p>
            <p>
              예배와 말씀 가운데 주님을 깊이 만나가며,
              <br />
              주님께서 여전히 사랑하시는 그 사람으로
              <br />
              서로를 돌고 이웃을 사랑하는 삶을
              <br />
              배우고 살아가기를 소망합니다.
            </p>
            <p>
              모든 삶의 자리에
              <br />
              각자의 부분의 아름다움이 있음을
              <br />
              우리는 믿고 있습니다.
            </p>
            <p>
              말과 지식에만 머무르지 않고,
              <br />
              우리의 삶이 복음 위에 세워지도록,
              <br />
              주님의 사랑으로 함께 기도하며, 서로를 세워 줍니다.
            </p>
            <p>
              이사야 60:22의 약속으로,
              <br />
              가장 작은 한 사람을 통해 일하시는
              <br />
              하나님의 사랑이 흘러를 통해
              <br />
              세상으로 흘러가게 하실 것을 믿습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY INTRO SECTION ===== */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold leading-[1.7] font-serif">
            서로 돌아보아
            <br />
            사랑과 선행을 격려하며
          </h2>
          <p className="text-base md:text-lg font-bold mt-2 mb-12 font-serif">
            히브리서 10:24
          </p>

          <div className="space-y-6 text-gray-500 text-[15px] leading-[1.9]">
            <p>
              우리는
              <br />
              서로 사랑하는 것의 힘을
              <br />
              믿는 공동체입니다.
            </p>
            <p>
              우리는 혼자가 아니라,
              <br />
              서로의 삶을 통해 예수님을 만나고,
              <br />
              함께 웃고, 함께 울며, 함께 기뻐합니다.
            </p>
            <p>
              &ldquo;두세 사람이 내 이름으로 모인 곳에는
              <br />
              나도 그들 중에 있느니라&rdquo; 하신 주님의 말씀처럼,
              <br />
              우리는 우리의 교회 가운데 함께하시는
              <br />
              예수님의 임재를 믿습니다.
            </p>
          </div>

          <div className="mt-14">
            <Link
              href="/community"
              className="inline-block border border-gray-800 px-10 py-3 text-sm tracking-wider text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300"
            >
              공동체 소개
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STAFF LINK SECTION ===== */}
      <section className="py-14 bg-gray-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Link
            href="/staff"
            className="inline-block border border-gray-800 px-10 py-3 text-sm tracking-wider text-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            교역자 소개
          </Link>
        </div>
      </section>

      {/* ===== WORSHIP INFO SECTION ===== */}
      <section id="worship" className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/worship-cross.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 font-serif">
            예배 안내
          </h2>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-10">
              <span className="text-white/40 font-medium text-sm whitespace-nowrap w-24 shrink-0">
                예배시간
              </span>
              <div className="space-y-5 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8">
                  <span className="font-bold text-base whitespace-nowrap">
                    주일 예배
                  </span>
                  <span className="text-white/50 text-sm">주일 오전 9:30</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8">
                  <span className="font-bold text-base whitespace-nowrap">
                    영유아부 예배
                  </span>
                  <span className="text-white/50 text-sm">주일 오전 11:00</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8">
                  <span className="font-bold text-base whitespace-nowrap">
                    성경공부
                  </span>
                  <span className="text-white/50 text-sm">
                    토요일 오전 9:30 / 주일 오전 11:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOCATION SECTION ===== */}
      <section id="location" className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 font-serif">
            예배장소
          </h2>

          {/* Map */}
          <div className="w-full h-auto bg-gray-100 rounded-lg overflow-hidden mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/map.png"
              alt="교회 위치 약도"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-1">
            <p className="text-base font-medium text-gray-800">
              서울특별시 성동구 서울숲4길 17 지하 1층
            </p>
            <p className="text-sm text-gray-400">
              뚝섬역 8번 출구 / 서울숲역 5번 출구 도보 10분
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
