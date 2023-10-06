import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";

interface BlogPostCardPropsType {
  img: string;
  title: string;
  desc: string;
  date: string;
  url: string;
}

function BlogPostCard({
  img,
  title,
  desc,
  url,
}: BlogPostCardPropsType) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-8 h-56">
        <a href={url}>
          <img src={img} alt={title} className="h-full w-full object-cover" />
        </a>
      </CardHeader>
      <CardBody className="p-0">
        <a
          href={url}
          className="grid grid-cols-6 items-baseline gap-2 text-blue-gray-900 transition-colors hover:text-blue-500"
        >
          <div className="col-span-5">
            <Typography variant="h4" className="normal-case">
              {title}
            </Typography>
          </div>
        </a>
        <Typography color="gray" className="mb-6 font-normal">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

const posts = [
  {
    img: "Logo.png",
    title: "Introduction to Nia",
    desc: "Welcome to Nia it can answer any question you throw at it. How smart is it?",
    url: "https://demos.creative-tim.com/astro-launch-ui/about",
  },
  {
    img: "blocks.png",
    title: "Unlimited Features",
    desc: "The Awesome Nia is totally free and open for everyone. Feel free to try it out",
    url: "#",
  },
  {
    img: "features3.jpg",
    title: "Whats New?",
    desc: "Nia is finally online and active. Android Users should be excited cause its all free",
    url: "#",
  },
];

export function BlogSectionThree() {
  return (
    <ThemeProvider>
      <section id="examplePages">
        <div className="container mx-auto px-8 py-10">
          <div className="mb-16 text-left">
            <Typography color="blue" className="mb-2 text-lg font-semibold">
              Get inspired!
            </Typography>
            <Typography variant="h2" color="blue-gray" className="mb-4">
              Take A Look at Our Blog
            </Typography>
            <Typography color="blue-gray">
              Lets us embark on this amazing journey together. Learn about Nia and Connect
            </Typography>
          </div>

          <div className="grid grid-cols-1 items-start gap-y-16 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(({ img, author, date, title, desc, url, tags }: any) => (
              <BlogPostCard
                key={title}
                img={img}
                author={author}
                date={date}
                title={title}
                desc={desc}
                tags={tags}
                url={url}
              />
            ))}
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default BlogSectionThree;
