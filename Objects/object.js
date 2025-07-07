const inventory = {
    apples: 50,
    oranges: 30,
    bananas: 25
    };
    for (const [key, value] of Object.entries(inventory)) {
    console.log(`${key}: ${value}`);
    }