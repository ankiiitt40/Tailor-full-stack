"use client";

import React, { useState } from "react";
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  ShieldAlert, 
  ShieldCheck, 
  ExternalLink,
  Ban,
  UserPlus,
  Download,
  Mail,
  History
} from "lucide-react";
import { adminUsers } from "@/data/admin-dashboard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { toast } from "sonner";

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userList, setUserList] = useState(adminUsers);

  const handleSuspendUser = (userId: string) => {
    setUserList(prev => prev.map(u => u.id === userId ? { ...u, status: "Suspended" as any } : u));
    toast.error(`User ${userId} suspended!`);
  };

  const handleRestoreUser = (userId: string) => {
    setUserList(prev => prev.map(u => u.id === userId ? { ...u, status: "Active" as any } : u));
    toast.success(`User ${userId} restored and active!`);
  };

  const handleAddTestUser = () => {
    const newUser = {
      id: `USR-${Date.now().toString().slice(-4)}`,
      name: "Aryan Verma",
      email: "aryan@stitchconnect.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      ordersCount: 3,
      joinDate: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
      status: "Active" as any
    };
    setUserList(prev => [newUser, ...prev]);
    toast.success("New test customer added successfully!");
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">User Directory</h1>
          <p className="text-muted-foreground">Manage platform users, monitor activity, and handle security.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button 
            onClick={() => toast.success("Exporting user registry to CSV...")}
            variant="outline" 
            className="rounded-xl h-11 border-border/50 gap-2 font-bold transition-all hover:bg-muted"
          >
            <Download className="w-4 h-4" /> Export CSV
          </Button>
          <Button 
            onClick={handleAddTestUser}
            className="bg-foreground text-background hover:bg-gold hover:text-gold-foreground rounded-xl h-11 font-bold flex gap-2 shadow-xl shadow-black/5"
          >
            <UserPlus className="w-4 h-4" /> Add Test User
          </Button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0 w-full lg:w-auto">
           {["All Users", "Active", "Suspended", "Banned", "Admin"].map((tab, i) => (
             <button 
               key={tab}
               className={cn(
                 "px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300",
                 i === 0 
                   ? "bg-foreground text-background shadow-lg shadow-black/10" 
                   : "text-muted-foreground hover:text-foreground hover:bg-muted"
               )}
             >
                {tab}
             </button>
           ))}
        </div>

        <div className="flex items-center gap-3 w-full lg:w-auto">
           <div className="relative flex-1 lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search by ID, name or email..." 
                className="pl-12 rounded-xl bg-card border-border/50 h-11 focus-visible:ring-gold"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl border-border/50 shrink-0">
              <Filter className="w-4 h-4" />
           </Button>
        </div>
      </div>

      {/* User Table */}
      <Card className="glass-card border-border/50 overflow-hidden rounded-[2.5rem] shadow-xl shadow-black/5">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="w-[350px] pl-8 font-bold text-[10px] uppercase tracking-[0.2em]">User Profile</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">User ID</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Orders</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Join Date</TableHead>
              <TableHead className="font-bold text-[10px] uppercase tracking-[0.2em] text-center">Status</TableHead>
              <TableHead className="text-right pr-8 font-bold text-[10px] uppercase tracking-[0.2em]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userList
              .filter(user => 
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((user) => (
              <TableRow key={user.id} className="border-border/50 hover:bg-gold/5 transition-colors group">
                <TableCell className="py-6 pl-8">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 rounded-2xl border-2 border-border/50 group-hover:border-gold/30 transition-all duration-500 overflow-hidden">
                      <AvatarImage src={user.avatar} className="group-hover:scale-110 transition-transform" />
                      <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                       <span className="text-sm font-bold group-hover:text-gold transition-colors">{user.name}</span>
                       <span className="text-[10px] text-muted-foreground font-medium">{user.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center font-bold text-[10px] text-muted-foreground uppercase tracking-widest">{user.id}</TableCell>
                <TableCell className="text-center">
                   <Badge variant="secondary" className="bg-muted text-[10px] font-bold px-3 py-1 rounded-lg border-none">
                      {user.ordersCount} Orders
                   </Badge>
                </TableCell>
                <TableCell className="text-center text-xs font-medium text-muted-foreground">{user.joinDate}</TableCell>
                <TableCell className="text-center">
                   <Badge className={cn(
                     "text-[9px] font-bold uppercase tracking-widest px-3 py-1 border-none rounded-full",
                     user.status === "Active" ? "bg-green-500/10 text-green-500" : 
                     user.status === "Suspended" ? "bg-gold/10 text-gold" : "bg-red-500/10 text-red-500"
                   )}>
                      {user.status}
                   </Badge>
                </TableCell>
                <TableCell className="text-right pr-8">
                  <div className="flex justify-end gap-2">
                     <Button 
                       onClick={() => toast.success(`Sending notification email to ${user.email}...`)}
                       variant="ghost" 
                       size="icon" 
                       className="h-10 w-10 rounded-xl hover:bg-gold/10 hover:text-gold transition-all"
                     >
                        <Mail className="w-4 h-4" />
                     </Button>
                     <Button 
                       onClick={() => toast.success(`Viewing activity audit trail for user ${user.id}...`)}
                       variant="ghost" 
                       size="icon" 
                       className="h-10 w-10 rounded-xl hover:bg-gold/10 hover:text-gold transition-all"
                     >
                        <History className="w-4 h-4" />
                     </Button>
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                           <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-gold/10 hover:text-gold transition-all">
                              <MoreVertical className="w-4 h-4" />
                           </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="glass border-gold/20 p-2 mt-2 w-48">
                           <DropdownMenuItem className="p-3 gap-3 rounded-xl cursor-pointer" onClick={() => toast.success(`Viewing profile: ${user.name}`)}>
                              <ExternalLink className="w-4 h-4 text-blue-500" /> View Profile
                           </DropdownMenuItem>
                           <DropdownMenuItem className="p-3 gap-3 rounded-xl cursor-pointer" onClick={() => toast.success(`Admin rights successfully granted to ${user.name}!`)}>
                              <ShieldCheck className="w-4 h-4 text-green-500" /> Grant Admin
                           </DropdownMenuItem>
                           <DropdownMenuSeparator className="bg-gold/10" />
                           {user.status === "Suspended" ? (
                              <DropdownMenuItem className="p-3 gap-3 rounded-xl cursor-pointer text-green-500 hover:text-green-600" onClick={() => handleRestoreUser(user.id)}>
                                 <ShieldCheck className="w-4 h-4" /> Restore Account
                              </DropdownMenuItem>
                           ) : (
                              <DropdownMenuItem className="p-3 gap-3 rounded-xl cursor-pointer text-red-500" onClick={() => handleSuspendUser(user.id)}>
                                 <Ban className="w-4 h-4" /> Suspend Account
                              </DropdownMenuItem>
                           )}
                        </DropdownMenuContent>
                     </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      
      {/* Pagination Placeholder */}
      <div className="flex justify-between items-center px-4">
         <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Showing 1-10 of 12,452 users</p>
         <div className="flex gap-2">
            <Button variant="outline" className="rounded-xl h-10 px-6 font-bold text-xs uppercase" disabled>Previous</Button>
            <Button variant="outline" className="rounded-xl h-10 px-6 font-bold text-xs uppercase border-gold text-gold bg-gold/5">Next</Button>
         </div>
      </div>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
