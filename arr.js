var a=[100,200,230,123];
var n=a.length;
/*for(i=0;i<n;i++)
{
    console.log(a[i]);
}*/

var t;
for(i=0;i<n-1;i++)
{
    for(j=0;j<n-1-i;j++)
    {
        if(a[j]>a[j+1])
        {
            t=a[j];
            a[j]=a[j+1];
            a[j+1]=t;
        }
    }
}
for(i=0;i<n;i++)
{
    console.log(a[i]);
}