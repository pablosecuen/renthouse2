import FeedBack from "./layout/feedback";
import Landing from "./layout/landing";
import Soon from "./layout/soon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 ">
      <Landing />
      <Soon />
      <FeedBack />
    </main>
  );
}
