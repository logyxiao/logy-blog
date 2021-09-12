export const getSrc = (pathName:string) => {
    return new URL(`../assets/${pathName}`, import.meta.url).href
};
