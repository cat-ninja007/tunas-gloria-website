import Hero from "@/components/global/Hero";

export const metadata = {
  title: 'Our Network | Tunas Gloria',
  description: 'Explore the network of schools and partners connected to Tunas Gloria.',
};

export default function OurNetworkPage() {
  return (
    <>
      <Hero
        title="Our Network"
        subtitle="Tunas Gloria is part of a wider network of schools, collaborating to share best practices and resources."
        img="/hero/our-network.jpg"
      />
    </>
    
  );
}