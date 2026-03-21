'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonials } from '@/lib/products';

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section font-heading text-text mb-4">
            What Our Customers Say
          </h2>
          <p className="text-body text-text/60 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their skincare
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-secondary/20 p-6"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-text/70 text-sm leading-relaxed mb-4 text-left">
                &ldquo;{testimonial.comment}&rdquo;
              </p>

              {/* Customer Name */}
              <div className="border-t border-accent/10 pt-4">
                <h4 className="font-medium text-text text-sm">{testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
