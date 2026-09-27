import Image from "next/image";

type AvatarProps = {
  src?: string | null;
  name: string;
};

export default function Avatar({ src, name }: AvatarProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={`${name}의 프로필 사진`}
        width={96}
        height={96}
        className="h-24 w-24 rounded-full object-cover"
        priority
      />
    );
  }

  const initial = name.trim().charAt(0) || "?";

  return (
    <div
      aria-hidden="true"
      className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-teal-600 text-3xl font-semibold text-white"
    >
      {initial}
    </div>
  );
}
