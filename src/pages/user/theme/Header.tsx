import React, { useState } from "react";
import {
  Bell,
  User,
  Settings,
  LogOut,
  ChevronDown,
  FolderKanban,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaRankingStar } from "react-icons/fa6";

const Dropdown: React.FC<{
  label: React.ReactNode;
  items: { icon?: React.ElementType; text: string; path: string }[];
  hover?: boolean; // Thêm props hover
}> = ({ label, items, hover = false }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => hover && setOpen(true)}
      onMouseLeave={() => hover && setOpen(false)}
    >
      <button
        onClick={() => !hover && setOpen(!open)}
        className="flex items-center gap-1 px-2 py-1 rounded-md hover:text-purple-400 transition"
      >
        {label}
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-52 rounded-md bg-[#111827] shadow-xl border border-gray-700 z-50">
          <ul className="py-2">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-200 hover:bg-purple-600/30 cursor-pointer transition"
                >
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 w-full"
                  >
                    {Icon && <Icon className="w-4 h-4 text-purple-400" />}
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="bg-[#0D1117] border-b border-gray-800 shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold text-white tracking-wide">
        <Link to="/">ProdMatch</Link>
      </div>

      {/* Nav Menu */}
      <nav className="hidden md:flex items-center gap-6 text-gray-300 text-sm font-medium">
        <Link to="/" className="hover:text-purple-400 transition">
          Trang chủ
        </Link>

        <Dropdown
          hover
          label={<span className="flex items-center gap-1">Producer</span>}
          items={[
            {
              icon: FaRankingStar,
              text: "Bảng xếp hạng",
              path: "/collab-request",
            },
            {
              icon: FolderKanban,
              text: "Danh sách Producer",
              path: "/listProducer",
            },
          ]}
        />

        <Link to="/contractManage" className="hover:text-purple-400 transition">
          Hợp đồng
        </Link>

        {/* Dropdown cho Dự án */}
        <Dropdown
          hover
          label={<span className="flex items-center gap-1">Dự án</span>}
          items={[
            {
              icon: ClipboardList,
              text: "Yêu cầu hợp tác",
              path: "/collab-request",
            },
            {
              icon: FolderKanban,
              text: "Quản lý dự án",
              path: "/projectManage",
            },
          ]}
        />

        <Link to="/complaintList" className="hover:text-purple-400 transition">
          Khiếu nại
        </Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-gray-800 transition">
          <Bell className="w-5 h-5 text-gray-300" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User Dropdown */}
        <Dropdown
          label={
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span className="hidden sm:block">Tài khoản</span>
            </div>
          }
          items={[
            { icon: User, text: "Hồ sơ user", path: "/userProfile" },
            { icon: User, text: "Hồ sơ producer", path: "/portfolio" },
            { icon: Settings, text: "Cài đặt", path: "/setting" },
            { icon: LogOut, text: "Đăng xuất", path: "/logout" },
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
