function figureOf4Squares([n]) {
    let result = '';
    let horizontalLine = '+';
    for (let i = 0; i < n - 2; i++) {
        horizontalLine += '-';
    }
    horizontalLine += '+';
    for (let i = 0; i < n - 2; i++) {
        horizontalLine += '-';
    }
    horizontalLine += '+';
    result += horizontalLine + '\n';

    let lines = n - 3;
    if (n % 2 === 0) {
        lines--;
    }

    let verticalLine = '|';
    for (let i = 0; i < n - 2; i++) {
        verticalLine += ' ';
    }
    verticalLine += '|';
    for (let i = 0; i < n - 2; i++) {
        verticalLine += ' ';
    }
    verticalLine += '|';

    for (let i = 0; i < lines / 2; i++) {
        result += verticalLine + '\n';
    }
    result += horizontalLine + '\n';
    
    for (let i = 0; i < lines / 2; i++) {
        result += verticalLine + '\n';
    }
    result += horizontalLine + '\n';

    return result;
}