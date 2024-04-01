   // Example test for compileDocuments.js
   const { compileDocuments } = require('./compileDocuments');

   test('compiles document correctly', () => {
     const data = { jurisdiction: 'State of Colorado' };
     const result = compileDocuments(data);
     expect(result).toContain('State of Colorado');
   });