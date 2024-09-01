import Image from "next/image";
import { Button } from "@/components/ui/button";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <div className="flex flex-col p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
    <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
    <p className="text-xs text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const Home: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      title: "Stripe Integration",
      description: "Secure payments and subscription management."
    },
    {
      title: "Google Analytics",
      description: "Track user behavior and optimize performance."
    },
    {
      title: "Supabase Backend",
      description: "PostgreSQL with real-time and RESTful API."
    },
    {
      title: "shadcn/ui Components",
      description: "Customizable, accessible React components."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-gradient-to-b from-zinc-200 to-white dark:from-zinc-900 dark:to-black">
      <div className="z-10 w-full max-w-5xl font-mono text-sm">
        <div className="fixed left-0 top-0 w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-4 py-3 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          <div className="flex justify-between items-center max-w-5xl mx-auto">
            <div className="flex items-center">
              <Image
                src="/everythingcompanylogo.png"
                alt="Everything Company Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              <span className="font-bold text-sm">based-saas-starter-kit</span>
            </div>
            <a href="https://buymeacoffee.com/luongquangn" target="_blank" rel="noopener noreferrer">
              <Button size="sm">Buy Me a Coffee!</Button>
            </a>
          </div>
        </div>
      </div>

      <div className="relative flex place-items-center my-8 flex-col gap-12">

        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
          Launch Your SaaS Faster
        </h1>

        <p className="mt-2">
          <a 
            href="https://twitter.com/justwrapapi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Follow me on 𝕏 @justwrapapi
          </a>
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      <footer className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} based-saas-starter-kit. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;