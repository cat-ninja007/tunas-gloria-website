import Hero from "@/components/global/Hero";

export const metadata = {
  title: 'Community in Action | Tunas Gloria',
  description: 'See how the Tunas Gloria community engages in service and outreach projects.',
};

export default function CommunityInActionPage() {
  return (
    <>
      <Hero
        title="Community in Action"
        subtitle="Our students and faculty are actively involved in projects that serve our local and global communities."
        img="/hero/community-in-action.jpg"
      />
    </>
  );
}
