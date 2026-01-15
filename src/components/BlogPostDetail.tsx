"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useBooking } from "@/contexts/BookingContext";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

interface BlogPostDetailProps {
  post: BlogPost;
}

export default function BlogPostDetail({ post }: BlogPostDetailProps) {
  const { openDialog } = useBooking();

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link href="/blog">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-[#8B6F47] transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </motion.div>

          {/* Main Content Card - Dark Brown/Black */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#3A2E1F] rounded-lg p-8 md:p-12 shadow-xl"
          >
            {/* Category Label - Top Left */}
            <div className="mb-6">
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-white font-[family-name:var(--font-heading)] text-center leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-base md:text-lg text-[#A0826D] leading-relaxed mb-8 text-center max-w-3xl mx-auto">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          {/* Featured Image in White Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-4 mb-6 shadow-md"
          >
            <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80"
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Article Content in Dark Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#3A2E1F] rounded-lg p-8 md:p-12 shadow-xl"
          >
            <article
              className="prose prose-lg prose-invert max-w-none
                prose-headings:text-white prose-headings:font-[family-name:var(--font-heading)]
                prose-p:text-[#A0826D] prose-p:leading-relaxed prose-p:text-base prose-p:mb-6 prose-p:text-opacity-100
                prose-strong:text-white prose-strong:font-semibold
                prose-a:text-[#A0826D] prose-a:no-underline hover:prose-a:underline
                prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-white prose-h2:font-[family-name:var(--font-heading)]
                prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-white prose-h3:font-[family-name:var(--font-heading)]
                prose-ul:text-[#A0826D] prose-ol:text-[#A0826D] prose-ul:my-6 prose-ol:my-6
                prose-li:text-[#A0826D] prose-li:mb-2
                prose-blockquote:text-[#A0826D] prose-blockquote:border-l-[#A0826D]
                prose-code:text-white prose-code:bg-[#6B5D4F] prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8"
              style={{ color: '#A0826D' }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-[#E8DDD0]"
          >
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Share this post:</span>
              <Button
                variant="outline"
                size="sm"
                className="border-[#8B6F47]/30 text-[#8B6F47] hover:bg-[#8B6F47]/10"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F5F0E8] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B6F47]/30 to-transparent" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-heading)]">
              <span className="text-foreground">Ready to Experience </span>
              <span className="text-gold-gradient">Our Services?</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Book your appointment today and let our expert team transform your look.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={openDialog}
                className="bg-[#8B6F47] hover:bg-[#A0826D] text-white font-semibold px-10 py-6 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-[#8B6F47]/20"
              >
                Book Appointment
              </Button>
              <Link href="/blog">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#8B6F47]/30 text-[#8B6F47] hover:bg-[#8B6F47]/10 px-10 py-6 rounded-none transition-all duration-300"
                >
                  Read More Articles
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
