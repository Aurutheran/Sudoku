export default function Condition(data){

    const gameboard = data.grid;

    //@Params array gamboard [9x9]
    
    const checkWin = () =>{
        
      console.log(gameboard);

      //Logic for checking games.

      
    };


    return(
        <div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-10 py-4 m-5" onClick={checkWin}>Submit</button> 
        </div>
    );
}