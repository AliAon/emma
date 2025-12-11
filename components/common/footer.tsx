import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-gray-100 py-10 mx-5 lg:mx-8 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {/* Top row: social icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <Image
                src="/assets/png/facebook.png"
                alt="Facebook"
                width={300}
                height={25}
                className="w-7 h-7"
              />
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <Image
                src="/assets/png/instagram.png"
                alt="Instagram"
                width={300}
                height={25}
                className="w-7 h-7"
              />
            </a>
          </div>

          {/* Middle row: site name and links side-by-side */}
          <div className="grid md:grid-cols-2 items-center">
            {/* <h1 className="text-center md:text-start text-[50px] sm:text-[120px] md:text-[100px] xl:text-[170px] font-bold text-[#8A38F5]">
              Emma
            </h1> */}
            <Image
              src={"/assets/svg/logo.svg"}
              alt=""
              width={600}
              height={200}
              className="w-[300px] md:w-[600px]"
            />

            <div className="mt-8 md:mt-0 flex justify-center gap-20  font-normal text-base text-gray-600 text-center md:text-left">
              <div className="flex flex-col gap-y-8">
                <Link href="/about" className="hover:text-gray-900">
                  About
                </Link>
                <Link href="/support" className="hover:text-gray-900">
                  Support
                </Link>
                <Link href="/faq" className="hover:text-gray-900">
                  FAQ
                </Link>
              </div>
              <div className="flex flex-col gap-y-8">
                <Link href="/privacy" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
                <Link href="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
                <a href="#" className="hover:text-gray-900">
                  Terms of Use
                </a>
              </div>
            </div>
          </div>

          {/* Bottom row: copyright */}
          <div className="text-gray-500 text-sm mt-2 text-center md:text-start">
            © 2025 Emma
          </div>
        </div>
      </footer>
    </>
  );
}
