console.log('I am Here');
// alert("go to study");

const maComing = () => {
    alert('ammu is coming open the book');
}

const askPicnic = () => {
    const response = confirm("Are you going to picnic"); 
    console.log(response);
    if(response === true){
        alert("Please send me some money");
    }
    else{
        alert("dure giye mor");
    }
}
const askMyName = () => {
    prompt("What is your name?")
}