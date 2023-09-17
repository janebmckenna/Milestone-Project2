/**
 * @jest-environment jsdom
 */
const { expect } = require('@jest/globals');
const { describe } = require('yargs');
const {newWord} = require("../hangman", "../wordList");

describe('Hangman', () => {
    describe('generate word', () => {
        test('should return a word', () => {
            expect(newWord()).not.toBe('');
        });
    });
})