import React, { useEffect, useState } from "react";

import { heroVideo, smallHeroVideo } from "../assets";

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < 760 ? smallHeroVideo : heroVideo,
    );

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) setVideoSrc(smallHeroVideo);
        else setVideoSrc(heroVideo);
    };

    useEffect(() => {
        window.addEventListener("resize", handleVideoSrcSet);

        return () => window.removeEventListener("resize", handleVideoSrcSet);
    }, []);

    return (
        <section>
            <div>
                <p>
                    iPhone 15 Pro
                </p>
                <div>
                    <video>
                        <source/>
                    </video>
                </div>
            </div>

            <div>
                <a>
                    Buy
                </a>
                <p>From $199/month or $999</p>
            </div>
        </section>
    );
};

export default Hero;
