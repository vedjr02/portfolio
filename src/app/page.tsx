import { type Metadata } from 'next';
import Sidebar from '@/components/Sidebar';
import Main from '@/components/Main';
import MouseGlow from '@/components/MouseGlow';

export default function Home() {
  return (
    <div className="min-h-screen">
      <MouseGlow />
      
      {/* Main container */}
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left sidebar - fixed on desktop */}
        <Sidebar />
        
        {/* Main content - scrollable */}
        <Main />
      </div>
    </div>
  );
}
