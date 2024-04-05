import Image from "next/image";
import Logo from "@/assets/CloudedAI.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";


export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <Image src={Logo} alt="CloudedAI Logo" width={100} height={100} />
        <span className="text-4xl font-semibold tracking-tight lg:text-5xl">
          CloudedAI
        </span>
      </div>
      <p className="max-w-prose text-center">
        Welcome to an innovative note-taking platform, featuring AI integration
        and crafted with top-tier technologies including OpenAI, Pinecone,
        Next.js, Shadcn UI, Clerk, Prisma, and more!
      </p>
      <Button size="lg" asChild>
        <Link href="/notes">Open</Link>
      </Button>
      <p className="fixed bottom-0 mb-5 text-center text-sm">
        © Kobe Pho 2024
      </p>
    </main>
  );
}
