"use client"

import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import { ChevronUpIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <Button
        variant="ghost"
        className="w-full rounded-none bg-chart-3"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronUpIcon />
        Back to top
      </Button>

      <div className="p-4 text-sm">
        <div className="flex gap-3 justify-center underline">
          <Link href="/page/Conditions-of-Use">Conditions of Use</Link>
          <Link href="/page/Privacy-Notice">Privacy Notice</Link>
          <Link href="/page/Help">Help</Link>
        </div>
        <p className="text-center">
          © 2000-2024, {APP_NAME}, Inc. or its affiliates
        </p>

        <div className="text-center mt-8">
          123, Main Street, Anytown, CA, Zip 12345 | +1 (123) 456-7890
        </div>
      </div>
    </footer>
  );
}
