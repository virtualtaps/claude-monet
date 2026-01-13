"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Step-by-Step Guide: Burgundy Christmas Makeup Full of Glow",
    excerpt: "Be original this holiday season with our stunning burgundy makeup tutorial that will make you shine at every party.",
    category: "Makeup",
    date: "Dec 15, 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "What Is Keratin Hair Straightening and Is It Suitable for Everyone?",
    excerpt: "Learn everything about keratin treatments, their benefits, and whether they're the right choice for your hair type.",
    category: "Hair Care",
    date: "Dec 10, 2025",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Chemical Peel: Renew the Skin and Reveal Its Radiance",
    excerpt: "Discover how chemical peels can transform your skin, reduce signs of aging, and give you that coveted glow.",
    category: "Skin Care",
    date: "Dec 5, 2025",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-40 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-sm font-medium tracking-[0.3em] uppercase mb-4">
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
              <div className="bg-[#111111] border border-[#1a1a1a] rounded-sm overflow-hidden hover:border-gold/30 transition-all duration-500 h-full flex flex-col">
                {/* Image placeholder */}
                <div className="aspect-[16/10] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] relative overflow-hidden">
                  <div className="absolute inset-0 diagonal-lines opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gold/10 font-[family-name:var(--font-heading)]">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-gold text-black text-xs font-bold px-3 py-1 rounded-sm">
                    {post.category}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gold" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gold transition-colors duration-300 font-[family-name:var(--font-heading)] line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <Button
                    variant="ghost"
                    className="w-fit p-0 h-auto text-gold hover:text-gold-light hover:bg-transparent font-medium group/btn"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Bottom accent line */}
                <div className="h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-500" />
              </div>
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
            className="border-gold/30 text-gold hover:bg-gold hover:text-black px-8 py-6 rounded-none transition-all duration-300"
          >
            View All Posts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
