
import { Typography } from "@material-tailwind/react";
import "./randomcss.css";

const YEAR = new Date().getFullYear();

const SOCIAL_MEDIA = [
  {
    icon: "fab fa-twitter",
    link: "https://www.twitter.com/",
  },
  {
    icon: "fab fa-facebook-square",
    link: "https://www.facebook.com/",
  },
  {
    icon: "fab fa-youtube",
    link: "https://www.dribbble.com/",
  },
  {
    icon: "fab fa-github",
    link: "https://www.github.com/milton-webdev/nia",
  },
  {
    icon: "fab fa-google",
    link: "mailto:niacloudofficial@gmail.com",
  },
];

const COMPANY = [
  {
    name: "For Developers",
    link: "#",
  },
  {
    name: "For Enterprises",
    link: "#",
  },
  {
    name: "For Marketers",
    link: "#",
  },
  {
    name: "For Creators",
    link: "#",
  },
];

const HELP = [
  {
    name: "Contact Us",
    link: "./404",
  },
  {
    name: "Support Team",
    link: "mailto:niacloudofficial@gmail.com",
  },
  {
    name: "Pricing",
    link: "./#pricing",
  },
];

const RESOURCES = [
  {
    name: "Documentation",
    link: "https://docs.nia.co.zw",
  },
  {
    name: "Apis",
    link: "https://docs.nia.co.zw",
  },
  {
    name: "Upcoming",
    link: "https://upcoming.nia.co.zw",
  },
];

const TECHS = [
  {
    name: "AstroJS",
    link: "#",
  },
  {
    name: "Nia Flow",
    link: "#",
  },
];

export function Footer() {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              className="mb-2 !font-semibold !text-primary"
            >
              Nia Cloud
            </Typography>
            <Typography className="text-md mt-0 mb-2 font-normal !text-gray-600">
             A simply connected life.
            </Typography>
            <div className="mt-6">
              {SOCIAL_MEDIA.map(({ icon, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                  <i
                    className={`${icon} font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Company
                </span>
                <ul className="list-unstyled">
                  {COMPANY.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Help and Support
                </span>
                <ul className="list-unstyled">
                  {HELP.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={name === "Pricing" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Resources
                </span>
                <ul className="list-unstyled">
                  {RESOURCES.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={name === "Documentation" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Tehnologies
                </span>
                <ul className="list-unstyled">
                  {TECHS.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
            <a
              href="https://www.github.com/milton-webdev/odyssey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-semibold text-primary no-underline"
            >
              <span className="mr-1">Powered by</span>
              <span>
                <img src="https://i.ibb.co/9g1ykBb/logo-lx-Copy.png" alt=""
                 width={150}
                 height={10}/>
              </span>
            </a>
            <div className="text-md mt-2 py-1 font-normal text-gray-600">
              Copyright &copy; {YEAR}{" "}
              <a href="/" className="text-inherit transition-all">
                Nia Cloud
              </a>{" "}
              by{" "}
              <a
                href="https://www.github.com/milton-webdev"
                target="_blank"
                rel="noreferrer"
                className="text-inherit transition-all"
              >
                Odyssey.
              </a>
            </div>
          </div>
          <div className="ml-auto w-full px-4 text-center md:w-4/12 md:px-0 md:text-right">
            <a href="https://nepcha.com?ref=astrolaunch-ui">
              <img
                src="https://i.ibb.co/9g1ykBb/logo-lx-Copy.png"
                className="mx-auto lg:mr-0 lg:ml-auto"
                alt="Odyssey"
                width={100}
                height={250}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
