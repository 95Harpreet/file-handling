const myfile=require('fs')

myfile.unlink("abc.text",(err)=>                    //to delete the text file
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('file delete successfully')
    }
})