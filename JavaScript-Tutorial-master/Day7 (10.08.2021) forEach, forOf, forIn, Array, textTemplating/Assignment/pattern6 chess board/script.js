function Chessboard()
{
    document.write("<table>")

    for(var i=1; i<=8; i++){
        document.write("<tr>")
    
        for(var j=1; j<=8; j++){
            if((i+j)%2 != 0)
    
                document.write("<td style='padding:12px'> </td>")
            else
                document.write("<td style='padding:12px; background:black'> </td>")
        }
        document.write("</tr>")
    }
    document.write("</table>")
}

document.getElementById("btn").addEventListener("click", Chessboard);


    