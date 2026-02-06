import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Marquee Banner */}
      <div className="overflow-hidden py-6 border-b border-gray-800">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-3xl md:text-5xl font-bold tracking-widest mx-8 text-gray-700"
            >
              THE SMALLEST CHURCH
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Church Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">THE 작은 교회</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              &ldquo;작은 자, 더 작은 자&rdquo; 한 사람을 귀히 여기는
              <br />
              THE 작은 교회입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">바로가기</h3>
            <ul className="space-y-2">
              {[
                { href: "/#about", label: "교회 소개" },
                { href: "/community", label: "공동체 소개" },
                { href: "/staff", label: "교역자 소개" },
                { href: "/#worship", label: "예배 안내" },
                { href: "/#location", label: "오시는 길" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">연락처</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p>서울특별시 성동구 서울숲4길 17 지하 1층</p>
              <p>뚝섬역 8번 출구 / 서울숲역 5번 출구 도보 10분</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} THE 작은 교회. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
