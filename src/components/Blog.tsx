"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    slug: "burgundy-christmas-makeup",
    title: "Step-by-Step Guide: Burgundy Christmas Makeup Full of Glow",
    excerpt: "Be original this holiday season with our stunning burgundy makeup tutorial that will make you shine at every party.",
    category: "Makeup",
    date: "Dec 15, 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "keratin-hair-straightening",
    title: "What Is Keratin Hair Straightening and Is It Suitable for Everyone?",
    excerpt: "Learn everything about keratin treatments, their benefits, and whether they're the right choice for your hair type.",
    category: "Hair Care",
    date: "Dec 10, 2025",
    readTime: "7 min read",
  },
  {
    id: 3,
    slug: "chemical-peel-guide",
    title: "Chemical Peel: Renew the Skin and Reveal Its Radiance",
    excerpt: "Discover how chemical peels can transform your skin, reduce signs of aging, and give you that coveted glow.",
    category: "Skin Care",
    date: "Dec 5, 2025",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#FAF8F3] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />
      <div className="absolute top-40 left-0 w-64 h-64 bg-[#8B6F47]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-64 h-64 bg-[#A0826D]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#8B6F47] text-sm font-medium tracking-[0.3em] uppercase mb-4">
            Beauty Tips
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-heading)]">
            <span className="text-foreground">All About </span>
            <span className="text-gold-gradient">Cosmetics & Treatments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Stay updated with the latest beauty trends, tips, and tutorials
            from our expert team of beauty professionals.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <Link href={`/blog/${post.slug || `post-${post.id}`}`}>
                <div className="bg-[#3A2E1F] rounded-lg p-8 hover:shadow-xl transition-all duration-500 h-full flex flex-col cursor-pointer">
                  {/* Category Label - Top Left */}
                  <div className="mb-4">
                    <span className="text-[#A0826D] text-sm font-medium tracking-wide uppercase">
                      {post.category}
                    </span>
                  </div>

                  {/* Category Display - Centered */}
                  <div className="text-center mb-6">
                    <span className="text-[#A0826D] text-2xl md:text-3xl font-semibold font-[family-name:var(--font-heading)]">
                      {post.category}
                    </span>
                  </div>

                  {/* Date & Read Time */}
                  <div className="flex items-center justify-center gap-4 text-sm text-[#A0826D] mb-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white font-[family-name:var(--font-heading)] text-center leading-tight line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#A0826D] text-sm md:text-base leading-relaxed mb-6 flex-grow text-center line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="text-center mt-auto">
                    <span className="text-[#A0826D] font-medium text-sm hover:text-[#C19A6B] transition-colors inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-[#8B6F47]/30 text-[#8B6F47] hover:bg-[#8B6F47] hover:text-white px-8 py-6 rounded-none transition-all duration-300"
          >
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
