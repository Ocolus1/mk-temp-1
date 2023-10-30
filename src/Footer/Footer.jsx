import React from "react";
import star from "../assets/star.svg";
import logo from "../assets/website-logo/website-logo.svg";
import logoWithoutText from "../assets/website-logo/websitelogo-without-text.svg";

function Footer() {
  // you can change the footer links from here change the title and and please change "#" to your own url like if you website is "https://www.example.com" and you want to add "About" page which is in the "/about" routes then change the url to "/about".
  const footerLinksColumn1 = [
    {
      id: 1,
      title: "About",
      url: "#",
    },
    {
      id: 2,
      title: "Contact",
      url: "#",
    },
    {
      id: 3,
      title: "Blog",
      url: "#",
    },
    {
      id: 4,
      title: "Story",
      url: "#",
    },
    // You can add more links here
  ];

  const footerLinksColumn2 = [
    {
      id: 5,
      title: "Company",
      url: "#",
    },
    {
      id: 6,
      title: "Product",
      url: "#",
    },
    {
      id: 7,
      title: "Press",
      url: "#",
    },
    {
      id: 8,
      title: "More",
      url: "#",
    },
    // You can add more links here
  ];

  return (
    <div className="pb-20 pl-10">
      <div className="flex items-center justify-center gap-x-5 md:gap-x-10 lg:gap-x-32">
        <div className="relative">
          <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-[120px] font-bold text-white truncate-nowrap">
            Join Our beta
          </h1>
          <img
            className="h-10 w-10 absolute -top-3 -right-5 lg:-top-5 lg:-right-14"
            src={star}
            alt=""
          />
        </div>
        <h1 className=" text-3xl md:text-5xl lg:text-7xl xl:text-[120px] font-bold text-[#7D7D82] truncate-nowrap">
          Join Our beta
        </h1>
      </div>

      <div className="border-b max-w-7xl mx-auto border-slate-500/50 py-5"></div>

      <div className="footer-main pt-10 pr-10">
        <div className="footer-headline mx-auto max-w-5xl pt-10 flex flex-col gap-y-5 md:flex-row md:items-start md:justify-between gap-x-5 lg:px-10 xl:px-0">
          <div className="left-footer-part w-full md:w-1/2 lg:w-1/3 pt-3 flex flex-col justify-start items-start">
            <button>
              <div className="header-logo flex items-center space-x-2">
                <img src={logo} alt="" />
              </div>
            </button>
            <p className="text-white/60 text-sm mt-5 max-w-xs font-[400]">
              What matters is productivity with fun culture
            </p>
          </div>

          <div className="center-footer-part pt-5 w-1/2 lg:w-1/3">
            <div className="flex gap-x-3 items-center justify-between px-0 lg:px-10">
              <ul className="footer-link-list text-white/50 text-sm font-[400] flex flex-col gap-y-5">
                {footerLinksColumn1.map((link) => (
                  <li className="footer-link-item" key={link.id}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
              <ul className="footer-link-list text-white/50 text-sm font-[400] flex flex-col gap-y-5">
                {footerLinksColumn2.map((link) => (
                  <li className="footer-link-item" key={link.id}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="right-footer-part pt-3 w-full md:w-2/3 lg:w-1/3">
            <div className=" footer-social-container-dark  flex items-center justify-between p-5">
              <div className="flex flex-col gap-y-2">
                <img
                  className="h-8 w-8 lg:h-10 lg:w-10"
                  src={logoWithoutText}
                  alt=""
                />
                <p className="text-white text-sm lg:text-base xl:text-lg font-[400]">
                  Follow us on twitter
                </p>
                <p className="text-white/50 text-xs font-[400] -mt-2">
                  notion.com
                </p>
              </div>
              <div>
                <button className="footer-social-container-dark-button border border-transparent text-black bg-[#D3E763] text-sm font-bold py-2 px-5 rounded-full w-full hover:shadow-lg hover:drop-shadow-lg hover:shadow-black transition duration-200">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
