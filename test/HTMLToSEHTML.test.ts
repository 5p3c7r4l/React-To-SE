import rtse from "../src/index"

// HTMLBundle(Path as String);

describe('test for the transformation of .html to SEhtml as .txt',()=>{
    describe('test for path', () => {
        it('should test a wrong path', () => {
            function expectError() {
                const doll = rtse.HTMLBundle('');
                return doll;
            }
            expect(expectError).toThrow();
        })

        it('should test for a correct path', () =>{
            const doll = rtse.HTMLBundle('./test')
            expect(doll).toBe(1);
        })
    })

})
