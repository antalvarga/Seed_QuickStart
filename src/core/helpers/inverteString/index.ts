const inverteString = (myString: string): string => {
    console.log(` :: inverteString :: `);

    let newString: string = '';

    for (let i = myString.length; i >= 0; i--) {
        newString = newString + myString.substring(i, i + 1);
    }

    return newString;
};

export { inverteString };
