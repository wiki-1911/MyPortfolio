import { Mail, Github, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="grid grid-cols-4 gap-6 py-4 bg-gray-200 border-t text-gray-600 text-sm text-center justify-items-center">
      <span>© 2025 by Dat Tran</span>
      <span className="flex items-center">
        <Mail className="mr-1 text-red-500" /> Email: trandat2280600642@gmail.com
      </span>
      <a href="https://github.com/wiki-1911?tab=repositories" className="flex items-center">
        <Github className="mr-1 text-gray-700" /> Git: Trần Đạt (wiki-1911)
      </a>
      <span className="flex items-center">
        <Phone className="mr-1 text-green-500" /> Phone: 0343439171
      </span> 
    </footer>
  );
}
