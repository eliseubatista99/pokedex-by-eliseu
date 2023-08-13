export class TextHelper {
  static getPascalCase = (text: string) => {
    return text.replace(/\w+/g, function (w) {
      console.log("ZAU", { w, text });

      return w[0].toUpperCase() + w.slice(1).toLowerCase();
    });
  };

  static isEqual = (text1: string, text2: string, caseSensitive = true) => {
    if (caseSensitive) {
      return text1 === text2;
    }

    return text1.toUpperCase() === text2.toUpperCase();
  };
}
