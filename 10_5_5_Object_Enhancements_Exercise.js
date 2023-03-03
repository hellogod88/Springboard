        //Same keys and values ES2015
        function createInstructor(firstName, lastName){
            return {
                firstName,
                lastName
            };
        }
        
        // Computed Property Names ES2015
        var favoriteNumber = 42;

        var instructor = {
            firstName: "Colt",
            [favoriteNumber] : "That is my favorite!"
        }
        
        // Object Methods ES2015
        var instructor = {
            firstName: "Colt",
            sayHi() {
                return "Hi!";
            },
            sayBye() {
                return this.firstName + " says bye!";
            }
        }
        
        // createAnimal function
        function createAnimal(species, verb, noise) {
            return {
                species, 
                [verb]() {
                    //console.log(noise);
                    return noise;
                }
            } 
        }

        // const d = createAnimal("dog", "bark", "Woooof!")
        // const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
        // s.bleet() 