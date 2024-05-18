import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Search, Bell, ChevronDown } from "lucide-react";

export default function TopNav() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
        <Input
          className="w-full pl-10 bg-white text-gray-900 "
          placeholder="Search workflows..."
          type="search"
        />
      </div>
      <div className="flex items-center gap-4">
        <Button className="w-full bg-secondary">Go Premium</Button>
        <Button size="" variant="outline">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Avatar>
          <AvatarImage
            className="object-cover"
            alt="@john"
            src="https://plus.unsplash.com/premium_photo-1674180786953-4223a4208d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium">John</span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}