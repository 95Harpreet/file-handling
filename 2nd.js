const myfile=require('fs')

myfile.appendFile("abc.text"," hello world",(err)=>                //to write text in same text file
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