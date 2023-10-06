import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

export function DevPresentation() {
 
  return (
    <ThemeProvider>
      <div className="h-full w-screen place-items-center bg-white py-20">
        <div className="container mx-auto grid items-center relative lg:grid-cols-2">
          <div className="mb-8">
          <Typography
              color="blue"
              className="flex items-center font-bold text-lg mb-5"
            >
              Attention to hiqh-tech solutions
            </Typography>

            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4 leading-tight"
            >
            An AI Chatbot that can assist <br />
            anytime.
            </Typography>
            <Typography color="blue-gray" className="lg:pr-64">
            Nia, a dynamic and forward-thinking company, is poised to revolutionize the tech industry in Zimbabwe. With a strong focus on innovation, Nia is ready to take Zimbabwean technology to the next level with its cutting-edge solutions.
            </Typography>
          </div>
          <img src="together.png" alt="components" className="mx-auto hidden md:flex" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default DevPresentation;
