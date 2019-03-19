function selectionsort(arr)
{
 for (var i=0;i<arr.length;i++)
 {
     var min =arr[i]
     for(var j=i+1;j<arr.length;j++)
     {
         if(min>arr[j])
         {min=arr[j]
         var temp=arr[i]
         arr[i]=arr[j]
         arr[j]=temp
         } 

         }console.log(arr[i])  
     } 
  
}
selectionsort([10,20,40,25,9,39,70])
