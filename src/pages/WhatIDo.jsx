import { Card, CardContent } from "../components/ui/Card.jsx";
import { motion } from "framer-motion";
import { useState } from "react";
import JiraHome from "../assets/images/JiraHome.png";
import BookingCare from "../assets/images/bookingcare.png";
import NetworkBasic from "../assets/images/NetworkAcademy.png";
import JS1 from "../assets/images/JS1.png";
import JS2 from "../assets/images/JS2.png";
import Skill from "../components/Skill.jsx";
import { IoIosAddCircle } from "react-icons/io";

export default function WhatIDo() {
  const [zoomImage, setZoomImage] = useState(null);

  const certificates = [
    { title: "Network Academy", image: NetworkBasic },
    { title: "JavaScript Course 1", image: JS1 },
    { title: "JavaScript Course 2", image: JS2 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-12 text-center">
      <div className="grid md:grid-cols-2 gap-6">
        <h3 className="text-3xl font-semibold text-blue-600 mb-6 md:col-span-2">
          Dự Án
        </h3>
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="cursor-pointer "
          onClick={() =>
            window.open("https://github.com/BanhTuanKiet/BookingCare", "_blank")
          }
        >
          <Card className="shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
            <img
              src={BookingCare}
              alt="Clinic System"
              className="rounded-t-2xl h-48 w-full object-cover"
            />
            <CardContent className="p-5 text-left">
              <h3 className="text-2xl font-semibold text-blue-500 mb-2 hover:bg-blue-100 py-1 rounded-md inline-block">
                Xây dựng hệ thống đặt lịch khám bệnh cho phòng khám
              </h3>{" "}
              <br />
              <b className="text-black-600">Số thành viên: </b> 3 <br />
              <b className="text-black-600">Thời gian: </b> 02/03/2025 –
              05/10/2025
              <br /> <br />
              <p className="text-black-600 mb-3">
                Nền tảng quản lý phòng khám toàn diện, cho phép bệnh nhân đặt
                lịch khám trực tuyến, quản lý thông tin bác sĩ, theo dõi toa
                thuốc, cùng với các tính năng thống kê và báo cáo doanh thu,
                lịch khám để hỗ trợ xây dựng chiến lược phát triển tương lai. Hệ
                thống tích hợp thanh toán an toàn, đảm bảo trải nghiệm mượt mà
                và đáng tin cậy.
              </p>
              <p className="text-black-600 mb-3">
                Xây dựng API RESTful để quản lý thông tin người dùng, lịch hẹn
                và hồ sơ bệnh án một cách hiệu quả. Tích hợp các cổng thanh toán
                trực tuyến (VNPay và MoMo) cùng tính năng xác minh OTP qua
                email, đảm bảo an toàn và bảo mật cho mọi giao dịch.
              </p>
              <p className="text-gray-600 mb-3">
                <b>Tính năng chính:</b>
                <ul>
                  <li>
                    <IoIosAddCircle className="text-green-600 inline" /> Đặt
                    lịch hẹn linh hoạt theo bác sĩ và khung thời gian phù hợp.
                  </li>
                  <li>
                    <IoIosAddCircle className="text-green-600 inline" /> Kiểm
                    soát truy cập dựa trên vai trò (Quản trị viên, Bác sĩ, Bệnh
                    nhân).
                  </li>
                  <li>
                    <IoIosAddCircle className="text-green-600 inline" /> Xác
                    thực an toàn sử dụng JWT với tích hợp Identity.
                  </li>
                  <li>
                    <IoIosAddCircle className="text-green-600 inline" /> Tích
                    hợp VNPay đảm bảo thanh toán trực tuyến nhanh chóng và an
                    toàn.
                  </li>
                  <li>
                    <IoIosAddCircle className="text-green-600 inline" /> Thống
                    kê và báo cáo chi tiết hỗ trợ quản lý và ra quyết định.
                  </li>
                </ul>
              </p>
              <div className="grid grid-cols-4 justify-center gap-2 mt-3 text-black-500">
                <div>
                  <b>FE:</b>
                </div>
                <div>ReactJS</div>
                <div>Boostrap</div>
                <div>HTML</div>
                <div> </div>
                <div>CSS</div>
                <div>JavaScript</div>
              </div>
              <div className="grid grid-cols-4 justify-center gap-2 mt-3 text-black-500">
                <div>
                  <b>BE & DB:</b>
                </div>
                <div>ASP.NET Core</div>
                <div>SQL Server</div>
                <div>Google Cloud</div>
                <div></div>
                <div>C#</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="cursor-pointer"
          onClick={() =>
            window.open(
              "https://github.com/BanhTuanKiet/ProjectManagement",
              "_blank"
            )
          }
        >
          <Card className="shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
            <img
              src={JiraHome}
              alt="Project Management App"
              className="rounded-t-2xl h-48 w-full object-cover"
            />
            <CardContent className="p-5 text-left">
              <h3 className="text-2xl font-semibold text-green-500 mb-2 hover:bg-green-100 py-1 rounded-md inline-block">
                Ứng dụng quản lý dự án & tác vụ
              </h3>{" "}
              <br />
              <b className="text-black-600">Số thành viên: </b> 3 <br />
              <b className="text-black-600">Thời gian: </b> 02/09/2025 – Present
              <br /> <br />
              <p className="text-black-600 mb-3">
                Hệ thống quản lý dự án và tác vụ theo thời gian thực, tối ưu hóa
                cộng tác nhóm, lập kế hoạch sprint linh hoạt, quản lý tác vụ
                bằng giao diện kéo thả trực quan và chia sẻ tệp mượt mà nhờ tích
                hợp Cloudinary, hỗ trợ snapshot.
              </p>
              <p className="text-black-600 mb-3">
                Xây dựng API RESTful với kiến trúc mô-đun, triển khai xác thực
                và phân quyền bằng ASP.NET Core Identity, đồng thời tích hợp
                Cloudinary để quản lý tệp và hình ảnh một cách tối ưu.
              </p>
              <p className="text-black-600 mb-3">
                <b>Tính năng chính:</b>
                <ul>
                  <li>
                    <IoIosAddCircle className="text-green-600 inline" /> Quản lý
                    vòng đời dự án toàn diện: Từ Backlog → Sprint → Nhiệm vụ.
                  </li>
                  <li>
                    <IoIosAddCircle className="text-green-600 inline" /> Hệ
                    thống phân quyền và vai trò linh hoạt, dễ dàng tùy chỉnh.
                  </li>
                  <li>
                    <IoIosAddCircle className="text-green-600 inline" /> Cập
                    nhật thời gian thực tức thì với công nghệ SignalR.
                  </li>
                  <li>
                    <IoIosAddCircle className="text-green-600 inline" /> Phân
                    công nhiệm vụ nhanh chóng kèm thông báo thời gian thực.
                  </li>
                  <li>
                    <IoIosAddCircle className="text-green-600 inline" /> Hỗ trợ
                    tính năng quay lui (snapshot) để lưu trạng thái nhiệm vụ.
                  </li>
                  <li>
                    <IoIosAddCircle className="text-green-600 inline" /> Mời
                    thành viên tham gia dự án dễ dàng qua email.
                  </li>
                </ul>
              </p>
              <div className="grid grid-cols-4 justify-center gap-2 mt-3 text-black-500">
                <div>
                  <b>FE:</b>
                </div>
                <div>React Native</div>
                <div>Tailwind CSS</div>
                <div>HTML</div>
                <div> </div>
                <div>CSS</div>
                <div>JavaScript</div>
              </div>
              <div className="grid grid-cols-4 justify-center gap-2 mt-3 text-black-500">
                <div>
                  <b>BE & DB:</b>
                </div>
                <div>Google Console</div>

                <div>ASP.NET Core</div>
                <div>Firebase</div>
                <div></div>

                <div>Cloudinary</div>
                <div>C#</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-purple-600 mb-6">
          Công Nghệ & Công Cụ
        </h3>
        <Skill />
      </div>

      <div>
        <h3 className="text-3xl font-semibold text-pink-600 mb-6">Chứng Chỉ</h3>
        <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-thin scrollbar-thumb-gray-400">
          {certificates.map((cert, index) => (
            <div key={index} className="flex flex-col justify-items-center">
              <motion.img
                key={index}
                src={cert.image}
                alt={`Certificate ${index + 1}`}
                className="w-80 h-56 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setZoomImage(cert.image)}
              />
              <p className="text-center text-gray-600">{cert.title}</p>
            </div>
          ))}
        </div>
      </div>

      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setZoomImage(null)}
        >
          <motion.img
            src={zoomImage}
            alt="Zoomed Certificate"
            className="max-w-3xl w-full rounded-lg shadow-2xl cursor-zoom-out"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.4 }}
          />
        </div>
      )}
    </div>
  );
}
