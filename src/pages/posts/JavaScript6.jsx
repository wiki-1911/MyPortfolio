export default function JavaScript6() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed font-sans">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
        Làm Việc với Fetch API và JSON trong JavaScript: Kết Nối Frontend & Backend
      </h1>

      <p className="mb-6 text-lg">
        Bạn muốn trang web giao tiếp với server, lấy dữ liệu hoặc gửi thông tin?{" "}
        <strong>Fetch API</strong> và <strong>JSON</strong> chính là chìa khóa! Fetch API là cách hiện đại để gửi yêu cầu HTTP, còn JSON là định dạng dữ liệu phổ biến giúp frontend và backend "nói chuyện" dễ dàng. Hãy cùng khám phá cách sử dụng chúng để tạo ra các ứng dụng web động!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Mục tiêu bài học</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Hiểu cú pháp và cách hoạt động của Fetch API.</li>
        <li>Thành thạo gửi yêu cầu <code>GET</code> và <code>POST</code>.</li>
        <li>Xử lý dữ liệu JSON từ phản hồi của server.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">1. Fetch dữ liệu từ API</h2>
      <p className="mb-4">
        Fetch API cho phép bạn lấy dữ liệu từ server thông qua yêu cầu HTTP, ví dụ như lấy bài viết từ một API công cộng.
      </p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Lỗi:", error));`}</code>
      </pre>

      <p className="mb-6">
        <code>fetch()</code> trả về một <code>Promise</code>, nên bạn dùng <code>.then()</code> để xử lý dữ liệu hoặc <code>.catch()</code> để bắt lỗi. Phương thức <code>response.json()</code> chuyển phản hồi thành định dạng JSON.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        💡 <strong>Mẹo:</strong> Luôn kiểm tra trạng thái phản hồi (như{" "}
        <code>response.ok</code>) trước khi gọi <code>response.json()</code> để đảm bảo yêu cầu thành công!
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">2. Gửi dữ liệu bằng POST</h2>
      <p className="mb-4">Fetch API cũng hỗ trợ gửi dữ liệu lên server, như tạo một bài viết mới:</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Bài viết mới", body: "Nội dung", userId: 1 })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error("Lỗi:", error));`}</code>
      </pre>

      <p className="mb-6">
        Ở đây, <code>method: "POST"</code> chỉ định loại yêu cầu, <code>headers</code> xác định định dạng dữ liệu, và{" "}
        <code>JSON.stringify</code> chuyển object thành chuỗi JSON.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">3. Sử dụng Async/Await với Fetch</h2>
      <p className="mb-4">Để mã dễ đọc hơn, bạn có thể dùng <code>async/await</code> thay cho <code>.then()</code>:</p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) throw new Error("Yêu cầu thất bại!");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Lỗi:", error);
  }
}

getUser();`}</code>
      </pre>

      <p className="mb-6">
        <code>async/await</code> giúp mã trông giống mã đồng bộ, dễ hiểu hơn, đặc biệt khi xử lý nhiều yêu cầu liên tiếp.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        ⚠️ <strong>Lưu ý:</strong> Luôn dùng <code>try...catch</code> với <code>async/await</code> để xử lý lỗi một cách an toàn!
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tóm tắt kiến thức</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          <code>Fetch API</code> là công cụ chuẩn để gửi và nhận yêu cầu HTTP trong JavaScript.
        </li>
        <li>
          JSON là định dạng phổ biến để trao đổi dữ liệu, sử dụng <code>JSON.stringify</code> để gửi và{" "}
          <code>response.json()</code> để nhận.
        </li>
        <li>
          Xử lý lỗi bằng <code>.catch()</code> hoặc <code>try...catch</code> để đảm bảo ứng dụng ổn định.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tài nguyên học thêm</h2>
      <p className="mb-4">Muốn làm chủ Fetch API và JSON? Hãy tham khảo:</p>

      <ul className="list-disc list-inside mb-6 text-blue-600">
        <li>
          <a
            href="https://www.w3schools.com/js/js_api_fetch.asp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            W3Schools – Fetch API
          </a>
        </li>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            MDN – Fetch API
          </a>
        </li>
      </ul>

      <p className="mt-8 text-center text-gray-600">
        Bài viết này có giúp bạn hiểu rõ hơn về Fetch API và JSON? Hãy chia sẻ và để lại bình luận để mình tiếp tục mang
        đến những nội dung chất lượng hơn nhé!
      </p>
    </div>
  );
}
