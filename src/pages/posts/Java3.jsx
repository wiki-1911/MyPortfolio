import React from "react";

export default function Java3() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed font-sans">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
        Xử Lý Ngoại Lệ trong Java: Bí Quyết Giữ Chương Trình Ổn Định
      </h1>

      <p className="mb-6 text-lg">
        Lỗi là "bạn đồng hành" không thể tránh trong lập trình! May mắn thay,
        Java cung cấp cơ chế <strong>Xử lý ngoại lệ (Exception Handling)</strong> mạnh mẽ để phát hiện
        và giải quyết lỗi một cách an toàn. Trong bài viết này, chúng ta sẽ khám phá cách Java giúp chương trình của bạn
        "sống sót" qua những tình huống bất ngờ!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">Mục tiêu bài học</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Hiểu rõ ngoại lệ là gì và tại sao cần xử lý.</li>
        <li>Thành thạo cú pháp <code>try-catch-finally</code>.</li>
        <li>Tạo và sử dụng ngoại lệ tùy chỉnh (custom exception).</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">1. Ngoại lệ là gì?</h2>
      <p className="mb-4">
        Ngoại lệ (Exception) là những lỗi xảy ra khi chương trình chạy, như chia cho 0,
        truy cập mảng ngoài giới hạn, hay đọc file không tồn tại. Java giúp bạn kiểm soát
        những tình huống này bằng khối <code>try-catch-finally</code>.
      </p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`public class Example {
  public static void main(String[] args) {
    int a = 10, b = 0;
    try {
      int c = a / b;
      System.out.println("Kết quả: " + c);
    } catch (ArithmeticException e) {
      System.out.println("Lỗi: Không thể chia cho 0!");
    } finally {
      System.out.println("Khối finally luôn được thực thi!");
    }
  }
}`}</code>
      </pre>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
        💡 <strong>Mẹo:</strong> Dùng <code>finally</code> để đóng file hoặc kết nối cơ sở dữ liệu, đảm bảo không rò rỉ tài nguyên!
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">2. Tạo ngoại lệ tùy chỉnh</h2>
      <p className="mb-4">
        Bạn muốn kiểm soát logic nghiệp vụ? Hãy tạo ngoại lệ riêng! Ví dụ dưới đây kiểm tra tuổi hợp lệ:
      </p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`class AgeException extends Exception {
  public AgeException(String message) {
    super(message);
  }
}

public class CustomException {
  static void checkAge(int age) throws AgeException {
    if (age < 18) throw new AgeException("Tuổi phải >= 18");
    System.out.println("Hợp lệ!");
  }

  public static void main(String[] args) {
    try {
      checkAge(15);
    } catch (AgeException e) {
      System.out.println("Lỗi: " + e.getMessage());
    }
  }
}`}</code>
      </pre>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tóm tắt kiến thức</h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Sử dụng <code>try-catch-finally</code> để xử lý lỗi an toàn.</li>
        <li>Ném ngoại lệ với <code>throw</code> và khai báo với <code>throws</code>.</li>
        <li>Tạo ngoại lệ tùy chỉnh để kiểm soát logic nghiệp vụ.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Tài nguyên học thêm</h2>
      <ul className="list-disc list-inside mb-6 text-blue-600">
        <li>
          <a
            href="https://www.w3schools.com/java/java_try_catch.asp"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            W3Schools – Java try...catch
          </a>
        </li>
        <li>
          <a
            href="https://docs.oracle.com/javase/tutorial/essential/exceptions/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Oracle – Handling Exceptions
          </a>
        </li>
      </ul>

      <p className="mt-8 text-center text-gray-600">
        Bài viết này hữu ích với bạn? Hãy chia sẻ và để lại bình luận để mình tiếp tục cải thiện nội dung nhé!
      </p>
    </div>
  );
}
