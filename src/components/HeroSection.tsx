import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of Music
        </h1>
        <p className="text-justify">
          Hello! I'm Himanshu, a dedicated Full Stack Developer proficient in
          the MERN stack, SQL, and TypeScript. With expertise in MongoDB for
          scalable databases, Express.js and Node.js for robust server-side
          development, and React.js for intuitive user interfaces, I bring a
          holistic approach to the development lifecycle. My skills extend to
          crafting efficient SQL queries and leveraging TypeScript's power for
          code quality. I thrive in dynamic environments, having contributed to
          diverse projects, and I'm always eager to explore new technologies.
          Let's collaborate and build something extraordinary! 💻✨
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className=" dark:bg-slate-900 text-black text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
