enum Priority {
  mustHave = "Must Have",
  shouldHave = "Should Have",
  couldHave = "Could Have",
  wontHave = "Won't Have",
}

const backlog = {
  releases: [
    {
      name: "Sprint 1",
      epics: [
        {
          name: "Account Management",
          tasks: [
            { name: "Single Sign On", priority: Priority.mustHave },
            { name: "Email Notifications", priority: Priority.mustHave },
          ],
        },
      ],
    },
  ],
};

type UnArray<T> = T extends Array<infer U> ? U : T;

type Releases = UnArray<typeof backlog["releases"]>;
type Epics = UnArray<Releases["epics"]>;

export const releases: Releases = {
  name: "Sprint 1",
  epics: [
    {
      name: "Account Management",
      tasks: [
        { name: "Single Sign On", priority: Priority.mustHave },
        { name: "Email Notifications", priority: Priority.mustHave },
      ],
    },
  ],
};

export const epics: Epics = {
  name: "Account Management",
  tasks: [
    { name: "Single Sign On", priority: Priority.mustHave },
    { name: "Email Notifications", priority: Priority.mustHave },
  ],
};
