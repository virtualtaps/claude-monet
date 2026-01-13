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
