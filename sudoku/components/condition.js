export default function Condition(data){

    const gameboard = data.grid;

    //@Params array gamboard [9x9]
    //
    const checkWin = () =>{
        
      console.log(gameboard);

      //Logic for checking games.
    };


    return(
        <div>
            <button onClick={checkWin}>Submit</button> 
        </div>
    );
}