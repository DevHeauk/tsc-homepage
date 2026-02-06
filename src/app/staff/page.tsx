export default function StaffPage() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="relative h-[340px] md:h-[420px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/hero-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pb-12 w-full">
          <p className="text-white/50 text-xs tracking-wider mb-2">
            더작은교회
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white font-serif">
            교역자 소개
          </h1>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-lg md:text-xl font-bold mb-12 pb-5 border-b-2 border-gray-900">
            더작은 교회의 교역자를 소개합니다
          </h2>

          {/* 조은상 담임전도사 */}
          <div>
            <div className="flex items-baseline gap-3 mb-8">
              <h3 className="text-2xl md:text-3xl font-bold font-serif">
                조은상
              </h3>
              <span className="text-sm text-gray-400">담임전도사</span>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-5 mb-8 pb-6 border-b border-gray-200">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/staff-profile.jpg"
                  alt="조은상 담임전도사"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-bold text-sm md:text-base text-gray-700">
                아신대학교(ACTS) 신학대학원 재학
              </p>
            </div>

            {/* Description */}
            <div className="text-gray-500 text-[15px] leading-[1.9] space-y-6">
              <p>
                직장과 사역을 병행하며
                <br />
                삶의 현장 한가운데서
                <br />
                주님을 따라 섬기고 있습니다.
              </p>
              <p>
                삶의 자리에서 만나는
                <br />
                작은 자 한 사람이
                <br />
                복음을 통해 하나님의 관점을 배우고
                <br />
                주님 안에 풍성한 삶을 살아가도록
                <br />
                마음을 다해 돕고 있습니다.
              </p>
              <p>
                주님의 사랑이 작은 자 한 사람을 통해
                <br />
                또 다른 작은 자에게 흘러가고,
                <br />
                또 다른 작은 자에게 흘러가도록,
                <br />
                복음을 전하며, 많은 이들의 삶에
                <br />
                주님의 사랑이 스며들도록 사역을 이어가고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
