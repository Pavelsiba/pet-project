type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: Mods={},
  additional: string[]=[]
):string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.keys(mods).filter(key => mods[key])
  ].join(" ");
};
