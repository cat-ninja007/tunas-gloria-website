import Hero from "@/components/global/Hero";

export const metadata = {
  title: 'Kindergarten | Tunas Gloria',
  description: 'Explore the curriculum and activities for our Kindergarten students at Tunas Gloria.',
};

export default function KindergartenPage() {
  return (
    <>
      <Hero
        title="Kindergarten"
        subtitle="In Kindergarten, we focus on a play-based learning approach that builds foundational skills and fosters a love for learning."
        img="/hero/kindergarten.jpg"
      />
    </>
    
  );
}