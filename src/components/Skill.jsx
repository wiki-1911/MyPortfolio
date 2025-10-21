import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/Card.jsx";

const Skill = () => {
  const items = [
    {
      title: "Giao diện người dùng (Frontend)",
      color: "blue",
      skills: [
        "ReactJS",
        "Tailwind",
        "HTML",
        "CSS",
        "NextJS",
        "JavaScript",
        "Bootstrap",
      ],
    },
    {
      title: "Xử lý & Dữ liệu (Backend & DB)",
      color: "red",
      skills: ["C#", "ASP.NET Core", "SQL Server", "MySQL"],
    },
    {
      title: "Công cụ (Tools)",
      color: "green",
      skills: [
        "Firebase",
        "Cloudinary",
        "SignalR",
        "JWT",
        "Git",
        "VS Code",
        "Google Cloud SQL",
      ],
    },
  ];

  const colorClasses = {
    blue: "text-blue-500 border-blue-500",
    red: "text-red-500 border-red-500",
    green: "text-green-500 border-green-500",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.03, y: -5 }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          viewport={{ once: true }}
          className="flex"
        >
          <Card className="hover:shadow-xl transition-all duration-300 flex-1">
            <CardContent className="flex flex-col h-full justify-items-center">
              <h4
                className={`text-xl font-semibold mb-3 border-b-2 p-1 ${
                  colorClasses[item.color]
                }`}
              >
                {item.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full cursor-pointer transition-all duration-300 hover:text-white hover:bg-purple-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Skill;
