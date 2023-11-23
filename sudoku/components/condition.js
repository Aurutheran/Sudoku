export default function Condition(data){

    const gameboard = data.grid;
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