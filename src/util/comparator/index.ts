export interface Comparator<T> {
    compare(a: T, b: T): number;
}
export const DDK_MULTIPLIER_CONSTANT = 100000000;

export const convertMoney = (value: number) => {
    if (typeof value === 'number' && !isNaN(value) && value > 0) {
        return value / DDK_MULTIPLIER_CONSTANT;
    }
    return 0;
};
