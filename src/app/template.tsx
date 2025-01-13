"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Skeleton from "@/components/Skeleton";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="transition-opacity duration-200">{children}</div>
      )}
    </>
  );
}
