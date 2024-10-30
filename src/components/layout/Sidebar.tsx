import { Bell, BookOpen, Calendar, Crown, Layout, LogOut, Settings, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-full w-20 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-8 gap-8">
      <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center">
        <BookOpen className="text-white w-6 h-6" />
      </div>
      
      <nav className="flex-1 flex flex-col gap-4">
        <Button variant="ghost" size="icon" className="rounded-xl">
          <Layout className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <Calendar className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <Users className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <Crown className="w-5 h-5" />
        </Button>
      </nav>

      <div className="flex flex-col gap-4">
        <Button variant="ghost" size="icon" className="rounded-xl">
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <Settings className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <LogOut className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}