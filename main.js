
//Pattern

let n=parseInt(prompt("Enter n value"));
for(i=1;i<=n;i++)
{
   for(k=n;k>i;k--)
   {
       document.write("&nbsp;&nbsp;"); 
       document.write(" ");       

   }
   
   for(j=1;j<=i;j++)
   {
       document.write(i);
       document.write(" ");
   }
  for(k=1;k<=i;k++)
   {
       document.write(i);
       document.write(" ");

  }
   document.write("<br>");
}   