import React from "react";

export default function JavaScript5() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed font-sans">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
        Xử Lý Bất Đồng Bộ trong JavaScript: Promise & Async/Await
      </h1>

      <p className="mb-6 text-lg">
        JavaScript là ngôn ngữ đơn luồng, nhưng đừng lo! Với{" "}
        <strong>Promise</strong> và <strong>async/await</strong>, bạn có thể xử lý
        nhiều tác vụ bất đồng bộ như tải dữ liệu hay chờ phản hồi từ API một cách
        mượt mà. Trong bài này, chúng ta sẽ khám phá cách làm chủ bất đồng bộ để
        viết mã sạch và hiệu quả!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Mục tiêu bài học
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Hiểu khái niệm bất đồng bộ và tại sao nó quan trọng.</li>
        <li>
          Nắm vững cách sử dụng <code>Promise</code> để xử lý tác vụ bất đồng bộ.
        </li>
        <li>
          Làm quen với cú pháp <code>async/await</code> để viết mã dễ đọc hơn.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        1. Promise cơ bản
      </h2>
      <p className="mb-4">
        <code>Promise</code> là một đối tượng đại diện cho kết quả của một tác vụ
        bất đồng bộ, có thể thành công hoặc thất bại. Nó giúp tránh “callback
        hell” và làm mã rõ ràng hơn.
      </p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Thành công!"), 2000);
});

promise.then(result => console.log(result)); // Output sau 2 giây: Thành công!`}</code>
      </pre>

      <p className="mb-4">Promise có ba trạng thái:</p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          <code>pending</code>: Đang chờ xử lý.
        </li>
        <li>
          <code>fulfilled</code>: Hoàn thành thành công.
        </li>
        <li>
          <code>rejected</code>: Thất bại.
        </li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        💡 <strong>Mẹo:</strong> Dùng <code>.catch()</code> để xử lý lỗi trong
        Promise, ví dụ: <code>promise.catch(err =&gt; console.log(err))</code>.
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        2. Async/Await: Cú pháp hiện đại
      </h2>
      <p className="mb-4">
        <code>Async/await</code> là cách viết ngắn gọn và dễ hiểu hơn để làm việc
        với Promise, đặc biệt khi xử lý nhiều tác vụ bất đồng bộ.
      </p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`async function fetchData() {
  try {
    const data = await new Promise(resolve =>
      setTimeout(() => resolve("Dữ liệu đã tải!"), 2000)
    );
    console.log(data); // Output sau 2 giây: Dữ liệu đã tải!
  } catch (error) {
    console.log("Lỗi:", error);
  }
}

fetchData();`}</code>
      </pre>

      <p className="mb-6">
        - <code>async</code>: Đánh dấu hàm là bất đồng bộ.
        <br />- <code>await</code>: Tạm dừng để chờ Promise hoàn thành, chỉ dùng
        trong hàm <code>async</code>.
        <br />- <code>try...catch</code>: Xử lý lỗi tương tự <code>.catch()</code>{" "}
        của Promise.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        ⚠️ <strong>Lưu ý:</strong> Luôn bọc <code>await</code> trong{" "}
        <code>try...catch</code> để xử lý lỗi an toàn!
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        Tóm tắt kiến thức
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          <code>Promise</code> giúp xử lý bất đồng bộ sạch sẽ, thay thế callback
          lồng nhau.
        </li>
        <li>
          <code>async/await</code> là cú pháp hiện đại, giúp mã dễ đọc như mã đồng
          bộ.
        </li>
        <li>
          Sử dụng <code>try...catch</code> để xử lý lỗi khi dùng{" "}
          <code>async/await</code>.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        Tài nguyên học thêm
      </h2>
      <p className="mb-4">
        Muốn làm chủ bất đồng bộ trong JavaScript? Hãy khám phá:
      </p>
      <ul className="list-disc list-inside mb-6 text-blue-600">
        <li>
          <a
            href="https://www.w3schools.com/js/js_async.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            W3Schools – Async JavaScript
          </a>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            MDN – Asynchronous JavaScript
          </a>
        </li>
      </ul>

      <p className="mt-8 text-center text-gray-600">
        Bài viết này có giúp bạn hiểu rõ hơn về bất đồng bộ? Hãy chia sẻ và để lại
        bình luận để mình tiếp tục mang đến những nội dung chất lượng hơn nhé!
      </p>
    </div>
  );
}
