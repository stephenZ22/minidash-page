"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn } from "lucide-react";

const sections = [
  { id: 0, color: "bg-green-200", text: "Mini Dash 功能介绍" },
  { id: 1, color: "bg-amber-200", text: "使用方法" },
  { id: 2, color: "bg-sky-200", text: "特性展示" },
];

export default function HomePage() {
  const [page, setPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // 监听滚轮
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      if (e.deltaY > 0 && page < sections.length - 1) {
        setPage((p) => p + 1);
      } else if (e.deltaY < 0 && page > 0) {
        setPage((p) => p - 1);
      }

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 700); // 防抖
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [page, isScrolling]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          className={`absolute inset-0 flex items-center justify-center text-4xl font-bold ${sections[page].color}`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8 }}
        >
          {sections[page].text}
        </motion.div>
      </AnimatePresence>

      {/* 右侧小圆点导航 */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setPage(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === page ? "bg-black scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
      <Link
        href="/login"
        className="absolute bottom-6 right-6 w-14 h-14 flex items-center justify-center
                 bg-emerald-200 text-white rounded-full shadow-lg
                 hover:bg-cyan-200
                  active:scale-95 transition-all"
      >
        <LogIn className="w-6 h-6" />
      </Link>
    </div>
  );
}
