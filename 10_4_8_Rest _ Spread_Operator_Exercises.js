        // function filterOutOdds() {
        //     var nums = Array.prototype.slice.call(arguments);
        //     return nums.filter(function(num) {
        //         return num % 2 === 0
        //     });
        // }
        // 1. ES2015 Function that takes a variable number of arguments
        const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);
        
        // 2. findMin
        const findMin = (...nums) => nums.reduce((min, currVal) => {
            return min < currVal ? min : currVal;
        }, 0);
        // const findMin = (...nums) => Math.min(...nums);

        // 3. mergeObjects
        const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

        // 4. doubleAndReturnArgs
        const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(val => val * 2)];

        // 5. Slice and Dice
        // 5-1
        function removeRandom(...items) {
            let ranNum =  Math.floor(Math.random() * items.length);
            return items.filter((val, idx) => +idx != +ranNum);
        }
        // 5-2
        const extend = (array1, array2) => [...array1, ...array2];

        // 5-3
        const addKeyVal = (obj, key, val) => ({...obj, [key]:val});

        // 5-4
        const removeKey = (obj, key) => {
            newObj = {...obj};
            delete newObj[key];
            return newObj;
        }

        // 5-5
        const combine = (obj1, obj2) => ({...obj1, ...obj2});

        // 5-6
        const update = (obj, key, val) => ({...obj, [key]:val});