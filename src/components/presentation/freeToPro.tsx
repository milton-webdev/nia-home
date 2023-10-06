import React from "react";
import {
  Button,
  Card,
  Typography
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

function StatsCard({ count, title, desc }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h1" className="mb-4 text-5xl text-dark">
        {count}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {title}
      </Typography>
      <Typography color="gray">
        {desc}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "AI",
    title: "Multi-Media AI",
    desc: "Get the best out of Nia AI and get more than just the text but media."
  },
  {
    count: "10x",
    title: "Smarter & Faster",
    desc: "Get Nia to do more things faster. And expect 100% accuracy in answers"
  },
  {
    count: "AM",
    title: "Automated Marketing",
    desc: "Nia can do your marketing and get your business back on its feet without monitoring it."
  },
  {
    count: "40+",
    title: "Global Tools",
    desc: "Css , Javascript and Webbased tools that can help you develop apps better."
  },
];

export function FigmaPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white px-8 py-20">
        <div className="container mx-auto relative">
          <div className="text-left">
            <Typography
              color="blue"
              className="font-bold text-lg mb-5"
            >
              Full cloud experience and benefits 
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-8 leading-tight"
            >
              Nia Pro Account
            </Typography>
            <Typography color="blue-gray" className="mb-5 lg:w-[30rem]">
              Here are some of the amazing features you ca unlock by upgrading to pro.
            </Typography>
          </div>
          <div className="lg:flex relative">
            <div className="lg:w-1/2">
              <div className="p-2 lg:p-0 mb-8">
                <div className="grid gap-y-16 gap-x-8 grid-cols-2 md:grid-cols-2 mb-8">
                  {stats.map((props, key) => (
                    <StatsCard key={key} {...props} />
                  ))}
                </div>
                <a href="#pricing">
                  <Button color="dark" className="flex items-center">
                     Upgrade Now!
                  </Button>
                </a>
              </div>
            </div>
            <img src="components.png" alt="iphone" className="lg:w-1/2 rounded-3xl hidden md:flex ml-auto lg:absolute -right-32 -top-24" />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default FigmaPresentation;
