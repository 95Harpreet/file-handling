const myfile=require('fs')

myfile.writeFile("abc.text","my name is harpreet",(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('file write successfully')
    }
})