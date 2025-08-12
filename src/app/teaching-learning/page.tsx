import Hero from "@/components/global/Hero";

export const metadata = {
  title: 'Teaching & Learning | Tunas Gloria',
  description: 'An overview of the academic programs, philosophy, and educational approach at Tunas Gloria School.',
};

export default function TeachingLearningPage() {
  return (
    <>
      <Hero
        title="Teaching & Learning"
        subtitle="Our educational philosophy is centered on fostering a love for learning in a dynamic and supportive environment."
        img="/hero/teaching-learning.jpg"
      />
    </>
    
  );
}