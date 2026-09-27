import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/lib/profile";
import { links } from "@/lib/links";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 pt-6 pb-12 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8">
        <div className="flex w-full justify-end">
          <ThemeToggle />
        </div>
        <ProfileHeader
          name={profile.name}
          bio={profile.bio}
          avatarSrc={profile.avatarSrc}
        />
        <LinkList links={links} />
      </main>
    </div>
  );
}
