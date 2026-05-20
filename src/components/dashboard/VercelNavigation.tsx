"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Bell, 
  Moon, 
  Sun, 
  MapPin, 
  User, 
  Settings, 
  LogOut,
  ChevronDown,
  Scissors,
  HelpCircle,
  MessageSquare,
  Sparkles,
  Command,
  Plus,
  Check,
  LayoutDashboard,
  Layers,
  Info,
  Send,
  X,
  Palette
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/components/auth/AuthProvider";
import { useUIStore } from "@/stores/uiStore";
import { notifications } from "@/data/dashboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { useTheme } from "next-themes";

// Define the nav links for user vs tailor
const userNavLinks = [
  { name: "Overview", href: "/dashboard" },
  { name: "Nearby Tailors", href: "/dashboard/tailors" },
  { name: "Compare Prices", href: "/dashboard/compare" },
  { name: "Designs", href: "/dashboard/designs" },
  { name: "Orders", href: "/dashboard/orders" },
  { name: "Measurements", href: "/dashboard/measurements" },
  { name: "Favorites", href: "/dashboard/favorites" },
  { name: "Reviews", href: "/dashboard/reviews" },
  { name: "Profile", href: "/dashboard/profile" },
  { name: "Settings", href: "/dashboard/settings" },
];

const tailorNavLinks = [
  { name: "Overview", href: "/tailor-dashboard" },
  { name: "Customers", href: "/tailor-dashboard/customers" },
  { name: "Designs", href: "/tailor-dashboard/designs" },
  { name: "Orders", href: "/tailor-dashboard/orders" },
  { name: "Earnings", href: "/tailor-dashboard/earnings" },
  { name: "AI Insights", href: "/tailor-dashboard/ai-insights" },
  { name: "Pricing", href: "/tailor-dashboard/pricing" },
  { name: "Subscription", href: "/tailor-dashboard/subscription" },
  { name: "Reviews", href: "/tailor-dashboard/reviews" },
  { name: "Profile", href: "/tailor-dashboard/profile" },
  { name: "Settings", href: "/tailor-dashboard/settings" },
];

