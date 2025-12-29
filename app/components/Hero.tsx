"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Beer Mohamed S</h1>
        <p className="mt-4 text-gray-600">
          Web Developer • Ecommerce Consultant • UI Engineer
        </p>
      </motion.div>
    </section>
  );
}
