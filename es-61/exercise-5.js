const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

// core here
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const name = persons.find((item) => item.id === id);

      if (name) {
        resolve(name);
      }
    },1000);
  });
};

function fetchJobId(id) {
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find((item) => item.id === id);
      if (job) {
        return resolve(job.jobTitle);
      }
    },500);
  });
}
Promise.race([fetchPersonById(1),fetchJobId(1)]).then((values)=>console.log(values));