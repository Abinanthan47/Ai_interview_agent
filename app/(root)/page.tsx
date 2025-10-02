import InterViewCard from "@/components/InterViewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <section className="flex flex-row px-16 py-6  rounded-3xl bg-gradient-to-b from-[#171532] to-[#08090D] items-center justify-between max-sm:px-4">
        <div className="flex flex-col gap-6 max-w-lg ">
          <h2>Practice your interview skills with AI & land your dream job</h2>
          <p className="text-lg">
            Practice real interviews with AI & get instant feedback
          </p>
          <Button
            asChild
            className="bg-primary-200 hover:bg-primary-200/80 rounded-full font-bold w-fit px-5 min-h-10 max-sm:w-full "
          >
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot"
          width={400}
          height={400}
          className="max-sm:hidden "
        />
      </section>
      <section className="flex flex-col gap-6 mt-4">
        <h2>Your Past Interviews</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterViewCard {...interview} key={interview.id} />
          ))}
          {/* <p>You haven't taken any interviews yet</p> */}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-4">
        <h2>Take an Interview </h2>
        <div className="interviews-section">
        {dummyInterviews.map((interview) => (
            <InterViewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
