import { useEffect, useState } from "react";
import { classNames } from "../utils/helpers";

import TotoroBase from "./../assets/images/Totoro/TotoroBase.png";
import TotoroWhites from "./../assets/images/Totoro/TotoroWhites.png";
import TotoroLeft from "./../assets/images/Totoro/TotoroLeft.png";
import TotoroRight from "./../assets/images/Totoro/TotoroRight.png";

interface Props {
  className?: string;
}

const Totoro: React.FC<Props> = ({ className }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (ev: any) => {
      setMousePosition({
        x: ev.clientX / window.screen.width,
        y: ev.clientY / window.screen.height,
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="w-full">
      {/* <div className="hidden">{JSON.stringify(mousePosition)}</div> */}
      <div className="absolute top-0 left-0">
        <img
          src={TotoroWhites}
          alt="An illustration of Totoro, holding a UMich mug."
        />
      </div>
      {/* desktop start */}
      <div
        className="hidden md:block absolute top-0 left-0"
        style={{
          top: mousePosition.y * 10 - 4,
          left: mousePosition.x * 17 - 6,
        }}
      >
        <img
          src={TotoroLeft}
          alt="An illustration of Totoro, holding a UMich mug."
        />
      </div>
      <div
        className="hidden md:block absolute top-0 left-0"
        style={{
          top: mousePosition.y * 15 - 5,
          left: mousePosition.x * 25 - 1,
        }}
      >
        <img
          src={TotoroRight}
          alt="An illustration of Totoro, holding a UMich mug."
        />
      </div>
      {/* desktop end */}
      {/* mobile start */}
      <div className="md:hidden absolute top-0 left-0">
        <img
          src={TotoroLeft}
          alt="An illustration of Totoro, holding a UMich mug."
        />
      </div>
      <div className="md:hidden absolute top-0 left-0">
        <img
          src={TotoroRight}
          alt="An illustration of Totoro, holding a UMich mug."
        />
      </div>
      {/* mobile end */}
      <div className="">
        <img
          src={TotoroBase}
          alt="An illustration of Totoro, holding a UMich mug."
        />
      </div>
    </div>
  );
};

export default Totoro;
