"use client";

import { motion } from "framer-motion";
import { Award, Heart, Users, Leaf, Clock, Target } from "lucide-react";
import { cn } from "@/src/lib/utils";

const values = [
  {
    icon: Heart,
    title: "Passion for Food",
    description:
      "Every dish is crafted with love and dedication to culinary excellence",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We source locally and use only the finest, freshest ingredients daily",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Building connections and serving our community with warmth and care",
  },
  {
    icon: Award,
    title: "Quality Service",
    description:
      "Exceptional hospitality and attention to detail in every interaction",
  },
];

const team = [
  {
    name: "Chef Arjun Patel",
    role: "Head Chef",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400",
    description: "15+ years of culinary expertise in authentic Indian cuisine",
  },
  {
    name: "Priya Sharma",
    role: "Restaurant Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    description: "Passionate about creating memorable dining experiences",
  },
  {
    name: "Vikram Singh",
    role: "Sous Chef",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400",
    description: "Specializes in traditional North Indian flavors",
  },
];

const milestones = [
  { year: "2010", event: "Restaurant Founded" },
  { year: "2015", event: "Expanded to Second Location" },
  { year: "2018", event: "Won Best Restaurant Award" },
  { year: "2020", event: "Launched Online Delivery" },
  { year: "2024", event: "Celebrating 15,000+ Happy Customers" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              Where tradition meets innovation, and every meal tells a story
            </p>
          </motion.div>
        </div>
      </section>

      {/* Restaurant Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Journey of Flavor & Tradition
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <p>
                Founded in 2010, our restaurant began with a simple dream: to
                bring authentic, soul-satisfying food to the heart of Chennai.
                What started as a small family-owned eatery has blossomed into a
                beloved culinary destination where locals and visitors alike
                come to experience the warmth of Indian hospitality.
              </p>

              <p>
                Our founder, inspired by generations of family recipes and a
                passion for culinary arts, set out to create more than just a
                restaurant – a place where every dish tells a story, every
                ingredient is chosen with care, and every guest becomes part of
                our extended family.
              </p>

              <p>
                Today, we continue to honor those traditional roots while
                embracing innovation in our kitchen. From the sizzle of our
                tandoor to the aromatic spices that fill the air, every element
                of our restaurant is designed to transport you to a world of
                authentic flavors and memorable experiences.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to excellence in every aspect of our service
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl p-8 md:p-12 text-center shadow-xl"
          >
            <Target className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-xl text-white/90 leading-relaxed">
              To create exceptional dining experiences that bring joy and
              satisfaction to every guest through authentic flavors, outstanding
              service, and a warm, inviting atmosphere that makes every visit
              memorable.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind your favorite dishes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-orange-300 font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-center">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that shaped our story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 items-center mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-4xl font-bold text-orange-600">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-orange-600 rounded-full relative">
                    <div className="absolute top-4 left-1/2 w-0.5 h-24 bg-orange-200 -translate-x-1/2 last:hidden" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <p className="text-lg font-semibold text-gray-900">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Come Experience Our Story
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable dining experience where every meal is
              a celebration
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/menu"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transform hover:scale-105 transition-all shadow-lg"
              >
                View Our Menu
              </a>
              <a
                href="tel:+919876543210"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all"
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
