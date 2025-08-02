import { Analytics } from "@vercel/analytics/react"
import React from 'react';
import { USER_INFO, TECH_STACK, SOCIAL_LINKS } from './constants';
import Card from './components/Card';
import TypingEffect from './components/TypingEffect';
import MusicToggle from './components/MusicToggle';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 font-sans p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: `radial-gradient(circle, rgba(0,255,255,0.1) 1px, transparent 1px)`, backgroundSize: '20px 20px'}}></div>

      <MusicToggle musicSrc="https://j.top4top.io/m_1610p0alr0.mp3" />

      <main className="relative z-10 max-w-4xl mx-auto flex flex-col gap-8">
        {/* --- Header & About Section --- */}
        <Card>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img 
              src={USER_INFO.imageUrl} 
              alt={USER_INFO.name}
              className="w-32 h-32 rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-500/20 object-cover"
            />
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider">{USER_INFO.name}</h1>
              <div className="h-8 mt-2">
                  <TypingEffect texts={USER_INFO.titles} />
              </div>
            </div>
          </div>
          <p className="mt-6 text-gray-400 text-center md:text-left">
            {USER_INFO.bio}
          </p>
        </Card>

        {/* --- Tech Stack Section --- */}
        <Card>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">TECH ARSENAL</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 tracking-widest">FRONTEND</h3>
              <div className="flex flex-wrap gap-3">
                {TECH_STACK.frontend.map(tech => (
                  <div key={tech.name} className="flex items-center bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-sm hover:bg-cyan-900/50 hover:border-cyan-700 transition-all">
                    <span className="w-5 h-5 mr-2">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4 tracking-widest">BACKEND & TOOLS</h3>
              <div className="flex flex-wrap gap-3">
                {TECH_STACK.backend.map(tech => (
                  <div key={tech.name} className="flex items-center bg-gray-800/50 border border-gray-700 rounded-md px-3 py-2 text-sm hover:bg-cyan-900/50 hover:border-cyan-700 transition-all">
                     <span className="w-5 h-5 mr-2">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* --- GitHub Stats Section --- */}
        <Card>
           <h2 className="text-3xl font-bold text-white mb-6 text-center">GITHUB STATS</h2>
           <div className="flex flex-col md:flex-row gap-6 justify-center">
             <img src="https://github-readme-stats.vercel.app/api?username=al-redowan&show_icons=true&theme=tokyonight&bg_color=00000000&border_color=0d9488&text_color=e5e7eb&title_color=0891b2" alt="Fahim's GitHub Stats" className="rounded-lg w-full md:w-auto" />
             <img src="https://github-readme-streak-stats.herokuapp.com/?user=al-redowan&theme=tokyonight&background=00000000&border=0d9488&stroke=e5e7eb&ring=0891b2&fire=f59e0b&currStreakNum=e5e7eb&sideLabels=e5e7eb&currStreakLabel=f59e0b&sideNums=e5e7eb" alt="Fahim's GitHub Streak" className="rounded-lg w-full md:w-auto" />
           </div>
        </Card>

        {/* --- Connect Section --- */}
        <Card>
          <h2 className="text-3xl font-bold text-white mb-6 text-center">CONNECT WITH ME</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:text-cyan-400 hover:border-cyan-600 transform hover:-translate-y-1"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </Card>

        <footer className="text-center text-gray-500 text-sm py-4">
          <p>&copy; {new Date().getFullYear()} Al Redowan Ahmed Fahim. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
