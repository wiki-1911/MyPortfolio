import React from "react";

export default function Java1() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed font-sans">
      <h1 className="text-3xl font-extrabold text-blue-900 mb-6 text-center">
        Khám Phá Java: Ngôn Ngữ Lập Trình Đa Nền Tảng
      </h1>

      <p className="mb-6 text-lg">
        Java – cái tên không còn xa lạ trong thế giới lập trình! Từ ứng dụng web, app
        Android, đến phần mềm doanh nghiệp và hệ thống nhúng, Java luôn tỏa sáng. Được
        phát triển bởi <strong>Sun Microsystems</strong> (nay thuộc{" "}
        <strong>Oracle</strong>), Java là lựa chọn hàng đầu cho những ai muốn xây dựng ứng
        dụng mạnh mẽ và linh hoạt. Hãy cùng khám phá tại sao Java lại "hot" đến vậy!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Mục tiêu bài học
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Hiểu đặc điểm và sức mạnh của Java.</li>
        <li>Nắm cách hoạt động của một chương trình Java cơ bản.</li>
        <li>Viết và chạy chương trình “Hello World” đầu tiên.</li>
        <li>Tổ chức một dự án Java đơn giản.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Java hoạt động như thế nào?
      </h2>
      <p className="mb-4">
        Java là sự kết hợp độc đáo giữa <strong>biên dịch</strong> và{" "}
        <strong>thông dịch</strong>. Mã nguồn Java (<code>.java</code>) được biên dịch
        thành <strong>bytecode</strong> (<code>.class</code>), sau đó được thực thi bởi{" "}
        <strong>Java Virtual Machine (JVM)</strong>. Nhờ JVM, Java có thể chạy trên bất kỳ
        thiết bị nào mà không cần thay đổi mã – đúng với triết lý{" "}
        <strong>“Write Once, Run Anywhere”</strong>.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        💡 <strong>Bí mật của Java:</strong> JVM là “trái tim” giúp Java tương thích với
        mọi nền tảng, từ Windows, macOS đến Linux!
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Chương trình Java đầu tiên: Hello World
      </h2>
      <p className="mb-4">
        Hãy bắt đầu với chương trình kinh điển – in ra dòng chữ “Xin chào thế giới!”:
      </p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Xin chào thế giới!");
  }
}`}</code>
      </pre>

      <p className="mb-4">Giải thích nhanh:</p>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          <code>public class HelloWorld</code>: Tên lớp chính, phải trùng với tên file (
          <code>HelloWorld.java</code>).
        </li>
        <li>
          <code>public static void main(String[] args)</code>: Điểm bắt đầu của chương
          trình.
        </li>
        <li>
          <code>System.out.println()</code>: In văn bản ra màn hình.
        </li>
      </ul>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        ⚠️ <strong>Lưu ý:</strong> Tên file Java phải khớp với tên class chính, nếu không
        bạn sẽ gặp lỗi biên dịch!
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Ví dụ thực tế: Nhập dữ liệu từ bàn phím
      </h2>
      <p className="mb-4">
        Muốn chương trình tương tác hơn? Hãy thử nhập tên người dùng từ bàn phím:
      </p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`import java.util.Scanner;

public class InputExample {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print("Nhập tên của bạn: ");
    String name = sc.nextLine();
    System.out.println("Xin chào, " + name + "!");
    sc.close();
  }
}`}</code>
      </pre>

      <p className="mb-6">
        Ở đây, lớp <code>Scanner</code> giúp lấy dữ liệu người dùng nhập. Đơn giản nhưng
        mạnh mẽ!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Kiến thức bạn sẽ nắm được
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          Cài đặt và sử dụng <strong>JDK</strong>, <strong>JVM</strong>, và{" "}
          <strong>JRE</strong>.
        </li>
        <li>
          Biên dịch (<code>javac</code>) và chạy (<code>java</code>) chương trình Java.
        </li>
        <li>Hiểu vòng đời của một chương trình Java.</li>
        <li>
          Cú pháp cơ bản: class, method, main, và xuất dữ liệu ra màn hình.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        Kết luận & Mẹo học Java
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          Java là ngôn ngữ hướng đối tượng, dễ học và có cộng đồng hỗ trợ khổng lồ.
        </li>
        <li>
          Nắm vững cú pháp cơ bản là bước đầu tiên để chinh phục các khái niệm nâng cao
          như OOP hay Stream API.
        </li>
        <li>Hãy thực hành thường xuyên và đặt tên file/class đúng chuẩn để tránh lỗi.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tài nguyên học thêm</h2>
      <p className="mb-4">
        Muốn đi sâu hơn vào Java? Đây là những nguồn tài liệu tuyệt vời:
      </p>

      <ul className="list-disc list-inside mb-6 text-blue-600">
        <li>
          <a
            href="https://www.w3schools.com/java/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            W3Schools – Học Java cơ bản
          </a>
        </li>
        <li>
          <a
            href="https://www.netacad.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Cisco NetAcad – Java Programming Essentials
          </a>
        </li>
        <li>
          <a
            href="https://docs.oracle.com/javase/tutorial/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Oracle Java Tutorials (Chính thức)
          </a>
        </li>
      </ul>

      <p className="mt-8 text-center text-gray-600">
        Bạn thấy bài viết này hữu ích? Hãy chia sẻ và để lại bình luận để mình tiếp tục
        mang đến những nội dung chất lượng hơn nữa nhé!
      </p>
    </div>
  );
}
