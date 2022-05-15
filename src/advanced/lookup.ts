type Route = {
  origin: {
    city: string;
    state: string;
    departureFee: number;
  };
  destination: {
    city: string;
    state: string;
    arrivalFee: number;
  };
};

type Origin = Route["origin"];
type Destination = Route["destination"];

export const tripOrigin: Origin = {
  city: "Denver",
  state: "Colorado",
  departureFee: 13,
};

export const tripDestination: Destination = {
  city: "Phoenix",
  state: "Arizona",
  arrivalFee: 8.5,
};
