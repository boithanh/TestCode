export const generateRandomNumbers = (loaiXoSo = 45) => {
    const numbersSet = new Set();

    while (numbersSet.size < 6) {
        let randomNumber = Math.floor(Math.random() * loaiXoSo) + 1;

        if (randomNumber / 10 >= 1) {
            numbersSet.add(randomNumber);
        }
        else {
            randomNumber = '0' + randomNumber;
            numbersSet.add(randomNumber);
        }
    }
    let tmp = Array.from(numbersSet);
    return tmp;
};

export const defaultLottery = () => {
    const numbersSet = [];

    while (numbersSet.length < 6) {
        let randomNumber = Math.floor(Math.random() * 9) + 1;
        numbersSet.push(randomNumber);
    }
    return numbersSet;
};