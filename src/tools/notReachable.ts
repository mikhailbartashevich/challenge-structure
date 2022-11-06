const notReachable = (param: never) => {
  throw Error("Shouldn't be reached here", param);
};

export default notReachable;
