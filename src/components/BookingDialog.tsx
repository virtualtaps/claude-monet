"use client";

import { useState } from "react";
import { useBooking } from "@/contexts/BookingContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle2 } from "lucide-react";

export default function BookingDialog() {
  const { isOpen, closeDialog } = useBooking();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Handle form submission here
    console.log("Booking submitted:", formData);
    
    // Show success message
    setIsSuccess(true);
    setIsSubmitting(false);
    
    // Reset form and close dialog after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
      setIsSuccess(false);
      closeDialog();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FAF8F3] border-[#E8DDD0]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground font-[family-name:var(--font-heading)]">
            Book Your Appointment
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Fill out the form below and we'll get back to you to confirm your appointment.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-20 h-20 bg-[#8B6F47]/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-12 h-12 text-[#8B6F47]" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
              Appointment Request Submitted!
            </h3>
            <p className="text-muted-foreground">
              We've received your booking request and will contact you shortly to confirm your appointment.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
              <User className="w-4 h-4 text-[#8B6F47]" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-[#E8DDD0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-foreground"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone & Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8B6F47]" />
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#E8DDD0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-foreground"
                placeholder="+974 XXXX XXXX"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8B6F47]" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#E8DDD0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-foreground"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium text-foreground">
              Select Service *
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-[#E8DDD0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-foreground"
            >
              <option value="">Choose a service...</option>
              <option value="hair-styling">Hair Styling</option>
              <option value="keratin-treatment">Keratin Treatment</option>
              <option value="russian-manicure">Russian Manicure</option>
              <option value="russian-pedicure">Russian Pedicure</option>
              <option value="makeup">Make Up</option>
              <option value="lash-services">Lash Services</option>
              <option value="permanent-makeup">Permanent Makeup</option>
              <option value="electrolysis">Electrolysis</option>
              <option value="mens-grooming">Men's Grooming</option>
            </select>
          </div>

          {/* Date & Time Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#8B6F47]" />
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-white border border-[#E8DDD0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-foreground"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="time" className="text-sm font-medium text-foreground flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8B6F47]" />
                Preferred Time *
              </label>
              <select
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-[#E8DDD0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-foreground"
              >
                <option value="">Select time...</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
                <option value="18:00">6:00 PM</option>
                <option value="19:00">7:00 PM</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#8B6F47]" />
              Additional Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-white border border-[#E8DDD0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F47] focus:border-transparent text-foreground resize-none"
              placeholder="Any special requests or notes..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={closeDialog}
              className="flex-1 border-[#E8DDD0] text-foreground hover:bg-[#F5F0E8]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#8B6F47] hover:bg-[#A0826D] text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Book Appointment"}
            </Button>
          </div>
        </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
