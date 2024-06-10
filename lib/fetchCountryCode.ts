// utils/fetchCountryCodes.ts
export interface CountryCode {
  name: string;
  code: string;
  flag: string;
}

export async function fetchCountryCodes(): Promise<CountryCode[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries = await response.json();

  console.log(countries);

  return countries.map((country: any) => ({
    name: country.name.common,
    code:
      country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ""),
    flag: country.flags.svg,
  }));
}
