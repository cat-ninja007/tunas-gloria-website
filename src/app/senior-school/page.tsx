import Hero from "@/components/global/Hero";

export const metadata = {
  title: 'Senior School | Tunas Gloria',
  description: 'Explore the academic pathways and opportunities available to our Senior School students.',
};

export default function SeniorSchoolPage() {
  return (
    <>
      <Hero
        title="Senior School"
        subtitle="Our Senior School program offers a rigorous academic curriculum and a wide range of extracurricular activities to prepare students for university and beyond."
        img="/hero/senior-school.jpg"
      />
    </>
    
  );
}