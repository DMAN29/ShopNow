import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Button } from "@mui/material";

const CartItem = () => {
  return (
    <div className="border p-2 shadow-lg rounded-lg">
      <div className="flex">
        <div className="h-24 md:h-32 xl:h-48">
          <img
            src="./images/item1.jfif"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="my-auto">
          <h2 className="font-bold xl:text-xl">Apple iPhone 13</h2>
          <p className="font-semibold text-xs xl:text-base opacity-60">Color : Pink</p>
          <p className="font-semibold text-xs xl:text-base opacity-60">Ram : 128 GB</p>
          <p className="space-x-2 text-sm lg:text-lg my-2 lg:my-5">
            <span className="font-bold">&#8377;40000</span>
            <span className="line-through">&#8377;80000</span>
            <span className="font-semibold text-green-600 text-sm">
              50% off
            </span>
          </p>
        </div>
      </div>
      <div className="flex mb-2 ">
        <p className="flex mt-2 items-center w-24 md:w-28 xl:w-48 ml-2">
          <RemoveCircleOutlineIcon sx={{fontSize:{xs:16,md:20}}}/>
          <span className="w-full mx-1 md:mx-3 border text-center text-xs md:text-sm lg:text-base">1</span>
          <ControlPointIcon sx={{fontSize:{xs:16,md:20}}}/>
        </p>
        <Button sx={{ fontSize: { xs: 12, md:18 } ,paddingX:{xs:2,md:5}}} color="secondary">
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
