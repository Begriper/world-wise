export const flagEmojiToPNG = (flag) => {
    if (!flag) return "";

    const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt(0) - 127397)
        .map((char) => String.fromCharCode(char))
        .join("")
        .toLowerCase();

    return `https://flagcdn.com/24x18/${countryCode}.png`;
};
