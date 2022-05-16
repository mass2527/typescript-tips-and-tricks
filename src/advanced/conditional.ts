type Diesel = {
  type: "petroleum" | "bio" | "synthetic";
};

type Gasoline = {
  type: "hybrid" | "conventional";
};

type Bus = {
  engine: Diesel;
};

type Car = {
  engine: Gasoline;
};

type Engine<T> = T extends { engine: unknown } ? T["engine"] : never;

type BusEngine = Engine<Bus>;
type CarEngine = Engine<Car>;

const busEngine: BusEngine = {
  type: "bio",
};

const carEngine: CarEngine = {
  type: "hybrid",
};

const invalid: CarEngine = {
  type: "bio",
};

type Bicycle = {
  power: "limbs";
};

// BicycleEngine -> never
type BicycleEngine = Engine<Bicycle>;
