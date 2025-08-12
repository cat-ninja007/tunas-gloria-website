import SectionTwoCol from "@/components/global/SectionTwoCol";
import { academicSections } from "@/data/academicSections";
import Hero from "@/components/global/Hero";

export const metadata = {
  title: 'Academic Overview | Tunas Gloria',
  description: 'An overview of the academic philosophy, curriculum, and educational approach at Tunas Gloria.',
};

export default function AcademicOverviewPage() {
  return (
    <>
      <Hero
        title="Academic Overview"
        subtitle="Our academic program is designed to challenge students to think critically and creatively, preparing them for future success."
        img="/hero/academic-overview.jpg"
      />

      {academicSections.map((s, i) => (
        <SectionTwoCol key={i} {...s} />
      ))}
    </>

    
  );
}
