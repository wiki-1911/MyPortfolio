import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/Card.jsx";
import Java1 from "../assets/images/java1.png";
import Java2 from "../assets/images/java2.png";
import Java3 from "../assets/images/java3.png";
import JavaScript1 from "../assets/images/JavaScript1.png";
import JavaScript2 from "../assets/images/JavaScript2.png";
import JavaScript3 from "../assets/images/JavaScript3.png";
import JavaScript4 from "../assets/images/JavaScript4.png";
import JavaScript5 from "../assets/images/JavaScript5.png";
import JavaScript6 from "../assets/images/JavaScript6.png";

const posts = [
  {
    id: 1,
    title: "Giới thiệu về Java – Ngôn ngữ lập trình đa nền tảng",
    desc: "Tìm hiểu cách Java hoạt động, cú pháp cơ bản và đặc điểm nổi bật giúp nó phổ biến trong lập trình backend.",
    link: "/posts/java1",
    image: Java1,
  },
  {
    id: 2,
    title: "Java OOP – Hiểu rõ 4 tính chất cốt lõi",
    desc: "Tổng quan về Tính kế thừa, Đa hình, Trừu tượng và Đóng gói trong Java, kèm ví dụ minh họa.",
    image: Java2,
    link: "/posts/java2",
  },
  {
    id: 3,
    title: "Xử lý ngoại lệ trong Java (Exception Handling)",
    desc: "Cách sử dụng try-catch-finally và tạo ngoại lệ tùy chỉnh để kiểm soát lỗi hiệu quả.",
    link: "/posts/java3",
    image: Java3,
  },
  {
    id: 4,
    title: "JavaScript Cơ bản – Biến, Kiểu dữ liệu và Toán tử",
    desc: "Bài viết giúp bạn nắm được cú pháp cơ bản trong JavaScript và cách khai báo biến với var, let, const.",
    link: "/posts/javascript1",
    image: JavaScript1,
  },
  {
    id: 5,
    title: "Hàm (Function) trong JavaScript",
    desc: "Cách khai báo hàm, hàm mũi tên (arrow function) và cách truyền tham số.",
    link: "/posts/javascript2",
    image: JavaScript2,
  },
  {
    id: 6,
    title: "DOM Manipulation – Tương tác với HTML bằng JavaScript",
    desc: "Cách truy xuất và thay đổi nội dung trang web thông qua DOM API.",
    link: "/posts/javascript3",
    image: JavaScript3,
  },
  {
    id: 7,
    title: "JavaScript ES6+ – Những tính năng mới nổi bật",
    desc: "Khám phá destructuring, template literal, spread/rest, module import/export và nhiều hơn nữa.",
    link: "/posts/javascript4",
    image: JavaScript4,
  },
  {
    id: 8,
    title: "Promise & Async/Await – Xử lý bất đồng bộ trong JavaScript",
    desc: "Học cách xử lý dữ liệu bất đồng bộ và tránh callback hell với Promise, async và await.",
    link: "/posts/javascript5",
    image: JavaScript5,
  },
  {
    id: 9,
    title: "Fetch API – Gửi yêu cầu HTTP trong JavaScript",
    desc: "Tìm hiểu cách lấy dữ liệu từ server bằng Fetch API và xử lý JSON.",
    link: "/posts/javascript6",
    image: JavaScript6,
  },
];

export default function Blog() {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">
        Blog Lập Trình của Trần Đạt
      </h2>
      <p className="text-center mb-10 text-gray-600">
        Chào mừng bạn đến với blog chia sẻ kiến thức về Java và JavaScript!  
        Dưới đây là 9 bài viết nổi bật mình đã tổng hợp từ NetAcad, W3Schools, và nhiều nguồn khác.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={post.link}>
              <Card className="group border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2 group-hover:text-blue-700 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.desc}</p>
                  <span className="text-pink-500 font-medium group-hover:underline">
                    Đọc bài viết →
                  </span>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
