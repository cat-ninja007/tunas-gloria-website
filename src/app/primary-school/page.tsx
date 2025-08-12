import Hero from "@/components/global/Hero";

export const metadata = {
  title: 'Primary School | Tunas Gloria',
  description: 'Learn about the curriculum and educational journey of our Primary School students.',
};

export default function PrimarySchoolPage() {
  return (
    <>
      <Hero
        title="Primary School"
        subtitle="Our Primary School program provides a strong academic foundation in a supportive and nurturing environment."
        img="/hero/primary-school.jpg"
      />
    </>
  );
}
