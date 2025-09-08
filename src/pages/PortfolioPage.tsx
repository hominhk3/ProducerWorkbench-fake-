import React from 'react';
import Masonry from 'react-masonry-css';
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaSpotify, FaApple, FaSoundcloud, FaStar, FaRegStar, FaUserPlus, FaCommentDots } from 'react-icons/fa';

const portfolioData = {
  producerName: 'Alex Thorne',
  tagline: 'Sonic Architect & Beatmaker',
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  coverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
  stats: {
    totalProjects: '120+',
    systemProjects: '42',
    averageRating: '4.9 ★',
  },
  genres: ['Hip-hop', 'Lo-fi', 'Cinematic Score', 'Indie Pop', 'Future Bass'],
  clients: [
      { name: 'Spotify', logoUrl: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' },
      { name: 'Universal Music', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Universal_Music_Group_logo.svg/2560px-Universal_Music_Group_logo.svg.png' },
      { name: 'Artlist', logoUrl: 'https://images.squarespace-cdn.com/content/v1/5a0764689f8dce4753549071/1602525287313-2222YNEB653LFM3J765A/Artlist_Logo_Horizontal_White_2x.png'},
      { name: 'Def Jam', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Def_Jam_Recordings_logo.svg/1200px-Def_Jam_Recordings_logo.svg.png' }
  ],
  socials: [
    { icon: <FaInstagram size={24} />, url: '#' },
    { icon: <FaYoutube size={24} />, url: '#' },
    { icon: <FaTiktok size={24} />, url: '#' },
    { icon: <FaFacebook size={24} />, url: '#' },
  ],
  discography: [
    { id: 1, title: 'Cosmic Drift', artist: 'Orion', role: 'Full Production', img: 'https://images.unsplash.com/photo-1516269613936-48c93545d4f3?w=400' },
    { id: 2, title: 'Midnight City', artist: 'Luna', role: 'Mixing & Mastering', img: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400' },
    { id: 3, title: 'Echoes in Rain', artist: 'Kai', role: 'Beat Making', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400' },
  ],
  projectHistory: [
    { id: 1, title: 'Vocal Mix for "Starlight"', client: 'Luna', rating: 5, comment: '"Alex transformed my track! The clarity and punch are incredible. A true professional with a great ear."', date: '2025-08-15' },
    { id: 2, title: 'Lo-fi Beat Pack', client: 'ChillVibes Records', rating: 5, comment: '"Fast delivery and top-notch quality. The beats are exactly what we were looking for. Highly recommended!"', date: '2025-07-22' },
    { id: 3, title: 'Podcast Intro Music', client: 'The Digital Nomad', rating: 4, comment: '"Great communication and delivered a solid theme for my show."', date: '2025-06-30' },
  ],
  certifications: [
      { name: 'Advanced Audio Engineering', issuer: 'Berklee Online', year: '2024' },
      { name: 'Certified Pro Tools Operator', issuer: 'Avid', year: '2023' },
  ],
  musicPlatforms: [
     { icon: <FaSpotify size={32} />, name: 'Spotify', url: '#' },
     { icon: <FaApple size={32} />, name: 'Apple Music', url: '#' },
     { icon: <FaSoundcloud size={32} />, name: 'SoundCloud', url: '#' },
  ],
  skills: ['FL Studio', 'Ableton Live', 'Pro Tools', 'Mixing', 'Mastering', 'Sound Design', 'Vocal Tuning', 'Logic Pro X']
};

const StarRating = ({ rating }: { rating: number }) => {
    const totalStars = 5;
    return (
        <div className="flex">
            {[...Array(totalStars)].map((_, index) =>
                index < rating ? <FaStar key={index} className="text-yellow-400" /> : <FaRegStar key={index} className="text-gray-500" />
            )}
        </div>
    );
};

const WaveformSVG = () => (
    <svg width="100%" height="50" viewBox="0 0 300 50" preserveAspectRatio="none" className="opacity-50 group-hover:opacity-100 group-hover:text-accent transition-all duration-300">
        <path d="M0 25 H20 L25 15 L30 35 L35 20 L40 30 H50 L55 10 L60 40 L65 5 L70 45 H80 L85 20 L90 30 L95 25 H110 L115 15 L120 35 H130 L135 20 L140 30 H150 L155 10 L160 40 L165 5 L170 45 H180 L185 20 L190 30 L195 25 H210 L215 15 L220 35 H230 L235 20 L240 30 H250 L255 10 L260 40 L265 5 L270 45 H280 L285 20 L290 30 L300 25" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
);


function PortfolioPage() {
  const breakpointColumnsObj = { default: 2, 1100: 2, 700: 1 };
  
  return (
    <div className="bg-dark-bg font-inter text-text-primary overflow-x-hidden">
      
      <header className="relative h-screen flex items-center justify-center p-8 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in" style={{ backgroundImage: `url(${portfolioData.coverUrl})`, filter: 'brightness(0.4)' }}></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="relative col-span-1 flex justify-center md:justify-start">
                <div className="relative">
                    <img src={portfolioData.avatarUrl} alt="Producer Avatar" className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-accent shadow-2xl object-cover"/>
                </div>
            </div>
            <div className="col-span-2 text-center md:text-left">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white animate-fade-in">{portfolioData.producerName}</h1>
                <p className="text-xl md:text-2xl text-accent font-medium mt-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>{portfolioData.tagline}</p>
                 <div className="flex justify-center md:justify-start space-x-4 mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    {portfolioData.socials.map((social, index) => <a key={index} href={social.url} className="text-text-secondary hover:text-accent transition-colors">{social.icon}</a>)}
                </div>
            </div>
            <div className="absolute w-full flex justify-center bottom-10 md:bottom-auto">
                <div className="flex space-x-8 bg-dark-surface/50 backdrop-blur-sm p-4 rounded-xl border border-border-color">
                    <div className="text-center">
                        <p className="text-2xl font-bold">{portfolioData.stats.totalProjects}</p>
                        <p className="text-xs text-text-secondary">Total Projects</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold">{portfolioData.stats.systemProjects}</p>
                        <p className="text-xs text-text-secondary">Workbench Projects</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold">{portfolioData.stats.averageRating}</p>
                        <p className="text-xs text-text-secondary">Average Rating</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 p-4">
          <button className="bg-accent text-white font-bold tracking-widest uppercase [writing-mode:vertical-rl] py-4 px-3 rounded-md hover:bg-opacity-80 transition-all text-sm">Hire Me</button>
          <button className="bg-dark-surface p-3 rounded-full text-text-secondary hover:text-accent transition-colors border border-border-color"><FaUserPlus size={20} title="Kết bạn" /></button>
          <button className="bg-dark-surface p-3 rounded-full text-text-secondary hover:text-accent transition-colors border border-border-color"><FaCommentDots size={20} title="Nhắn tin" /></button>
        </div>
      </header>

      <main className="relative z-10 bg-dark-surface -mt-20 rounded-t-[40px] border-t-2 border-border-color">
        
        <section className="py-24 px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Discography</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.discography.map(project => (
              <div key={project.id} className="group bg-dark-bg p-4 rounded-xl flex items-center gap-6 border border-transparent hover:border-border-color transition-all">
                  <img src={project.img} alt={project.title} className="w-28 h-28 object-cover rounded-md flex-shrink-0"/>
                  <div className="w-full">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-text-secondary text-sm">{project.artist}</p>
                      <div className="mt-3 text-text-secondary">
                          <WaveformSVG/>
                      </div>
                  </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 px-8 bg-dark-bg">
            <h2 className="text-4xl font-bold text-center mb-12">Project History & Client Feedback</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
                {portfolioData.projectHistory.map(project => (
                    <div key={project.id} className="bg-dark-surface p-6 rounded-xl border border-border-color">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <p className="text-sm text-text-secondary">Client: <span className="font-medium text-accent">{project.client}</span></p>
                            </div>
                            <div className="text-right flex-shrink-0 ml-4">
                                <StarRating rating={project.rating} />
                                <p className="text-xs text-text-secondary mt-1">{project.date}</p>
                            </div>
                        </div>
                        <p className="text-text-primary mt-4 italic border-l-2 border-accent pl-4">
                            "{project.comment}"
                        </p>
                    </div>
                ))}
            </div>
        </section>

        <section className="py-16 px-8 text-center">
            <h3 className="text-sm uppercase tracking-widest text-text-secondary mb-8">Trusted By & Featured On</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                {portfolioData.clients.map((client) => (
                    <img key={client.name} src={client.logoUrl} alt={client.name} className="h-6 md:h-8 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" />
                ))}
            </div>
        </section>

        <section className="py-24 px-8">
             <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
                <div className="col-span-2">
                    <img src={portfolioData.avatarUrl} alt="Producer portrait" className="rounded-xl w-full object-cover shadow-2xl"/>
                </div>
                <div className="col-span-3">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-text-secondary leading-relaxed mb-8">
                        With over a decade of experience, I help artists find their unique sound. My passion is crafting high-quality, emotionally resonant tracks that stand the test of time. 
                    </p>
                    <h3 className="text-2xl font-bold mb-4">Certifications & Education</h3>
                    <div className="space-y-3">
                        {portfolioData.certifications.map((cert, index) =>(
                             <div key={index}>
                                <p className="font-bold text-text-primary">{cert.name}</p>
                                <p className="text-sm text-text-secondary">{cert.issuer} - {cert.year}</p>
                             </div>
                        ))}
                    </div>
                </div>
             </div>
        </section>
        
        <section className="py-24 px-8 bg-dark-bg">
            <h2 className="text-4xl font-bold text-center mb-12">Specialized Genres</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
                {portfolioData.genres.map((genre) => (
                     <div key={genre} className="bg-dark-surface border border-border-color rounded-full px-6 py-3 text-text-primary font-medium hover:bg-accent hover:text-white hover:border-accent transition-all cursor-default">
                        {genre}
                    </div>
                ))}
            </div>
        </section>

        <section className="py-16 px-8 text-center border-t border-b border-border-color">
             <h2 className="text-2xl font-bold text-center mb-8">Listen on Streaming Platforms</h2>
             <div className="flex justify-center items-center space-x-8">
                {portfolioData.musicPlatforms.map((platform, index) => <a key={index} href={platform.url} title={platform.name} className="text-text-secondary hover:text-accent transition-colors">{platform.icon}</a>)}
             </div>
        </section>

        <section className="py-24 px-8 text-center">
            <h2 className="text-4xl font-bold mb-12">Skills & Tools</h2>
            <div className="flex flex-wrap justify-center items-center gap-4 max-w-4xl mx-auto">
                {portfolioData.skills.map((skill, index) => <div key={index} className="bg-dark-surface border border-border-color rounded-lg px-5 py-2 text-text-secondary hover:border-accent hover:text-accent transition-all cursor-pointer">{skill}</div>)}
            </div>
        </section>

        <section className="py-24 px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Create Something Amazing.</h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8">
                Have a project in mind or just want to talk about music? Feel free to reach out.
            </p>
            <button className="bg-accent text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-80 transition-transform hover:scale-105">
                Start Your Project
            </button>
        </section>

        <footer className="text-center py-8 text-text-secondary text-sm border-t border-border-color">
             &copy; {new Date().getFullYear()} {portfolioData.producerName}. All rights reserved.
        </footer>

      </main>
    </div>
  );
}

export default PortfolioPage;