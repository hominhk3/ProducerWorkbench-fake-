import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  ShieldCheck,
  Star,
  BadgeCheck,
  Award,
  Music,
  UserRound,
  ChevronRight,
} from "lucide-react";

type Producer = {
  id: string;
  name: string;
  avatar: string;
  genres: string[];
  verified?: boolean;
  pro?: boolean;
  topRated?: boolean;
  rating: number;
  reviews: number;
  summary: string; // small tagline
  stat1: string;
  stat2: string;
};

const producers: Producer[] = [
  {
    id: "1",
    name: "NovaBeats",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    genres: ["Hip-Hop", "Trap", "Lo-fi"],
    verified: true,
    topRated: true,
    rating: 4.9,
    reviews: 320,
    summary: "Đã hoàn thành 150+ dự án",
    stat1: "150+ dự án",
    stat2: "Xếp hạng cao",
  },
  {
    id: "2",
    name: "EchoLake",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=300&auto=format&fit=crop",
    genres: ["Pop", "Synthwave", "Indie"],
    pro: true,
    rating: 4.8,
    reviews: 210,
    summary: "Âm thanh hiện đại",
    stat1: "120+ dự án",
    stat2: "5 năm kinh nghiệm",
  },
  {
    id: "3",
    name: "PulseCraft",
    avatar:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=300&auto=format&fit=crop",
    genres: ["EDM", "House", "Techno"],
    verified: true,
    topRated: true,
    rating: 4.7,
    reviews: 185,
    summary: "200+ buổi phát hành",
    stat1: "200+ publish",
    stat2: "Top Rated",
  },
  {
    id: "4",
    name: "SoulFoundry",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop",
    genres: ["R&B", "Neo-soul", "Pop"],
    rating: 5.0,
    reviews: 98,
    summary: "Âm sắc ấm áp",
    stat1: "80+ dự án",
    stat2: "Khách hàng quốc tế",
  },
  {
    id: "5",
    name: "DrumSmith",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=300&auto=format&fit=crop",
    genres: ["Rock", "Alternative", "Metal"],
    verified: true,
    rating: 4.6,
    reviews: 140,
    summary: "Năng lượng cao",
    stat1: "90+ ở tour",
    stat2: "Châu Âu",
  },
  {
    id: "6",
    name: "AmbientArc",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop",
    genres: ["Ambient", "Chill", "Downtempo"],
    rating: 4.8,
    reviews: 76,
    summary: "Khống gian thư giãn",
    stat1: "Bản nhạc phim",
    stat2: "Nhạc game",
  },
];

const tagClass =
  "inline-flex items-center gap-1 rounded-md bg-[#0E1B2A]/40 text-blue-200 px-2 py-0.5 text-xs border border-white/5";

const Pill: React.FC<
  React.PropsWithChildren<{ tone?: "green" | "slate" | "purple"; icon?: React.ReactNode }>
