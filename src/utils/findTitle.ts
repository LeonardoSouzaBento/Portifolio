import { sectionsTitles } from "../data/sectionsTitles";

export const findTitle = (keyWord: string) => {
    const item = sectionsTitles.find((section) => section.keyWord === keyWord.toLowerCase());
    return item;
};