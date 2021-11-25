import './App.css';
import Sidebar from './components/Sidebar';
import StatsCard from './components/StatsCard';
import OrderReport from './components/OrderReport';
import MostOrdered from './components/MostOrdered';

function App() {
  return (
    <div className="flex w-full min-h-screen font-sans bg-gray-800">
      <Sidebar />
      <main className="flex flex-col flex-1 w-full gap-6 p-4">
        <header>
          <h1 className="text-3xl font-semibold leading-loose text-white">Dashboard</h1>
          <div className="text-gray-100">Tuesday 2 Feb, 2021</div>
        </header>
        <hr className='border-white ' />
        <StatsCard />
        <OrderReport />
      </main>
      <aside className='flex flex-col gap-y-6 pt-6 w-96'>
        <MostOrdered />
      </aside>
    </div>
  );
}

export default App; 
