function binarysort(arr)
{
    var l=arr.length,min;
    for(var j=0;j<l-1;j++)
    {//console.log('j',j)
    for(var i=0; i<l-j-1;i++)
    {
        if(arr[i]>arr[i+1])
        {
            var temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
        }
    } console.log(arr[j])
    }
}
console.log(binarysort([10,20,5,8,90]))