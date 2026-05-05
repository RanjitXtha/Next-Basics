import bundleAnalyzer from "@next/bundle-analyzer";

// const withBundleAnalyzer = bundleAnalyzer({
// enabled: process.env.ANALYZE === "true",
// openAnalyzer: true
// });

const nextConfig = {
images: {
  domains: [
    "via.placeholder.com",
    "cdn.dummyjson.com",
    "d3vxqv-in.myshopify.com",
    "images.unsplash.com",
  ],
},
};

export default nextConfig