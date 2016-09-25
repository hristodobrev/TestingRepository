function moviePrice([movieTitle, day]) {
    let db = {};
    db['The Godfather'] = {
        'Monday': 12,
        'Tuesday': 10,
        'Wednesday':15,
        'Thursday': 12.50,
        'Friday': 15,
        'Saturday': 25,
        'Sunday': 30
    };
    db['Schindler\'s List'] = {
        'Monday': 8.50,
        'Tuesday': 8.50,
        'Wednesday':8.50,
        'Thursday': 8.50,
        'Friday': 8.50,
        'Saturday': 15,
        'Sunday': 15
    };
    db['Casablanca'] = {
        'Monday': 8,
        'Tuesday': 8,
        'Wednesday':8,
        'Thursday': 8,
        'Friday': 8,
        'Saturday': 10,
        'Sunday': 10
    };
    db['The Wizard of Oz'] = {
        'Monday': 10,
        'Tuesday': 10,
        'Wednesday':10,
        'Thursday': 10,
        'Friday': 10,
        'Saturday': 15,
        'Sunday': 15
    };

    return db[movieTitle][day];
}