const myfile=require('fs')

myfile.rename("my.txt","hi.txt",(err)=>                    //to renam ethe text file from my.txt to hi.txt
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('file rename successfully')
    }
})