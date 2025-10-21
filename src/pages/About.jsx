import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Skill from "../components/Skill.jsx";
import JiraHome from "../assets/images/JiraHome.png";
import BookingCare from "../assets/images/bookingcare.png";
import { Card, CardContent } from "../components/ui/Card.jsx";
import TranDat from "../assets/images/TranDat2.png";
import {
  FaComments,
  FaUserCheck,
  FaLightbulb,
  FaBrain,
  FaUsers,
  FaClock,
} from "react-icons/fa";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const sectionClass =
    "bg-white shadow-sm rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300";

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-12 justify-items-center pr-60">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <img
              src={TranDat}
              alt="Trần Đạt"
              className="rounded-2xl h-100 w-80 object-cover shadow-md"
            />
          </motion.div>
          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={sectionClass}
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">
              Giới thiệu
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Xin chào, tôi là{" "}
              <strong className="text-blue-500">Trần Đạt</strong>, một sinh viên
              năm ba ngành Kỹ thuật Phần mềm tại Đại học Công nghệ TP.HCM
              (HUTECH). Từ những ngày đầu chạm tay vào bàn phím máy tính ở một
              tiệm net nhỏ tại quê nhà, tôi đã bị cuốn hút bởi thế giới lập
              trình – nơi những dòng code có thể biến ý tưởng thành hiện thực.
              Đam mê của tôi là trở thành một kỹ sư phần mềm full-stack, người
              có thể xây dựng những hệ thống hoàn chỉnh, từ giao diện người dùng
              trực quan đến cơ sở dữ liệu mạnh mẽ phía sau. Hành trình của tôi
              là câu chuyện về sự tò mò, học hỏi không ngừng và khát khao tạo ra
              những sản phẩm công nghệ có giá trị.
            </p>
          </motion.section>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            className={sectionClass}
          >
            <h3 className="text-2xl font-semibold text-red-500 mb-4">
              Học nghiệp
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Tôi bắt đầu hành trình của mình tại HUTECH vào năm 2022, nơi tôi
              được tiếp cận với các môn học nền tảng như Cấu trúc Dữ liệu, Thuật
              toán, và Phát triển Web. Những buổi học nhóm và các dự án thực tế
              tại trường đã giúp tôi hiểu rõ hơn về quy trình phát triển phần
              mềm. Một trong những dự án đáng nhớ là xây dựng một website Xây
              dựng hệ thống đặt lịch khám bệnh cho phòng khám bằng ReactJS và
              C#, nơi tôi lần đầu tiên trải nghiệm cảm giác hồi hộp khi thấy sản
              phẩm của mình hoạt động trơn tru trên trình duyệt. Dự án này không
              chỉ rèn luyện kỹ năng lập trình mà còn dạy tôi cách làm việc nhóm,
              lắng nghe ý kiến và quản lý thời gian hiệu quả.
            </p>
          </motion.section>

          <motion.section
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
            className={sectionClass}
          >
            <h3 className="text-2xl font-semibold text-green-500 mb-4">
              Mục tiêu
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Hiện tại, tôi đang tìm kiếm cơ hội thực tập với vị trí Kỹ sư Phần
              mềm, nơi tôi có thể áp dụng kiến thức về phát triển full-stack, từ
              thiết kế giao diện người dùng (frontend) đến xây dựng hệ thống
              phía sau (backend). Tôi đặc biệt hứng thú với việc làm việc trong
              các dự án thực tế, nơi tôi có thể học hỏi từ các anh chị đi trước,
              rèn luyện kỹ năng làm việc nhóm và đóng góp vào sự thành công của
              sản phẩm. Trong tương lai, tôi mong muốn trở thành một kỹ sư
              full-stack chuyên nghiệp, có khả năng dẫn dắt các dự án công nghệ
              có tác động lớn, như phát triển ứng dụng hỗ trợ giáo dục hoặc các
              giải pháp tối ưu hóa quy trình doanh nghiệp.
            </p>
          </motion.section>
        </div>
        <h3 className="text-3xl font-semibold text-red-600 text-center">
          Kỹ Năng Mềm
        </h3>
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          custom={4}
          className={sectionClass}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Giao tiếp hiệu quả & lập tài liệu kỹ thuật",
                icon: <FaComments className="text-blue-500 text-3xl mb-3" />,
              },
              {
                name: "Chủ động & có trách nhiệm",
                icon: <FaUserCheck className="text-green-500 text-3xl mb-3" />,
              },
              {
                name: "Học hỏi nhanh, thích nghi & linh hoạt",
                icon: <FaLightbulb className="text-yellow-500 text-3xl mb-3" />,
              },
              {
                name: "Tư duy phân tích & giải quyết vấn đề",
                icon: <FaBrain className="text-purple-500 text-3xl mb-3" />,
              },
              {
                name: "Làm việc nhóm & hợp tác trong dự án",
                icon: <FaUsers className="text-pink-500 text-3xl mb-3" />,
              },
              {
                name: "Quản lý thời gian & sắp xếp ưu tiên",
                icon: <FaClock className="text-orange-500 text-3xl mb-3" />,
              },
            ].map((skill, index) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                key={index}
                className="cursor-pointer"
              >
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    {skill.icon}
                    <p className="text-gray-700 font-medium text-lg">
                      {skill.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-blue-600 text-center">
            Dự Án
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="cursor-pointer h-full"
              onClick={() =>
                (window.location.href = "http://localhost:3000/whatido")
              }
            >
              <Card className="shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <img
                  src={BookingCare}
                  alt="Clinic Management System"
                  className="rounded-t-2xl h-48 w-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-500 mb-3 hover:bg-blue-100 py-1 rounded-md inline-block">
                    Xây dựng hệ thống đặt lịch khám bệnh cho phòng khám
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nền tảng quản lý phòng khám toàn diện: đặt lịch khám, quản
                    lý bác sĩ, toa thuốc, thống kê doanh thu và hỗ trợ thanh
                    toán trực tuyến an toàn.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="cursor-pointer h-full"
              onClick={() =>
                (window.location.href = "http://localhost:3000/whatido")
              }
            >
              <Card className="shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <img
                  src={JiraHome}
                  alt="Project Management App"
                  className="rounded-t-2xl h-48 w-full object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-500 mb-3 hover:bg-green-100 py-1 rounded-md inline-block">
                    Ứng dụng quản lý dự án & tác vụ
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hệ thống quản lý dự án và tác vụ theo thời gian thực, giúp
                    đội nhóm cộng tác, lập kế hoạch sprint linh hoạt và theo dõi
                    tiến độ qua giao diện trực quan.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-3xl font-semibold text-purple-600">
            Công Nghệ & Công Cụ
          </h3>
          <Skill />
        </div>
      </div>
    </Layout>
  );
}
