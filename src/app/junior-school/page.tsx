import Hero from "@/components/global/Hero";

export const metadata = {
  title: 'Junior School | Tunas Gloria',
  description: 'Discover the curriculum and unique programs for our Junior School students.',
};

export default function JuniorSchoolPage() {
  return (
    <>
      <Hero
        title="Junior School"
        subtitle="The Junior School curriculum is designed to prepare students for the academic challenges of high school while encouraging personal growth."
        img="/hero/junior-school.jpg"
      />
    </>
  );
}