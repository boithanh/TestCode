export const generateRandomNumbers = (loaiXoSo = 45) => {
    const numbersSet = new Set();

    while (numbersSet.size < 6) {
        let randomNumber = Math.floor(Math.random() * loaiXoSo) + 1;

        if (randomNumber / 10 >= 1) {
            numbersSet.add(randomNumber);
        }
        else {
            randomNumber = '0' + randomNumber;
            console.log(randomNumber);

            numbersSet.add(randomNumber);
        }
    }
    let tmp = Array.from(numbersSet);
    return tmp.sort();
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
    const htmlArr = Array.from({ length: count }).map((_, i) => {
        let size = Math.random() * 50 + 30; // Kích thước từ 30px - 80px
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;

        let borderRadius = Math.random() * 30; // Bo góc từ 0 - 30px
        let blurAmount = Math.random() * 10 + 2; // Độ mờ từ 2px - 12px
        let shadowOpacity = Math.random() * 0.5 + 0.1; // Độ trong suốt của box-shadow
        let backgroundOpacity = Math.random() * 0.5 + 0.2; // Độ trong suốt của background

        return `
            <div class="square"
                style="
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, ${backgroundOpacity});
                    border-radius: ${borderRadius}px;
                    box-shadow: 0 4px 30px rgba(0, 0, 0, ${shadowOpacity});
                    backdrop-filter: blur(${blurAmount}px);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    position: absolute;
                ">
            </div>`;
    });

    return htmlArr.join(""); // Trả về string HTML
}

