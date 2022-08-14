const customerDetails = {
  "balsamic-potion": () => <p>* Magic subject to imagination</p>,
};

export const CustomIdeaDetails = ({ id }) => {
  if (customerDetails[id]) {
    const Foo = customerDetails[id];
    return <Foo />;
  }
  return null;
};
