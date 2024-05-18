"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  LogOut,
  Settings,
  Info,
  Layers,
  ArrowLeftFromLine,
  User,
} from "lucide-react";

export default function LeftNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={`flex flex-col border-r bg-primary text-primary-foreground ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        {isCollapsed ? (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="font-semibold">S</span>
            <span className="sr-only">Toggle menu</span>
          </Button>
        ) : (
          <>
            <Link className="flex items-center gap-2" href="#">
              <span className="font-semibold">Solstis</span>
            </Link>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <ArrowLeftFromLine className="h-5 w-5 fill-current" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </>
        )}
      </div>
      <nav className="flex-1 space-y-2 overflow-auto px-4 py-4">
        <Link
          className={`flex items-center gap-3 rounded-md py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 ${
            isCollapsed ? "justify-center" : "px-3"
          }`}
          href="#"
        >
          <Layers className="h-5 w-5" />
          {!isCollapsed && "My Workflows"}
        </Link>
        <Link
          className={`flex items-center gap-3 rounded-md py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 ${
            isCollapsed ? "justify-center" : "px-3"
          }`}
          href="#"
        >
          <User className="h-5 w-5" />
          {!isCollapsed && "My Groups"}
        </Link>
      </nav>
      <div className="border-t px-4 py-4 space-y-2 dark:border-gray-800">
        <Link
          className={`flex items-center gap-3 rounded-md py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 ${
            isCollapsed ? "justify-center" : "px-3"
          }`}
          href="#"
        >
          <Info className="h-5 w-5" />
          {!isCollapsed && "Help"}
        </Link>
        <Link
          className={`flex items-center gap-3 rounded-md py-2 text-sm font-medium transition-colors hover:bg-gray-200 hover:text-gray-900 ${
            isCollapsed ? "justify-center" : "px-3"
          }`}
          href="#"
        >
          <Settings className="h-5 w-5" />
          {!isCollapsed && "Settings"}
        </Link>
        <div className="flex justify-center">
          <Button variant="ghost" className="gap-3">
            <LogOut className="h-5 w-5" />
            {!isCollapsed && "Logout"}
          </Button>
        </div>
      </div>
    </div>
  );
}
