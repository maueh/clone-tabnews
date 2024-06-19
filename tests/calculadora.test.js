const calculadora = require("../models/calculadora.js");


test("teste de 2 + 2 deveria retorna 4", () => {
    const resultado = calculadora.somar(2, 2);
    console.log(resultado);
    expect(resultado).toBe(4);
});

test("teste de 100 + 5 deveria retorna 105", () => {
    const resultado = calculadora.somar(100, 5);
    console.log(resultado);
    expect(resultado).toBe(105);
});

test("teste de -2 + 2 deveria retorna 0", () => {
    const resultado = calculadora.somar(-2, 2);
    console.log(resultado);
    expect(resultado).toBe(0);
});


test("teste de 0.5 + 10 deveria retorna 10.5", () => {
    const resultado = calculadora.somar(0.5, 10);
    console.log(resultado);
    expect(resultado).toBe(10.5);
});

test("teste de 0.1 + 0.2 deveria retorna 0.3", () => {
    const resultado = calculadora.somar(0.1, 0.2);
    console.log(resultado);
    expect(resultado).toBe(0.3);
});

/*
test("teste de 5 + 4 não deveria retornar 5", () => {
    const resultado = calculadora.somar(5, 4);
    console.log(resultado);
    expect(resultado).toBeNot(5);
});
*/

test("teste de 'banana' + 100 não deveria retornar 'Erro'", () => {
    const resultado = calculadora.somar('banana', 4);
    console.log(resultado);
    expect(resultado).toBe('Erro');
});

test("teste de 'banana' + 'maca' não deveria retornar 'Erro'", () => {
    const resultado = calculadora.somar('banana', 'maca');
    console.log(resultado);
    expect(resultado).toBe('Erro');
});