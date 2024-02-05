import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CaroselCard from "./CaroselCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "@mui/material";
import TypeCard from "./TypeCard";

const PageCarosel = ({ data, title }) => {
  const caroselCardResponsive = {
    0: { items: 2 },
    360: { items: 3 },
    1024: { items: 4 },
    1200: { items: 6 },
  };
    const typeCardResponsive = {
    0: { items: 1 },
    360: { items: 3 },
    720: { items: 5 },
    1400: { items: 9 },
  };
  const responsive =
    title.length !== 0 ? caroselCardResponsive : typeCardResponsive;


  const [active, setActive] = useState(0);
  const carouselRef = useRef(null);

  const leftClick = () => {
    setActive(active - 1);
    carouselRef.current.slidePrev();
  };

  const rightClick = () => {
    setActive(active + 1);
    carouselRef.current.slideNext();
  };

  const syncActiveIndex = ({ item }) => {
    setActive(item);
  };

  const screenWidth = window.innerWidth;
  let maxVisibleItems = 6;

  Object.keys(responsive).forEach((breakpoint) => {
    if (screenWidth >= parseInt(breakpoint)) {
      maxVisibleItems = responsive[breakpoint].items;
    }
  });

  const items = data.map((item) => {
    if (title.length !== 0) {
      return <CaroselCard key={item.id} item={item} />;
    } else {
      return <TypeCard key={item.id} item={item} />;
    }
  });

  return (
    <>
      <div className="w-11/12 my-4 md:my-8 mx-auto shadow-[rgba(0,_0,_0,_0.1)_0px_30px_90px] bg-slate-200">
        {title.length !== 0 && (
          <h2 className="md:text-4xl font-bold m-2 p-3">{title}</h2>
        )}
        <div className="relative p-5 ">
          <AliceCarousel
            items={items}
            activeIndex={active}
            onSlideChanged={syncActiveIndex}
            responsive={responsive}
            disableButtonsControls
            disableDotsControls
            infinite
            ref={(el) => (carouselRef.current = el)}
          />
          {active !== 0 && (
            <Button
              onClick={leftClick}
              variant="contained"
              sx={{
                color: "black",
                bgcolor: "white",
                position: "absolute",
                top: "45%",
                transform: "translateX(-3rem) rotate(90deg)",
              }}
            >
              <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)" }} />
            </Button>
          )}
          {active !== data.length - maxVisibleItems && (
            <Button
              onClick={rightClick}
              variant="contained"
              sx={{
                color: "black",
                bgcolor: "white",
                position: "absolute",
                top: "45%",
                right: 0,
                transform: "translateX(2rem) rotate(90deg)",
              }}
            >
              <KeyboardArrowRightIcon sx={{ transform: "rotate(-90deg)" }} />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default PageCarosel;
