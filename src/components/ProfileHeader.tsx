import Avatar from "@/components/Avatar";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarSrc?: string | null;
};

export default function ProfileHeader({
  name,
  bio,
  avatarSrc,
}: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <Avatar src={avatarSrc} name={name} />
      <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
        {name}
      </h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
