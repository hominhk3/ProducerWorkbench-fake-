import React from "react";
import {
  Search,
  Instagram,
  Twitter,
  Youtube,
  Github,
  Music,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* Logo + Search */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Music className="w-6 h-6 text-purple-400 animate-pulse" />
            <h2 className="text-xl font-bold text-white">ProdMatch</h2>
          </div>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            Kết nối nghệ sĩ với producer chuyên nghiệp. Tìm kiếm theo thể loại,
            ngân sách, hoặc Sound-Alike.
          </p>

          {/* Search box */}
          <div className="bg-[#111827] p-3 rounded-xl shadow-md hover:shadow-lg transition">
            <div className="flex items-center bg-[#0D1117] rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-purple-500">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Tìm producer, thể loại, địa điểm..."
                className="ml-2 flex-1 bg-transparent text-sm focus:outline-none text-gray-300 placeholder-gray-500"
              />
            </div>
            <div className="flex gap-3 mt-3 text-sm">
              {["Sound-Alike", "Pop", "Hip-hop"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-md bg-[#1F2937] text-gray-400 hover:text-white hover:bg-purple-600/60 transition cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Column: Sản phẩm */}
        <div>
          <h3 className="font-semibold text-white mb-4">Sản phẩm</h3>
          <ul className="space-y-2 text-sm">
            {["Tìm Producer", "Hợp đồng", "Cột mốc & Tiến độ", "Quản lý thanh toán"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer relative group"
                >
                  <span>{item}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-purple-400 transition-all group-hover:w-full"></span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column: Tài nguyên */}
        <div>
          <h3 className="font-semibold text-white mb-4">Tài nguyên</h3>
          <ul className="space-y-2 text-sm">
            {["Hướng dẫn", "Câu hỏi thường gặp", "Blog", "Trung tâm trợ giúp"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer relative group"
                >
                  <span>{item}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-purple-400 transition-all group-hover:w-full"></span>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column: Công ty */}
        <div>
          <h3 className="font-semibold text-white mb-4">Công ty</h3>
          <ul className="space-y-2 text-sm">
            {["Về chúng tôi", "Tuyển dụng", "Điều khoản", "Quyền riêng tư"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer relative group"
                >
                  <span>{item}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-purple-400 transition-all group-hover:w-full"></span>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        {/* Language & Currency */}
        <div className="flex gap-4 mb-3 md:mb-0">
          <span className="px-2 py-1 rounded-md bg-[#111827] cursor-pointer hover:bg-purple-500 hover:text-white transition">
            VN
          </span>
          <span className="px-2 py-1 rounded-md bg-[#111827] cursor-pointer hover:bg-purple-500 hover:text-white transition">
            USD
          </span>
        </div>

        {/* Social */}
        <div className="flex gap-5">
          {[Instagram, Twitter, Youtube, Github].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="hover:text-purple-400 transform hover:scale-110 transition"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
