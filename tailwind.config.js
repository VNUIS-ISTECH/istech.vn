module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["Montserrat", "ui-sans-serif", "system-ui"],
    },
    extend: {
      backgroundImage: {
        bgki1:
          "url(https://istech.vn/wp-content/uploads/2021/08/grad-white-curve-bg-1-1.svg) background-no-repeat",
      },
      boxShadow: {
        "3xl": "0px 0px 50px 0px rgb(0 0 0 / 50%);",
      },
    },
    plugins: [],
  },
};
