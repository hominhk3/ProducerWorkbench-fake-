// src/h.tsx
import React from "react";
import UpdateProducer from "./user/UpdateProducer";
import { Link } from "react-router-dom";

const HomePage2: React.FC = () => {
  return (
    <div className="bg-[#0D1117] text-white font-sans">
      {/* HERO */}
      <section className="px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4 leading-snug">
            Kết nối với nhà sản xuất âm nhạc phù hợp chỉ trong vài phút
          </h1>
          <p className="text-gray-400 mb-6">
            Tìm theo thể loại, ngân sách hoặc tham chiếu “giống âm thanh”.
            Chuyên gia đã xác minh, quy trình hợp tác gọn nhẹ và quản lý dự án
            an toàn.
          </p>
          <div className="flex gap-3 flex-wrap">
            <input
              type="text"
              placeholder="Nhập nghệ sĩ hoặc bài hát..."
              className="flex-1 px-4 py-2 rounded-md bg-[#111827] border border-gray-700 text-sm"
            />
            <Link to="/listProducer">
              <button className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700">
                Tìm Producer Ngay
              </button>
            </Link>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 rounded-md bg-[#1F2937] text-gray-300">
              Thử Tìm Kiếm Giống Âm Thanh
            </button>
            <button className="px-4 py-2 rounded-md bg-[#1F2937] text-gray-300">
              Duyệt Producer Hàng Đầu
            </button>
          </div>
        </div>

        <div className="bg-[#111827] rounded-xl p-4">
          <img
            src="https://images.unsplash.com/photo-1604608687069-39b0e2b9f3a2"
            alt="Studio"
            className="rounded-lg mb-4"
          />
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Ariana Knox</p>
              <p className="text-gray-400 text-sm">Pop • EDM • 4.9 (210)</p>
            </div>
            <span className="bg-green-600 text-xs px-2 py-1 rounded-md">
              Đã xác minh
            </span>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="px-8 py-12 bg-[#111827]">
        <h2 className="text-xl font-bold mb-6">
          Dành Cho Nghệ Sĩ & Khách Hàng
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Producer Đã Xác Minh"
            desc="Làm việc với các chuyên gia đã được kiểm chứng."
          />
          <FeatureCard
            title="Tìm Kiếm Giống Âm Thanh"
            desc="Mô tả âm thanh bạn muốn bằng cách tham chiếu nghệ sĩ hoặc bài hát."
          />
          <FeatureCard
            title="Hợp Tác Trơn Tru"
            desc="Chia sẻ brief, phản hồi và tiến độ rõ ràng."
          />
        </div>
      </section>

      <section className="px-8 py-12">
        <h2 className="text-xl font-bold mb-6">Dành Cho Producer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Tiếp Thị Tự Động" desc="Trưng bày sản phẩm..." />
          <FeatureCard title="Quản Lý Dự Án" desc="Giữ brief, phản hồi..." />
          <FeatureCard
            title="Phát Triển Sự Nghiệp"
            desc="Nhận huy hiệu, thu thập đánh giá."
          />
        </div>
      </section>

      <UpdateProducer />
    </div>
  );
};
// Component nhỏ cho box tính năng
type FeatureProps = { title: string; desc: string };
const FeatureCard: React.FC<FeatureProps> = ({ title, desc }) => (
  <div className="p-6 bg-[#1F2937] rounded-xl border border-gray-700 hover:bg-[#2D3748] transition">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export default HomePage2;
