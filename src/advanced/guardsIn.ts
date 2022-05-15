type DeliminatedDocument = {
  text: string;
  separator: "comma" | "tab";
};

type PlaintextDocument = {
  text: string;
};

const printDeliminated = (doc: DeliminatedDocument) => {
  /* ... */
};

const printPlaintext = (doc: PlaintextDocument) => {
  /* ... */
};

export const printDocument = (doc: DeliminatedDocument | PlaintextDocument) => {
  if ("separator" in doc) {
    printDeliminated(doc);
  } else {
    printPlaintext(doc);
  }
};
