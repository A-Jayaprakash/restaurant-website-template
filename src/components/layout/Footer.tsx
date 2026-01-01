import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import {
  restaurantData,
  navigationLinks,
  quickLinks,
} from "@/src/config/restaurant-data";

export default function Footer() {
  const weekdayHours = restaurantData.hours.find((h) => h.day === "Monday");
  const weekendHours = restaurantData.hours.find((h) => h.day === "Saturday");

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {restaurantData.info.name}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {restaurantData.info.description}
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">
              {restaurantData.socialMedia.instagram && (
                <a
                  href={restaurantData.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {restaurantData.socialMedia.facebook && (
                <a
                  href={restaurantData.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {restaurantData.socialMedia.twitter && (
                <a
                  href={restaurantData.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-orange-500">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-orange-500 transition-colors flex items-center gap-2"
                  >
                    <span className="text-orange-500">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${restaurantData.contact.phone}`}
                  className="flex items-start gap-3 hover:text-orange-500 transition-colors group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{restaurantData.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${restaurantData.contact.email}`}
                  className="flex items-start gap-3 hover:text-orange-500 transition-colors group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{restaurantData.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500" />
                <span>
                  {restaurantData.contact.address.street},<br />
                  {restaurantData.contact.address.city},{" "}
                  {restaurantData.contact.address.state}{" "}
                  {restaurantData.contact.address.pincode}
                </span>
              </li>
              <li className="pt-2 border-t border-gray-800">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-500" />
                  <div>
                    <div className="text-sm mb-1">
                      <span className="text-white font-medium">Mon - Fri</span>
                      <br />
                      <span className="text-gray-400">
                        {weekdayHours?.open} - {weekdayHours?.close}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-white font-medium">Sat - Sun</span>
                      <br />
                      <span className="text-gray-400">
                        {weekendHours?.open} - {weekendHours?.close}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {restaurantData.info.name}. All
              rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#privacy"
                className="hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-orange-500 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="hover:text-orange-500 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
