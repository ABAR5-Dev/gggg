
import React from 'react';
import { motion } from 'framer-motion';
import { Ban, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BanList = () => {
  // Example ban list data - in a real app, this would come from your backend
  const bans = [
    { player: "ExamplePlayer1", reason: "Hacking", date: "2025-05-08", expires: "2025-06-08" },
    { player: "ExamplePlayer2", reason: "Inappropriate behavior", date: "2025-05-07", expires: "Permanent" },
    { player: "ExamplePlayer3", reason: "Griefing", date: "2025-05-06", expires: "2025-05-20" },
  ];

  return (
    <div className="min-h-screen bg-black/95">
      <div className="container mx-auto px-4 py-20">
        <Link to="/" className="inline-flex items-center minecraft-btn mb-8">
          <ArrowLeft className="mr-2" size={16} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center mb-8">
            <Ban className="text-red-500 mr-4" size={40} />
            <h1 className="minecraft-font text-4xl text-white">Ban List</h1>
          </div>

          <div className="minecraft-box bg-black/80">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-red-900">
                    <th className="minecraft-font text-left p-4 text-red-500">Player</th>
                    <th className="minecraft-font text-left p-4 text-red-500">Reason</th>
                    <th className="minecraft-font text-left p-4 text-red-500">Date</th>
                    <th className="minecraft-font text-left p-4 text-red-500">Expires</th>
                  </tr>
                </thead>
                <tbody>
                  {bans.map((ban, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-red-900/20"
                    >
                      <td className="p-4 text-white">{ban.player}</td>
                      <td className="p-4 text-red-400">{ban.reason}</td>
                      <td className="p-4 text-gray-400">{ban.date}</td>
                      <td className="p-4 text-gray-400">{ban.expires}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BanList;
