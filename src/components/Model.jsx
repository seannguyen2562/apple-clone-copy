import { useEffect, useRef, useState } from "react";

import { models, sizes } from "../constants";
import ModelView from "./ModelView";

const Model = () =>{
    const [size, setSize] = useState("small");
    const [model, setModel] = useState({
        title: models[0].title,
        color: models[0].color,
        img: models[0].img,
    });

    return (
        <section>
            <div>
                <h1>Take a closer look.</h1>

                <div>
                    <div></div>

                    <div>

                        <p></p>
                        <div>
                            <ul></ul>
                            <button></button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
