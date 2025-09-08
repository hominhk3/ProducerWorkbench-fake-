import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0₫",
    desc: "Dành cho người mới thử nghiệm",
    features: [
      "Tạo hồ sơ cá nhân",
      "Upload tối đa 2 demo nhạc",
      "Tìm kiếm Producer cơ bản",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "299.000₫ / tháng",
    desc: "Phù hợp cho nghệ sĩ nghiêm túc",
    features: [
      "Upload không giới hạn demo",
      "Ưu tiên hiển thị trong kết quả tìm kiếm",
      "Nhắn tin trực tiếp với Producer",
      "Thống kê lượt xem hồ sơ",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "699.000₫ / tháng",
    desc: "Gói cao cấp cho Producer chuyên nghiệp",
    features: [
      "Tất cả tính năng của Pro",
      "Badge Premium trên hồ sơ",
      "Hỗ trợ 1-1 từ đội ngũ ProdMatch",
      "Tham gia showcase & sự kiện độc quyền",
    ],
    highlight: false,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const UpdateProducer: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D1117] text-white py-16 px-6 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-center"
      >
        Chọn gói dịch vụ để trở thành Producer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 mb-12 text-center max-w-xl"
      >
        Đăng ký gói dịch vụ để mở khóa toàn bộ tính năng, kết nối nghệ sĩ và phát
        triển sự nghiệp âm nhạc của bạn.
      </motion.p>

      {/* PLANS GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            custom={i}
            initial="hidden"
            animate="show"
            variants={cardVariants}
            className={`rounded-2xl p-6 border ${
              plan.highlight
                ? "bg-gradient-to-b from-purple-600/20 to-purple-800/10 border-purple-500 shadow-lg shadow-purple-900/30"
                : "bg-[#111827] border-gray-700"
            } flex flex-col`}
          >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-2xl font-bold mb-2">{plan.price}</p>
            <p className="text-gray-400 mb-6">{plan.desc}</p>

            <ul className="flex-1 space-y-3 text-sm mb-6">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-400" /> {f}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-md font-medium transition ${
                plan.highlight
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {plan.highlight ? "Đăng ký ngay" : "Chọn gói này"}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpdateProducer;
