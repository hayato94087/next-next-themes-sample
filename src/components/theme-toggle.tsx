"use client";

import type { FC } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: FC<ThemeToggleProps> = (props) => {
  const { setTheme, theme } = useTheme();
  const className =
    "hover:bg-primary/10 text-muted-foreground hover:text-foreground group flex h-8 flex-row items-center space-x-2 rounded-md px-2 text-sm";
  return (
    <div className="flex flex-row space-x-1">
      <button
        onClick={() => {
          setTheme("light");
        }}
        className={cn(className, props.className)}
      >
        <Sun aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        onClick={() => {
          setTheme("dark");
        }}
        className={cn(className, props.className)}
      >
        <Moon aria-hidden="true" className="h-5 w-5" />
      </button>
      <button
        onClick={() => {
          setTheme("system");
        }}
        className={cn(className, props.className)}
      >
        <Monitor aria-hidden="true" className="h-5 w-5" />
      </button>
    </div>
  );
};
