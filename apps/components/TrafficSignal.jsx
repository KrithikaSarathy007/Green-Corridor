import React from "react";
import { motion } from "framer-motion";

export default function TrafficSignal({ state = "red", size = "md" }) {
  const sizes = {
    sm: { width: 24, height: 60, light: 14 },
    md: { width: 32, height: 80, light: 20 },
    lg: { width: 40, height: 100, light: 26 }
  };

  const s = sizes[size] || sizes.md;

  return (
    <div 
      className="relative"
      style={{ width: s.width, height: s.height }}
    >
      {/* Signal Housing */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg shadow-lg border-2 border-gray-600"
        style={{ 
          boxShadow: '0 4px 12px rgba(0,0,0,0.4), inset 0 2px 4px rgba(255,255,255,0.1)' 
        }}
      >
        {/* Top cap */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3/4 h-2 bg-gray-800 rounded-t-lg" />
        
        {/* Lights container */}
        <div className="flex flex-col items-center justify-around h-full py-2">
          {/* Red Light */}
          <motion.div
            className="rounded-full relative"
            style={{ 
              width: s.light, 
              height: s.light,
              backgroundColor: state === 'red' ? '#ef4444' : '#4a1515',
              boxShadow: state === 'red' 
                ? '0 0 20px #ef4444, 0 0 40px #ef4444, inset 0 -2px 4px rgba(0,0,0,0.3)' 
                : 'inset 0 -2px 4px rgba(0,0,0,0.3)'
            }}
            animate={state === 'red' ? { 
              boxShadow: [
                '0 0 20px #ef4444, 0 0 40px #ef4444',
                '0 0 25px #ef4444, 0 0 50px #ef4444',
                '0 0 20px #ef4444, 0 0 40px #ef4444'
              ]
            } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {/* Light reflection */}
            <div className="absolute top-1 left-1 w-1/3 h-1/3 bg-white/30 rounded-full" />
          </motion.div>

          {/* Yellow Light */}
          <motion.div
            className="rounded-full relative"
            style={{ 
              width: s.light, 
              height: s.light,
              backgroundColor: state === 'yellow' ? '#fbbf24' : '#4a3f15',
              boxShadow: state === 'yellow' 
                ? '0 0 20px #fbbf24, 0 0 40px #fbbf24, inset 0 -2px 4px rgba(0,0,0,0.3)' 
                : 'inset 0 -2px 4px rgba(0,0,0,0.3)'
            }}
            animate={state === 'yellow' ? { 
              boxShadow: [
                '0 0 20px #fbbf24, 0 0 40px #fbbf24',
                '0 0 25px #fbbf24, 0 0 50px #fbbf24',
                '0 0 20px #fbbf24, 0 0 40px #fbbf24'
              ]
            } : {}}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            <div className="absolute top-1 left-1 w-1/3 h-1/3 bg-white/30 rounded-full" />
          </motion.div>

          {/* Green Light */}
          <motion.div
            className="rounded-full relative"
            style={{ 
              width: s.light, 
              height: s.light,
              backgroundColor: state === 'green' ? '#22c55e' : '#153a1f',
              boxShadow: state === 'green' 
                ? '0 0 20px #22c55e, 0 0 40px #22c55e, inset 0 -2px 4px rgba(0,0,0,0.3)' 
                : 'inset 0 -2px 4px rgba(0,0,0,0.3)'
            }}
            animate={state === 'green' ? { 
              boxShadow: [
                '0 0 20px #22c55e, 0 0 40px #22c55e',
                '0 0 30px #22c55e, 0 0 60px #22c55e',
                '0 0 20px #22c55e, 0 0 40px #22c55e'
              ]
            } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <div className="absolute top-1 left-1 w-1/3 h-1/3 bg-white/30 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Pole */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600"
        style={{ 
          width: 6, 
          height: 20, 
          top: s.height,
          borderRadius: '0 0 3px 3px'
        }}
      />
    </div>
  );
}
