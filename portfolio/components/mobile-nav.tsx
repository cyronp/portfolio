"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { FileUser, FolderCode, Home, Notebook } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
  SidebarGroupLabel
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
        <SidebarGroupLabel>Navegação</SidebarGroupLabel>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/">
                <Home />
                <span>Início</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/experiencias">
                <FileUser />
                <span>Experiências</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/projetos">
                <FolderCode />
                <span>Projetos</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/blog">
                <Notebook />
                <span>Blog</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <span className="text-foreground">:)</span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export function MobileSidebarWrapper() {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null;
  }

  return <AppSidebar />;
}
