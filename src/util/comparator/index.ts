export interface Comparator<T> {
    compare(a: T, b: T): number;
}

export const convertMoney = (value: number) => {
    if (typeof value === 'number' && !isNaN(value) && value > 0) {
        return value / 100000000;
    }
    return 0;
};