export const VercelNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const { layoutPreference, setLayoutPreference } = useUIStore();
  
  // States
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [workspace, setWorkspace] = useState("Personal Space");
  
  // Decide which navigation set to use
  const isTailor = pathname.startsWith("/tailor-dashboard");
  const navLinks = isTailor ? tailorNavLinks : userNavLinks;

  // Unread notifications
  const unreadCount = notifications.filter(n => !n.isRead).length;

  // Keybindings for Search (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSendFeedback = () => {
    if (!feedbackText.trim()) {
      toast.error("Please enter some feedback first.");
      return;
    }
    toast.success("Feedback submitted! Thanks for helping us build StitchConnect.");
    setFeedbackText("");
    setIsFeedbackOpen(false);
  };

  const handleWorkspaceChange = (spaceName: string) => {
    setWorkspace(spaceName);
    toast.info(`Switched to workspace: ${spaceName}`);
  };

  const handleProjectChange = (project: string) => {
    if (project === "tailor") {
      // Simulate switching role / cookie
      document.cookie = `auth-role=tailor; path=/; max-age=86400`;
      router.push("/tailor-dashboard");
      toast.success("Switched to Tailor Dashboard workspace");
    } else if (project === "user") {
      document.cookie = `auth-role=user; path=/; max-age=86400`;
      router.push("/dashboard");
      toast.success("Switched to Client Dashboard workspace");
    } else if (project === "admin") {
      document.cookie = `auth-role=admin; path=/; max-age=86400`;
      router.push("/admin");
      toast.success("Switched to Admin Workspace");
    }
  };

  // Filter commands for command palette
  const filteredLinks = navLinks.filter(link => 
    link.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <nav className="w-full border-b border-border bg-background sticky top-0 z-40">
        {/* Top Header Row */}
        <div className="h-16 px-6 flex items-center justify-between max-w-[1400px] mx-auto">
          
          {/* Left: Logo & Workspace/Project Dropdowns */}
          <div className="flex items-center gap-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 shrink-0 group">
              <div className="p-1.5 bg-foreground text-background dark:bg-foreground dark:text-background rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <Scissors className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold tracking-tight hidden sm:inline">Stitch<span className="text-gold">Connect</span></span>
            </Link>

            {/* Separator */}
            <span className="text-muted-foreground/30 font-light select-none text-lg">/</span>

            {/* Workspace Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-semibold hover:bg-muted/80 transition-colors text-foreground select-none max-w-[120px] sm:max-w-none truncate">
                  <Avatar className="h-4.5 w-4.5 border border-border">
                    <AvatarImage src={user?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"} />
                    <AvatarFallback>{user?.fullName?.[0] || "A"}</AvatarFallback>
                  </Avatar>
                  <span className="truncate">{user?.fullName || "Aryan"}&apos;s Space</span>
                  <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56 glass border-border p-1.5 mt-1">
                <DropdownMenuLabel className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold px-2 py-1.5">
                  Personal Account
                </DropdownMenuLabel>
                <DropdownMenuItem 
                  onClick={() => handleWorkspaceChange("Personal Space")}
                  className="rounded-lg text-xs font-medium py-2 px-2.5 flex justify-between items-center cursor-pointer hover:bg-muted"
                >
                  <span className="flex items-center gap-2">
                    <Avatar className="h-5 w-5">
                      <AvatarFallback>{user?.fullName?.[0] || "A"}</AvatarFallback>
                    </Avatar>
                    {user?.fullName || "Aryan"} ({user?.role === "tailor" ? "Tailor" : "Client"})
                  </span>
                  {workspace === "Personal Space" && <Check className="w-3.5 h-3.5 text-gold" />}
                </DropdownMenuItem>
                
                <DropdownMenuSeparator className="bg-border/60" />
                
                <DropdownMenuLabel className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold px-2 py-1.5">
                  Teams
                </DropdownMenuLabel>
                <DropdownMenuItem 
                  onClick={() => handleWorkspaceChange("StitchConnect Team")}
                  className="rounded-lg text-xs font-medium py-2 px-2.5 flex justify-between items-center cursor-pointer hover:bg-muted"
                >
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-gold/10 text-gold flex items-center justify-center font-bold text-[10px]">SC</div>
                    StitchConnect Team
                  </span>
                  {workspace === "StitchConnect Team" && <Check className="w-3.5 h-3.5 text-gold" />}
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg text-xs font-medium py-2 px-2.5 text-muted-foreground gap-2 cursor-pointer hover:bg-muted">
                  <Plus className="w-3.5 h-3.5" /> Create a Team
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Separator */}
            <span className="text-muted-foreground/30 font-light select-none text-lg">/</span>

            {/* Project / App Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-semibold hover:bg-muted/80 transition-colors text-foreground select-none">
                  <span className="bg-gold/10 text-gold text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                    {isTailor ? "Tailor" : "Client"}
                  </span>
                  <span className="hidden xs:inline">{isTailor ? "Tailor-Console" : "StitchConnect-App"}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-52 glass border-border p-1.5 mt-1">
                <DropdownMenuLabel className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold px-2 py-1.5">
                  Switch Console
                </DropdownMenuLabel>
                <DropdownMenuItem 
                  onClick={() => handleProjectChange("user")}
                  className={cn(
                    "rounded-lg text-xs font-medium py-2 px-2.5 flex justify-between items-center cursor-pointer hover:bg-muted",
                    !isTailor && "bg-muted text-foreground"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-gold" /> StitchConnect App
                  </span>
                  {!isTailor && <Check className="w-3.5 h-3.5 text-gold" />}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleProjectChange("tailor")}
                  className={cn(
                    "rounded-lg text-xs font-medium py-2 px-2.5 flex justify-between items-center cursor-pointer hover:bg-muted",
                    isTailor && "bg-muted text-foreground"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <Palette className="w-3.5 h-3.5 text-gold" /> Tailor Console
                  </span>
                  {isTailor && <Check className="w-3.5 h-3.5 text-gold" />}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleProjectChange("admin")}
                  className="rounded-lg text-xs font-medium py-2 px-2.5 flex justify-between items-center cursor-pointer hover:bg-muted"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold" /> Admin Console
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right: Search, Feedback, Notifications, Avatar */}
          <div className="flex items-center gap-2.5">
            {/* Search Pill Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center justify-between w-52 h-9 px-3 rounded-lg border border-border bg-muted/30 hover:bg-muted/60 transition-colors text-muted-foreground text-xs"
            >
              <span className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-muted-foreground/60" />
                Search...
              </span>
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-[9px] font-medium text-muted-foreground opacity-100">
                <span className="text-[10px]">Ctrl</span>K
              </kbd>
            </button>
            <button 
              onClick={() => setIsSearchOpen(true)}
              className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-muted/30 text-muted-foreground"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Feedback Button */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsFeedbackOpen(true)}
              className="hidden sm:flex border-border text-xs font-medium rounded-lg h-9 hover:bg-muted/80 gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
              Feedback
            </Button>

            {/* Notification Bell */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-lg hover:bg-muted transition-colors shrink-0">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 glass border-border p-2 mt-2">
                <DropdownMenuLabel className="px-4 py-3 flex justify-between items-center">
                  <span className="text-xs font-bold">Notifications</span>
                  <Badge variant="secondary" className="bg-gold/10 text-gold border-none text-[10px]">{unreadCount} New</Badge>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-border/60" />
                <div className="max-h-64 overflow-y-auto no-scrollbar">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="p-3.5 flex flex-col items-start gap-0.5 hover:bg-muted/40 rounded-lg m-1 border-b border-border/30 last:border-b-0">
                      <div className="flex justify-between w-full">
                        <span className="text-xs font-bold text-foreground">{notif.title}</span>
                        <span className="text-[9px] text-muted-foreground">{notif.time}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">{notif.message}</p>
                    </div>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 rounded-lg hover:bg-muted transition-colors shrink-0"
            >
              <Sun className="w-4 h-4 text-muted-foreground dark:hidden" />
              <Moon className="w-4 h-4 text-muted-foreground hidden dark:block" />
            </Button>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1.5 pl-1.5 pr-2 h-9 rounded-lg hover:bg-muted/80 border border-border/55 transition-all shrink-0">
                  <Avatar className="h-6 w-6 border border-gold/40">
                    <AvatarImage src={user?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"} />
                    <AvatarFallback>{user?.fullName?.[0] || "A"}</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 glass border-border p-1.5 mt-2">
                <div className="px-2.5 py-2">
                  <p className="text-xs font-bold text-foreground leading-none">{user?.fullName || "Aryan"}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 truncate">{user?.email || "user@stitchconnect.com"}</p>
                </div>
                <DropdownMenuSeparator className="bg-border/60" />
                <DropdownMenuItem 
                  onClick={() => router.push(isTailor ? "/tailor-dashboard/profile" : "/dashboard/profile")}
                  className="rounded-lg text-xs font-medium py-2 px-2.5 cursor-pointer hover:bg-muted gap-2.5"
                >
                  <User className="w-3.5 h-3.5 text-muted-foreground" /> My Profile
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => router.push(isTailor ? "/tailor-dashboard/settings" : "/dashboard/settings")}
                  className="rounded-lg text-xs font-medium py-2 px-2.5 cursor-pointer hover:bg-muted gap-2.5"
                >
                  <Settings className="w-3.5 h-3.5 text-muted-foreground" /> Dashboard Settings
                </DropdownMenuItem>
                
                <DropdownMenuSeparator className="bg-border/60" />

                <DropdownMenuLabel className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold px-2.5 py-1">
                  Layout Style
                </DropdownMenuLabel>
                <DropdownMenuItem 
                  onClick={() => {
                    setLayoutPreference(layoutPreference === "vercel" ? "sidebar" : "vercel");
                    toast.success(`Switched to ${layoutPreference === "vercel" ? "Sidebar" : "Vercel"} Layout`);
                  }}
                  className="rounded-lg text-xs font-semibold py-2 px-2.5 cursor-pointer bg-gold/10 text-gold hover:bg-gold/15 gap-2.5"
                >
                  <Layers className="w-3.5 h-3.5" /> Toggle to {layoutPreference === "vercel" ? "Sidebar" : "Vercel"}
                </DropdownMenuItem>

                <DropdownMenuSeparator className="bg-border/60" />
                <DropdownMenuItem 
                  onClick={logout} 
                  className="rounded-lg text-xs font-medium py-2 px-2.5 cursor-pointer text-red-500 hover:bg-red-500/10 gap-2.5"
                >
                  <LogOut className="w-3.5 h-3.5" /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Bottom Tab Navigation Row */}
        <div className="border-t border-border/80 bg-background/50">
          <div className="max-w-[1400px] mx-auto px-6 overflow-x-auto no-scrollbar flex items-center">
            <div className="flex h-11 items-center gap-1.5 relative py-1 shrink-0">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="relative px-3 py-1.5 rounded-md text-xs font-medium transition-colors select-none text-muted-foreground hover:text-foreground shrink-0"
                    onMouseEnter={() => setHoveredTab(link.name)}
                    onMouseLeave={() => setHoveredTab(null)}
                  >
                    <span className={cn("relative z-10", isActive && "text-foreground font-semibold")}>
                      {link.name}
                    </span>
                    
                    {/* Sliding Hover pill */}
                    <AnimatePresence>
                      {hoveredTab === link.name && (
                        <motion.div
                          layoutId="vercel-nav-hover"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="absolute inset-0 bg-muted rounded-md z-0"
                        />
                      )}
                    </AnimatePresence>

                    {/* Active Bottom Line */}
                    {isActive && (
                      <motion.div
                        layoutId="vercel-nav-active"
                        className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-foreground dark:bg-white z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Command Palette Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="max-w-xl p-0 gap-0 border-border glass rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex items-center border-b border-border px-4 py-3 bg-muted/10">
            <Search className="w-5 h-5 text-muted-foreground mr-3 shrink-0" />
            <Input 
              placeholder="Search sections, settings, profiles, layouts..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-sm focus-visible:ring-0 focus-visible:ring-offset-0 px-0 h-8"
              autoFocus
            />
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-0.5 rounded border border-border bg-muted px-1.5 font-mono text-[9px] font-medium text-muted-foreground opacity-60">
              ESC
            </kbd>
          </div>
          
          <div className="max-h-[350px] overflow-y-auto p-2 no-scrollbar">
            {/* Quick Actions Group */}
            {searchQuery === "" && (
              <div className="mb-4">
                <p className="text-[10px] text-muted-foreground font-semibold px-3 py-1.5 uppercase tracking-widest">Quick Actions</p>
                <div 
                  onClick={() => {
                    setLayoutPreference(layoutPreference === "vercel" ? "sidebar" : "vercel");
                    setIsSearchOpen(false);
                    toast.success(`Layout changed to ${layoutPreference === "vercel" ? "Sidebar" : "Vercel"}`);
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-muted/80 text-foreground transition-colors"
                >
                  <Layers className="w-4 h-4 text-gold" />
                  Toggle Dashboard Layout style ({layoutPreference === "vercel" ? "Switch to Sidebar" : "Switch to Vercel"})
                </div>
                <div 
                  onClick={() => {
                    setIsFeedbackOpen(true);
                    setIsSearchOpen(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-medium cursor-pointer hover:bg-muted/80 text-foreground transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-gold" />
                  Give Feedback
                </div>
              </div>
            )}

            {/* Navigation Routes Group */}
            <div>
              <p className="text-[10px] text-muted-foreground font-semibold px-3 py-1.5 uppercase tracking-widest">
                {searchQuery !== "" ? "Matches" : "Pages & Modules"}
              </p>
              
              {filteredLinks.length > 0 ? (
                filteredLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsSearchOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium hover:bg-muted/80 text-foreground transition-colors group"
                  >
                    <span className="flex items-center gap-3">
                      <LayoutDashboard className="w-4 h-4 text-muted-foreground group-hover:text-gold transition-colors" />
                      {link.name}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono opacity-0 group-hover:opacity-100 transition-opacity">Go to page &rarr;</span>
                  </Link>
                ))
              ) : (
                <div className="py-6 text-center text-xs text-muted-foreground flex flex-col items-center justify-center gap-2">
                  <Info className="w-5 h-5 text-muted-foreground/60" />
                  No pages matching &quot;{searchQuery}&quot; found
                </div>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between px-4 py-2 border-t border-border text-[10px] text-muted-foreground bg-muted/20">
            <span>Use <kbd className="font-mono bg-muted border border-border px-1 py-0.5 rounded">↑↓</kbd> to navigate, <kbd className="font-mono bg-muted border border-border px-1 py-0.5 rounded">Enter</kbd> to select</span>
            <span>StitchConnect Command Palette v1.0</span>
          </div>
        </DialogContent>
      </Dialog>

      {/* Feedback Dialog */}
      <Dialog open={isFeedbackOpen} onOpenChange={setIsFeedbackOpen}>
        <DialogContent className="max-w-md border-border glass rounded-2xl p-6 shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-base font-bold flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-gold" />
              Provide Feedback
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              Let us know how we can make StitchConnect better. Your feedback is sent directly to our development team.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 my-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">How would you rate your experience?</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button 
                    key={star}
                    onClick={() => setFeedbackRating(star)}
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Sparkles className={cn(
                      "w-6 h-6 transition-colors",
                      star <= feedbackRating ? "text-gold fill-gold" : "text-muted-foreground/45"
                    )} />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Detailed Comments</label>
              <textarea
                placeholder="What did you like? What can we improve?"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                className="w-full min-h-[100px] bg-muted/30 border border-border rounded-xl p-3 text-xs focus:outline-none focus:ring-1 focus:ring-gold text-foreground placeholder:text-muted-foreground/60 resize-none"
              />
            </div>
          </div>
          
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="ghost" onClick={() => setIsFeedbackOpen(false)} className="rounded-xl text-xs">Cancel</Button>
            <Button onClick={handleSendFeedback} className="bg-gold hover:bg-gold/90 text-gold-foreground rounded-xl text-xs gap-1.5">
              <Send className="w-3.5 h-3.5" /> Submit Feedback
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
