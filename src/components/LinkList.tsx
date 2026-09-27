import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/lib/links";

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  return (
    <ul className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard {...link} />
        </li>
      ))}
    </ul>
  );
}
