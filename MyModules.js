let currentDate=new Date();

module.exports.date=currentDate;

module.exports.getMessage=function(name){
    let hour=currentDate.getHours();
    if(hour>18)
        return `Good evening ${name}`;
    else if(hour>10)
        return `Good day ${name}`;
    else 
        return `Good morning ${name}`;
}