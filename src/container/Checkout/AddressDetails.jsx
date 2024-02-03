import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import AddressCard from "./AddressCard";

const AddressDetails = () => {
  const [detail, setDetail] = useState({
    fName: "",
    lName: "",
    adrs: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const [zipError, setZipError] = useState(false);
  const [phoneError,setPhoneError] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => ({ ...prev, [name]: value }));
  };

  const display = (e) => {
    e.preventDefault();
      setZipError(true);
      setPhoneError(true);

    if (detail.zip.length === 6) {
      setZipError(false);
    }
    if(detail.phone.length === 10){
      setPhoneError(false);
    }
    if(detail.zip.length ===6 && detail.phone.length===10){
      console.log(detail);
    }
  };

  return (
    <div className="mt-5 w-10/12 mx-auto">
      <Grid container justifyContent={"space-between"}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            overflow: {xs:'nnone',md:"auto"},
            height: {md:"25rem"},
            border: "1px solid #E5E7EB",
          }}
        >
          {[1, 1, 1, 1, 1].map((item, index) => (
            <AddressCard key={index} />
          ))}
        </Grid>
        <Grid item xs={12} md={7.5}>
          <div className="border rounded-lg shadow-lg p-5 text-sm md:text-base lg:text-lg xl:text-xl space-y-5 mt-5 lg:mt-0">
            <form action="" className=" space-y-5" onSubmit={display}>
              <div className="justify-between flex">
                <input
                  type="text"
                  required
                  className="border p-2 rounded w-[48%]"
                  value={detail.fName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  name="fName"
                />
                <input
                  type="text"
                  required
                  className="border p-2 rounded w-[48%]"
                  value={detail.lName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  name="lName"
                />
              </div>
              <textarea
                rows={3}
                required
                className="border p-2 rounded w-full"
                value={detail.adrs}
                onChange={handleChange}
                placeholder="Address *"
                name="adrs"
              />
              <div className="flex justify-between">
                <input
                  type="text"
                  required
                  className="border p-2 rounded w-[48%]"
                  value={detail.city}
                  onChange={handleChange}
                  placeholder="City *"
                  name="city"
                />
                <input
                  type="text"
                  required
                  className="border p-2 rounded w-[48%]"
                  value={detail.state}
                  onChange={handleChange}
                  placeholder="State/Region *"
                  name="state"
                />
              </div>
              <div className="flex justify-between">
              <div className="w-[48%]">
                <input
                  type="number"
                  required
                  className={`border p-2 rounded w-full remove-arrow ${
                    zipError ? "border-red-500" : ""
                  }`}
                  minLength={6}
                  maxLength={6}
                  value={detail.zip}
                  onChange={handleChange}
                  placeholder="Zip/ Postal Code *"
                  name="zip"
                />
                 {zipError && (
                  <p className="text-red-500">Zip code must be 6 digits</p>
                )}
              </div>
                <div className="w-[48%]">
                <input
                  type="number"
                  required
                  className={`border p-2 rounded w-full remove-arrow ${
                    phoneError ? "border-red-500" : ""
                  }`}
                  minLength={10}
                  maxLength={10}
                  value={detail.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  name="phone"
                />
                  {phoneError && (
                  <p className="text-red-500">Phone Number must be of 10 digits</p>
                )}
                
                </div>
              </div>
              
              <Button
                variant="contained"
                color="secondary"
                sx={{ height: 42,fontSize:{xs:12,md:16} }}
                type="submit"
              >
                Add Address
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddressDetails;
