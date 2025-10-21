import React from "react";

export default function JavaScript1() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed font-sans">
      <h1 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">
        JavaScript Cơ Bản: Biến, Kiểu Dữ Liệu và Toán Tử
      </h1>

      <p className="mb-6 text-lg">
        Bạn muốn làm cho trang web trở nên sống động và tương tác? Đó chính là nơi{" "}
        <strong>JavaScript</strong> tỏa sáng! Là ngôn ngữ lập trình phổ biến nhất trong phát triển web,
        JavaScript là bước đầu tiên để bạn chinh phục thế giới mã nguồn. Trong bài này, chúng ta sẽ khám
        phá những nền tảng cơ bản: <strong>biến</strong>, <strong>kiểu dữ liệu</strong>, và{" "}
        <strong>toán tử</strong>. Sẵn sàng chưa? Let’s dive in!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Mục tiêu bài học</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Hiểu cách khai báo biến với <code>var</code>, <code>let</code>, và <code>const</code>.</li>
        <li>Nắm vững các kiểu dữ liệu cơ bản: string, number, boolean, array, object.</li>
        <li>Sử dụng thành thạo các toán tử cơ bản và phép gán.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">1. Khai báo biến</h2>
      <p className="mb-4">Biến là nơi lưu trữ dữ liệu trong JavaScript. Có 3 cách khai báo biến:</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>
{`let name = "Đạt";     // Có thể thay đổi giá trị
const PI = 3.14;      // Không thể thay đổi giá trị
var age = 20;         // Cách cũ, ít dùng`}
        </code>
      </pre>

      <p className="mb-4">Giải thích nhanh:</p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li><code>let</code>: Phạm vi block, có thể gán lại giá trị.</li>
        <li><code>const</code>: Phạm vi block, không thể gán lại (nhưng giá trị bên trong object/array có thể thay đổi).</li>
        <li><code>var</code>: Phạm vi hàm, dễ gây lỗi, nên tránh dùng.</li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        💡 <strong>Mẹo:</strong> Hãy ưu tiên <code>const</code> cho giá trị không đổi và <code>let</code> khi cần thay đổi. Tránh <code>var</code> để mã sạch hơn!
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">2. Kiểu dữ liệu cơ bản</h2>
      <p className="mb-4">JavaScript có nhiều kiểu dữ liệu, từ đơn giản đến phức tạp:</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>
{`let name = "Đạt";           // string
let age = 21;               // number
let isStudent = true;       // boolean
let fruits = ["Táo", "Cam"]; // array
let person = { name: "Đạt", age: 21 }; // object`}
        </code>
      </pre>

      <p className="mb-6">
        Mỗi kiểu dữ liệu phục vụ một mục đích riêng. Ví dụ, <code>array</code> lưu danh sách, còn{" "}
        <code>object</code> lưu thông tin dạng cặp key-value.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">3. Toán tử cơ bản</h2>
      <p className="mb-4">
        Toán tử giúp bạn thực hiện các phép tính và so sánh. Dưới đây là những loại phổ biến:
      </p>

      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li><strong>Toán tử số học</strong>: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></li>
        <li><strong>Toán tử so sánh</strong>: <code>==</code>, <code>===</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code></li>
        <li><strong>Toán tử logic</strong>: <code>&&</code>, <code>||</code>, <code>!</code></li>
      </ul>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>
{`let a = 5, b = 10;
console.log(a + b); // 15
console.log(a > b); // false
console.log(a == "5"); // true
console.log(a === "5"); // false`}
        </code>
      </pre>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        ⚠️ <strong>Lưu ý:</strong> <code>==</code> chỉ so sánh giá trị, còn <code>===</code> so sánh cả giá trị và kiểu dữ liệu. Hãy dùng <code>===</code> để tránh lỗi bất ngờ!
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tóm tắt kiến thức</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Sử dụng <code>let</code> và <code>const</code> thay vì <code>var</code> để mã hiện đại hơn.</li>
        <li>Hiểu rõ sự khác biệt giữa <code>==</code> (so sánh lỏng lẻo) và <code>===</code> (so sánh nghiêm ngặt).</li>
        <li>Làm quen với các kiểu dữ liệu cơ bản để xử lý dữ liệu linh hoạt.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tài nguyên học thêm</h2>
      <p className="mb-4">Muốn đào sâu hơn về JavaScript? Hãy khám phá:</p>

      <ul className="list-disc list-inside mb-6 text-blue-600">
        <li>
          <a href="https://www.w3schools.com/js/" target="_blank" rel="noreferrer" className="hover:underline">
            W3Schools – JavaScript Basics
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank" rel="noreferrer" className="hover:underline">
            MDN – JavaScript Guide
          </a>
        </li>
      </ul>

      <p className="mt-8 text-center text-gray-600">
        Bài viết này hữu ích với bạn? Hãy chia sẻ và để lại bình luận để mình tiếp tục mang đến những nội dung chất lượng hơn nhé!
      </p>
    </div>
  );
}
