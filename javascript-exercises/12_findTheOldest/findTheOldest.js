// const findTheOldest = function(people) {
//     let comp = []
//     for(i=0;i<people.length;i++){
//         if(!(people[i].yearOfDeath)) people[i].yearOfDeath = new Date().getFullYear();
//         comp.push(people[i].yearOfDeath - people[i].yearOfBirth)
//     }
//     let maxValue = comp[0]
//     let ans = ""
//     for(i=1;i<comp.length;i++) if(comp[i]>maxValue) maxValue = comp[i];

//     for(i=0;i<people.length;i++){
//         if(maxValue===comp[i]){
//             return people[i].name
//         }
//     }
//   };
    
//   module.exports = findTheOldest;

const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };
  
  const findTheOldest = function (people) {
    return people.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };

  module.exports = findTheOldest;