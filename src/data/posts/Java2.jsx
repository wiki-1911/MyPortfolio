import React from "react";

export default function Java2() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed font-sans">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
        Lập Trình Hướng Đối Tượng trong Java: Hiểu Biết 4 Tính Chất Cốt Lõi
      </h1>

      <p className="mb-6 text-lg">
        Bạn đã bao giờ tự hỏi làm thế nào Java mô phỏng thế giới thực một cách
        tinh tế? Đó chính là sức mạnh của{" "}
        <strong>Lập trình hướng đối tượng (OOP)</strong>. Trong bài viết này,
        chúng ta sẽ khám phá 4 tính chất cốt lõi của OOP trong Java:
        <strong> Kế thừa</strong>, <strong>Đa hình</strong>,{" "}
        <strong>Trừu tượng</strong>, và
        <strong> Đóng gói</strong>. Hãy cùng bắt đầu hành trình để làm chủ Java!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        Mục tiêu bài học
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>Khám phá khái niệm Class và Object.</li>
        <li>Hiểu rõ 4 tính chất cốt lõi của OOP.</li>
        <li>Áp dụng OOP vào các dự án Java thực tế.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        1. Class và Object: Nền tảng của OOP
      </h2>
      <p className="mb-4">
        Trong Java, <strong>Class</strong> giống như một bản thiết kế, còn{" "}
        <strong>Object</strong> là sản phẩm được tạo ra từ bản thiết kế đó. Ví
        dụ, nếu "Xe hơi" là một class, thì "Xe Toyota" là một object cụ thể.
      </p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`class Animal {
  String name;
  void sound() {
    System.out.println("Động vật phát ra âm thanh");
  }
}

public class Main {
  public static void main(String[] args) {
    Animal dog = new Animal();
    dog.name = "Chó";
    dog.sound(); // Output: Động vật phát ra âm thanh
  }
}`}</code>
      </pre>

      <p className="mb-6 italic text-gray-600">
        💡 Mẹo: Hãy nghĩ về Class như công thức nấu ăn, còn Object là món ăn bạn
        làm ra từ công thức đó!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        2. Kế thừa (Inheritance): Tái sử dụng mã nguồn
      </h2>
      <p className="mb-4">
        Kế thừa cho phép một class "kế thừa" các thuộc tính và phương thức từ
        class khác, giúp tiết kiệm thời gian và tăng tính tái sử dụng. Hãy xem
        ví dụ dưới đây:
      </p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`class Animal {
  void eat() { System.out.println("Động vật ăn"); }
}

class Dog extends Animal {
  void bark() { System.out.println("Gâu gâu!"); }
}

public class Main {
  public static void main(String[] args) {
    Dog dog = new Dog();
    dog.eat();  // Output: Động vật ăn
    dog.bark(); // Output: Gâu gâu!
  }
}`}</code>
      </pre>

      <p className="mb-6">
        Trong ví dụ này, <code>Dog</code> kế thừa từ <code>Animal</code>, nên nó
        có thể sử dụng phương thức <code>eat()</code> mà không cần định nghĩa
        lại.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        3. Đa hình (Polymorphism): Linh hoạt và mạnh mẽ
      </h2>
      <p className="mb-4">
        Đa hình cho phép một phương thức hoạt động khác nhau tùy thuộc vào đối
        tượng gọi nó. Điều này giúp mã của bạn linh hoạt hơn, dễ dàng mở rộng.
      </p>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`class Animal {
  void sound() { System.out.println("Âm thanh động vật"); }
}

class Cat extends Animal {
  void sound() { System.out.println("Meo meo"); }
}

public class Main {
  public static void main(String[] args) {
    Animal animal = new Cat();
    animal.sound(); // Output: Meo meo
  }
}`}</code>
      </pre>

      <p className="mb-6">
        Ở đây, biến <code>animal</code> có kiểu <code>Animal</code> nhưng tham
        chiếu đến <code>Cat</code>, nên phương thức <code>sound()</code> của{" "}
        <code>Cat</code> được gọi. Đây là sức mạnh của đa hình!
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
        4. Trừu tượng và Đóng gói: Bảo vệ và đơn giản hóa
      </h2>
      <p className="mb-4">
        - <strong>Trừu tượng (Abstraction)</strong>: Ẩn đi các chi tiết phức
        tạp, chỉ hiển thị những gì cần thiết. Ví dụ, bạn có thể dùng{" "}
        <code>abstract class</code> hoặc <code>interface</code> để định nghĩa
        hành vi mà không cần chi tiết thực thi. <br />-{" "}
        <strong>Đóng gói (Encapsulation)</strong>: Bảo vệ dữ liệu bằng cách giới
        hạn truy cập trực tiếp, sử dụng <code>private</code> và các phương thức{" "}
        <code>getter/setter</code>.
      </p>

      <h3 className="text-xl font-semibold text-blue-600 mb-2">
        Ví dụ về Đóng gói:
      </h3>

      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm">
        <code>{`class Person {
  private String name;
  public void setName(String name) { this.name = name; }
  public String getName() { return name; }
}

public class Main {
  public static void main(String[] args) {
    Person person = new Person();
    person.setName("Nam");
    System.out.println(person.getName()); // Output: Nam
  }
}`}</code>
      </pre>

      <p className="mb-6">
        Đóng gói giúp kiểm soát cách dữ liệu được truy cập và thay đổi, tăng
        tính bảo mật và dễ bảo trì.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        Tóm tắt kiến thức
      </h2>
      <ul className="list-disc list-inside mb-6 text-gray-700">
        <li>
          <strong>Class</strong> là bản thiết kế, <strong>Object</strong> là
          thực thể cụ thể.
        </li>
        <li>OOP có 4 tính chất: Kế thừa, Đa hình, Trừu tượng, Đóng gói.</li>
        <li>
          Sử dụng <code>extends</code> để kế thừa và <code>super</code> để gọi
          phương thức hoặc constructor của class cha.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-blue-700 mb-4">
        Học thêm ở đâu?
      </h2>
      <p className="mb-4">
        Muốn đào sâu hơn về OOP trong Java? Hãy khám phá các tài nguyên sau:
      </p>
      <ul className="list-disc list-inside mb-6 text-blue-600">
        <li>
          <a
            href="https://www.w3schools.com/java/java_oop.asp"
            target="_blank"
            className="hover:underline"
          >
            W3Schools Java OOP
          </a>
        </li>
        <li>
          <a
            href="https://docs.oracle.com/javase/tutorial/java/concepts/"
            target="_blank"
            className="hover:underline"
          >
            Oracle Java OOP Concepts
          </a>
        </li>
      </ul>

      <p className="mt-8 text-center text-gray-600">
        Bạn thấy bài viết này hữu ích? Hãy chia sẻ và để lại bình luận để mình
        tiếp tục mang đến những nội dung chất lượng nhé!
      </p>
    </div>
  );
}
