import Hero from "@/components/global/Hero";

export const metadata = {
  title: 'News & Event | Tunas Gloria',
  description: 'Stay up-to-date with the latest news and upcoming events at Tunas Gloria School.',
};

export default function NewsAndEventPage() {
  return (
    <>
      <Hero
        title="News & Events"
        subtitle="Find out about the latest happenings and important dates on the Tunas Gloria calendar."
        img="/hero/news.jpg"
      />
    </>
    
  );
}