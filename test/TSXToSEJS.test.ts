import rtse from "../src/index"

// TSXToJsSE(Path as String, BuildMode as Bool);

describe('test for transformations of .tsx/.jsx to SEJS as .txt',()=>{
    describe('tries pathing of the package',()=>{
        it('should not find correct path',()=>{
            function TestWrongPath(){
                rtse.TSXToJsSE('',false);
            }
            expect(TestWrongPath()).toThrow();
        })

        it('should find correct path',()=>{
            expect(rtse.TSXToJsSE('./test',false));
        })
    })

    describe('tries building through ExpressJS',()=>{
        it('should make an automatic build',()=>{
            expect(rtse.TSXToJsSE('./test',true)).toBe(1);
        })
    })

})
