const data =[
    {
        name: 'John Doe',
        age: '32',
        gender: 'male',
        lookingfor: 'female',
        location:'Boston MA',
        image:'https://randomuser.me/api/portraits/men/30.jpg'    
    },
    {
        name: 'Sania',
        age: '28',
        gender: 'Female',
        lookingfor: 'Male',
        location:'Calgary, CA',
        image:'https://randomuser.me/api/portraits/women/84.jpg'    
    },
    {
        name: 'Shipa',
        age: '27',
        gender: 'Male',
        lookingfor: 'Female',
        location:'Texas, US',
        image:'https://randomuser.me/api/portraits/men/80.jpg'    
    }
];

// Profile Iterator
const profiles = profileIterator(data);

function profileIterator(profiles){
    let nextIndex = 0;
    return{
        next:function(){
         return nextIndex <profiles.length ?
         {value:profiles[nextIndex++], done:false}:
         {done:true}
        }
    };
}

nextProfile();
// Add Event Listeners
document.getElementById('next').addEventListener('click',nextProfile);

function nextProfile(){
    const currentProfile = profiles.next().value;

    if(currentProfile !== undefined) {
        // To view Profile
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preferance: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
        `;
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    }else{
        // Reload Page
        window.location.reload();
    }
}


