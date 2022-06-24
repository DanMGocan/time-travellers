/* A set of rules that would define the difficulty of the game */

export const rules = {
    /* Penalties applied when the user is over the alloted seconds */
    time: {
        1: 10,
        2: 8,
        3: -2,
        5: -10,
        10: -50,
        20: -1000
    },
    /* Penalties applied if the answer of the user is over or under a certain
    percentage of the correct answer */
    answers: {
        10: -5,
        20: -10,
        50: -100,
        85: -250
    },
    traps_rules: {
        correct_bonus: 80,
        incorrect_penalty: 80
    }
}