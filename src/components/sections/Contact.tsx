"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Navigation,
  MessageCircle,
} from "lucide-react";
import { restaurantData } from "@/src/config/restaurant-data";

export default function Contact() {
  const { contact, hours, info } = restaurantData;

  // Group hours into weekday and weekend
  const weekdayHours = hours.find((h) => h.day === "Monday");
  const weekendHours = hours.find((h) => h.day === "Saturday");

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find us easily and experience authentic flavors in a warm atmosphere
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-4 rounded-xl">
                  <MapPin className="w-8 h-8 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Our Location
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    {contact.address.street}
                    <br />
                    {contact.address.city}, {contact.address.state}
                    <br />
                    {contact.address.pincode}
                  </p>
                  <a
                    href={contact.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors group"
                  >
                    <Navigation className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Details
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Call Us</p>
                    <p className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {contact.phone}
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">WhatsApp</p>
                    <p className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {contact.whatsapp}
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email Us</p>
                    <p className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                      {contact.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl p-8 shadow-lg text-white">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Opening Hours</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span className="text-lg font-semibold">Monday - Friday</span>
                  <span className="text-lg">
                    {weekdayHours?.open} - {weekdayHours?.close}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">
                    Saturday - Sunday
                  </span>
                  <span className="text-lg">
                    {weekendHours?.open} - {weekendHours?.close}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-orange-100 text-sm">
                  💡 We're open every day! Walk-ins welcome or book a table in
                  advance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Map Container */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[600px]">
              <iframe
                src={contact.address.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${info.name} Location`}
                className="w-full h-full"
              />
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={contact.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
              >
                <Navigation className="w-10 h-10 text-orange-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-gray-900">Get Directions</h4>
                <p className="text-sm text-gray-600 mt-1">Open in Maps</p>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
              >
                <Phone className="w-10 h-10 text-green-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-gray-900">Call Now</h4>
                <p className="text-sm text-gray-600 mt-1">Speak to us</p>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Amazing Food?
            </h3>
            <p className="text-gray-600 mb-6">
              Visit us today or call ahead to reserve your table
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${contact.phone}`}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all shadow-lg"
              >
                Call to Reserve
              </a>
              <a
                href="/menu"
                className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transform hover:scale-105 transition-all"
              >
                View Menu
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
