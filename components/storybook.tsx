"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BookOpen } from "lucide-react";

const pages = [
  {
    title: "The First Hello",
    content:
      "Remember the first time you messaged me on 13th of August, 2024, 03:13 p.m.? I was astonished ki koi mujhe kyu message karega? You taught me what value I carry. Thank you.",
  },
  {
    title: "Navigating the Journey",
    content:
      "From misunderstandings to meaningful conversations, every moment with you has taught me something valuable about life and myself. Thank you",
  },
  {
    title: "Cherished Moments",
    content:
      "It’s the little things - your thoughtful words, your ability to light up an akward conversation, and the way you always seem to stay true to yourself.",
  },
  {
    title: "An Unwritten Chapter",
    content:
      "No matter where we end up, I’ll always treasure the bond we share. I look forward to the growth, lessons, and the unknown adventures ahead.",
  },
];

export function Storybook() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className="text-center mb-12"
      >
        <BookOpen className="w-12 h-12 mx-auto text-pink-500 mb-4" />
        <h2 className="text-4xl handwritten gradient-text">Our Story</h2>
      </motion.div>

      <div className="space-y-12">
        {pages.map((page, index) => (
          <StoryPage key={index} {...page} index={index} />
        ))}
      </div>
    </section>
  );
}

function StoryPage({
  title,
  content,
  index,
}: {
  title: string;
  content: string;
  index: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100,
        rotateY: index % 2 === 0 ? -45 : 45,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              x: 0,
              rotateY: 0,
              transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                opacity: { duration: 0.6 },
                rotateY: { duration: 0.8 },
              },
            }
          : {}
      }
      className="storybook-page max-w-2xl mx-auto"
    >
      <h3 className="handwritten text-2xl text-pink-600 mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </motion.div>
  );
}