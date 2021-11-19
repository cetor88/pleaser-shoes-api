/* eslint-disable prettier/prettier */
const whiteList: [string] = ["http://localhost:3000"];
// eslint-disable-next-line prettier/prettier

export const coorsOptions = {
  origin: (origin: any, callback: any): void => {
    if (whiteList.includes(origin)) {
      callback(null, true);
      // eslint-disable-next-line prettier/prettier
    } else {
      callback(new Error("Not allow by COORS"));
    }
  },
};
