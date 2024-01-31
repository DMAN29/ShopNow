import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import ReviewCard from "./ReviewCard";
import { Grid, LinearProgress, Rating } from "@mui/material";
import { PhoneData } from "../../Data/PhoneData";
import ItemCard from "../ItemsPage/ItemCard";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const reviews = { href: "#", average: 4, totalCount: 117 };
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div className="bg-white">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="mx-auto flex items-center space-x-2 px-4 sm:px-6 lg:px-8 py-3 w-10/12 mt-3 md:mt-6"
        >
          {product.breadcrumbs.map((breadcrumb) => (
            <li key={breadcrumb.id}>
              <div className="flex items-center">
                <a
                  href={breadcrumb.href}
                  className="mr-2 text-sm font-medium text-gray-900"
                >
                  {breadcrumb.name}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          ))}
          <li className="text-sm">
            <a
              href={product.href}
              aria-current="page"
              className="font-medium text-gray-500 hover:text-gray-600"
            >
              {product.name}
            </a>
          </li>
        </ol>
      </nav>
      <div className="pt-6 md:flex w-10/12 mx-auto">
        {/* Image gallery */}
        <div className="mx-auto sm:px-6 lg:px-8 md:1/2 xl:w-2/5 ">
          <div className="xl:flex">
            <div className="hidden xl:block xl:w-1/4">
              {[1, 1, 1, 1].map((item, index) => (
                <img
                  key={index}
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="h-1/4 w-full object-cover object-center p-2 rounded-xl"
                />
              ))}
            </div>
            <div className="xl:w-3/4">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="xl:hidden grid grid-cols-4">
              {[1, 1, 1, 1].map((item, index) => (
                <img
                  key={index}
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  className="object-cover object-center p-2 rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
        {/* Product info */}
        <div className="mx-auto  px-4 pb-16 pt-2 sm:px-6 lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-5 md:1/2 xl:w-3/5">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="md:text-xl text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl xl:text-3xl ">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            {/* Reviews */}
            <div className="mt-2">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
            <h2 className="sr-only">Product information</h2>
            <p className="md:text-xl text-2xl font-semibold my-3 xl:text-3xl tracking-tight text-gray-900">
              {product.price}
            </p>

            <form className="mt-5">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring ring-offset-1" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product.sizes.map((size) => (
                      <RadioGroup.Option
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={({ active }) =>
                          classNames(
                            size.inStock
                              ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                              : "cursor-not-allowed bg-gray-50 text-gray-200",
                            active ? "ring-2 ring-indigo-500" : "",
                            "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                          )
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <RadioGroup.Label as="span">
                              {size.name}
                            </RadioGroup.Label>
                            {size.inStock ? (
                              <span
                                className={classNames(
                                  active ? "border" : "border-2",
                                  checked
                                    ? "border-indigo-500"
                                    : "border-transparent",
                                  "pointer-events-none absolute -inset-px rounded-md"
                                )}
                                aria-hidden="true"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  stroke="currentColor"
                                >
                                  <line
                                    x1={0}
                                    y1={100}
                                    x2={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="font-bold  text-2xl md:text-xl xl:text-2xl">
                Description
              </h3>

              <div className="space-y-6">
                <p className="text-sm xl:text-base text-gray-900">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ratings and Reviews */}
      <h2 className="font-bold text-2xl mt-5 mx-auto w-10/12">
        Rating and Reviews
      </h2>
      <div className="w-10/12 mx-auto my-5 border shadow-xl">
        <Grid container>
          <Grid item xs={7}>
            {[1, 1, 1, 1].map((item, index) => (
              <ReviewCard key={index} />
            ))}
          </Grid>
          <Grid item xs={5}>
            <h3 className="text-2xl font-bold mt-5">Product Ratings</h3>
            <div className="flex items-center mb-4">
              <Rating value={4.6} precision={0.5} readOnly />
              <p className="opacity-60">57841 Raitings</p>
            </div>
            <div className="my-5 font-semibold">
              <Grid container gap={3}>
                <Grid item xs={2}>
                  <p>Excellent</p>
                </Grid>
                <Grid item xs={7} sx={{ marginY: "auto" }}>
                  <LinearProgress
                    variant="determinate"
                    sx={{ borderRadius: 4, height: 7 }}
                    value={40}
                    color="success"
                  />
                </Grid>
              </Grid>
              <Grid container gap={3}>
                <Grid item xs={2}>
                  <p>Very Good</p>
                </Grid>
                <Grid item xs={7} sx={{ marginY: "auto" }}>
                  <LinearProgress
                    variant="determinate"
                    sx={{ borderRadius: 4, height: 7 }}
                    value={53}
                    color="success"
                  />
                </Grid>
              </Grid>
              <Grid container gap={3}>
                <Grid item xs={2}>
                  <p>Good</p>
                </Grid>
                <Grid item xs={7} sx={{ marginY: "auto" }}>
                  <LinearProgress
                    variant="determinate"
                    sx={{ borderRadius: 4, height: 7 }}
                    value={51}
                  />
                </Grid>
              </Grid>
              <Grid container gap={3}>
                <Grid item xs={2}>
                  <p>Average</p>
                </Grid>
                <Grid item xs={7} sx={{ marginY: "auto" }}>
                  <LinearProgress
                    variant="determinate"
                    sx={{ borderRadius: 4, height: 7 }}
                    value={25}
                    color="warning"
                  />
                </Grid>
              </Grid>
              <Grid container gap={3}>
                <Grid item xs={2}>
                  <p>Bad</p>
                </Grid>
                <Grid item xs={7} sx={{ marginY: "auto" }}>
                  <LinearProgress
                    variant="determinate"
                    sx={{ borderRadius: 4, height: 7 }}
                    value={45}
                    color="error"
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* Similar Product */}
      <h2 className="font-bold text-2xl mt-10 mx-auto w-10/12">
        Similar Products
      </h2>
      <div className="flex flex-wrap w-10/12 mx-auto">
      {PhoneData.map((item,index)=><ItemCard key={index}  item={item}/>)}
      </div>
    </div>
  );
}
