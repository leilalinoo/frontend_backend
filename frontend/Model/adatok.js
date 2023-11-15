export const urlapleiro = {
  nev: {
    megj: "Név",
    type: "text",
    placeholder: "Valaki Vagyok",
    value: "",
    regex: "[A-Z][a-z]{2,15}",
    valid: "Nagybetűvel kezdődik,legalább 3 betű",
  },
  szul: {
    megj: "Születési idő",
    type: "number",
    placeholder: "2000",
    value: "2000",
    min: 1000,
    max: 2023,
    valid: "1000 és 2023 közötti számot várunk",
  },
  gombok: {
    megj: "Gombok",
  },
};
