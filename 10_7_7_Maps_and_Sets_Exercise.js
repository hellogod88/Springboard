        // Quick Question #1 
        new Set([1,1,2,2,3,4]);  // {1, 2, 3, 4}

        // Quick Question #2
        [...new Set("referee")].join("");  // 'ref'

        // Quick Questions #3
        let m = new Map();
        m.set([1,2,3], true);    // {Array(3) => true}
        m.set([1,2,3], false);   // {Array(3) => true, Array(3) => false}

        // hasDuplicate
        // const hasDuplicate = function(dup) {
        //     return [... new Set(dup )].length !== dup.length ? true : false;
        // }
        const hasDuplicate = dup => [... new Set(dup )].length !== dup.length ? true : false;

        hasDuplicate([1,3,2,1]) // true
        hasDuplicate([1,5,-1,4]) // false

        // vowelCount
        // vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
        // vowelCount('Colt') // Map { 'o' => 1 } 

        const vowelCount = function(vowel) {
            const vowelMap = new Map();
            let vwl = [...vowel].filter(val => 'aeiou'.includes(val));

            for(let v of vwl) {
                vChar = v.toLowerCase();
                if (vowelMap.has(vChar)) {
                    vowelMap.set(vChar, vowelMap.get(vChar) + 1);
                } else {
                    vowelMap.set(vChar, 1); 
                }
            }
            return vowelMap;
             
        }