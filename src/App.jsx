
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Copy, Users, Award, Sword, Shield, Server, Shovel as Pickaxe, Trees as Tree, Ban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import BanList from '@/pages/BanList';

const HomePage = ({ toast, playerCount, serverIP, copyIP }) => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-red-900">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/8feae37a-7a91-4eb9-8adf-7eb33b03f49f/f4e00fc9505e210d4ea41dbe4a0c1a58.png" 
                alt="ClawMC Logo" 
                className="h-12 w-12 pixelated"
              />
              <span className="minecraft-font text-white text-xl ml-3">CLAW MC</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/bans" className="minecraft-btn">
                <Ban size={16} className="mr-2 inline" />
                Ban List
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img  alt="Minecraft Server Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585061047852-aa84e7e4ccdc" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#1a0000]"></div>
        </div>
        
        <div className="z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="minecraft-font text-6xl text-white mb-6 text-shadow-red">CLAW MC</h1>
            <p className="text-gray-200 text-2xl mb-8">Ultimate Survival Experience</p>
            
            <div className="server-ip flex items-center justify-center mb-8" onClick={copyIP}>
              <span className="mr-2">{serverIP}</span>
              <Copy size={16} />
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <button className="minecraft-btn red text-2xl px-12 py-6 w-64 floating">PLAY NOW</button>
              <div className="flex justify-center gap-6 mt-4">
                <a href="https://discord.gg/yourserver" target="_blank" rel="noopener noreferrer" className="minecraft-btn text-xl px-8 py-4">
                  DISCORD
                </a>
                <a href="https://store.clawmc.fun" target="_blank" rel="noopener noreferrer" className="minecraft-btn text-xl px-8 py-4">
                  STORE
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="flex items-center bg-black/50 px-4 py-2 rounded-full">
            <Users className="text-green-400 mr-2" size={18} />
            <span className="text-white minecraft-font">{playerCount} Players Online</span>
          </div>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="py-20 nether-bg">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="minecraft-font text-5xl text-center mb-16 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            SERVER FEATURES
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Pickaxe size={40} />, title: "SURVIVAL", desc: "Experience pure survival gameplay with custom features and challenges." },
              { icon: <Tree size={40} />, title: "CUSTOM WORLD", desc: "Explore our vast, handcrafted world with unique biomes and structures." },
              { icon: <Shield size={40} />, title: "LAND CLAIM", desc: "Protect your builds with our advanced land claiming system." },
              { icon: <Server size={40} />, title: "ECONOMY", desc: "Trade with other players in our player-driven economy system." },
              { icon: <Users size={40} />, title: "COMMUNITY", desc: "Join our friendly community of Minecraft enthusiasts." },
              { icon: <Award size={40} />, title: "EVENTS", desc: "Participate in regular events and win awesome prizes!" }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="minecraft-box text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-red-500 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="minecraft-font text-xl mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img  alt="Minecraft Server Background Dark" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1690998186187-4bbff5593ca2" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="minecraft-font text-5xl mb-6 text-white">START YOUR ADVENTURE</h2>
              <p className="text-gray-300 mb-8 text-xl">Join hundreds of players on ClawMC today!</p>
              
              <div className="server-ip flex items-center justify-center mb-8 mx-auto w-fit" onClick={copyIP}>
                <span className="mr-2">{serverIP}</span>
                <Copy size={16} />
              </div>
              
              <button className="minecraft-btn red text-2xl px-12 py-6 floating">PLAY NOW</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-red-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/8feae37a-7a91-4eb9-8adf-7eb33b03f49f/f4e00fc9505e210d4ea41dbe4a0c1a58.png" 
                alt="ClawMC Logo" 
                className="h-12 pixelated"
              />
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© 2025 ClawMC. Not affiliated with Mojang AB.</p>
              <p>Minecraft is a trademark of Mojang AB.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  const { toast } = useToast();
  const [playerCount, setPlayerCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const serverIP = "play.clawmc.fun";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setPlayerCount(Math.floor(Math.random() * 100) + 50);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    toast({
      title: "Server IP Copied!",
      description: `${serverIP} has been copied to your clipboard.`,
      duration: 3000,
    });
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-red-900">
        <div className="minecraft-font text-white text-2xl mb-4">Loading world...</div>
        <div className="w-64 h-4 bg-gray-800 rounded-sm overflow-hidden">
          <motion.div 
            className="h-full bg-red-600"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage toast={toast} playerCount={playerCount} serverIP={serverIP} copyIP={copyIP} />} />
        <Route path="/bans" element={<BanList />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
