export const convertToRupiah = (value: number): string => {
    return value.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    });
};
