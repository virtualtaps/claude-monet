import { notFound } from "next/navigation";
import { Metadata } from "next";
import BlogPostDetail from "@/components/BlogPostDetail";

const blogPosts = [
    {
        slug: "burgundy-christmas-makeup",
        title: "Step-by-Step Guide: Burgundy Christmas Makeup Full of Glow",
        excerpt: "Be original this holiday season with our stunning burgundy makeup tutorial that will make you shine at every party.",
        category: "Makeup",
        date: "Dec 15, 2025",
        readTime: "5 min read",
        content: `
      <p>The holiday season is the perfect time to experiment with bold, glamorous makeup looks. This year, burgundy is making a major comeback, and we're here to show you how to create a stunning burgundy Christmas makeup look that's full of glow and sophistication.</p>
      
      <h2>Step 1: Prep Your Skin</h2>
      <p>Start with a clean, moisturized face. Apply a hydrating primer to create a smooth canvas for your makeup. This will ensure your foundation goes on evenly and lasts throughout the evening.</p>
      
      <h2>Step 2: Create the Perfect Base</h2>
      <p>Apply your foundation using a beauty sponge for a flawless finish. Use a concealer to brighten under your eyes and cover any imperfections. Set everything with a translucent powder.</p>
      
      <h2>Step 3: Burgundy Eye Look</h2>
      <p>This is where the magic happens! Start by applying a burgundy eyeshadow to your crease, blending it out for a soft, diffused look. Add depth with a darker burgundy in the outer corner, and finish with a shimmery gold on the lid for that festive glow.</p>
      
      <h2>Step 4: Define Your Eyes</h2>
      <p>Line your upper lash line with a burgundy or black eyeliner, creating a subtle wing. Apply several coats of volumizing mascara, or add false lashes for extra drama.</p>
      
      <h2>Step 5: Glowing Complexion</h2>
      <p>Add warmth to your face with a bronzer, then apply a peachy blush to the apples of your cheeks. Finish with a highlighter on the high points of your face for that coveted holiday glow.</p>
      
      <h2>Step 6: Perfect Pout</h2>
      <p>Complete the look with a burgundy lipstick. For a more subtle approach, use a burgundy lip liner and fill in with a matching gloss. This creates a beautiful, long-lasting finish.</p>
      
      <p>And there you have it! A stunning burgundy Christmas makeup look that's perfect for any holiday gathering. Remember, the key is to blend well and have fun with it!</p>
    `,
    },
    {
        slug: "keratin-hair-straightening",
        title: "What Is Keratin Hair Straightening and Is It Suitable for Everyone?",
        excerpt: "Learn everything about keratin treatments, their benefits, and whether they're the right choice for your hair type.",
        category: "Hair Care",
        date: "Dec 10, 2025",
        readTime: "7 min read",
        content: `
      <p>Keratin hair straightening has become one of the most popular salon treatments in recent years. But what exactly is it, and is it right for you? Let's dive into everything you need to know.</p>
      
      <h2>What is Keratin Treatment?</h2>
      <p>Keratin is a protein that naturally occurs in your hair. A keratin treatment involves applying a keratin-infused solution to your hair, which is then sealed in with heat. This process smooths the hair cuticle, eliminates frizz, and makes your hair more manageable.</p>
      
      <h2>Who is it For?</h2>
      <p>Keratin treatments work best for people with frizzy, curly, or wavy hair who want smoother, more manageable locks. However, it's important to note that if you have very fine or damaged hair, you should consult with a professional first.</p>
      
      <h2>Benefits</h2>
      <p>The benefits of keratin treatments include reduced styling time, smoother hair texture, and protection from humidity. Results typically last 3-6 months, making it a great long-term solution for frizzy hair.</p>
      
      <h2>Aftercare</h2>
      <p>To maintain your keratin treatment, use sulfate-free shampoos and avoid washing your hair for at least 48 hours after the treatment. Regular deep conditioning treatments will also help extend the life of your keratin treatment.</p>
    `,
    },
    {
        slug: "chemical-peel-guide",
        title: "Chemical Peel: Renew the Skin and Reveal Its Radiance",
        excerpt: "Discover how chemical peels can transform your skin, reduce signs of aging, and give you that coveted glow.",
        category: "Skin Care",
        date: "Dec 5, 2025",
        readTime: "6 min read",
        content: `
      <p>Chemical peels are one of the most effective treatments for rejuvenating your skin. They work by removing the outer layers of dead skin cells, revealing fresher, smoother skin underneath.</p>
      
      <h2>Types of Chemical Peels</h2>
      <p>There are three main types of chemical peels: superficial, medium, and deep. Superficial peels are gentle and require no downtime, while deeper peels provide more dramatic results but require recovery time.</p>
      
      <h2>Benefits</h2>
      <p>Chemical peels can reduce fine lines, improve skin texture, fade dark spots, and give your skin a radiant glow. They're particularly effective for treating acne scars and sun damage.</p>
      
      <h2>What to Expect</h2>
      <p>During the treatment, you may experience a slight tingling sensation. Afterward, your skin may be slightly red and sensitive. It's crucial to follow your esthetician's aftercare instructions and always wear sunscreen.</p>
    `,
    },
    {
        slug: "lash-extension-care",
        title: "Complete Guide to Lash Extension Care and Maintenance",
        excerpt: "Everything you need to know about keeping your lash extensions looking perfect for weeks.",
        category: "Lashes",
        date: "Nov 28, 2025",
        readTime: "4 min read",
        content: `
      <p>Lash extensions are a fantastic way to enhance your natural beauty and wake up with perfect lashes every day. However, proper care is essential to maintain their appearance and longevity.</p>
      
      <h2>First 24-48 Hours</h2>
      <p>After getting your lash extensions, avoid getting them wet for the first 24-48 hours. This allows the adhesive to fully cure and ensures your extensions stay in place.</p>
      
      <h2>Daily Care Routine</h2>
      <p>Gently brush your lashes daily with a clean spoolie brush to keep them separated and looking their best. Avoid using oil-based products near your eyes, as they can break down the adhesive.</p>
      
      <h2>Cleaning Your Extensions</h2>
      <p>Use a lash extension-safe cleanser to gently clean your lashes. Avoid rubbing or pulling on the extensions, and pat them dry with a clean towel.</p>
      
      <h2>Sleeping Tips</h2>
      <p>Sleep on your back or side to avoid crushing your lashes. Consider using a silk or satin pillowcase to reduce friction.</p>
      
      <h2>When to Get a Fill</h2>
      <p>Most lash extensions last 2-4 weeks before needing a fill. Schedule regular appointments to maintain your full, beautiful lashes.</p>
    `,
    },
    {
        slug: "russian-manicure-benefits",
        title: "Why Russian Manicure is Taking Over the Beauty World",
        excerpt: "Discover the secrets behind this precision technique and why it's becoming the go-to choice for nail enthusiasts.",
        category: "Nails",
        date: "Nov 20, 2025",
        readTime: "5 min read",
        content: `
      <p>The Russian manicure has become one of the most sought-after nail treatments in recent years. This precision technique offers superior results and longer-lasting polish.</p>
      
      <h2>What is a Russian Manicure?</h2>
      <p>Unlike traditional manicures, the Russian technique uses an electric file to precisely remove cuticles and shape the nails. This method creates a cleaner, more defined nail bed and allows polish to last significantly longer.</p>
      
      <h2>Key Benefits</h2>
      <p>Russian manicures provide several advantages: longer-lasting polish (up to 3-4 weeks), cleaner nail beds, more precise shaping, and reduced risk of cuticle damage. The technique also promotes healthier nail growth.</p>
      
      <h2>The Process</h2>
      <p>During a Russian manicure, your technician uses specialized bits on an electric file to gently remove dead skin and cuticles. The process is precise and requires professional training to ensure safety and optimal results.</p>
      
      <h2>Who Should Get One?</h2>
      <p>Russian manicures are perfect for anyone who wants long-lasting, flawless nails. They're especially beneficial for those with challenging cuticles or who want a more polished, professional look.</p>
      
      <h2>Aftercare</h2>
      <p>To maintain your Russian manicure, keep your nails moisturized and avoid picking at your cuticles. Regular appointments every 3-4 weeks will keep your nails looking perfect.</p>
    `,
    },
    {
        slug: "winter-hair-care",
        title: "Essential Winter Hair Care Tips for Healthy, Shiny Locks",
        excerpt: "Protect your hair from winter damage with these expert tips and product recommendations.",
        category: "Hair Care",
        date: "Nov 15, 2025",
        readTime: "6 min read",
        content: `
      <p>Winter weather can be harsh on your hair, causing dryness, breakage, and static. With the right care routine, you can keep your locks healthy and shiny all season long.</p>
      
      <h2>Moisturize Regularly</h2>
      <p>Cold, dry air strips moisture from your hair. Use a deep conditioning treatment at least once a week to replenish lost hydration. Look for products with natural oils like argan, coconut, or jojoba.</p>
      
      <h2>Reduce Heat Styling</h2>
      <p>Limit your use of hot tools during winter months. When you do style with heat, always use a heat protectant spray. Consider air-drying your hair more often to prevent additional damage.</p>
      
      <h2>Protect from the Elements</h2>
      <p>Wear a hat or scarf when going outside to protect your hair from cold winds and dry air. Silk or satin-lined hats are best as they reduce friction and prevent breakage.</p>
      
      <h2>Adjust Your Shampoo Routine</h2>
      <p>You may need to wash your hair less frequently in winter, as your scalp produces less oil. When you do shampoo, use a moisturizing formula and follow with a rich conditioner.</p>
      
      <h2>Combat Static</h2>
      <p>Static electricity is common in winter. Use a leave-in conditioner or anti-static spray. A small amount of hair oil on the ends can also help tame flyaways.</p>
      
      <h2>Trim Regularly</h2>
      <p>Regular trims every 6-8 weeks will prevent split ends from traveling up the hair shaft, keeping your hair healthy and strong throughout the winter months.</p>
    `,
    },
];

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: `${post.title} | Claude Monet Salon & Spa Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return <BlogPostDetail post={post} />;
}
