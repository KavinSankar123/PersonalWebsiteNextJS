"use client";

import Link from "next/link";
import {
  Home,
} from "lucide-react";

export default function WorkflowLeftNav() {
  return (
    <div className="flex flex-col border-r bg-primary text-primary-foreground">
      <div className="flex h-16 items-center justify-between border-b px-4">
        <Link className="flex items-center gap-2" href="#">
          <span className="font-semibold">Solstis</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-2 overflow-auto px-4 py-4">
        <Link
          className={`flex items-center gap-3 rounded-md py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 "px-3"`}
          href="/dashboard"
        >
          <Home className="h-5 w-5" />
          Dashboard
        </Link>
      </nav>
    </div>
  );
}
