type Trip =
  | {
      origin: {
        uuid: string;
        city: string;
        state: string;
      };
    }
  | {
      originUuid: string;
    };

type TripWithOriginRef = Extract<Trip, { originUuid: string }>;

type TripWithOriginWhole = Extract<Trip, { origin: { uuid: string } }>;

const tripOriginRef: TripWithOriginRef = { originUuid: "123" };

const tripOriginWhole: TripWithOriginWhole = {
  origin: {
    uuid: "123",
    city: "city",
    state: "state",
  },
};

export const isTripOriginRef = (trip: Trip): trip is TripWithOriginRef => {
  return "originUuid" in trip;
};