> = ({ children, tone = "slate", icon }) => {
  const map: Record<string, string> = {
    green:
      "bg-emerald-500/10 text-emerald-300 border border-emerald-400/20",
    slate: "bg-white/5 text-slate-200 border border-white/10",
    purple:
      "bg-fuchsia-500/10 text-fuchsia-200 border border-fuchsia-400/20",
  };
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-md ${map[tone]}`}>
      {icon}
      {children}
    </span>
  );
};

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#0B1320]/70 bg-[#0B1320]/95 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-sm bg-fuchsia-500" />
          <span className="font-semibold">ProdMatch</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a className="hover:text-white" href="#">Tìm Nhà Sản Xuất</a>
          <a className="hover:text-white" href="#">Cách Hoạt Động</a>
          <a className="hover:text-white" href="#">Dành Cho Producer</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="rounded-md border border-white/10 px-3 py-1.5 text-sm hover:bg-white/5">
            Đăng nhập
          </button>
          <button className="rounded-md bg-fuchsia-600 px-3 py-1.5 text-sm hover:bg-fuchsia-700">
            Đăng ký
          </button>
        </div>
      </div>
    </header>
  );
};

const SearchHero: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="rounded-2xl border border-white/10 bg-[#0F1724] p-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          Tìm Producer phù hợp cho âm nhạc của bạn
        </h1>
        <p className="text-slate-300 mt-2 text-sm">
          Nhập nghệ sĩ/bài hát, lọc theo thể loại hoặc dán link YouTube/Spotify để phân tích.
        </p>

        {/* Search 1 */}
        <div className="mt-5 grid gap-3">
          <div className="flex rounded-lg border border-white/10 bg-white/5 px-3 py-2 items-center">
            <Search className="w-5 h-5 text-slate-400 mr-2" />
            <input
              placeholder="Tìm theo nghệ sĩ, bài hát hoặc từ khóa..."
              className="bg-transparent outline-none w-full placeholder:text-slate-400 text-sm"
            />
            <button className="ml-3 px-3 py-1.5 rounded-md bg-fuchsia-600 text-sm hover:bg-fuchsia-700">
              Tìm kiếm
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10">
              <SlidersHorizontal className="w-4 h-4" />
              Thể loại: Tất cả
            </button>
            <button className="flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10">
              <SlidersHorizontal className="w-4 h-4" />
              Tâm trạng: Bất kỳ
            </button>
            <button className="flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-3 py-1.5 text-sm hover:bg-white/10">
              <SlidersHorizontal className="w-4 h-4" />
              Dải tốc độ: 60–180
            </button>
          </div>

          <div className="flex rounded-lg border border-white/10 bg-white/5 px-3 py-2 items-center">
            <Music className="w-5 h-5 text-slate-400 mr-2" />
            <input
              placeholder="Dán link YouTube hoặc Spotify để phân tích tệp..."
              className="bg-transparent outline-none w-full placeholder:text-slate-400 text-sm"
            />
            <button className="ml-3 px-3 py-1.5 rounded-md bg-white/5 text-sm hover:bg-white/10 border border-white/10">
              Phân tích
            </button>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <button className="inline-flex items-center gap-2 rounded-md bg-emerald-600/90 px-3 py-1.5 text-sm hover:bg-emerald-600">
              <Search className="w-4 h-4" />
              Thử Tìm Kiếm Giống Âm Thanh
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10 border border-white/10">
              <Award className="w-4 h-4" />
              Duyệt Producer Hàng Đầu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProducerCard: React.FC<{ p: Producer; index: number }> = ({ p, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="rounded-2xl border border-white/10 bg-[#0F1724] p-5 hover:border-fuchsia-500/30 transition group"
    >
      <div className="flex items-center gap-3">
        <img
          src={p.avatar}
          alt={p.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{p.name}</h3>
            {p.verified && (
              <Pill tone="green" icon={<ShieldCheck className="w-3.5 h-3.5" />}>
                Đã xác minh
              </Pill>
            )}
            {p.pro && <Pill tone="purple">Pro</Pill>}
            {p.topRated && <Pill tone="slate">Top Rated</Pill>}
          </div>
          <div className="mt-1 flex flex-wrap gap-1">
            {p.genres.map((g) => (
              <span key={g} className={tagClass}>
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 text-sm text-slate-300">
        <Star className="w-4 h-4 text-amber-400" />
        <span className="font-medium">{p.rating}</span>
        <span className="text-slate-400">({p.reviews} đánh giá)</span>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">
          <span className="text-slate-300">{p.summary}</span>
        </div>
        <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 flex items-center justify-between">
          <div className="text-slate-300">
            <div>{p.stat1}</div>
            <div className="text-slate-400 text-xs">{p.stat2}</div>
          </div>
          <BadgeCheck className="w-5 h-5 text-fuchsia-400" />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <UserRound className="w-4 h-4" />
          <span>Xem hồ sơ</span>
        </div>
        <button className="inline-flex items-center gap-2 rounded-md bg-fuchsia-600 px-3 py-1.5 text-sm hover:bg-fuchsia-700">
          Xem hồ sơ <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

const GridSection: React.FC = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Gợi ý thông minh</h2>
        <p className="text-slate-400 text-sm">
          12 Producer phù hợp • Sắp xếp: Đánh giá cao
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {producers.map((p, i) => (
          <ProducerCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 py-8 text-sm text-slate-400">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-sm bg-fuchsia-500" />
          <span>© 2025 ProdMatch</span>
        </div>
        <nav className="flex items-center gap-4">
          <a className="hover:text-white" href="#">Điều khoản</a>
          <a className="hover:text-white" href="#">Quyền riêng tư</a>
          <a className="hover:text-white" href="#">Hỗ trợ</a>
        </nav>
      </div>
    </footer>
  );
};

const ProducerList: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B1320] text-white">
      <Header />
      <SearchHero />
      <GridSection />
      <Footer />
    </div>
  );
};

export default ProducerList;
