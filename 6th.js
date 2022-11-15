const myfile=require('fs')

myfile.readFile("hi.txt",(err,mydata)=>             //to read the file
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('mydata.toString')
    }
})