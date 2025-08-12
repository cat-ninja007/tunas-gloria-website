import Hero from "@/components/global/Hero";

export const metadata = {
  title: 'Our Voices | Tunas Gloria',
  description: 'Read testimonials, stories, and insights from the students, parents, and alumni of Tunas Gloria.',
};

export default function OurVoicesPage() {
  return (
    <>
      <Hero
        title="Our Voices"
        subtitle="Hear directly from the Tunas Gloria community about their experiences and what makes our school special."
        img="/hero/our-voices.jpg"
      />
    </>
    
  );
}