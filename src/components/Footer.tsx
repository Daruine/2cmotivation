
import React from "react";
import { Instagram, Youtube, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© 2025 2CMotivation. Tous droits réservés.</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://www.tiktok.com/@2cmotivationultra?is_from_webapp=1&sender_device=pc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <div className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                  <path d="M15 8v8a4 4 0 0 1-4 4"></path>
                  <line x1="15" y1="4" x2="15" y2="12"></line>
                </svg>
                <span className="hidden sm:inline">TikTok</span>
              </div>
            </a>
            <a 
              href="https://youtube.com/c/ClaimeCitationsetMotivation/?sub_confirmation=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <div className="flex items-center gap-1">
                <Youtube size={20} />
                <span className="hidden sm:inline">YouTube</span>
              </div>
            </a>
            <a 
              href="https://www.instagram.com/2cmotivation" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <div className="flex items-center gap-1">
                <Instagram size={20} />
                <span className="hidden sm:inline">Instagram</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
