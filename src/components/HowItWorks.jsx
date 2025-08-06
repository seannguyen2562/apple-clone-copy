import React, { useRef } from "react";

import { chipImg, frameImg, frameVideo } from "../assets";

const HowItWorks = () => {
    const videoRef = useRef();

    return (
        <section>
            <div>

                <div>
                    <img/>
                </div>
                <div>

                    <h2>
                        A17 Pro chip.
                        <br/>A monster win for gaming.
                    </h2>
                    <p>
                        It&apos;s here. The biggest redesign in the history of Apple GPUs
                    </p>

                </div>
                <div>

                    <div>

                        <div>
                            <img/>
                        </div>
                        <div>
                            <video>
                                <source/>
                            </video>
                        </div>

                    </div>
                    <p>
                        Honkai: Star Rail
                    </p>

                </div>
                <div>

                    <div>

                        <p>
                            A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
                            <span>
                                best graphic performance by far.
                            </span>
                        </p>
                        <br/>
                        <p>
                            Mobile{" "}
                            <span>
                                games will look and feel so immersive
                            </span>{" "}
                            with incredibly detailed environments and characters.
                        </p>

                    </div>
                    <div>
                        <p>New</p>
                        <p>Pro-class GPU</p>
                        <p>with 6 cores</p>
                    </div>

                </div>

            </div>
        </section>
    )
};

export default HowItWorks;
