import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

import ex5Image from '../assets/EX5 main.png';
import ex5Video from '../assets/EX5 Video Main k.mp4';
import geomeImage from '../assets/Geome main.png';
import geomeVideo from '../assets/Geome main video.mp4';
import comingSoonImage from '../assets/car_proximamente.jpeg';

interface LandingPageProps {
    onSelectVehicle: (vehicle: string) => void;
}

interface VehicleCard {
    id: string;
    number: string;
    name: string;
    subtitle: string;
    imageUrl: string;
    videoUrl?: string;
    available: boolean;
}

const VEHICLES: VehicleCard[] = [
    {
        id: "ex5",
        number: "01",
        name: "GEELY EX5",
        subtitle: "CATÁLOGO",
        imageUrl: ex5Image,
        videoUrl: ex5Video,
        available: true,
    },
    {
        id: "geometry",
        number: "02",
        name: "GEELY GEOME",
        subtitle: "NUEVO",
        imageUrl: geomeImage,
        videoUrl: geomeVideo,
        available: true,
    },
    {
        id: "coming1",
        number: "03",
        name: "PRÓXIMAMENTE",
        subtitle: "MODELO",
        imageUrl: comingSoonImage,
        available: false,
    },
    {
        id: "coming2",
        number: "04",
        name: "PRÓXIMAMENTE",
        subtitle: "MODELO",
        imageUrl: comingSoonImage,
        available: false,
    },
    {
        id: "coming3",
        number: "05",
        name: "PRÓXIMAMENTE",
        subtitle: "MODELO",
        imageUrl: comingSoonImage,
        available: false,
    }
];

const LandingPage: React.FC<LandingPageProps> = ({ onSelectVehicle }) => {
    return (
        <div className="min-h-screen bg-[#f7f7f7] flex flex-col font-sans text-gray-900 overflow-x-hidden justify-center items-center py-6">

            {/* Logo Area */}
            <div className="w-full pt-8 pb-6 flex justify-center items-center">
                <img
                    src="https://i.ibb.co/gZ6ZP0hz/PHC-logo-largo.png"
                    alt="PCH Essentials Accessories"
                    className="h-16 md:h-24 lg:h-32 object-contain select-none"
                    draggable="false"
                />
            </div>

            {/* Central Title equivalent to "SUMMARY" */}
            <div className="mb-8 text-center w-full px-4 flex flex-col items-center">
                <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-bold tracking-[0.15em] text-[#333333] uppercase">
                    MODELOS
                </h1>
            </div>

            {/* Grid container */}
            <div className="w-full max-w-[90rem] px-4 sm:px-8 lg:px-12 mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 lg:gap-3 h-auto lg:h-[500px] xl:h-[600px]">
                    {VEHICLES.map((vehicle, index) => (
                        <div
                            key={vehicle.id}
                            className="flex-1 flex flex-col min-w-0 group"
                        >
                            {/* Card Container */}
                            <button
                                onMouseEnter={(e) => {
                                    const vid = e.currentTarget.querySelector('video');
                                    if (vid) vid.play().catch(() => { });
                                }}
                                onMouseLeave={(e) => {
                                    const vid = e.currentTarget.querySelector('video');
                                    if (vid) {
                                        vid.pause();
                                        vid.currentTime = 0;
                                    }
                                }}
                                onClick={() => vehicle.available && onSelectVehicle(vehicle.id)}
                                disabled={!vehicle.available}
                                className={`relative w-full h-[350px] lg:h-full rounded-xl overflow-hidden transition-all duration-500 flex flex-col group ${vehicle.available ? 'cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]' : 'cursor-not-allowed opacity-[0.85]'
                                    }`}
                            >
                                {/* Background layer */}
                                <div className="absolute inset-0 bg-[#e3e4e5] transition-colors duration-500 group-hover:bg-[#dadedf] z-0"></div>

                                {/* Content layer */}
                                <div className="absolute inset-0 z-10 pointer-events-none">
                                    {(vehicle.imageUrl || vehicle.videoUrl) ? (
                                        <>
                                            {vehicle.imageUrl && (
                                                <img
                                                    src={vehicle.imageUrl}
                                                    alt={vehicle.name}
                                                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 ${vehicle.videoUrl ? 'group-hover:opacity-0' : ''}`}
                                                />
                                            )}
                                            {vehicle.videoUrl && (
                                                <video
                                                    src={vehicle.videoUrl}
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-0 group-hover:opacity-100"
                                                />
                                            )}
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" /></svg>
                                        </div>
                                    )}
                                </div>

                                {/* Label for coming soon cars */}
                                {!vehicle.available && (
                                    <div className="absolute inset-0 z-[30] flex items-center justify-center bg-black/30">
                                        <span className="text-white text-xl md:text-2xl font-black tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transform -rotate-12 border-[3px] border-white px-3 py-1.5 select-none whitespace-nowrap">
                                            PRÓXIMAMENTE
                                        </span>
                                    </div>
                                )}

                                {/* Number at top left */}
                                <span className={`absolute top-2 left-4 text-[4rem] lg:text-[5rem] xl:text-[6.5rem] leading-none font-bold transition-all duration-500 select-none z-20 ${vehicle.imageUrl || vehicle.videoUrl
                                    ? 'text-white/90 drop-shadow-md group-hover:text-white group-hover:drop-shadow-xl'
                                    : 'text-white'
                                    }`}>
                                    {vehicle.number}
                                </span>
                            </button>

                            {/* Bottom Labels perfectly styled to match reference */}
                            <div className="mt-6 flex flex-col items-center justify-center">
                                <h3 className="text-base font-semibold text-[#444444] tracking-[0.05em] uppercase mb-1">
                                    {vehicle.name}
                                </h3>
                                <div className="flex items-center gap-3 text-[#999999]">
                                    <div className="h-[1px] w-8 bg-[#cccccc]"></div>
                                    <span className="text-[10px] font-medium tracking-[0.1em] uppercase">
                                        {vehicle.subtitle}
                                    </span>
                                    <div className="h-[1px] w-8 bg-[#cccccc]"></div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-center text-[#aaaaaa] text-[10px] font-medium flex flex-col items-center">
                <div className="flex gap-4 mb-3">
                    <a
                        href="https://www.instagram.com/pch_essentials?igsh=cXZyNTJ6cmlzeWJq&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-800 transition-colors"
                    >
                        <Instagram size={18} />
                    </a>
                    <a
                        href="https://www.facebook.com/profile.php?id=61588202117491&mibextid=wwXIfr&rdid=MsCL0eFOk5DirKwH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AS1XqhNnK%2F%3Fmibextid%3DwwXIfr%26ref%3D1#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-800 transition-colors"
                    >
                        <Facebook size={18} />
                    </a>
                </div>
                <p>PCH Essentials Accessories</p>
                <p className="mt-1">Portfolio 26'</p>
            </div>

        </div>
    );
};

export default LandingPage;
