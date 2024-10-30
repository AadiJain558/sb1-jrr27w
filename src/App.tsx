import { Clock, Trophy, Target, Zap } from 'lucide-react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { CourseCard } from '@/components/dashboard/CourseCard';
import { StatsCard } from '@/components/dashboard/StatsCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-violet-100 dark:from-gray-900 dark:to-gray-800">
      <Sidebar />
      
      <div className="pl-20">
        <Header />

        <main className="max-w-7xl mx-auto p-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Study Hours"
              value="24.5h"
              icon={<Clock className="w-5 h-5 text-violet-600 dark:text-violet-300" />}
              trend={{ value: 12, isPositive: true }}
            />
            <StatsCard
              title="AURA Points"
              value="2,345"
              icon={<Zap className="w-5 h-5 text-violet-600 dark:text-violet-300" />}
              trend={{ value: 8, isPositive: true }}
            />
            <StatsCard
              title="Achievements"
              value="15"
              icon={<Trophy className="w-5 h-5 text-violet-600 dark:text-violet-300" />}
            />
            <StatsCard
              title="Goals Completed"
              value="8/10"
              icon={<Target className="w-5 h-5 text-violet-600 dark:text-violet-300" />}
            />
          </div>

          {/* Active Courses */}
          <h2 className="text-xl font-semibold mb-6">Active Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CourseCard
              title="Advanced Mathematics"
              progress={75}
              dueDate="Dec 20"
              totalTasks={12}
              completedTasks={9}
            />
            <CourseCard
              title="Computer Science 101"
              progress={45}
              dueDate="Dec 22"
              totalTasks={10}
              completedTasks={4}
            />
            <CourseCard
              title="Physics Fundamentals"
              progress={60}
              dueDate="Dec 25"
              totalTasks={8}
              completedTasks={5}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;