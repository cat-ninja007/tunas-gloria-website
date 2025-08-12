import Hero from "@/components/global/Hero";

export const metadata = {
  title: 'After School Activities | Tunas Gloria',
  description: 'Browse the variety of elective classes and after-school activities available for students at Tunas Gloria.',
};

export default function ElectiveClassPage() {
  return (
    <>
      <Hero
        title="After School Activities"
        subtitle="Our after-school activities provide students with opportunities to explore their passions and develop new skills outside of the classroom."
        img="/hero/asa.jpg"
      />
    </>
  );
}