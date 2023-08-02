import React from "react";

const currentDate = new Date().getFullYear();

export default function Footer() {
  const socialMediaLinks = [
    {
      icon: (
        <svg
          className="h-5 w-5"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          {/* Insert the path for the social media icon */}
        </svg>
      ),
      url: "#",
    },
    // Add other social media objects here
  ];

  const navLinks = [
    {
      title: "Products",
      links: [
        { label: "Overview", url: "#" },
        { label: "Solutions", url: "#" },
        { label: "Pricing", url: "#" },
        { label: "Customers", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", url: "#" },
        { label: "Investor Relations", url: "#" },
        { label: "Jobs", url: "#" },
        { label: "Press", url: "#" },
        { label: "Blog", url: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact", url: "#" },
        { label: "Documentation", url: "#" },
        { label: "Chat", url: "#" },
        { label: "FAQ", url: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", url: "#" },
        { label: "Privacy Policy", url: "#" },
        { label: "Cookie settings", url: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white mt-12">
      <div className="bg-secondary-clr py-6">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
            <div className="mb-3 text-center md:mb-0 md:text-left">
              <span className="font-bold uppercase tracking-widest text-gray-100">Newsletter</span>
              <p className="text-indigo-200">Subscribe to our newsletter</p>
            </div>
            <form className="flex w-full gap-2 md:max-w-md">
              <input
                placeholder="Email"
                className="w-full flex-1 rounded border border-white px-3 py-2 text-white placeholder-indigo-100 outline-none transition duration-100 focus:ring"
              />
              <button className="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold outline-none transition duration-100 hover:bg-gray-100 focus-visible:ring  md:text-base">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="pt-12 lg:pt-16">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
            <div className="col-span-full lg:col-span-2">
              <div className="mb-4 lg:-mt-2">LOGO HERE</div>
              <p className="mb-6 text-gray-500 sm:pr-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia animi dolorum
                incidunt sunt impedit repellendus est praesentium in voluptatibus aperiam?
              </p>
              <div className="flex gap-4">
                {socialMediaLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    className=" transition duration-100">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            {navLinks.map((navItem, index) => (
              <div key={index}>
                <div className="mb-4 font-bold uppercase tracking-widest ">{navItem.title}</div>
                <nav className="flex flex-col gap-4">
                  {navItem.links.map((link, index) => (
                    <div key={index}>
                      <a href={link.url} className=" transition duration-100">
                        {link.label}
                      </a>
                    </div>
                  ))}
                </nav>
              </div>
            ))}
          </div>
          <div className="border-t py-8 text-center text-sm ">
            © {currentDate} - Rebuilding lives. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
