import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";

export default function ServiceNotFound() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#8B6F47]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A0826D]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-[#8B6F47]/20 mb-4 font-[family-name:var(--font-heading)]">
            Service Not Found
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-heading)]">
            <span className="text-foreground">This Service </span>
            <span className="text-gold-gradient">Doesn't Exist</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            The service you're looking for doesn't exist. 
            Browse our available services to find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-[#8B6F47] hover:bg-[#A0826D] text-white font-semibold px-8 py-6 rounded-none transition-all duration-300 hover:shadow-lg hover:shadow-[#8B6F47]/20"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Services
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-[#8B6F47]/30 text-[#8B6F47] hover:bg-[#8B6F47]/10 px-8 py-6 rounded-none transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
