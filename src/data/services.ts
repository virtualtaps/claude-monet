import {
    Scissors,
    Sparkles,
    Heart,
    Palette,
    Gem,
    Flower2,
    Eye,
    Zap,
    LucideIcon,
} from "lucide-react";

export interface Service {
    id: string;
    slug: string;
    icon: LucideIcon;
    title: string;
    description: string;
    fullDescription: string;
    price: string;
    popular: boolean;
    duration: string;
    category: string;
    features: string[];
    benefits: string[];
}

export const services: Service[] = [
    {
        id: "1",
        slug: "hair-styling",
        icon: Scissors,
        title: "Hair Styling",
        description: "Expert cuts, coloring, and styling for men and women. Transform your look with our skilled stylists.",
        fullDescription: "Our master stylists bring years of experience and artistic vision to every cut, color, and style for both men and women. Whether you're looking for a dramatic transformation or a subtle refresh, we'll work with you to create a look that perfectly complements your features and lifestyle.",
        price: "From $45",
        popular: true,
        duration: "60-90 minutes",
        category: "Hair",
        features: [
            "Professional consultation",
            "Custom color formulation",
            "Precision cutting techniques",
            "Premium styling products",
            "Aftercare recommendations"
        ],
        benefits: [
            "Expert color matching",
            "Long-lasting results",
            "Personalized style consultation",
            "Premium product usage"
        ],
    },
    {
        id: "2",
        slug: "keratin-treatment",
        icon: Sparkles,
        title: "Keratin Treatment",
        description: "Smooth, frizz-free hair that lasts for months. Premium keratin reconstruction services for all hair types.",
        fullDescription: "Transform unruly, frizzy hair into silky smooth locks with our premium keratin treatments. This revolutionary treatment infuses your hair with keratin protein, eliminating frizz and reducing styling time by up to 70%. Perfect for both men and women, results last for 3-6 months, giving you effortlessly beautiful hair every day.",
        price: "From $150",
        popular: false,
        duration: "2-3 hours",
        category: "Hair",
        features: [
            "Deep conditioning treatment",
            "Frizz elimination",
            "Heat protection",
            "Shine enhancement",
            "Long-lasting results"
        ],
        benefits: [
            "Smoother, more manageable hair",
            "Reduced styling time",
            "Protection from humidity",
            "Enhanced shine and softness"
        ],
    },
    {
        id: "3",
        slug: "russian-manicure",
        icon: Gem,
        title: "Russian Manicure",
        description: "Precision nail care for men and women with long-lasting results. Includes cuticle work and polish.",
        fullDescription: "Experience the art of Russian manicure, a meticulous technique that focuses on precision and longevity. Our skilled technicians use specialized tools to create perfectly shaped nails with immaculate cuticle work for both men and women. This method ensures your manicure lasts longer and looks flawless for weeks.",
        price: "From $55",
        popular: true,
        duration: "60-75 minutes",
        category: "Nails",
        features: [
            "Precision cuticle work",
            "Nail shaping and filing",
            "Hand massage",
            "Premium polish application",
            "Long-lasting finish"
        ],
        benefits: [
            "Extended wear time",
            "Clean, precise appearance",
            "Healthier nail growth",
            "Professional finish"
        ],
    },
    {
        id: "4",
        slug: "russian-pedicure",
        icon: Flower2,
        title: "Russian Pedicure",
        description: "Complete foot care for men and women with meticulous attention to detail. Relax and rejuvenate.",
        fullDescription: "Indulge in our luxurious Russian pedicure service that combines meticulous nail care with a relaxing foot treatment. Our technicians pay special attention to every detail, ensuring your feet look and feel their absolute best. Perfect for both men and women to maintain healthy, beautiful feet year-round.",
        price: "From $65",
        popular: false,
        duration: "75-90 minutes",
        category: "Nails",
        features: [
            "Precision cuticle work",
            "Callus removal",
            "Relaxing foot soak",
            "Foot massage",
            "Premium polish application"
        ],
        benefits: [
            "Smooth, soft feet",
            "Long-lasting results",
            "Relaxation and pampering",
            "Professional nail care"
        ],
    },
    {
        id: "5",
        slug: "makeup",
        icon: Palette,
        title: "Make Up",
        description: "Professional makeup for men and women. Bridal, editorial, special events, and everyday glam.",
        fullDescription: "Our professional makeup artists create stunning looks for every occasion. From natural everyday glam to dramatic bridal makeup, we use only premium products to enhance your natural beauty. Whether it's your wedding day, a special event, or just because, we'll make you look and feel absolutely radiant. Our services are available for both men and women.",
        price: "From $75",
        popular: false,
        duration: "60-90 minutes",
        category: "Makeup",
        features: [
            "Skin preparation",
            "Color matching",
            "Professional techniques",
            "Long-wear formulas",
            "Touch-up kit included"
        ],
        benefits: [
            "Flawless finish",
            "Long-lasting wear",
            "Photography-ready",
            "Personalized look"
        ],
    },
    {
        id: "6",
        slug: "lash-services",
        icon: Eye,
        title: "Lash Services",
        description: "Classic, volume, and mega volume lash extensions for men and women. Enhance your natural beauty.",
        fullDescription: "Wake up with beautiful, voluminous lashes every day. Our certified lash artists specialize in creating natural-looking extensions that enhance your eyes without looking overdone. Choose from classic, volume, or mega volume sets to achieve your desired look. Available for both men and women.",
        price: "From $120",
        popular: true,
        duration: "90-120 minutes",
        category: "Lashes",
        features: [
            "Individual lash application",
            "Custom curl and length",
            "Premium lash materials",
            "Fill appointments available",
            "Aftercare instructions"
        ],
        benefits: [
            "Wake up beautiful",
            "No mascara needed",
            "Natural-looking results",
            "Long-lasting extensions"
        ],
    },
    {
        id: "7",
        slug: "permanent-makeup",
        icon: Heart,
        title: "Permanent Makeup",
        description: "Wake up beautiful with microblading, lip blush, and eyeliner tattooing for men and women.",
        fullDescription: "Save time and always look your best with permanent makeup. Our certified artists use advanced techniques to create natural-looking eyebrows, lip color, and eyeliner that lasts for years. Perfect for both men and women who want to simplify their daily routine while maintaining a polished appearance.",
        price: "From $300",
        popular: false,
        duration: "2-3 hours",
        category: "Makeup",
        features: [
            "Microblading for brows",
            "Lip blush application",
            "Eyeliner tattooing",
            "Color matching consultation",
            "Touch-up session included"
        ],
        benefits: [
            "Time-saving daily routine",
            "Natural-looking results",
            "Long-lasting (2-5 years)",
            "Waterproof and smudge-proof"
        ],
    },
    {
        id: "8",
        slug: "electrolysis",
        icon: Zap,
        title: "Electrolysis",
        description: "Permanent hair removal with FDA-approved methods. Safe and effective for men and women.",
        fullDescription: "Achieve permanent hair removal with electrolysis, the only FDA-approved method for permanent hair removal. Our certified electrologists use advanced techniques to safely and effectively remove unwanted hair from any part of your body. Safe for all skin types and hair colors. Available for both men and women.",
        price: "From $40",
        popular: false,
        duration: "15-60 minutes",
        category: "Hair Removal",
        features: [
            "FDA-approved method",
            "Permanent results",
            "Safe for all skin types",
            "Precise targeting",
            "Minimal discomfort"
        ],
        benefits: [
            "Permanent hair removal",
            "Works on all hair colors",
            "Safe and effective",
            "No downtime"
        ],
    },
    {
        id: "9",
        slug: "mens-grooming",
        icon: Scissors,
        title: "Men's Grooming",
        description: "Professional haircuts, beard trims, and grooming services tailored for men.",
        fullDescription: "Our expert barbers specialize in men's grooming services including precision haircuts, beard trims, hot towel shaves, and styling. Whether you prefer a classic look or modern style, we'll help you achieve the perfect look. Our services include hair cutting, beard shaping, mustache trimming, and complete grooming packages.",
        price: "From $35",
        popular: true,
        duration: "30-60 minutes",
        category: "Hair",
        features: [
            "Precision haircuts",
            "Beard trimming & shaping",
            "Hot towel shave",
            "Hair styling",
            "Grooming consultation"
        ],
        benefits: [
            "Professional barber expertise",
            "Classic and modern styles",
            "Complete grooming packages",
            "Premium products"
        ],
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
    return services.filter((service) => service.category === category);
}
