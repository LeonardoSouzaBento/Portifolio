import { sectionsTitles } from "../data/sectionsTitles";

export const findTitle = (keyWord) => {
    const title = sectionsTitles.find((section) => section.keyWord === keyWord);
    return title;
};