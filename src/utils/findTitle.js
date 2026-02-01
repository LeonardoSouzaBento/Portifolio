import { sectionsTitles } from "../data/sectionsTitles";

export const findTitle = (keyWord) => {
    const item = sectionsTitles.find((section) => section.keyWord === keyWord.toLowerCase());
    return item;
};