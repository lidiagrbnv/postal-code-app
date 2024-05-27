export const removeFalsyValuesFromObject = <T extends object>(obj: T) =>
  (Object.keys(obj) as (keyof T)[]).reduce((acc, key) => {
    if (obj[key]) return { ...acc, [key]: obj[key] };

    return acc;
  }, {});
