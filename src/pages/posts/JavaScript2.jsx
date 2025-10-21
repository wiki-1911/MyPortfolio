import React from "react";

export default function JavaScript2() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed font-sans">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
        Hàm trong JavaScript: Công Cụ Tái Sử Dụng Mã Hiệu Quả
      </h1>

      <p className="mb-6 text-lg">
        Hàm (Function) là “trợ thủ đắc lực” trong JavaScript, giúp bạn tái sử dụng mã, giảm lặp lại và khiến chương trình gọn gàng hơn.
        Từ hàm truyền thống đến hàm mũi tên hiện đại, bài viết này sẽ dẫn bạn qua các khái niệm cốt lõi để sử dụng hàm như một pro!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Mục tiêu bài học</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Hiểu cách khai báo và gọi hàm trong JavaScript.</li>
        <li>Nắm vững cách truyền tham số và trả về giá trị.</li>
        <li>Phân biệt hàm truyền thống, biểu thức hàm, và hàm mũi tên (arrow function).</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">1. Khai báo và gọi hàm</h2>
      <p className="mb-4">Hàm là khối mã thực hiện một nhiệm vụ cụ thể. Bạn có thể gọi hàm bất cứ khi nào cần!</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`function sayHello(name) {
  return "Xin chào, " + name;
}

console.log(sayHello("Đạt")); // Output: Xin chào, Đạt`}</code>
      </pre>

      <p className="mb-6">
        Ở đây, <code>sayHello</code> nhận tham số <code>name</code> và trả về chuỗi chào hỏi. Đơn giản nhưng mạnh mẽ!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">2. Biểu thức hàm & Hàm mũi tên</h2>
      <p className="mb-4">
        Ngoài cách khai báo hàm truyền thống, JavaScript còn hỗ trợ <strong>biểu thức hàm</strong> và <strong>hàm mũi tên</strong> (arrow function)
        với cú pháp ngắn gọn hơn.
      </p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`// Biểu thức hàm
const add = function(a, b) {
  return a + b;
};

// Hàm mũi tên
const multiply = (a, b) => a * b;

console.log(add(2, 3));      // Output: 5
console.log(multiply(2, 3)); // Output: 6`}</code>
      </pre>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        💡 <strong>Mẹo:</strong> Hàm mũi tên rất gọn gàng, đặc biệt khi dùng trong callback. Nhưng lưu ý:
        chúng không có <code>this</code> riêng, phù hợp cho các hàm đơn giản!
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">3. Tham số mặc định và Rest Parameter</h2>
      <p className="mb-4">
        JavaScript cho phép đặt tham số mặc định và sử dụng <code>rest parameter</code> để xử lý nhiều đối số linh hoạt.
      </p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`function greet(name = "bạn") {
  console.log("Xin chào, " + name);
}

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}

greet();                 // Output: Xin chào, bạn
console.log(sum(1, 2, 3, 4)); // Output: 10`}</code>
      </pre>

      <p className="mb-6">
        - <strong>Tham số mặc định</strong>: Nếu không truyền tham số, <code>name</code> sẽ lấy giá trị "bạn".<br />
        - <strong>Rest parameter</strong>: <code>...numbers</code> gom tất cả đối số thành một mảng, tiện lợi cho các phép tính như tổng.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tóm tắt kiến thức</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Hàm có thể được khai báo bằng <code>function</code>, biểu thức hàm, hoặc hàm mũi tên.</li>
        <li>Hàm mũi tên ngắn gọn, không có <code>this</code> riêng, lý tưởng cho callback.</li>
        <li>Sử dụng <code>rest parameter</code> để xử lý số lượng đối số linh hoạt.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tài nguyên học thêm</h2>
      <p className="mb-4">Muốn tìm hiểu thêm về hàm trong JavaScript? Hãy xem:</p>

      <ul className="list-disc list-inside mb-6 text-blue-600">
        <li>
          <a
            href="https://www.w3schools.com/js/js_functions.asp"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            W3Schools – JavaScript Functions
          </a>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            MDN – Function Reference
          </a>
        </li>
      </ul>

      <p className="mt-8 text-center text-gray-600">
        Bài viết này có giúp bạn hiểu rõ hơn về hàm trong JavaScript? Hãy chia sẻ và để lại bình luận để mình tiếp tục
        mang đến những nội dung chất lượng nhé!
      </p>
    </div>
  );
}
