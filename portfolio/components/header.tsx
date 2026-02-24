"use client";

import { Home, FileUser, Notebook, FolderCode } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function NavigationHeader() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="hidden md:flex md:sticky md:top-0 md:z-50 md:w-full md:bg-white">
      <div className="max-w-6xl mx-auto flex h-16 items-center justify-center px-4">
        {/* Navigation */}
        <TooltipProvider>
          <nav className="flex items-center gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all text-black overflow-hidden ${
                    isActive("/")
                      ? "border border-neutral-700 bg-gray-50"
                      : "border border-transparent hover:bg-gray-50"
                  }`}
                >
                  <Home className="h-4 w-4 text-black" />
                  <AnimatePresence mode="wait">
                    {isActive("/") && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="whitespace-nowrap"
                      >
                        Início
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className=" border border-border shadow-lg rounded-lg">
                <p>Início</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/experiencias"
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all text-black overflow-hidden ${
                    isActive("/experiencias")
                      ? "border border-neutral-700 bg-gray-50"
                      : "border border-transparent hover:bg-gray-50"
                  }`}
                >
                  <FileUser className="h-4 w-4 text-black" />
                  <AnimatePresence mode="wait">
                    {isActive("/experiencias") && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="whitespace-nowrap"
                      >
                        Experiências
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className=" border border-border shadow-lg rounded-lg">
                <p>Experiências</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/projetos"
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all text-black overflow-hidden ${
                    isActive("/projects")
                      ? "border border-neutral-700 bg-gray-50"
                      : "border border-transparent hover:bg-gray-50"
                  }`}
                >
                  <FolderCode className="h-4 w-4 text-black" />
                  <AnimatePresence mode="wait">
                    {isActive("/projetos") && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="whitespace-nowrap"
                      >
                        Projetos
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className=" border border-border shadow-lg rounded-lg">
                <p>Projetos</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/blog"
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all text-black overflow-hidden ${
                    isActive("/blog")
                      ? "border border-neutral-700 bg-gray-50"
                      : "border border-transparent hover:bg-gray-50"
                  }`}
                >
                  <Notebook className="h-4 w-4 text-black" />
                  <AnimatePresence mode="wait">
                    {isActive("/blog") && (
                      <motion.span
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "auto", opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="whitespace-nowrap"
                      >
                        Blog
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="bottom" className=" border border-border shadow-lg rounded-lg">
                <p>Blog</p>
              </TooltipContent>
            </Tooltip>
          </nav>
        </TooltipProvider>
      </div>
    </header>
  );
}
