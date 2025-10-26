"use client";
import { useState, useEffect } from 'react';

function VideoStoryHero() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  const scenes = [
    {
      id: 1,
      title: "AI in Motion",
      subtitle: "Smart Technology Meets Daily Life",
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1920&h=1080&fit=crop",
      description: "Experience the future with intelligent wearables",
      gradient: "from-blue-900/40 via-cyan-900/30 to-blue-800/40",
      accentColor: "text-cyan-400"
    },
    {
      id: 2,
      title: "Fitness Reimagined",
      subtitle: "Your Journey, Perfectly Tracked",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&h=1080&fit=crop",
      description: "Transform your wellness with precision tracking",
      gradient: "from-orange-900/40 via-red-900/30 to-pink-800/40",
      accentColor: "text-orange-400"
    },
    {
      id: 3,
      title: "Tradition Preserved",
      subtitle: "Ancient Essence, Modern Luxury",
      image: "https://www.instamojo.com/blog/wp-content/uploads/2022/01/Saachi-Terracotta.jpeg",
      description: "Discover authentic agarwood and rare fragrances",
      gradient: "from-amber-900/40 via-yellow-900/30 to-orange-800/40",
      accentColor: "text-amber-400"
    },
    {
      id: 4,
      title: "Lifestyle Delivered",
      subtitle: "Curated Excellence at Your Door",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&h=1080&fit=crop",
      description: "Premium products, unboxing joy",
      gradient: "from-purple-900/40 via-indigo-900/30 to-violet-800/40",
      accentColor: "text-purple-400"
    }
  ];

  const SCENE_DURATION = 5000; // 5 seconds per scene

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (SCENE_DURATION / 50));
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [currentScene]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setProgress(0);
      
      setTimeout(() => {
        setCurrentScene(prev => (prev + 1) % scenes.length);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 600);
    }, SCENE_DURATION);

    return () => clearInterval(timer);
  }, [scenes.length]);

  const goToScene = (index) => {
    if (index !== currentScene && !isTransitioning) {
      setIsTransitioning(true);
      setProgress(0);
      setTimeout(() => {
        setCurrentScene(index);
        setTimeout(() => setIsTransitioning(false), 100);
      }, 600);
    }
  };

  const currentSceneData = scenes[currentScene];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video-like background with parallax effect */}
      <div className="absolute inset-0">
        {scenes.map((scene, index) => (
          <div
            key={scene.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              currentScene === index
                ? 'opacity-100 scale-100'
                : currentScene === (index - 1 + scenes.length) % scenes.length
                ? 'opacity-0 scale-110'
                : 'opacity-0 scale-95'
            }`}
          >
            {/* Background image with Ken Burns effect */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-linear ${
                currentScene === index && !isTransitioning ? 'scale-110' : 'scale-100'
              }`}
              style={{
                backgroundImage: `url(${scene.image})`,
                filter: 'brightness(0.7) contrast(1.1) saturate(1.2)'
              }}
            />
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${scene.gradient} backdrop-blur-[1px]`} />
            {/* Vignette effect */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60" />
          </div>
        ))}
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          
          {/* Scene counter */}
          <div className={`transition-all duration-700 mb-6 translate-y-[-130px] ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <div className="flex space-x-1">
                {scenes.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      currentScene === index ? 'bg-white w-6' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Main title */}
          <div className={`transition-all duration-700 delay-100 mb-3 translate-y-[-100px] ${
            isTransitioning ? 'opacity-0 scale-95 translate-y-8' : 'opacity-100 scale-100 translate-y-0'
          }`}>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight ${currentSceneData.accentColor} drop-shadow-2xl`}>
              {currentSceneData.title}
            </h1>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-700 delay-200 mb-4 translate-y-[-80px] ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 tracking-wide">
              {currentSceneData.subtitle}
            </p>
          </div>

          {/* Description */}
          <div className={`transition-all duration-700 delay-300 mb-6 translate-y-[-90px] ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto">
              {currentSceneData.description}
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-700 delay-400 mb-6 translate-y-[-60px] ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <button className="group relative px-8 py-3 bg-white text-black font-bold text-xs tracking-widest uppercase overflow-hidden rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Explore Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-gray-900 to-zinc-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-full" />
            </button>
          </div>

          {/* Brand tagline - Always visible */}
          <div className="mt-4 translate-y-[-40px]">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-30 animate-pulse" />
              <h2 className="relative text-base sm:text-lg md:text-xl font-light text-white tracking-wider">
                Welcome to <span className="font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Athimart</span>
              </h2>
              <p className="relative text-xs sm:text-sm text-white/60 mt-1 tracking-widest">
                The Future of Authentic Living
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive scene navigation */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {scenes.map((scene, index) => (
            <button
              key={scene.id}
              onClick={() => goToScene(index)}
              disabled={isTransitioning}
              className="group relative flex flex-col items-center transition-all duration-300 disabled:opacity-50"
            >
              {/* Scene thumbnail */}
              <div className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 mb-1 ${
                currentScene === index
                  ? 'border-white scale-110 shadow-2xl'
                  : 'border-white/30 scale-90 opacity-60 hover:opacity-100 hover:scale-100'
              }`}>
                <img
                  src={scene.image}
                  alt={scene.title}
                  className="w-full h-full object-cover"
                />
                {currentScene === index && (
                  <div className="absolute inset-0 border-2 border-white/50 animate-pulse" />
                )}
              </div>
              
              {/* Scene label */}
              <span className={`text-[10px] font-medium tracking-wide transition-all duration-300 ${
                currentScene === index ? 'text-white' : 'text-white/50'
              }`}>
                {scene.title.split(' ')[0]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Progress bar with scene indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-100 ease-linear relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg animate-pulse" />
        </div>
      </div>

      {/* Scene timer */}
      <div className="absolute top-8 right-8 z-20">
        <div className="flex items-center space-x-3 bg-black/30 backdrop-blur-md px-4 py-3 rounded-full border border-white/20">
          <div className="relative w-8 h-8">
            <svg className="transform -rotate-90" width="32" height="32">
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 14}`}
                strokeDashoffset={`${2 * Math.PI * 14 * (1 - progress / 100)}`}
                className="transition-all duration-100 ease-linear"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
          <span className="text-white text-sm font-medium">
            {currentScene + 1}/{scenes.length}
          </span>
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={() => goToScene((currentScene + 1) % scenes.length)}
        className="absolute top-8 left-8 z-20 group px-6 py-3 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
      >
        <span className="flex items-center space-x-2">
          <span>Skip</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </span>
      </button>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}

export default VideoStoryHero;