// eslint-disable-next-line max-len
export const instructionWithExample = `
I will give you 2 arrays of names, 
please send the couples of the matches that you find.
More in depth instructions:
    - You need to translate some of the names from Hebrew and find the matches, 
    for example 'אוהד סטולר' will match 'Ohad Stoler'.
    - Collect all the names that don't have a match, 
    only from the first array of names, and send me an array of them
An example:
if I send you the following 2 arrays of names:
- [Ohad Stoler, Idan Dardikman, Oren Yomtov], [אוהד סטולר, Idan Dardikman, Matan Cohen]
You should send me back a JSON in the following structure, without further text, just the JSON:
{'Matches': [['Ohad Stoler','אוהד סטולר'], ['Idan Dardikman','Idan Dardikman'], 'notFound': ['Oren Yomtov']}
Pay attention to exclude the names from the second 
lists that do not have a match, and show me in the 
notFound only names from the first list. 
For example 'Matan Cohen' should not be included, and 'Oren Yomtov' should be.
Please find me the matches and the 
not found for the following 2 arrays of names:
`;


