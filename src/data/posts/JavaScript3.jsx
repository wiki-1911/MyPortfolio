import React from "react";

export default function JavaScript3() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed font-sans">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
        Tương Tác với DOM trong JavaScript: Biến Trang Web Thành Sống Động
      </h1>

      <p className="mb-6 text-lg">
        Bạn muốn trang web của mình trở nên tương tác, thay đổi nội dung theo ý
        người dùng? Đó chính là lúc{" "}
        <strong>DOM (Document Object Model)</strong> phát huy sức mạnh! DOM là
        cầu nối giữa JavaScript và HTML, cho phép bạn thao túng mọi thứ trên
        trang web. Hãy cùng khám phá cách sử dụng DOM để làm chủ giao diện web!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Mục tiêu bài học
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Hiểu DOM là gì và vai trò của nó trong phát triển web.</li>
        <li>Thành thạo cách chọn, thay đổi, thêm, hoặc xóa phần tử HTML.</li>
        <li>
          Ứng dụng DOM để tạo trải nghiệm tương tác theo sự kiện người dùng.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        1. Truy cập phần tử DOM
      </h2>
      <p className="mb-4">
        DOM biểu diễn trang web dưới dạng cây đối tượng, và JavaScript giúp bạn
        truy cập các phần tử HTML dễ dàng.
      </p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`// Lấy phần tử theo ID
const heading = document.getElementById("title");

// Lấy theo class
const items = document.getElementsByClassName("item");

// Lấy bằng querySelector
const button = document.querySelector(".btn");`}</code>
      </pre>
      <p className="mb-6">
        <code>document.querySelector()</code> là “trợ thủ đắc lực” vì cú pháp
        ngắn gọn, linh hoạt, và tương tự CSS selector. Nếu cần lấy nhiều phần
        tử, dùng <code>querySelectorAll()</code>!
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        💡 <strong>Mẹo:</strong> Hãy ưu tiên <code>querySelector</code> để mã
        hiện đại và dễ đọc hơn!
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        2. Thay đổi nội dung và thuộc tính
      </h2>
      <p className="mb-4">
        Sau khi chọn được phần tử, bạn có thể thay đổi nội dung hoặc thuộc tính
        của nó:
      </p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`// Thay đổi nội dung
document.getElementById("title").textContent = "Xin chào JavaScript!";

// Thay đổi thuộc tính
document.querySelector("img").src = "new-image.jpg";`}</code>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mb-2">Ví dụ thực tế:</h3>
      <p className="mb-4">Tạo một nút bấm để thay đổi tiêu đề trang web:</p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`<h1 id="title">Hello World</h1>
<button onclick="changeText()">Đổi nội dung</button>

<script>
  function changeText() {
    document.getElementById("title").textContent = "Nội dung đã được thay đổi!";
  }
</script>`}</code>
      </pre>
      <p className="mb-6">
        Khi người dùng nhấn nút, tiêu đề sẽ thay đổi ngay lập tức – đó là sức
        mạnh của DOM!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        3. Thêm và xóa phần tử
      </h2>
      <p className="mb-4">
        Bạn có thể tạo mới hoặc xóa phần tử HTML để làm phong phú giao diện:
      </p>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`const newItem = document.createElement("li");
newItem.textContent = "Mục mới";
document.querySelector("ul").appendChild(newItem);

// Xóa phần tử
document.querySelector("li").remove();`}</code>
      </pre>
      <p className="mb-6">
        <code>appendChild()</code> thêm phần tử mới vào DOM, còn{" "}
        <code>remove()</code> xóa phần tử khỏi cây DOM.
      </p>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        ⚠️ <strong>Lưu ý:</strong> Khi thêm/xóa phần tử, hãy đảm bảo chọn đúng
        cha/con để tránh lỗi!
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        Tóm tắt kiến thức
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          DOM là cây đối tượng đại diện cho trang HTML, cho phép JavaScript thao
          túng nội dung và cấu trúc.
        </li>
        <li>
          Dùng <code>querySelector</code> để chọn phần tử và{" "}
          <code>createElement</code>, <code>appendChild</code>,{" "}
          <code>remove</code> để chỉnh sửa DOM.
        </li>
        <li>
          Hiểu DOM là nền tảng để học các framework như React, Vue, hay Angular.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        Tài nguyên học thêm
      </h2>
      <p className="mb-4">Muốn đi sâu hơn vào DOM? Hãy tham khảo:</p>
      <ul className="list-disc list-inside mb-6 text-blue-600">
        <li>
          <a
            href="https://www.w3schools.com/js/js_htmldom.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            W3Schools – HTML DOM
          </a>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            MDN – Document Object Model
          </a>
        </li>
      </ul>

      <p className="mt-8 text-center text-gray-600">
        Bài viết này có giúp bạn hiểu rõ hơn về DOM? Hãy chia sẻ và để lại bình
        luận để mình tiếp tục mang đến những nội dung chất lượng hơn nhé!
      </p>
    </div>
  );
}
