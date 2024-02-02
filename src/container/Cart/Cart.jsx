import { Button, Grid } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
const Cart = () => {
  return (
    <div className="w-10/12 mx-auto my-10">
      <Grid container justifyContent={"space-between"}>
        <Grid item xs={12} md={7} xl={8}>
          <div className="space-y-5">
            {[1, 1, 1, 1, 1, 1].map((item, index) => (
              <CartItem key={index} />
            ))}
          </div>
        </Grid>
        <Grid item xs={12} md={4.5} xl={3.5} sx={{marginY:{xs:5,md:0}}}>
          <div className="border shadow-xl p-5 space-y-4 sticky top-36 font-semibold rounded-xl">
            <h2 className="font-bold text-base xl:text-xl text-gray-500 uppercase">Price Details</h2>
            <hr className="border" />
            <p className="flex text-sm xl:text-base justify-between">
              <span>Price (3 item)</span>
              <span>&#8377;120000</span>
            </p>
            <p className="flex text-sm xl:text-base justify-between">
              <span>Discount</span>
              <span className="text-green-600">-&#8377;14589</span>
            </p>
            <p className="flex text-sm xl:text-base justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-600">Free</span>
            </p>
            <hr className="border" />

            <p className="flex justify-between font-bold xl:text-lg">
              <span>Total Amount</span>
              <span>&#8377;152012</span>
            </p>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                padding: 1.5,
                fontWeight: 600,
                fontSize: {xs:12,md:16},
                color: "white",
              }}
              color="secondary"
            >
              {" "}
              Checkout
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cart;
