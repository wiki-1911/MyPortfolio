import React from "react";

export default function JavaScript4() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed font-sans">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
        Xử Lý Sự Kiện trong JavaScript: Tạo Tương Tác Động Lực
      </h1>

      <p className="mb-6 text-lg">
        Bạn muốn trang web “phản hồi” mỗi khi người dùng nhấp chuột, nhập dữ liệu
        hay di chuột? Đó chính là sức mạnh của{" "}
        <strong>sự kiện (events)</strong> trong JavaScript! Sự kiện là “nhịp tim”
        của tương tác web, và bài viết này sẽ giúp bạn làm chủ cách xử lý chúng
        để tạo trải nghiệm người dùng mượt mà.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Mục tiêu bài học
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Hiểu khái niệm sự kiện và vai trò trong JavaScript.</li>
        <li>Thành thạo cách gắn và gỡ sự kiện với <code>addEventListener</code>.</li>
        <li>Áp dụng xử lý sự kiện qua các ví dụ thực tế như click và form.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        1. Cách gắn sự kiện
      </h2>
      <p className="mb-4">
        JavaScript cung cấp nhiều cách để gắn sự kiện, nhưng{" "}
        <code>addEventListener</code> là cách hiện đại và linh hoạt nhất.
      </p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`// Cách 1: Inline HTML (không khuyến khích)
<button onclick="sayHello()">Click me</button>

// Cách 2: addEventListener (khuyến khích)
document.querySelector("button").addEventListener("click", sayHello);

function sayHello() {
  alert("Xin chào!");
}`}</code>
      </pre>
      <p className="mb-6">
        Sử dụng <code>addEventListener</code> giúp tách biệt mã JavaScript khỏi HTML,
        khiến mã dễ bảo trì hơn.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        💡 <strong>Mẹo:</strong> Tránh dùng sự kiện inline trong HTML (
        <code>onclick</code>) để giữ mã sạch và dễ mở rộng!
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        2. Các loại sự kiện thông dụng
      </h2>
      <p className="mb-4">
        JavaScript hỗ trợ nhiều loại sự kiện để bắt các hành động của người dùng:
      </p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li><strong>click</strong>: Khi người dùng nhấp chuột.</li>
        <li><strong>input</strong>: Khi giá trị ô nhập thay đổi.</li>
        <li><strong>mouseover</strong>: Khi rê chuột qua phần tử.</li>
        <li><strong>submit</strong>: Khi gửi form.</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-600 mb-2">
        Ví dụ xử lý form:
      </h3>
      <p className="mb-4">Dưới đây là cách xử lý sự kiện khi người dùng gửi form:</p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`<form id="loginForm">
  <input type="text" placeholder="Nhập tên..." />
  <button type="submit">Đăng nhập</button>
</form>

<script>
  const form = document.getElementById("loginForm");
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Ngăn reload trang
    alert("Form đã được gửi!");
  });
</script>`}</code>
      </pre>
      <p className="mb-6">
        <code>preventDefault()</code> ngăn hành vi mặc định (như reload trang khi
        gửi form), giúp bạn kiểm soát tốt hơn.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tóm tắt kiến thức</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          Dùng <code>addEventListener</code> để gắn sự kiện linh hoạt và gỡ bằng{" "}
          <code>removeEventListener</code>.
        </li>
        <li>
          <code>preventDefault()</code> giúp chặn hành vi mặc định của trình duyệt.
        </li>
        <li>
          Đối tượng sự kiện (<code>event</code>) cung cấp thông tin chi tiết về hành
          động người dùng.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tài nguyên học thêm</h2>
      <p className="mb-4">Muốn tìm hiểu sâu hơn về sự kiện? Hãy khám phá:</p>
      <ul className="list-disc list-inside mb-6 text-blue-600">
        <li>
          <a
            href="https://www.w3schools.com/js/js_events.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            W3Schools – JavaScript Events
          </a>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            MDN – JavaScript Events
          </a>
        </li>
      </ul>

      <p className="mt-8 text-center text-gray-600">
        Bài viết này có giúp bạn làm chủ các sự kiện trong JavaScript? Hãy chia sẻ
        và để lại bình luận để mình tiếp tục mang đến những nội dung chất lượng
        hơn nhé!
      </p>
    </div>
  );
}
