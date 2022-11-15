const myfile=require('fs')

myfile.copyFile("hi.txt","testing.txt",(err)=>                    //to creare duplicate of a file
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('file copy successfully')
    }
})