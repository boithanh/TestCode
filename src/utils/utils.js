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


export default function createRandomSquares(count) {
    for (let i = 0; i < count; i++) {
        let square = document.createElement("div");
        square.classList.add("square");

        let size = Math.random() * 50 + 30; // Kích thước từ 30px - 80px
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        let borderRadius = Math.random() * 30; // Bo góc từ 0 - 30px
        let blurAmount = Math.random() * 10 + 2; // Độ mờ từ 2px - 12px
        let shadowOpacity = Math.random() * 0.5 + 0.1; // Độ trong suốt của box-shadow
        let backgroundOpacity = Math.random() * 0.5 + 0.2; // Độ trong suốt của background

        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        square.style.left = `${x}px`;
        square.style.top = `${y}px`;

        square.style.background = `rgba(255, 255, 255, ${backgroundOpacity})`;
        square.style.borderRadius = `${borderRadius}px`;
        square.style.boxShadow = `0 4px 30px rgba(0, 0, 0, ${shadowOpacity})`;
        square.style.backdropFilter = `blur(${blurAmount}px)`;
        square.style.border = `1px solid rgba(255, 255, 255, 0.3)`;

        document.body.appendChild(square);
    }
}
