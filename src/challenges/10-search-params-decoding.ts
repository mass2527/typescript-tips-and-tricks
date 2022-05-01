import { String, Union } from "ts-toolbelt";

const query = "/home?name=burke&profession=chat-baiter";

type Query = typeof query;

type SecondsQueryPart = String.Split<Query, "?">[1];

type QueryElements = String.Split<SecondsQueryPart, "&">;

type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [Key in String.Split<QueryElement, "=">[0]]: String.Split<
      QueryElement,
      "="
    >[1];
  };
}[QueryElements[number]];

const Obj: Union.Merge<QueryParams> = {
  name: "burke",
  profession: "chat-baiter",
};
