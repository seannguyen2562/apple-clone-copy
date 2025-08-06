import React from "react";

import VideoCarousel from "./VideoCarousel";
import { rightImg, watchImg } from "../assets";

const Highlight = () => {
    return  (
        <section>
            <div>
                <div>
                    <h1>Get the highlights.</h1>
                    <div>
                        <p>
                            Watch the film
                            <img/>
                        </p>
                        <p>
                            Watch the event
                            <img/>
                        </p>
                    </div>
                </div>

                <VideoCarousel/>
            </div>
        </section>
    );
};

export default Highlights;
