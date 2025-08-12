import Hero from "@/components/global/Hero";

export const metadata = {
  title: 'Our Campuses | Tunas Gloria',
  description: 'Discover the facilities and learning environments at our Tunas Gloria campuses.',
};

export default function OurCampusPage() {
  return (
    <>
      <Hero
        title="Our Campuses"
        subtitle="Each of our campuses is designed to provide a safe, engaging, and modern learning environment for our students."
        img="/hero/our-campus.jpg"
      />
    </>
    
  );
}