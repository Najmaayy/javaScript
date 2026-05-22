function FormattedNumber(strArr){


    let num = strArr[0];

    let decimal = num.split(".");
    console.log("Step 2: After splitting decimal: ", decimal); 

    //If we have more than one decimal point the number is invalid 

    if(decimal.length > 2){
        console.log("Invalid: more than one decimal point");
        return "false"; 
    }

    //Step 3: Get integer and decimal parts
    let integerPart = decimal[0];
    let decimalPart = decimal[1];

    console.log("Step 3: Integer part: ", integerPart);
    console.log("Step 3: Decimal part:", decimalPart)


    //Step 4: Validate decimal digits 

    if(decimalPart !== undefined){
        console.log("Step 4: Checking if we have decimal digits")

        for(let i = 0; i < decimalPart.length; i++){
        console.log("Checking decimal character: ", decimalPart[i]);

        if(decimalPart[i] < "0" || decimalPart[i] > "9"){
            console.log("Invalid decimal character found");
            return "false"
        }
    }
}
   //Step 5- Split the integers by commass

   let parts = integerPart.split(",");
   console.log("Step 5: Integer split by commas: " , parts);

   //Step 6- Valid the first group 
   console.log("Step 6- checking first group: ", parts[0]); 

   if (parts[0].length < 1 || parts[0].length > 3){
    console.log("Invalid: First group length incorrect");
    return "false"; 
   }
   console.log("Valid first group! (group is between 1-3)")

   //Step 7: Validate remaining groups 
   console.log("Step 7: Checking the remaing groups"); 

   for(let i = 1; i < parts.length; i++){
    console.log("Checking group: ",  parts[i]); 
    

    //checks each group has exacatly 3 characters 
    if (parts[i].length !==3) {
        console.log("Invalid: group not length 3" );
        return 'false';
    }

    for(let j = 0; j < parts[i].length; j++){
        console.log("Checking digits:" , parts[i][j]);

        if(parts[i][j] < "0" || parts [i][j] > "9"){
            console.log("Invalid digits found")
            return "false;"
        }
        

    }
   }



    console.log("Valid number format")
    return "true"; 


        

        }









FormattedNumber(["124,093,022.04"]);
