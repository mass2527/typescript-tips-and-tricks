type Animal = {
  name: string;
};

type Human = {
  firstName: string;
  lastName: string;
};

type Alien = {
  planet: string;
};

type GetRequiredInformation<T> = T extends Animal
  ? { age: number }
  : T extends Human
  ? {
      socialSecurityNumber: number;
    }
  : T extends Alien
  ? {
      whoAreYou: string;
    }
  : never;

export type RequiredInformationForAnimal = GetRequiredInformation<Animal>;

export type RequiredInformationForHuman = GetRequiredInformation<Human>;

export type RequiredInformationForAlien = GetRequiredInformation<Alien>;

export type RequiredInformationForNobody = GetRequiredInformation<{}>;
