// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// pAequor factory function 
pAequorFactory = (num, dna) => {
  return {
    specimen: num,
    dna: dna,
    
    // mutate method
    mutate() {
      let randNum = Math.floor(Math.random() * this.dna.length);
      let mutBase = returnRandBase();
      while (this.dna[randNum] !== mutBase) {
        this.dna[randNum] === mutBase;
      }
      return this.dna[randNum]
    }
  }
}


