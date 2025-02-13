"use client";

import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SocialShare({ title = "Check this out!" }) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  return (
    <div className="absolute bottom-6 right-6 flex flex-col space-y-2 z-10">
      <Link
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
      >
        <FaFacebook size={16} />
      </Link>

      <Link
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white p-2 rounded-full hover:bg-blue-500 transition"
      >
        <FaXTwitter size={16} />
      </Link>

      <Link
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition"
      >
        <FaLinkedin size={16} />
      </Link>

      <Link
        href={socialLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
      >
        <FaWhatsapp size={16} />
      </Link>
    </div>
  );
}
