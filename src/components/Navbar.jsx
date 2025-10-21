import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Trang chủ", path: "/about" },
    { label: "Những gì tôi làm?", path: "/whatido" },
    { label: "Bài viết", path: "/blog" },
    { label: "Liên hệ", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 shadow bg-white z-50">
      <h3 className="text-xl font-semibold text-blue-600">Trần Đạt</h3>
      <ul className="flex justify-center items-center gap-8">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`hover:text-blue-600 relative ${
                location.pathname === item.path
                  ? "text-blue-600 font-medium"
                  : ""
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
