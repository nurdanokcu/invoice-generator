"use client";
import { cn } from "@/lib/utils";
import { HomeIcon, Users2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const dashboardLinks = [
  {
    id: 0,
    name: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
  },
  {
    id: 1,
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: Users2,
  },
];

export default function DashboardLinks() {
  const pathName = usePathname();
  return (
    <>
      {dashboardLinks.map((link) => (
        <Link
          className={cn(
            pathName === link.href
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-foreground", "flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:text-primary "
          )}
          key={link.id}
          href={link.href}
        >
          <link.icon className="size-4" />
          {link.name}
        </Link>
      ))}
    </>
  );
}