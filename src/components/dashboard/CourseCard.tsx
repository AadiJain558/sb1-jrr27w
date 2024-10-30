import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen } from "lucide-react";

interface CourseCardProps {
  title: string;
  progress: number;
  dueDate: string;
  totalTasks: number;
  completedTasks: number;
}

export function CourseCard({ title, progress, dueDate, totalTasks, completedTasks }: CourseCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-violet-600 dark:text-violet-300" />
        </div>
        <span className="text-sm text-gray-500">Due {dueDate}</span>
      </div>
      
      <h3 className="font-semibold mb-2">{title}</h3>
      
      <div className="space-y-4">
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">{completedTasks}/{totalTasks} tasks</span>
          <span className="text-violet-600">{progress}%</span>
        </div>
      </div>
    </Card>
  );
}