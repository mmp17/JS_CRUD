let list = [{
    id: 1,
    department: 'IT',
    name: 'Sarvar',
    surname: 'Ahmedov',
    year: 94,
},{
    id: 2,
    department: 'MIS',
    name: 'Muzaffar',
    surname: 'Murodov',
    year: 81,
},{
    id: 3,
    department: 'GMBA',
    name: 'Ahmad',
    surname: 'Akbarov',
    year: 85,
},{
    id: 4,
    department: 'CS',
    name: 'Odil',
    surname: 'Usmanov',
    year: 90,
},{
    id: 5,
    department: 'EL',
    name: 'Bunyod',
    surname: 'Karimov',
    year: 83,
},{
    id: 6,
    department: 'KL',
    name: 'Hoshim',
    surname: 'Kamolov',
    year: 94,
}, 
];

// Java Script Front-End CRUD operations

//list.map((value) => console.log(value)); 
//list.map((value) => console.log(value.name, value.department, value.year)); //Sarvar IT 94
//console.log(list.sort()); //prints same array of objects


// 1. const sortByYear = () => {console.log(list.sort((a,b) => a.year - b.year));}
// sortByYear();

// 2. const sortByID = () => {console.log(list.sort((a,b) => a.id - b.id));}
// sortByID();

// 3. const sortByName = () => {console.log(list.sort((a,b) => a.name.localeCompare(b.name)));}
// sortByName(); // 3 'Ahmad', 5 'Bunyod', 6 'Hoshim', 2 'Muzaffar', 4 'Odil', 1 'Sarvar'

// 4. const sortByDepartment = () => {console.log(list.sort((a,b) => a.department.localeCompare(b.department)));}
// sortByDepartment(); // 4 'CS', 5 'EL', 3 'GMBA', 1 'IT', 6 'KL', 2 'MIS'


// 5. const deleteByID = (id) => {console.log(list.filter((value) => value.id !==id));}
// deleteByID(); 

// departmenti IT ga teng bo'lganlarni ajratib olish: 
const sortBy = (sort) => {console.log(list.filter((value) => value.department === sort));}

// 6. const updateByID =()=>{}
// updateByID();

// 7. const createNew =()=>{}
// createNew();



sortBy('MIS');