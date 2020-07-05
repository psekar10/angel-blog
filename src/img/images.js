import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";

export const images = [
    {
        ...{url:img1}, ...{firstLayout:true}
    },
    {
        ...{url:img2}, ...{firstLayout:false}
    },
    {
        ...{url:img3}, ...{firstLayout:true}
    },
    {
        ...{url:img4}, ...{firstLayout:false}
    },
    {
        ...{url:img5}, ...{firstLayout:true}
    },
    {
        ...{url:img6}, ...{firstLayout:false}
    }
]
export {img1, img2, img3, img4, img5, img6};