"use client";

import { eagleLake } from "@/lib/fonts";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark dark:bg-dark light:bg-gray-100 border-t border-dark-card dark:border-dark-card light:border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className={`text-xl font-bold text-white dark:text-white light:text-gray-900 mb-2 ${eagleLake.className}`}
            >
              Tony Films
            </h3>
            <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
              Cinematic storytelling through exceptional videography.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["Portfolio", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-gold dark:hover:text-gold light:hover:text-navy transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {["Weddings", "Commercial", "Corporate", "Films"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-gold dark:hover:text-gold light:hover:text-navy transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white dark:text-white light:text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Follow
            </h4>
            <div className="flex gap-4">
              {[
                { name: "Instagram", url: "#" },
                { name: "YouTube", url: "#" },
                { name: "Vimeo", url: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-gold dark:hover:text-gold light:hover:text-navy transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-sm">{social.name.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-card dark:border-dark-card light:border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
              &copy; {currentYear} Tony Films. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
              Made with
              <Heart className="w-4 h-4 text-gold dark:text-gold light:text-navy fill-current" />
              for Eyo Anthony
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
